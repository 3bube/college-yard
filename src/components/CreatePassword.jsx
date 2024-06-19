// src/components/CreatePassword.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from '/group-pic.png'; // Ensure this path is correct

const CreatePassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreatePassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      // Handle create password logic here
      navigate("/login"); // Adjust the path as per your routing setup
    }
  };

  return (
    <div className="relative container min-h-screen w-screen flex flex-col items-center  bg-black">

      <div className="z-10 flex flex-col items-center pt-20">
        <h1 className="text-3xl font-semibold text-center text-white">
          Create a New Password
        </h1>
        <div className="flex flex-col items-center mt-10">
        <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.56115 0.59729L24.1425 21.8574L22.1145 23.5973L15.3865 15.4796H12.1465L10.1385 13.4462L8.14648 15.4796L6.17315 13.4462L4.14648 15.4796L0.146484 11.3775L3.51982 7.362H8.67448L4.51848 2.33717L6.56115 0.59729ZM14.7692 7.362H17.2185C18.6025 4.93617 21.1878 3.30317 24.1465 3.30317C28.5612 3.30317 32.1465 6.94123 32.1465 11.4208C32.1465 15.6731 28.9185 19.1651 24.8158 19.5101L14.7692 7.362ZM27.4798 9.39141C28.5838 9.39141 29.4798 10.3006 29.4798 11.4208C29.4798 12.5411 28.5838 13.4502 27.4798 13.4502C26.3758 13.4502 25.4798 12.5411 25.4798 11.4208C25.4798 10.3006 26.3758 9.39141 27.4798 9.39141Z" fill="white"/>
</svg>

        <p className="text-md text-center text-white font-normal ">
          Set a strong password to secure your account.
        </p>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        <form className="w-10/12 mt-9" onSubmit={handleCreatePassword}>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#FFFFFF7A]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-[#FFFFFF7A]"
            >
              Repeat Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white"
              required
            />
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="w-full bg-[#A3FE35] text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePassword;
