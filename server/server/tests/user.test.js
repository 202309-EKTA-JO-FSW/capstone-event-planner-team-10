const mongoose = require("mongoose");
const User = require("../models/user");
const bcrypt = require("bcrypt");

describe("User Model", () => {
  it("should create a new user successfully", async () => {
    const userData = {
      email: "test@example.com",
      password: "password123",
      username: "testuser",
      location: mongoose.Types.ObjectId(),
    };

    const user = new User(userData);
    const error = await user.validateSync();

    expect(error).toBeUndefined();
    expect(user.email).toBe(userData.email);
    expect(user.username).toBe(userData.username);
    expect(user.isAdmin).toBe(false);
    expect(user.image).toBe(
      "http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon"
    );
    expect(user.location).toEqual(userData.location);
    expect(user.orders).toEqual([]);
  });

  it("should fail to create a user without required fields", async () => {
    const userData = {
      email: "test@example.com",
    };

    const user = new User(userData);
    const error = await user.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.password).toBeDefined();
    expect(error.errors.username).toBeDefined();
    expect(error.errors.location).toBeDefined();
  });

  it("should hash the user password before saving", async () => {
    const userData = {
      email: "test@example.com",
      password: "password123",
      username: "testuser",
      location: mongoose.Types.ObjectId(),
    };

    const user = new User(userData);
    await user.validate();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    expect(user.password).not.toBe(userData.password);
    expect(await bcrypt.compare(userData.password, user.password)).toBe(true);
  });

  it("should add an order to the user's orders array", async () => {
    const userData = {
      email: "test@example.com",
      password: "password123",
      username: "testuser",
      location: mongoose.Types.ObjectId(),
    };

    const user = new User(userData);

    const orderData = {
      eventId: mongoose.Types.ObjectId(),
      ticketId: mongoose.Types.ObjectId(),
      eventTitle: "Test Event",
      ticketTitle: "Test Ticket",
      ticketDescription: "Test ticket description",
      quantity: 2,
      totalPrice: 100,
    };

    user.orders.push(orderData);

    const error = await user.validateSync();

    expect(error).toBeUndefined();
    expect(user.orders.length).toBe(1);
    expect(user.orders[0].eventId).toEqual(orderData.eventId);
    expect(user.orders[0].ticketId).toEqual(orderData.ticketId);
    expect(user.orders[0].eventTitle).toBe(orderData.eventTitle);
    expect(user.orders[0].ticketTitle).toBe(orderData.ticketTitle);
    expect(user.orders[0].ticketDescription).toBe(orderData.ticketDescription);
    expect(user.orders[0].quantity).toBe(orderData.quantity);
    expect(user.orders[0].totalPrice).toBe(orderData.totalPrice);
  });
});
