"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "../utls/constants";

const signInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}/user/login`, {
        email,
        password,
      });
      if (response.status !== 200) {
        throw new Error(response.data.message);
      }
      const { user, token } = response.data;
      document.cookie = `token=${token}; path=/`;
      console.log("User:", user);
      console.log("Token:", token);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/auth/google`, {});
      const { token } = response.data;
      localStorage.setItem("token", token);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8 mt-24">
      <div className="bg-white shadow-lg rounded-md p-8">
        <div className="flex flex-col items-center mb-6">
          <img
            className="mx-auto h-40 w-40 rounded-full"
            src="https://firebasestorage.googleapis.com/v0/b/eventure-61c1e.appspot.com/o/files%2FEventure.png?alt=media&token=e14a6c7c-8fe0-46eb-ae4d-d796f308e98f"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500">{error}</div>}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-stone-700 focus:border-stone-700 "
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-stone-700  focus:ring-stone-700"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-stone-700 text-white rounded-full hover:bg-orange-300 hover:text-black border-2 border-stone-700 duration-300"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/signup"
            className="font-semibold leading-6 text-teal-500 hover:text-teal-600"
          >
            Register
          </a>
        </p>
        <div className="mt-4">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full px-4 py-2 border-2 border-blue-500 hover:border-blue-500 bg-white text-black rounded-full hover:bg-gray-100 focus:outline-none duration-300"
          >
            Or continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default signInForm;
