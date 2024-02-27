const User = require("../models/user");
const Event = require("../models/event");

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

exports.purchaseTicket = async (req, res) => {
  try {
    const { userId, eventId, ticketId, quantity } = req.body;

    // Find the event in the database and populate the 'tickets' array
    const event = await Event.findById(eventId)
      .populate({
        path: "tickets",
        select: "title description price", // Select all necessary fields of the tickets
      })
      .select("title availableSeats");

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    // Find the purchased ticket within the event's tickets array
    const ticket = event.tickets.find(
      (ticket) => ticket._id.toString() === ticketId
    );

    // Check if the ticket exists in the event
    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found in event" });
    }

    // Check if the requested quantity exceeds the available seats
    if (quantity > event.availableSeats) {
      return res.status(400).json({ message: "Not enough available tickets" });
    }

    // Update the availableSeats field of the event document
    event.availableSeats -= quantity;

    // Calculate the total price based on the quantity of tickets
    const totalPrice = quantity * ticket.price; // Assuming each ticket has a price field

    // Save the updated event document back to the database
    await event.save();

    // Add the order to the user's orders with the calculated total price
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.orders.push({
      eventId: eventId,
      ticketId: ticketId,
      eventTitle: event.title, // Add only the event title
      ticketTitle: ticket.title, // Add the ticket title
      ticketDescription: ticket.description, // Add the ticket description
      quantity: quantity,
      totalPrice: totalPrice,
    });

    await user.save();

    res.status(200).json({ message: "Tickets purchased successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// exports.getUserOrders = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const orders = await Order.find({ userId })
//       .populate({
//         path: "eventId",
//         select: "title",
//         model: "Event",
//       })
//       .populate({
//         path: "ticketId",
//         select: ["title", "description"],
//         model: "Ticket",
//       });

//     res.status(200).json({ orders });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };
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
exports.cancelTickets = async (req, res) => {
  try {
    const { userId, orderId, ticket } = req.body;

    // Find the user in the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Find the order in the user's orders
    const order = user.orders.id(orderId);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Cancel each ticket specified
    for (const ticketId of ticket) {
      const ticketIndex = order.tickets.findIndex(
        (ticket) => ticket._id.toString() === ticketId
      );
      if (ticketIndex !== -1) {
        // Remove the ticket from the order
        order.tickets.splice(ticketIndex, 1);
      }
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Tickets canceled successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
