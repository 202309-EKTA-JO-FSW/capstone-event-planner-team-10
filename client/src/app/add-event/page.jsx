"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageDb } from "../utls/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../utls/constants";

const EventForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [genreId, setGenreId] = useState("");
  const [date, setDate] = useState("");
  const [locationId, setLocationId] = useState("");
  const [maxSeats, setMaxSeats] = useState(0);
  const [availableSeats, setAvailableSeats] = useState(0);
  const [featured, setFeatured] = useState(false);
  const [rating, setRating] = useState(4);
  const [image, setImage] = useState(null);
  const [tickets, setTickets] = useState([
    { title: "", description: "", price: 0 },
  ]);
  const [locations, setLocations] = useState([]);
  const [genres, setGenres] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [redirectTimeout, setRedirectTimeout] = useState(null);
  const router = useRouter();

  const getTokenFromCookies = () => {
    const cookies = document.cookie.split(";");
    const tokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("token=")
    );
    if (tokenCookie) {
      return tokenCookie.split("=")[1];
    }
    return null;
  };

  const checkIfAdmin = async () => {
    const token = getTokenFromCookies();
    if (!token) {
      console.error("No token found");
      return false;
    }

    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user.isAdmin;
    } catch (error) {
      console.error("Error checking admin status:", error);
      return false;
    }
  };

  useEffect(() => {
    const checkAdmin = async () => {
      const isUserAdmin = await checkIfAdmin();
      setIsAdmin(isUserAdmin);

      if (!isUserAdmin) {
        const timeout = setTimeout(() => {
          alert("You must be an admin to access this page");
          router.push("/events");
        });
        setRedirectTimeout(timeout);
      }
    };

    checkAdmin();

    return () => {
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, [router]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationResponse = await axios.get(
          `${BASE_URL}/user/location-list`
        );
        setLocations(locationResponse.data);

        const genreResponse = await axios.get(`${BASE_URL}/user/genre-list`);
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

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = getTokenFromCookies();

      if (!token) {
        setErrorMessage("You must be authenticated to create an event.");
        return;
      }

      let imageUrl = "";

      if (image) {
        const imgRef = ref(imageDb, `events/${v4()}`);
        await uploadBytes(imgRef, image);
        imageUrl = await getDownloadURL(imgRef);
      }

      const response = await axios.post(
        `${BASE_URL}/admin/event`,
        {
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
          image: imageUrl,
          tickets,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Event created:", response.data);
      setSuccessMessage("Event created successfully!");
      setErrorMessage("");
    } catch (error) {
      console.error("Error creating event:", error);
      setErrorMessage(
        "An error occurred while creating the event, please make sure to fill out all the forms."
      );
      setSuccessMessage("");
    }
  };
  return (
    <div className="max-w-3xl mx-auto py-8 mt-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Event</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-md p-8"
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
              Date and Time
            </label>
            <input
              type="datetime-local"
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
            type="file"
            id="image"
            onChange={handleImageChange}
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
                className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 duration-300"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddTicket}
            className="mt-2 px-4 py-2 bg-stone-700 text-white rounded-full hover:bg-orange-300 hover:text-black border-2 border-stone-700 duration-300"
          >
            Add Ticket
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-stone-700 text-white rounded-full hover:bg-orange-300 hover:text-black border-2 border-stone-700 w-full duration-300"
        >
          Create Event
        </button>
      </form>
      {successMessage && (
        <p className="mt-4 text-green-600 text-center">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="mt-4 text-red-600 text-center">{errorMessage}</p>
      )}
    </div>
  );
};

export default EventForm;
