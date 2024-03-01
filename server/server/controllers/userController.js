const User = require("../models/user");
const Event = require("../models/event");

//make user
exports.createUser = async (req, res) => {
  try {
    const { email, password, username, locationId } = req.body;
    let user = await User.create({
      email,
      password,
      username,
      location: locationId,
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

//search/filter
exports.searchEvents = async (req, res) => {
  try {
    const { genre, location, title, featured } = req.query;

    const query = {};
    if (genre) query.genre = genre;
    if (location) query.location = location;

    if (title) query.title = { $regex: title, $options: "i" }; // not case sensitive

    if (featured === "true") {
      query.featured = true;
    }

    const events = await Event.find(query)
      .populate("genre")
      .populate("location");

    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//buy ticket
exports.purchaseTicket = async (req, res) => {
  try {
    const { userId, eventId, ticketId, quantity } = req.body;

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
    const userId = req.params.userId;
    const user = await User.findById(userId).populate("orders.eventId");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ orders: user.orders });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//cancel ticket
exports.cancelOrder = async (req, res) => {
  try {
    const { userId, orderId } = req.body;

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
