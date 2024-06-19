// src/components/Welcome.js
import React from "react";
import { useNavigate } from "react-router-dom";
import image from "/Group 10227.png";
import backgroundImage from "/A Cozy Flat in Odessa Designed for a Student by Fateeva Design 1.png"; // Make sure to replace with your actual image path

const Welcome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Adjust the path as per your routing setup
  };

  const handleCreateAccount = () => {
    navigate("/create-account"); // Adjust the path as per your routing setup
  };

  return (
    <div
      className="relative container min-h-screen w-screen flex flex-col items-center  bg-cover bg-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="flex flex-col items-center mt-14 flex-1 h-full w-full text-center text-white">
        {/* Top Gradient Overlay */}
        <div className="absolute top-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent opacity-70 z-0"></div>

        {/* Bottom Gradient Overlay */}
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent opacity-70 z-0"></div>
        <h1 className="text-3xl font-semibold mb-4 w-60 z-10">
          Welcome to College Yard
        </h1>
        <p className="text-lg mb-8 font-extralight w-80 z-10">
          We're so stoked to have you & look forward to seeing you stay!
        </p>
        <div className="mt-14">
          <img className="max-[400px]:h-56 h-60" src={image} alt="" />
        </div>

        <div className="flex flex-col max-[400px]:mt-10 mb-4 min-[400px]:mt-36 space-y-4 w-11/12 z-10">
          <button
            className="px-14 py-3 bg-[#A3FE35] text-black text-xl rounded hover:bg-[#8ABB55] transition duration-300 font-medium"
            onClick={handleLogin}
          >
            Log in
          </button>
          <button
            className="px-6 py-3 bg-white text-black text-xl rounded  transition duration-300"
            onClick={handleCreateAccount}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
