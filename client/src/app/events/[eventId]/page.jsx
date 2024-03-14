"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventPage = ({ params }) => {
  const { eventId } = params;
  const [event, setEvent] = useState(null);
  const [ticketsToOrder, setTicketsToOrder] = useState({});
  const isTicketSoldOut = () => {
    return event.availableSeats === 0;
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/events/${eventId}`
        );
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEventData();
  }, [eventId]);

  if (!event) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(event.date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const handleTicketQuantityChange = (e, ticket) => {
    const quantity = parseInt(e.target.value, 10);
    setTicketsToOrder({ ...ticketsToOrder, [ticket._id]: quantity });
  };

  const getTicketPrice = (ticket) => {
    const quantity = ticketsToOrder[ticket._id] || 1;
    const basePrice = ticket.price;
    return (basePrice * quantity).toFixed(2);
  };

  const handleBuyNowClick = (ticket) => {
    console.log(
      `Buying ${ticketsToOrder[ticket._id]} ${
        ticket.title
      } ticket(s) for $${getTicketPrice(ticket)}`
    );
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover"
        />
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-800">{event.title}</h1>
            <div className="select-none">
              <span className="ml-2 text-m font-semibold">Rating:</span>{" "}
              {event.rating}/5 ⭐
            </div>
          </div>
          <p className="text-gray-700 mb-4">{event.content}</p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Date:</span> {formattedDate}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Location:</span> {event.location.title}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Genre:</span> {event.genre.name}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-bold">Available Seats:</span>{" "}
            {event.availableSeats} / {event.maxSeats}
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tickets</h2>
            {event.tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-gray-100 p-4 rounded-lg mb-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {ticket.title}
                  </h3>
                  <p className="text-gray-600">{ticket.description}</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-gray-800">
                    ${getTicketPrice(ticket)}
                  </span>
                  <div className="flex items-center ml-4">
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={ticketsToOrder[ticket._id] || 1}
                      onChange={(e) => handleTicketQuantityChange(e, ticket)}
                      className="w-16 px-2 py-1 rounded-md border border-gray-300 mr-2"
                      disabled={isTicketSoldOut(ticket)}
                    />
                    <button
                      className={`text-white transition-colors duration-150 border-2 px-4 py-2 rounded-full ${
                        isTicketSoldOut(ticket)
                          ? "border-gray-400 bg-gray-400 cursor-not-allowed"
                          : "border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600"
                      }`}
                      onClick={() => handleBuyNowClick(ticket)}
                      disabled={isTicketSoldOut(ticket)}
                    >
                      {isTicketSoldOut(ticket) ? "Sold Out" : "Buy Now"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
