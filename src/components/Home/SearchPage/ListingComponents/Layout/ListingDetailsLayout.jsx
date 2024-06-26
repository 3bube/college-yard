import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ListingDetailsLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  if (!location.state) {
    navigate('/'); // Redirect to home if no state is available
    return null;
  }

  return (
    <div className="min-h-screen w-full bg-black text-white p-4 ">
      <button className="ml-5" onClick={() => navigate(-1)}>
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.1359 22.5801L13.9477 19.787L7.84797 13.6873L24 13.6873L24 9.74457L7.84797 9.74457L13.9477 3.64484L11.1359 0.851764L0.296391 11.7159L11.1359 22.5801Z"
            fill="white"
          />
        </svg>
      </button>
      {children}
    </div>
  );
};

export default ListingDetailsLayout;
