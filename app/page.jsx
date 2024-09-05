"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { FaGoogle, FaFacebook, FaLinkedin, FaApple } from "react-icons/fa";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulate login validation
    if (username === "admin" && password === "Admin@2024") {
      setRole("admin");
    } else if (username === "monitor" && password === "Monitor@2024") {
      setRole("monitor");
    } else if (username === "skipper" && password === "Skipper@2024") {
      setRole("skipper");
    } else {
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    if (role === "admin") {
      window.location.href = "/admin-dashboard";
    } else if (role === "skipper") {
      window.location.href = "/skipper";
    } else if (role === "monitor") {
      window.location.href = "/monitor";
    }
  }, [role]);

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className="flex min-h-screen">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </div>

            {/* Login Form */}
            <h2 className="text-2xl font-semibold text-center mb-4">Log in</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password">Password: </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
              </div>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {/* Social Login */}
            <p className="text-center text-gray-600 mb-4">
              Log in with your Google, Facebook, LinkedIn, Office 365, or Apple
              account
            </p>
            <div className="flex justify-center space-x-4">
              <button className="text-blue-600 hover:text-blue-800">
                {/* Google Icon */}
                <FaGoogle className="text-red-600 text-xl" />
              </button>
              <button className="text-blue-800 hover:text-blue-900">
                {/* Facebook Icon */}
                <FaFacebook className="text-xl" />
              </button>
              <button className="text-blue-700 hover:text-blue-900">
                {/* LinkedIn Icon */}
                <FaLinkedin className="text-xl" />
              </button>
              <button className="text-gray-900 hover:text-black">
                {/* Apple Icon */}
                <FaApple className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Background Image */}
        <div className="w-1/2 relative">
          <Image
            src="/abstract-art.webp"
            alt="Abstract Art"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
