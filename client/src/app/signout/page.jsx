"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utls/constants";

function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/user/logout`, {});

      if (response.status !== 200) {
        throw new Error("Logout failed");
      }

      document.cookie =
        "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      setIsLoggedIn(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Page</h1>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

export default Page;
