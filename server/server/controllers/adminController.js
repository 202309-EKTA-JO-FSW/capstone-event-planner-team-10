const Event = require("../models/event");
const Location = require("../models/location");
const User = require("../models/user");
const Genre = require("../models/genre");

//create an event
exports.createEvent = async (req, res) => {
  try {
    const {
      title,
      content,
      genreId,
      date,
      locationId,
      isOpen,
      maxSeats,
      availableSeats,
      featured,
      image,
      tickets,
    } = req.body;

    // Create a new event with the provided information
    let event = await Event.create({
      title,
      content,
      genre: genreId,
      date,
      location: locationId,
      isOpen,
      maxSeats,
      availableSeats,
      featured,
      image,
      tickets, // Array of tickets
    });

    event = await event.populate("location", "title");
    event = await event.populate("genre", "name");

    res.status(201).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//edit admin status
exports.editUserAdminStatus = async (req, res) => {
  try {
    const { userId, isAdmin } = req.body;

    // Find the user in the database
    const user = await User.findById(userId);

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the isAdmin field of the user document
    user.isAdmin = isAdmin;

    // Save the updated user document back to the database
    await user.save();

    res.status(200).json({ message: "User admin status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // Exclude password field
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;

    // Find the event in the database by its ID
    const event = await Event.findById(eventId);

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().populate("location", "title");
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// create a location
exports.createLocation = async (req, res) => {
  try {
    const { title } = req.body;
    const location = await Location.create({ title });
    res.status(201).json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//create a genre

exports.createGenre = async (req, res) => {
  try {
    const { name } = req.body;

    // Check if the genre already exists
    const existingGenre = await Genre.findOne({ name });
    if (existingGenre) {
      return res.status(400).json({ message: "Genre already exists" });
    }

    // Create a new genre
    const genre = await Genre.create({ name });

    res.status(201).json({ message: "Genre created successfully", genre });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
