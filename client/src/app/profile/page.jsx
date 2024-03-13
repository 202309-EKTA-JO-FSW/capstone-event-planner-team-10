"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ProfileInformation from "../components/profileComponents/ProfileInformation";
import Orders from "../components/profileComponents/Orders";
import LocationPage from "../components/profileComponents/LocationPage";
import SignOutButton from "../components/profileComponents/SignOutButton";
import { BASE_URL } from "../utls/constants";

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("information");

  useEffect(() => {
    const token = getCookie("token");
    if (!token) {
      router.push("/signin");
    } else {
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.user);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleLocationUpdate = () => {
    fetchUserData(getCookie("token"));
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-60 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <button
            className={`px-4 py-2 border-2 border-stone-700 rounded-l-full ${
              activeTab === "information"
                ? "text-black bg-orange-300"
                : "text-white bg-stone-700 hover:bg-orange-300 hover:text-black duration-300"
            }`}
            onClick={() => setActiveTab("information")}
          >
            Profile Information
          </button>
          <button
            className={`px-4 py-2 border-2 border-stone-700 ${
              activeTab === "orders"
                ? "text-black bg-orange-300"
                : "text-white bg-stone-700 hover:bg-orange-300 hover:text-black duration-300"
            }`}
            onClick={() => setActiveTab("orders")}
          >
            Orders
          </button>
          <button
            className={`px-4 py-2 border-2 border-stone-700 ${
              activeTab === "location"
                ? "text-black bg-orange-300"
                : "text-white bg-stone-700 hover:bg-orange-300 hover:text-black duration-300"
            }`}
            onClick={() => setActiveTab("location")}
          >
            Location
          </button>
          <SignOutButton />
        </div>
        <div className="p-4">
          {activeTab === "information" && (
            <ProfileInformation userData={userData} />
          )}
          {activeTab === "orders" && <Orders orders={userData.orders} />}
          {activeTab === "location" && (
            <LocationPage
              currentLocation={userData.location}
              onLocationUpdate={handleLocationUpdate}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
