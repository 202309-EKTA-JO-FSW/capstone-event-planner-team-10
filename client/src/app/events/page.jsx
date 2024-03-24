"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchFilters from "../components/eventsExploreComponents/SearchComponents/SearchFilters";
import EventList from "../components/eventsExploreComponents/EventList";
import Pagination from "../components/eventsExploreComponents/Pagination";
import { BASE_URL } from "../utls/constants";

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
  const [userLocationFetched, setUserLocationFetched] = useState(false);

  useEffect(() => {
    const token = getCookie("token");

    if (token) {
      fetchUserLocation(token);
    } else {
      setSearchParams((prevParams) => ({ ...prevParams, location: "" }));
      setUserLocationFetched(true);
    }
  }, []);

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const genresResponse = await axios.get(`${BASE_URL}/user/genre-list`);
        setGenres(genresResponse.data);
        const locationsResponse = await axios.get(
          `${BASE_URL}/user/location-list`
        );
        setLocations(locationsResponse.data);
        const eventsResponse = await axios.get(`${BASE_URL}/user/events`, {
          params: searchParams,
        });
        setEvents(eventsResponse.data.events);
        setTotalPages(eventsResponse.data.totalPages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    if (userLocationFetched) {
      fetchData();
    }
  }, [searchParams, userLocationFetched]);

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

  const filterOptionsString = () => {
    let filterString = "Showing results for: ";
    if (searchParams.title) {
      filterString += `${searchParams.title}, `;
    }
    if (searchParams.location) {
      filterString += `${searchParams.location.title}, `;
    }
    if (searchParams.genre) {
      const selectedGenre = genres.find(
        (genre) => genre._id === searchParams.genre
      );
      filterString += `${selectedGenre.name}, `;
    }
    if (searchParams.featured) {
      filterString += `Featured, `;
    }
    return filterString.slice(0, -2);
  };

  const fetchUserLocation = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userLocation = response.data.user.location;
      setSearchParams((prevParams) => ({
        ...prevParams,
        location: userLocation,
      }));
      setUserLocationFetched(true);
    } catch (error) {
      console.error("Error fetching user location:", error);
      setSearchParams((prevParams) => ({
        ...prevParams,
        location: "",
      }));
      setUserLocationFetched(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-28 mb-8">
      <div className="flex flex-row flex-grow">
        <SearchFilters
          genres={genres}
          locations={locations}
          searchParams={searchParams}
          onFilterChange={handleFilterChange}
        />
        <div className="flex-grow p-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold drop-shadow-lg">
              {filterOptionsString()}
            </h2>
          </div>
          {isLoading ? (
            <p>Loading...</p>
          ) : userLocationFetched ? (
            <>
              <EventList events={events} />
              {events.length > 0 && (
                <Pagination
                  totalPages={totalPages}
                  currentPage={searchParams.page}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
