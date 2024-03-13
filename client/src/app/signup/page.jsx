"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { imageDb } from "../utls/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { useRouter } from "next/navigation";
import { BASE_URL } from "../utls/constants";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [locationId, setLocationId] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [locations, setLocations] = useState([]);
  const router = useRouter();

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = "";

      if (image) {
        const imgRef = ref(imageDb, `users/${v4()}`);
        await uploadBytes(imgRef, image);
        imageUrl = await getDownloadURL(imgRef);
      }

      const response = await axios.post(`${BASE_URL}/user/signup`, {
        email,
        password,
        username,
        locationId,
        image: imageUrl,
      });

      if (response.status !== 201) {
        throw new Error(response.data.message);
      }

      console.log("User registered successfully:", response.data);
      router.push("/signin");
    } catch (err) {
      console.error("Error during signup:", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/user/location-list`);
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="bg-white shadow-lg rounded-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            className="mx-auto h-40 w-40 rounded-full mb-4"
            src="https://firebasestorage.googleapis.com/v0/b/eventure-61c1e.appspot.com/o/files%2FEventure.png?alt=media&token=e14a6c7c-8fe0-46eb-ae4d-d796f308e98f"
            alt="Your Company"
          />
          <h2 className="text-2xl font-bold text-gray-900">
            Sign up for an account
          </h2>
        </div>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-700 focus:border-stone-700 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-700 focus:border-stone-700 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-700 focus:border-stone-700 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <div className="mt-1">
              <select
                id="location"
                value={locationId}
                onChange={(e) => setLocationId(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-700 focus:border-stone-700 sm:text-sm"
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
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Image
            </label>
            <div className="mt-1">
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-stone-700 focus:border-stone-700 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-stone-700 text-white rounded-full hover:bg-orange-300 hover:text-black border-2 border-stone-700 duration-300"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
