import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "@/app/utls/constants";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const LocationPage = ({ currentLocation, onLocationUpdate }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/location-list`);
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleLocationChange = async (locationId) => {
    try {
      const token = getCookie("token");
      await axios.put(
        `${BASE_URL}/user/update-location`,
        { locationId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      onLocationUpdate();
    } catch (error) {
      console.error("Error updating location:", error);
    }
  };

  return (
    <div>
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Current Location</h3>
          <p className="text-gray-600">{currentLocation.title}</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Change Location</h3>
          <select
            className="border border-gray-300 rounded px-2 py-1"
            onChange={(e) => handleLocationChange(e.target.value)}
          >
            <option value="">Select a location</option>
            {locations.map((location) => (
              <option key={location._id} value={location._id}>
                {location.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
