"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genreId, setGenreId] = useState("");
  const [date, setDate] = useState("");
  const [locationId, setLocationId] = useState("");
  const [maxSeats, setMaxSeats] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [featured, setFeatured] = useState(false);
  const [rating, setRating] = useState(4);
  const [image, setImage] = useState(
    "https://dummyimage.com/1600x1080/000/fff"
  );
  const [tickets, setTickets] = useState([
    { title: "", description: "", price: 0 },
  ]);
  const [locations, setLocations] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationResponse = await axios.get(
          "http://localhost:3001/user/location-list"
        );
        setLocations(locationResponse.data);

        const genreResponse = await axios.get(
          "http://localhost:3001/user/genre-list"
        );
        setGenres(genreResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTicketChange = (index, field, value) => {
    const updatedTickets = [...tickets];
    updatedTickets[index][field] = value;
    setTickets(updatedTickets);
  };

  const handleAddTicket = () => {
    setTickets([...tickets, { title: "", description: "", price: 0 }]);
  };

  const handleRemoveTicket = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/admin/event", {
        title,
        content,
        genreId,
        date,
        locationId,
        isOpen: true,
        maxSeats,
        availableSeats,
        featured,
        rating,
        image,
        tickets,
      });

      console.log("Event created:", response.data);
      // Reset form fields or perform any additional actions
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };
  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Event</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="content" className="block font-bold mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="genre" className="block font-bold mb-2">
              Genre
            </label>
            <select
              id="genre"
              value={genreId}
              onChange={(e) => setGenreId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a genre</option>
              {genres.map((genre) => (
                <option key={genre._id} value={genre._id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block font-bold mb-2">
            Location
          </label>
          <select
            id="location"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location._id} value={location._id}>
                {location.title}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="maxSeats" className="block font-bold mb-2">
              Max Seats
            </label>
            <input
              type="number"
              id="maxSeats"
              value={maxSeats}
              onChange={(e) => setMaxSeats(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="availableSeats" className="block font-bold mb-2">
              Available Seats
            </label>
            <input
              type="number"
              id="availableSeats"
              value={availableSeats}
              onChange={(e) => setAvailableSeats(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="featured"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
            className="form-checkbox mr-2"
          />
          <label htmlFor="featured" className="font-bold">
            Featured
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block font-bold mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block font-bold mb-2">
            Image
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tickets" className="block font-bold mb-2">
            Tickets
          </label>
          {tickets.map((ticket, index) => (
            <div key={index} className="mb-2 grid grid-cols-4 gap-4">
              <input
                type="text"
                placeholder="Title"
                value={ticket.title}
                onChange={(e) =>
                  handleTicketChange(index, "title", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Description"
                value={ticket.description}
                onChange={(e) =>
                  handleTicketChange(index, "description", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="number"
                placeholder="Price"
                value={ticket.price}
                onChange={(e) =>
                  handleTicketChange(index, "price", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveTicket(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTicket}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Ticket
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
