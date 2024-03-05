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

    if (availableSeats > maxSeats) {
      return res
        .status(400)
        .json({ message: "Available seats cannot exceed max seats" });
    }

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
      tickets,
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

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.isAdmin = isAdmin;

    await user.save();

    res.status(200).json({ message: "User admin status updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;

    const event = await Event.findById(eventId);

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

    const existingGenre = await Genre.findOne({ name });
    if (existingGenre) {
      return res.status(400).json({ message: "Genre already exists" });
    }

    const genre = await Genre.create({ name });

    res.status(201).json({ message: "Genre created successfully", genre });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//edit an event
exports.editEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const updatedInfo = req.body;

    const event = await Event.findByIdAndUpdate(eventId, updatedInfo, {
      new: true,
    });

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    console.error("Error editing event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
