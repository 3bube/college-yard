// src/components/ConfirmationCode.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // Validate code logic here
    // For demo, navigate to home directly
    navigate("/home"); // Adjust the path as per your routing setup
  };

  const handleCreatePassword = () =>{ 
    navigate('/create-password');
  }

  const handleResendCode = () => {
    // Logic to resend confirmation code
    // Placeholder: Show notification or trigger email resend
    alert("Confirmation code resent!");
  };

  return (
    <div className="relative container min-h-screen w-screen flex flex-col items-center bg-black">

      <div className="z-10 flex flex-col items-center pt-20">
        <h1 className="text-3xl font-semibold text-center text-white">
          Verify Your Email
        </h1>
        <p className="text-sm  text-center text-white font-light">
        We’ll send you a code to confirm your student status
        </p>
        <form className="w-10/12 mt-9" onSubmit={handleVerifyCode}>
          <div className="mb-6">
            <label
              htmlFor="code"
              className="block text-sm font-medium text-[#FFFFFF7A]"
            >
              Enter Confirmation Code
            </label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white"
              required
            />
            <button 
            onClick={handleResendCode}
            className="text-white font-semibold ms-24 text-sm text-nowrap">
               <span className="underline">Resend Code</span>  <span className=" font-light">after 60 seconds</span>
            </button> 
          </div>

          <div className="flex flex-col gap-5">
            <button
              type="submit"
              onClick={handleCreatePassword}
              className="w-full bg-[#A3FE35] text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300"
            >
              Next
            </button>
           
          </div>
        </form>

        <div className="mt-20 flex flex-col items-center w-10/12 gap-5 ">
            <hr className="bg-white w-full" />
            <span className="text-white font-normal">Wrong Email?</span>
          <button
            type="button"
            className=" text-black bg-white w-full  py-2 px-4 rounded-md"
            onClick={() => navigate("/login")}
          >
            Change Email
          </button>
        </div>c

      </div>
    </div>
  );
};

export default ConfirmationPage;
