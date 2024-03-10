import React from "react";
import Link from "next/link";

const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {events.length === 0 ? (
        <p className="text-center text-gray-600 select-none">
          Sorry, we couldn't find what you're looking for.
        </p>
      ) : (
        events.map((event) => (
          <div
            key={event._id}
            className="border rounded-lg overflow-hidden shadow flex flex-col"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-84 h-64 object-cover select-none"
            />
            <div className="p-4 flex-grow select-none">
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 max-w-96 mb-2 line-clamp-1">
                {event.content}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Date:</span>{" "}
                {new Date(event.date).toLocaleString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                  hour: "numeric",
                  minute: "2-digit",
                  hour12: true,
                })}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Location:</span>{" "}
                {event.location.title}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Genre:</span> {event.genre.name}
              </p>
              <p className="mb-1">
                <span className="font-semibold">Available Seats:</span>{" "}
                {event.availableSeats}
              </p>
              {event.featured && (
                <span className="bg-green-500 text-white px-2 py-1 rounded-full mt-1">
                  Featured!
                </span>
              )}
            </div>
            <div className="flex justify-between items-center">
              <div className="select-none">
                <span className="ml-2 text-m font-semibold">Rating:</span>{" "}
                {event.rating}/5 ⭐
              </div>
              <div>
                <p className="text-xs font-semibold mb-1 ml-1 select-none">
                  Starting from $
                  {event.tickets.length > 0 ? event.tickets[0].price : "N/A"}
                </p>
                {event.availableSeats === 0 ? (
                  <button
                    className="mb-2 text-white mr-1 transition-colors duration-150 border-2 border-gray-400 bg-gray-400 cursor-not-allowed px-4 py-2 rounded-full"
                    disabled
                  >
                    Sold Out
                  </button>
                ) : (
                  <button className="mb-2 mr-1 text-white  transition-colors duration-150 border-2 border-blue-500 hover:border-blue-600 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full">
                    Buy Tickets
                  </button>
                )}
                <Link href={`/events/${event._id}`} legacyBehavior>
                  <button className="mr-1 text-black border-2 border-blue-500 hover:border-blue-600  transition-colors duration-150 bg-white  hover:bg-gray-100  px-4 py-2 rounded-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
