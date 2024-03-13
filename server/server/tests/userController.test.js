const userController = require("../controllers/userController");
const User = require("../models/user");
const Event = require("../models/event");
const Genre = require("../models/genre");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Location = require("../models/location");

jest.mock("../models/user");
jest.mock("../models/location");
jest.mock("bcrypt");
jest.mock("jsonwebtoken");
jest.mock("../models/event");
jest.mock("../models/genre");

describe("createUser", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should create a new user with valid input", async () => {
    const req = {
      body: {
        email: "test@example.com",
        image: "",
        password: "Password123!",
        username: "testuser",
        locationId: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const user = {
      populate: jest.fn().mockResolvedValue({
        email: "test@example.com",
        image: "",
        password: "hashedPassword",
        username: "testuser",
        location: { title: "Test Location" },
      }),
    };

    User.create.mockResolvedValue(user);

    await userController.createUser(req, res);

    expect(User.create).toHaveBeenCalledWith({
      email: "test@example.com",
      image: "",
      password: "Password123!",
      username: "testuser",
      location: "123",
    });
    expect(user.populate).toHaveBeenCalledWith("location", "title");
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(user);
  });

  it("should return an error if password does not meet quality criteria", async () => {
    const req = {
      body: {
        email: "test@example.com",
        image: "",
        password: "weak",
        username: "testuser",
        locationId: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.stringContaining(
        "Password does not meet quality criteria"
      ),
    });
  });

  it("should return an error if email is already taken", async () => {
    const req = {
      body: {
        email: "test@example.com",
        image: "",
        password: "Password123!",
        username: "testuser",
        locationId: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const error = new Error("Duplicate key error");
    error.code = 11000;
    error.message = 'email_1 dup key: { email: "test@example.com" }';
    User.create.mockRejectedValue(error);

    await userController.createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Email is already taken",
    });
  });
});

describe("loginUser", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return an error if user is not found", async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "password123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.findOne.mockResolvedValue(null);

    await userController.loginUser(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("should return an error if password is invalid", async () => {
    const req = {
      body: {
        email: "test@example.com",
        password: "wrongPassword",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const user = {
      _id: "123",
      email: "test@example.com",
      password: "hashedPassword",
    };

    User.findOne.mockResolvedValue(user);
    bcrypt.compare.mockResolvedValue(false);

    await userController.loginUser(req, res);

    expect(User.findOne).toHaveBeenCalledWith({ email: "test@example.com" });
    expect(bcrypt.compare).toHaveBeenCalledWith(
      "wrongPassword",
      "hashedPassword"
    );
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid password" });
  });
});

describe("userProfile", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return the user profile", async () => {
    const req = {
      user: {
        _id: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const user = {
      _id: "123",
      email: "test@example.com",
      username: "testuser",
      location: {
        _id: "456",
        title: "Test Location",
      },
    };

    User.findById.mockReturnValue({
      populate: jest.fn().mockResolvedValue(user),
    });

    await userController.userProfile(req, res);

    expect(User.findById).toHaveBeenCalledWith("123");
    expect(User.findById().populate).toHaveBeenCalledWith("location");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ user });
  });

  it("should return an error if user is not found", async () => {
    const req = {
      user: {
        _id: "123",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.findById.mockReturnValue({
      populate: jest.fn().mockResolvedValue(null),
    });

    await userController.userProfile(req, res);

    expect(User.findById).toHaveBeenCalledWith("123");
    expect(User.findById().populate).toHaveBeenCalledWith("location");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });
});

describe("searchEvents", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should search events based on the provided query parameters", async () => {
    const req = {
      query: {
        genre: "1",
        location: "2",
        title: "event",
        featured: "true",
        minRating: "3",
        maxRating: "5",
        includeSoldOut: "true",
        page: "1",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const events = [
      { _id: "1", title: "Event 1" },
      { _id: "2", title: "Event 2" },
    ];
    const totalEvents = events.length;
    const totalPages = 1;

    Event.countDocuments.mockResolvedValue(totalEvents);
    Event.find.mockReturnValue({
      populate: jest.fn().mockReturnThis(),
      skip: jest.fn().mockReturnThis(),
      limit: jest.fn().mockResolvedValue(events),
    });

    await userController.searchEvents(req, res);

    expect(Event.countDocuments).toHaveBeenCalledWith({
      genre: "1",
      location: "2",
      title: { $regex: "event", $options: "i" },
      featured: true,
      rating: { $gte: 3, $lte: 5 },
    });
    expect(Event.find).toHaveBeenCalledWith({
      genre: "1",
      location: "2",
      title: { $regex: "event", $options: "i" },
      featured: true,
      rating: { $gte: 3, $lte: 5 },
    });
    expect(Event.find().populate).toHaveBeenCalledWith("genre");
    expect(Event.find().populate).toHaveBeenCalledWith("location");
    expect(Event.find().skip).toHaveBeenCalledWith(0);
    expect(Event.find().limit).toHaveBeenCalledWith(6);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ events, totalPages });
  });

  it("should return an error if an exception occurs", async () => {
    const req = {
      query: {},
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const errorMessage = "Internal server error";
    Event.countDocuments.mockRejectedValue(new Error(errorMessage));

    await userController.searchEvents(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
  });
});

describe("purchaseTicket", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should purchase tickets successfully", async () => {
    const req = {
      headers: {
        authorization: "Bearer token",
      },
      body: {
        eventId: "eventId",
        ticketId: "ticketId",
        quantity: 2,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const event = {
      _id: "eventId",
      title: "Event Title",
      availableSeats: 10,
      tickets: [
        {
          _id: "ticketId",
          title: "Ticket Title",
          description: "Ticket Description",
          price: 50,
        },
      ],
      save: jest.fn(),
    };

    const user = {
      _id: "userId",
      orders: [],
      save: jest.fn(),
    };

    Event.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        select: jest.fn().mockResolvedValue(event),
      }),
    });

    User.findById = jest.fn().mockResolvedValue(user);

    jwt.verify = jest.fn().mockReturnValue({ userId: "userId" });

    await userController.purchaseTicket(req, res);

    expect(Event.findById).toHaveBeenCalledWith("eventId");
    expect(User.findById).toHaveBeenCalledWith("userId");
    expect(event.availableSeats).toBe(8);
    expect(user.orders).toHaveLength(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Tickets purchased successfully",
    });
  });

  it("should return 404 if event is not found", async () => {
    const req = {
      headers: {
        authorization: "Bearer token",
      },
      body: {
        eventId: "invalidEventId",
        ticketId: "ticketId",
        quantity: 2,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Event.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockReturnValue({
        select: jest.fn().mockResolvedValue(null),
      }),
    });

    jwt.verify = jest.fn().mockReturnValue({ userId: "userId" });

    await userController.purchaseTicket(req, res);

    expect(Event.findById).toHaveBeenCalledWith("invalidEventId");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Event not found" });
  });
});

describe("getUserOrders", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return user orders successfully", async () => {
    const req = {
      user: {
        _id: "userId",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const user = {
      _id: "userId",
      orders: [
        {
          eventId: "eventId1",
          ticketId: "ticketId1",
          eventTitle: "Event Title 1",
          ticketTitle: "Ticket Title 1",
          ticketDescription: "Ticket Description 1",
          quantity: 2,
          totalPrice: 100,
        },
        {
          eventId: "eventId2",
          ticketId: "ticketId2",
          eventTitle: "Event Title 2",
          ticketTitle: "Ticket Title 2",
          ticketDescription: "Ticket Description 2",
          quantity: 1,
          totalPrice: 50,
        },
      ],
    };

    User.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockResolvedValue(user),
    });

    await userController.getUserOrders(req, res);

    expect(User.findById).toHaveBeenCalledWith("userId");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ orders: user.orders });
  });

  it("should return 404 if user is not found", async () => {
    const req = {
      user: {
        _id: "invalidUserId",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.findById = jest.fn().mockReturnValue({
      populate: jest.fn().mockResolvedValue(null),
    });

    await userController.getUserOrders(req, res);

    expect(User.findById).toHaveBeenCalledWith("invalidUserId");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });
});

describe("userController", () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllLocations", () => {
    it("should return all locations", async () => {
      const mockLocations = [{ name: "Location 1" }, { name: "Location 2" }];
      Location.find.mockResolvedValue(mockLocations);

      await userController.getAllLocations({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockLocations);
    });

    it("should handle errors", async () => {
      const mockError = new Error("Something went wrong");
      Location.find.mockRejectedValue(mockError);

      await userController.getAllLocations({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
});

describe("userController", () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getAllGenres", () => {
    it("should return all genres", async () => {
      const mockGenres = [{ name: "Action" }, { name: "Comedy" }];
      Genre.find.mockResolvedValue(mockGenres);

      await userController.getAllGenres({}, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockGenres);
    });

    it("should handle errors", async () => {
      const mockError = new Error("Something went wrong");
      Genre.find.mockRejectedValue(mockError);

      await userController.getAllGenres({}, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: mockError.message });
    });
  });
});
