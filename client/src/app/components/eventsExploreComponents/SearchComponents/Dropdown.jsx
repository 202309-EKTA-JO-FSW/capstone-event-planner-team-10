import { useState } from "react";

const Dropdown = ({ genres, locations, onFilterChange }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const toggleLocationDropdown = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const toggleGenreDropdown = () => {
    setIsGenreOpen(!isGenreOpen);
  };

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleLocationDropdown}
      >
        <h3 className="text-lg font-semibold mb-3 mt-2 select-none">
          Location
        </h3>
        <span className="text-gray-400">
          <svg
            className={`h-5 w-5 transform transition-transform ${
              isLocationOpen ? "rotate-180" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div
        className={`bg-white text-gray-800 mt-2 rounded-md shadow-md ${
          isLocationOpen ? "block" : "hidden"
        }`}
      >
        <ul className="py-2">
          <li
            key="all-locations"
            className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-200"
            onClick={() => onFilterChange("location", "")}
          >
            Display all locations
          </li>
          {locations?.map((location) => (
            <li
              key={location._id}
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-200"
              onClick={() => onFilterChange("location", location._id)}
            >
              {location.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 drop-shadow-lg relative">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={toggleGenreDropdown}
        >
          <h3 className="text-lg font-semibold select-none mt-2 mb-2">Genre</h3>
          <span className="text-gray-400">
            <svg
              className={`h-5 w-5 transform transition-transform ${
                isGenreOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
        <div
          className={`bg-white text-gray-800 mt-2 rounded-md shadow-md ${
            isGenreOpen ? "block" : "hidden"
          }`}
        >
          <ul className="py-2">
            <li
              key="all-genres"
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-200"
              onClick={() => onFilterChange("genre", "")}
            >
              Display all genres
            </li>
            {genres?.map((genre) => (
              <li
                key={genre._id}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer duration-200"
                onClick={() => onFilterChange("genre", genre._id)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
