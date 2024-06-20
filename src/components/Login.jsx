// src/components/Login.js
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '/group-pic.png'

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigate("/home"); // Adjust the path as per your routing setup
  };

  const handleCreateAccount = () => {
    navigate("/create-account"); // Adjust the path as per your routing setup
  };
  

  return (
    <div className="relative container min-h-screen w-full flex flex-col pt-20 items-center  bg-black">
      <h1 className="text-3xl font-semibold text-center text-white">
        Welcome Back
      </h1>
      <p className="text-lg text-center text-white font-normal">Glad to have back!</p>
      <form className="w-10/12 mt-9" onSubmit={handleLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#FFFFFF7A]"
          >
            University Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded  focus:outline-none  sm:text-sm text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-[#FFFFFF7A]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-5">
          <button
            type="submit"
            className="w-full bg-[#A3FE35] text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300"
          >
            Log in
          </button>

          <button
            type="button"
            className="w-full bg-white text-black py-2 px-4 rounded-md hover:bg-[#5e5e5e] transition duration-300"
            onClick={handleCreateAccount}
          >
            Create account
          </button>
        </div>
      </form>
      <div className='absolute bottom-0 w-full h-[400px]'
      style={{
        background: "linear-gradient(to bottom, rgba(150, 199, 92, 0.06), rgba(150, 199, 92, 0.9))"
      }}></div>      
      <div className="absolute bottom-0 w-full">
        <img className="w-full " src={image} alt="" />
      </div>
    </div>
  );
};

export default Login;
