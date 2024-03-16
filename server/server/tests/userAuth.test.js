// userAuth.test.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { authenticateUser } = require("../middleware/userAuth");

jest.mock("jsonwebtoken");
jest.mock("../models/user");

describe("authenticateUser middleware", () => {
  let req, res, next;
  let consoleErrorMock;

  beforeEach(() => {
    req = {
      headers: {
        authorization: "Bearer token123",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    next = jest.fn();
    consoleErrorMock = jest.spyOn(console, "error").mockImplementation();
  });

  afterEach(() => {
    jest.clearAllMocks();
    consoleErrorMock.mockRestore();
  });

  it("should authenticate user successfully", async () => {
    const user = { _id: "user123" };
    jwt.verify.mockReturnValueOnce({ userId: user._id });
    User.findById.mockResolvedValueOnce(user);

    await authenticateUser(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith("token123", process.env.JWT_SECRET);
    expect(User.findById).toHaveBeenCalledWith(user._id);
    expect(req.user).toEqual(user);
    expect(next).toHaveBeenCalled();
  });

  it("should return 401 if authorization token invalid", async () => {
    req.headers.authorization = undefined;

    await authenticateUser(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      message: "Invalid token",
    });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 401 if user is not found", async () => {
    const userId = "user123";
    jwt.verify.mockReturnValueOnce({ userId });
    User.findById.mockResolvedValueOnce(null);

    await authenticateUser(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith("token123", process.env.JWT_SECRET);
    expect(User.findById).toHaveBeenCalledWith(userId);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Unauthorized" });
    expect(next).not.toHaveBeenCalled();
  });

  it("should return 401 if token is invalid", async () => {
    jwt.verify.mockImplementationOnce(() => {
      throw new Error("Invalid token");
    });

    await authenticateUser(req, res, next);

    expect(jwt.verify).toHaveBeenCalledWith("token123", process.env.JWT_SECRET);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: "Invalid token" });
    expect(next).not.toHaveBeenCalled();
  });
});
