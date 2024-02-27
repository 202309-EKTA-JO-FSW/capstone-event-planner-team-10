// models/event.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const eventSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  genre: { type: Schema.Types.ObjectId, ref: "Genre", required: true },
  date: { type: Date, required: true },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: true,
  },
  isOpen: { type: Boolean, default: true },
  maxSeats: { type: Number, required: true },
  availableSeats: { type: Number, required: true },
  featured: { type: Boolean, default: false },
  image: { type: String, default: "https://dummyimage.com/1600x1080/000/fff" },
  tickets: [ticketSchema],
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
