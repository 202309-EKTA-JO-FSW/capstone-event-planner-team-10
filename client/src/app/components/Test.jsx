"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <div key={event._id}>
          <h3>{event.title}</h3>
          <p>{event.content}</p>
          <p>Genre: {event.genre.name}</p>
          <p>Location: {event.location.title}</p>
          <p>Date: {new Date(event.date).toLocaleString()}</p>
          <h4>Tickets:</h4>
          <ul>
            {event.tickets.map((ticket) => (
              <li key={ticket._id}>
                <p>Title: {ticket.title}</p>
                <p>Description: {ticket.description}</p>
                <p>Price: ${ticket.price}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const SearchFilters = ({
  genres,
  locations,
  searchParams,
  onInputChange,
  onFilterChange,
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onFilterChange("title", event.target.value);
    }
  };

  return (
    <div>
      <h2>Search Filters</h2>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={searchParams.title}
        onChange={(e) => onFilterChange("title", e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <select
        name="location"
        value={searchParams.location}
        onChange={(e) => onFilterChange("location", e.target.value)}
      >
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location._id} value={location._id}>
            {location.title}
          </option>
        ))}
      </select>
      <select
        name="genre"
        value={searchParams.genre}
        onChange={(e) => onFilterChange("genre", e.target.value)}
      >
        <option value="">Select Genre</option>
        {genres.map((genre) => (
          <option key={genre._id} value={genre._id}>
            {genre.name}
          </option>
        ))}
      </select>
      <label>
        Featured Only
        <input
          type="checkbox"
          name="featured"
          checked={searchParams.featured}
          onChange={(e) => onFilterChange("featured", e.target.checked)}
        />
      </label>
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div>
      <h3>Pagination</h3>
      <ul>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              onClick={() => onPageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExplorePage = () => {
  const [genres, setGenres] = useState([]);
  const [locations, setLocations] = useState([]);
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useState({
    title: "",
    location: "",
    genre: "",
    featured: false,
    page: 1,
  });
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(delaySearch);
  }, [searchParams]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const genresResponse = await axios.get(
        "http://localhost:3001/user/genre-list"
      );
      setGenres(genresResponse.data);

      const locationsResponse = await axios.get(
        "http://localhost:3001/user/location-list"
      );
      setLocations(locationsResponse.data);

      const eventsResponse = await axios.get(
        "http://localhost:3001/user/events"
      );
      setEvents(eventsResponse.data.events);
      setTotalPages(eventsResponse.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const queryParams = new URLSearchParams(searchParams).toString();
      const response = await axios.get(
        `http://localhost:3001/user/events?${queryParams}`
      );
      setEvents(response.data.events);
      setTotalPages(response.data.totalPages);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching events:", error);
      setIsLoading(false);
    }
  };

  const handleFilterChange = (filterName, filterValue) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [filterName]: filterValue,
    }));
  };

  const handlePageChange = (pageNumber) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      page: pageNumber,
    }));
  };

  return (
    <div>
      <SearchFilters
        genres={genres}
        locations={locations}
        searchParams={searchParams}
        onInputChange={handleFilterChange}
        onFilterChange={handleFilterChange}
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <EventList events={events} />
          <Pagination
            totalPages={totalPages}
            currentPage={searchParams.page}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ExplorePage;
