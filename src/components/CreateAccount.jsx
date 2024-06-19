// src/components/CreateAccount.js
import React from "react";
import { useNavigate } from "react-router-dom";
import image from '/group-pic.png'; // Ensure this path is correct

const CreateAccount = () => {
  const navigate = useNavigate();

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Handle create account logic here
    navigate("/home"); // Adjust the path as per your routing setup
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Adjust the path as per your routing setup
  };

  const handleConfirmationCode = () => {
    navigate("/confirmation"); // Adjust the path as per your routing setup
  };

  return (
    <div className="relative container min-h-screen w-screen flex flex-col items-center  bg-black">

      <div className="z-10 flex flex-col items-center pt-20 w-11/12">
        <h1 className="text-3xl font-semibold text-center text-white">
          Create Your Account
        </h1>
        <p className="text-sm text-center text-white font-light w-[300px] mt-4">
        College yard is exclusively for students in Higher institutions so we have to make sure that you fit in here
        </p>
        <form className="w-10/12 mt-9" onSubmit={handleCreateAccount}>

          <div className="mb-11">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-[#FFFFFF7A]"
            >
              <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.7418 8.18743V12.003C16.7418 14.0764 12.3835 15.0573 9.96605 15.0573C7.6683 15.0573 3.19024 14.0094 3.19024 12.003V7.26441L9.96605 10.9256L16.7418 8.18743ZM10.6564 0L0.931641 4.32899L9.96605 9.22262L18.2476 5.89721V11.293H19.7533V5.08185L10.6564 0ZM20.5062 15.0573H17.4947C17.9299 14.3045 18.2476 13.1752 18.2476 12.0459H19.7533C19.7533 13.1872 20.0477 14.1983 20.5062 15.0573Z" fill="#8C8C8C"/>
</svg>Enter University Name
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white placeholder:italic placeholder:text-sm"
              placeholder="University Name"
              required
            />
          </div>
          
          <div className="mb-14">
            <label
              htmlFor="email"
              className="flex items-center text-sm font-medium text-[#FFFFFF7A]"
            >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.71875 7.73585L0.379578 0.977539H17.0586L8.71875 7.73585ZM4.94403 6.4681L0.369141 2.76018V11.4584L4.94403 6.4681ZM12.4935 6.4681L17.0684 11.4584V2.76018L12.4935 6.4681ZM11.4101 7.34551L8.71875 9.52684L6.02739 7.34551L0.384448 13.502H17.0531L11.4101 7.34551Z" fill="#8C8C8C"/>
</svg>
Enter University Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded focus:outline-none sm:text-sm text-white placeholder:italic placeholder:text-sm"
              placeholder="University Email"
              required
            />
          </div>

         


          <div className="flex flex-col gap-5">
            <button
              type="submit"
              className="w-full bg-[#A3FE35] text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300"
              onClick={handleConfirmationCode}
            >
              Send Code
            </button>
          </div>
        </form>

        <div className="mt-24 flex flex-col items-center w-10/12 gap-4">
        <hr className="w-40 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10 "/>          
        <span className="text-white font-light font-md">Already have an account?</span>
        <button
            type="button"
            className=" w-full bg-white text-black py-2 px-4 rounded-md hover:bg-[#8ABB55] transition duration-300"
            onClick={handleLoginRedirect}
          >
      Log in
          </button>
        </div>

      </div>
    </div>
  );
};

export default CreateAccount;
