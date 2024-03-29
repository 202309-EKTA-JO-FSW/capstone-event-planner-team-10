const User = require("../models/user");
const Event = require("../models/event");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Location = require("../models/location");
const Genre = require("../models/genre");
const cookie = require("cookie");

//make user
exports.createUser = async (req, res) => {
  try {
    const { email, password, username, locationId, image } = req.body;

    //criteria
    const passwordCriteria = [
      { regex: /(?=.*\d)/, message: "at least one number" },
      { regex: /(?=.*[a-z])/, message: "at least one lowercase letter" },
      { regex: /(?=.*[A-Z])/, message: "at least one uppercase letter" },
      {
        regex: /(?=.*[!@#$])/,
        message: "at least one special character (!@#$)",
      },
      { regex: /.{8,}/, message: "at least 8 characters" },
    ];

    // check criteria
    const missingCriteria = passwordCriteria.filter(
      (criteria) => !criteria.regex.test(password)
    );
    if (missingCriteria.length > 0) {
      const errorMessage =
        "Password does not meet quality criteria. Missing: " +
        missingCriteria.map((criteria) => criteria.message).join(", ");
      return res.status(400).json({ message: errorMessage });
    }

    let user = await User.create({
      email,
      password,
      username,
      location: locationId,
      image: image || "",
    });

    await user.populate("location", "title");

    res.status(201).json(user);
  } catch (err) {
    if (err.code === 11000) {
      let field = err.message.includes("email") ? "Email" : "Username";
      return res.status(400).json({ message: `${field} is already taken` });
    }
    res.status(500).json({ message: err.message });
  }
};

//login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//logout
exports.logoutUser = (req, res) => {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", "", {
      httpOnly: true,
      secure: false,
      expires: new Date(0),
      sameSite: "strict",
      path: "/",
    })
  );

  res.statusCode = 200;
  res.json({ success: true });
};

//search/filter
exports.searchEvents = async (req, res) => {
  try {
    const {
      genre,
      location,
      title,
      featured,
      minRating,
      maxRating,
      includeSoldOut,
    } = req.query;
    const page = parseInt(req.query.page) || 1;
    const pageSize = 6;

    const query = {};
    if (genre) query.genre = genre;
    if (location) query.location = location;
    if (title) query.title = { $regex: title, $options: "i" };
    if (featured === "true") {
      query.featured = true;
    }
    if (minRating && maxRating)
      query.rating = {
        $gte: parseFloat(minRating),
        $lte: parseFloat(maxRating),
      };

    if (includeSoldOut !== "true") {
      query.availableSeats = { $gt: 0 };
    }

    const totalEvents = await Event.countDocuments(query);
    const totalPages = Math.ceil(totalEvents / pageSize);

    const events = await Event.find(query)
      .populate("genre")
      .populate("location")
      .skip((page - 1) * pageSize)
      .limit(pageSize);

    res.status(200).json({ events, totalPages });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCurrentUser = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decodedToken.userId;

    const user = await User.findById(userId).populate("location");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//buy ticket
exports.purchaseTicket = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { eventId, ticketId, quantity } = req.body;

    const event = await Event.findById(eventId)
      .populate({
        path: "tickets",
        select: "title description price",
      })
      .select("title availableSeats");

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const ticket = event.tickets.find(
      (ticket) => ticket._id.toString() === ticketId
    );

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found in event" });
    }

    if (quantity > event.availableSeats) {
      return res.status(400).json({ message: "Not enough available tickets" });
    }

    event.availableSeats -= quantity;

    const totalPrice = quantity * ticket.price;

    await event.save();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.orders.push({
      eventId: eventId,
      ticketId: ticketId,
      eventTitle: event.title,
      ticketTitle: ticket.title,
      ticketDescription: ticket.description,
      quantity: quantity,
      totalPrice: totalPrice,
    });

    await user.save();

    res.status(200).json({ message: "Tickets purchased successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get the user's order by their id
exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).populate("orders.eventId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ orders: user.orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//cancel order
exports.cancelOrder = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { orderId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const order = user.orders.id(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.remove();

    await user.save();

    res.status(200).json({ message: "Order canceled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//genre all location
exports.getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update location:
exports.updateLocation = async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const { locationId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    user.location = locationId;

    await user.save();

    res.status(200).json({ message: "Location updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//get all genres
exports.getAllGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get event by id
exports.getEventById = async (req, res) => {
  try {
    const eventId = req.params.id;

    const event = await Event.findById(eventId)
      .populate("genre")
      .populate("location");

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
