"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import PurchaseModal from "@/app/components/PurchaseModal";
import { BASE_URL } from "@/app/utls/constants";

const EventPage = ({ params }) => {
  const router = useRouter();
  const { eventId } = params;
  const [event, setEvent] = useState(null);
  const [ticketsToOrder, setTicketsToOrder] = useState({});
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const isTicketSoldOut = () => {
    return event.availableSeats === 0;
  };

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/events/${eventId}`);
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

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop().split(";").shift();
    }
  };

    const handleBuyNowClick = async (ticket) => {
    try {
      const token = getCookie("token");
      if (!token) {
        router.push("/signin");
        return;
      }

      const quantity = ticketsToOrder[ticket._id] || 1;
      const response = await fetch(`${BASE_URL}/user/events/purchase-ticket`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ eventId, ticketId: ticket._id, quantity }),
      });

      if (response.ok) {
        setShowPurchaseModal(true);
      } else {
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error purchasing ticket:", error);
      router.push("/signin");
    }
  };

  const handleModalClose = () => {
    setShowPurchaseModal(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 mt-20">
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
                          : "text-white transition-colors duration-300 border-2 border-stone-700 hover:border-stone-700 bg-stone-700 hover:bg-orange-300 hover:text-black"
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
      <PurchaseModal isOpen={showPurchaseModal} onClose={handleModalClose} />
    </div>
  );
};

export default EventPage;
