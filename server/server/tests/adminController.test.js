const adminController = require("../controllers/adminController");
const Event = require("../models/event");
const Location = require("../models/location");
const Genre = require("../models/genre");
const User = require("../models/user");

jest.mock("../models/user");
jest.mock("../models/event");
jest.mock("../models/location");
jest.mock("../models/genre");

describe("createEvent", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new event successfully", async () => {
    const req = {
      body: {
        title: "Test Event",
        content: "Test content",
        genreId: "genre123",
        date: "2023-06-01",
        locationId: "location123",
        isOpen: true,
        maxSeats: 100,
        availableSeats: 50,
        featured: true,
        rating: 4.5,
        image: "event.jpg",
        tickets: [],
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const eventMock = {
      populate: jest.fn().mockReturnThis(),
    };
    Event.create.mockResolvedValue(eventMock);

    await adminController.createEvent(req, res);

    expect(Event.create).toHaveBeenCalledWith({
      title: "Test Event",
      content: "Test content",
      genre: "genre123",
      date: "2023-06-01",
      location: "location123",
      isOpen: true,
      maxSeats: 100,
      availableSeats: 50,
      featured: true,
      rating: 4.5,
      image: "event.jpg",
      tickets: [],
    });
    expect(eventMock.populate).toHaveBeenCalledWith("location", "title");
    expect(eventMock.populate).toHaveBeenCalledWith("genre", "name");
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(eventMock);
  });

  it("should return an error if available seats exceed max seats", async () => {
    const req = {
      body: {
        maxSeats: 100,
        availableSeats: 150,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await adminController.createEvent(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: "Available seats cannot exceed max seats",
    });
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      body: {},
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Event.create.mockRejectedValue(new Error("Database error"));

    await adminController.createEvent(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("editUserAdminStatus", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update user admin status successfully", async () => {
    const req = {
      body: {
        userId: "user123",
        isAdmin: true,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const userMock = {
      save: jest.fn(),
    };
    User.findById.mockResolvedValue(userMock);

    await adminController.editUserAdminStatus(req, res);

    expect(User.findById).toHaveBeenCalledWith("user123");
    expect(userMock.isAdmin).toBe(true);
    expect(userMock.save).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "User admin status updated successfully",
    });
  });

  it("should return 404 if user is not found", async () => {
    const req = {
      body: {
        userId: "user123",
        isAdmin: true,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.findById.mockResolvedValue(null);

    await adminController.editUserAdminStatus(req, res);

    expect(User.findById).toHaveBeenCalledWith("user123");
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "User not found" });
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      body: {
        userId: "user123",
        isAdmin: true,
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.findById.mockRejectedValue(new Error("Database error"));

    await adminController.editUserAdminStatus(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("getAllUsers", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should retrieve all users successfully", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const usersMock = [
      { _id: "user1", name: "User 1", email: "user1@example.com" },
      { _id: "user2", name: "User 2", email: "user2@example.com" },
    ];
    User.find.mockResolvedValue(usersMock);

    await adminController.getAllUsers(req, res);

    expect(User.find).toHaveBeenCalledWith({}, "-password");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(usersMock);
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    User.find.mockRejectedValue(new Error("Database error"));

    await adminController.getAllUsers(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("getAllEvents", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should retrieve all events successfully", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const eventsMock = [
      {
        _id: "event1",
        title: "Event 1",
        location: { _id: "location1", title: "Location 1" },
      },
      {
        _id: "event2",
        title: "Event 2",
        location: { _id: "location2", title: "Location 2" },
      },
    ];
    Event.find.mockReturnValue({
      populate: jest.fn().mockResolvedValue(eventsMock),
    });

    await adminController.getAllEvents(req, res);

    expect(Event.find).toHaveBeenCalled();
    expect(Event.find().populate).toHaveBeenCalledWith("location", "title");
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(eventsMock);
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Event.find.mockReturnValue({
      populate: jest.fn().mockRejectedValue(new Error("Database error")),
    });

    await adminController.getAllEvents(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("createLocation", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new location successfully", async () => {
    const req = {
      body: {
        title: "New Location",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const locationMock = {
      _id: "location1",
      title: "New Location",
    };
    Location.create.mockResolvedValue(locationMock);

    await adminController.createLocation(req, res);

    expect(Location.create).toHaveBeenCalledWith({ title: "New Location" });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(locationMock);
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      body: {
        title: "New Location",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Location.create.mockRejectedValue(new Error("Database error"));

    await adminController.createLocation(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("createGenre", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new genre successfully", async () => {
    const req = {
      body: {
        name: "New Genre",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const genreMock = {
      _id: "genre1",
      name: "New Genre",
    };
    Genre.findOne.mockResolvedValue(null);
    Genre.create.mockResolvedValue(genreMock);

    await adminController.createGenre(req, res);

    expect(Genre.findOne).toHaveBeenCalledWith({ name: "New Genre" });
    expect(Genre.create).toHaveBeenCalledWith({ name: "New Genre" });
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Genre created successfully",
      genre: genreMock,
    });
  });

  it("should return 400 if genre already exists", async () => {
    const req = {
      body: {
        name: "Existing Genre",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const existingGenreMock = {
      _id: "genre1",
      name: "Existing Genre",
    };
    Genre.findOne.mockResolvedValue(existingGenreMock);

    await adminController.createGenre(req, res);

    expect(Genre.findOne).toHaveBeenCalledWith({ name: "Existing Genre" });
    expect(Genre.create).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: "Genre already exists" });
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      body: {
        name: "New Genre",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Genre.findOne.mockRejectedValue(new Error("Database error"));

    await adminController.createGenre(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});

describe("editEvent", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should update an event successfully", async () => {
    const req = {
      params: {
        id: "event1",
      },
      body: {
        title: "Updated Event",
        description: "Updated description",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const updatedEventMock = {
      _id: "event1",
      title: "Updated Event",
      description: "Updated description",
    };
    Event.findByIdAndUpdate.mockResolvedValue(updatedEventMock);

    await adminController.editEvent(req, res);

    expect(Event.findByIdAndUpdate).toHaveBeenCalledWith(
      "event1",
      {
        title: "Updated Event",
        description: "Updated description",
      },
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Event updated successfully",
      event: updatedEventMock,
    });
  });

  it("should return 404 if event is not found", async () => {
    const req = {
      params: {
        id: "nonexistentEvent",
      },
      body: {
        title: "Updated Event",
        description: "Updated description",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    Event.findByIdAndUpdate.mockResolvedValue(null);

    await adminController.editEvent(req, res);

    expect(Event.findByIdAndUpdate).toHaveBeenCalledWith(
      "nonexistentEvent",
      {
        title: "Updated Event",
        description: "Updated description",
      },
      { new: true }
    );
    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Event not found" });
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      params: {
        id: "event1",
      },
      body: {
        title: "Updated Event",
        description: "Updated description",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

    Event.findByIdAndUpdate.mockRejectedValue(new Error("Database error"));

    await adminController.editEvent(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Internal server error" });
    consoleErrorMock.mockRestore();
  });
});
