// event.test.js
const mongoose = require("mongoose");
const Event = require("../models/event");

describe("Event Model", () => {
  it("should create a new event successfully", async () => {
    const eventData = {
      title: "Test Event",
      content: "This is a test event",
      genre: mongoose.Types.ObjectId(),
      date: new Date(),
      location: mongoose.Types.ObjectId(),
      maxSeats: 100,
      availableSeats: 100,
      tickets: [
        {
          title: "General Admission",
          description: "General admission ticket",
          price: 50,
        },
      ],
    };

    const event = new Event(eventData);
    const error = event.validateSync();

    expect(error).toBeUndefined();
    expect(event.title).toBe(eventData.title);
    expect(event.content).toBe(eventData.content);
    expect(event.genre).toEqual(eventData.genre);
    expect(event.date).toEqual(eventData.date);
    expect(event.location).toEqual(eventData.location);
    expect(event.isOpen).toBe(true);
    expect(event.maxSeats).toBe(eventData.maxSeats);
    expect(event.availableSeats).toBe(eventData.availableSeats);
    expect(event.featured).toBe(false);
    expect(event.rating).toBe(4);
    expect(event.image).toBe("https://dummyimage.com/1600x1080/000/fff");
    expect(event.tickets.length).toBe(1);
    expect(event.tickets[0].title).toBe(eventData.tickets[0].title);
    expect(event.tickets[0].description).toBe(eventData.tickets[0].description);
    expect(event.tickets[0].price).toBe(eventData.tickets[0].price);
  });

  it("should fail to create an event without required fields", async () => {
    const eventData = {
      title: "Test Event",
      content: "This is a test event",
    };

    const event = new Event(eventData);
    const error = event.validateSync();

    expect(error).toBeDefined();
    expect(error.errors.genre).toBeDefined();
    expect(error.errors.date).toBeDefined();
    expect(error.errors.location).toBeDefined();
    expect(error.errors.maxSeats).toBeDefined();
    expect(error.errors.availableSeats).toBeDefined();
  });
});
