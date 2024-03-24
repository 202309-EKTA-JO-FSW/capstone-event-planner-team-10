"use client";
import React from "react";
import axios from "axios";
import { BASE_URL } from "@/app/utls/constants";

const SignOutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/user/logout`, {});

      if (response.status !== 200) {
        throw new Error("Logout failed");
      }

      document.cookie =
"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <a href="/signin">
      <button
        className="px-4 py-2 bg-red-500 text-white border-2 border-red-600 hover:bg-red-600 duration-300 rounded-r-full"
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </a>
  );
};

export default SignOutButton;
