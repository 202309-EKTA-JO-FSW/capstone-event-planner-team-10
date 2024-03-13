import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdown";
import useDebounce from "./Debounce";

const SearchFilters = ({ genres, locations, searchParams, onFilterChange }) => {
  const [searchTitle, setSearchTitle] = useState(searchParams.title || "");
  const debouncedSearchTitle = useDebounce(searchTitle, 500);

  const [minRating, setMinRating] = useState(searchParams.minRating || 1);
  const debouncedMinRating = useDebounce(minRating, 500);

  const [maxRating, setMaxRating] = useState(searchParams.maxRating || 5);
  const debouncedMaxRating = useDebounce(maxRating, 500);

  const handleRatingChange = (e, type) => {
    if (type === "minRating") {
      setMinRating(e.target.value);
    } else if (type === "maxRating") {
      setMaxRating(e.target.value);
    }
  };

  useEffect(() => {
    if (debouncedSearchTitle !== searchParams.title) {
      onFilterChange("title", debouncedSearchTitle);
    }
  }, [debouncedSearchTitle, searchParams.title, onFilterChange]);

  useEffect(() => {
    if (debouncedMinRating !== searchParams.minRating) {
      onFilterChange("minRating", debouncedMinRating);
    }
  }, [debouncedMinRating, searchParams.minRating, onFilterChange]);

  useEffect(() => {
    if (debouncedMaxRating !== searchParams.maxRating) {
      onFilterChange("maxRating", debouncedMaxRating);
    }
  }, [debouncedMaxRating, searchParams.maxRating, onFilterChange]);

  const handleSearchChange = (e) => {
    setSearchTitle(e.target.value);
  };

  return (
    <div className=" bg-gray-100 border-x-2 border-gray-200 rounded-lg shadow-xl p-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Search Events
      </h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <Dropdown
        locations={locations}
        genres={genres}
        onFilterChange={onFilterChange}
      />
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800">Rating</h3>
        <div className="flex flex-col">
          <div className="flex items-center mb-2">
            <span className="mr-2 text-gray-600">Min:</span>
            <input
              type="range"
              min="1"
              max="5"
              value={minRating}
              onChange={(e) => handleRatingChange(e, "minRating")}
              className="w-full accent-orange-300"
            />
            <span className="ml-2 text-gray-600">{minRating}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-600">Max:</span>
            <input
              type="range"
              min="1"
              max="5"
              value={maxRating}
              onChange={(e) => handleRatingChange(e, "maxRating")}
              className="w-full accent-orange-300"
            />
            <span className="ml-2 text-gray-600">{maxRating}</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <div className="relative">
            <input
              type="checkbox"
              name="featured"
              checked={searchParams.featured}
              onChange={(e) => onFilterChange("featured", e.target.checked)}
              className={`mt-1 appearance-none rounded-full h-4 w-4 border-2 border-gray-400 ${
                searchParams.featured ? "bg-orange-300 border-orange-300" : ""
              } focus:outline-none transition-colors duration-200`}
            />
          </div>
          <span className="ml-2 text-gray-800">Featured</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <div className="relative">
            <input
              type="checkbox"
              name="includeSoldOut"
              checked={searchParams.includeSoldOut}
              onChange={(e) =>
                onFilterChange("includeSoldOut", e.target.checked)
              }
              className={`mt-1 appearance-none rounded-full h-4 w-4 border-2 border-gray-400 ${
                searchParams.includeSoldOut
                  ? "bg-orange-300 border-orange-300"
                  : ""
              } focus:outline-none transition-colors duration-200`}
            />
          </div>
          <span className="ml-2 text-gray-800">Include Sold Out Events</span>
        </label>
      </div>
    </div>
  );
};

export default SearchFilters;
