const { adminAuthMiddleware } = require("../middleware/adminAuth");
const User = require("../models/user");

jest.mock("../models/user");

describe("adminAuthMiddleware", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call next() if user is an admin", async () => {
    const req = {
      user: {
        _id: "user1",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    const userMock = {
      _id: "user1",
      isAdmin: true,
    };
    User.findById.mockResolvedValue(userMock);

    await adminAuthMiddleware(req, res, next);

    expect(User.findById).toHaveBeenCalledWith("user1");
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.json).not.toHaveBeenCalled();
  });

  it("should return 403 if user is not an admin", async () => {
    const req = {
      user: {
        _id: "user1",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    const userMock = {
      _id: "user1",
      isAdmin: false,
    };
    User.findById.mockResolvedValue(userMock);

    await adminAuthMiddleware(req, res, next);

    expect(User.findById).toHaveBeenCalledWith("user1");
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({
      message: "Access forbidden. User is not an admin",
    });
  });

  it("should handle errors and return a 500 status code", async () => {
    const req = {
      user: {
        _id: "user1",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    User.findById.mockRejectedValue(new Error("Database error"));

    await adminAuthMiddleware(req, res, next);

    expect(User.findById).toHaveBeenCalledWith("user1");
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: "Database error" });
  });
});
