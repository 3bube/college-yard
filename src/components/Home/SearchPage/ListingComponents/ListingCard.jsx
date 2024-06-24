// src/components/ListingCard.js
import React from "react";
import { FaWifi, FaUtensils, FaUserFriends, FaBusAlt,  FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Example icons from react-icons
import { useNavigate } from 'react-router-dom';
import image from '/pexels-expect-best-323780 2.png';

const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case 'WiFi':
      return <FaWifi className="mr-1 bg-white rounded-full text-black w-5 h-5 p-1" size={20}/>;
    case 'Food':
      return <FaUtensils className="mr-1 bg-white rounded-full text-black w-5 h-5 p-1" size={20}/>;
    case '1-4 Person':
      return <FaUserFriends className="mr-1 bg-white rounded-full text-black w-5 h-5 p-1" size={20}/>;
    case 'Bus':
      return <FaBusAlt className="mr-1 bg-white rounded-full text-black w-5 h-5 p-1" size={20}/>;
    default:
      return null;
  }
};



const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={i} className="text-[#A3FE35]" size={18} />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key={fullStars} className="text-[#A3FE35]" size={18} />);
  }

  for (let i = stars.length; i < 5; i++) {
    stars.push(<FaRegStar key={i} className="text-[#A3FE35]" size={18} />);
  }

  return stars;
};

const ListingCard = ({ title, price, location, distance, amenities, imageUrl, rating }) => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate('/listing-details', { state: { title, price, location, distance, amenities, imageUrl, rating } });
};

  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-md overflow-hidden h-96 cursor-pointer" 
      onClick={handleClick}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center justify-end p-4">
      <div className="mb-6 flex items-center">
          {renderStars(rating)}
          <span className="ml-2 text-white">{rating}</span>
        </div>
        <a className="text-3xl font-bold text-white w-[213px] hover:underline">{title}</a>
        <div className="flex flex-col py-4">
          <p className="bg-white text-black w-[150px] text-center font-medium">
            LOWEST PRICE
          </p>
          <span className="text-xl w-[180px] font-semibold text-black bg-[#A3FE35] p-2">
            ₦{price} PER YEAR
          </span>
        </div>
        <p className="text-sm text-gray-300 flex w-[245.95px] items-center gap-2">
          <svg
            width="23"
            height="23"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 0C7.00783 0 4.75 2.20486 4.75 4.92445C4.75 7.64318 6.80992 10.8896 9.5 15.5455C12.1901 10.8896 14.25 7.64318 14.25 4.92445C14.25 2.20486 11.993 0 9.5 0ZM9.5 6.90909C8.62521 6.90909 7.91667 6.13614 7.91667 5.18182C7.91667 4.2275 8.62521 3.45455 9.5 3.45455C10.3748 3.45455 11.0833 4.2275 11.0833 5.18182C11.0833 6.13614 10.3748 6.90909 9.5 6.90909ZM19 19H0L3.16667 12.0909H5.64854C5.95333 12.6445 6.28029 13.2214 6.62388 13.8182H4.14517L2.56183 17.2727H16.4374L14.854 13.8182H12.3753C12.7197 13.2214 13.0467 12.6445 13.3507 12.0909H15.8333L19 19Z"
              fill="white"
            />
          </svg>
          {location}
        </p>
        <p className="text-sm text-gray-300 flex w-[245.95px] items-center gap-2 mt-4 text-nowrap">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9212 11.6725L16.2277 8.14975L15.8305 7.7945L12.6166 10.5061C12.026 10.3854 11.3899 10.5656 10.9594 11.0469C10.3154 11.767 10.3775 12.8739 11.0985 13.5179C11.8195 14.1619 12.9255 14.0997 13.5695 13.3787C14 12.8975 14.1076 12.2456 13.9212 11.6725ZM10.5 2.35725V0H14V2.35725C12.7409 2.14462 11.732 2.149 10.5 2.35725ZM18.2446 4.16325L19.4757 2.93213L20.713 4.16937L19.5571 5.32525C19.1529 4.90175 18.7136 4.51412 18.2446 4.16325ZM1.75 7.875H8.75V9.625H1.75V7.875ZM0 11.375H7V13.125H0V11.375ZM2.625 14.875H8.75V16.625H2.625V14.875ZM21 12.25C21 17.0826 17.0826 21 12.25 21C9.80875 21 7.6125 19.9894 6.02787 18.375H8.89787C9.89363 18.9271 11.032 19.25 12.25 19.25C16.1096 19.25 19.25 16.1096 19.25 12.25C19.25 8.39038 16.1096 5.25 12.25 5.25C11.032 5.25 9.89363 5.57288 8.89787 6.125H6.02787C7.6125 4.51062 9.80875 3.5 12.25 3.5C17.0826 3.5 21 7.41738 21 12.25Z"
              fill="white"
            />
          </svg>
          <b>{distance}</b>from Baze University
        </p>
        <div className="flex space-x-2 mt-2">
        {amenities.map((amenity, index) => (
  <span
    key={index}
    className="flex items-center text-xs font-medium  text-white"
  >
    {getAmenityIcon(amenity)}
    {amenity}
  </span>
))}

        </div>
      </div>
    </div>
  );
};

export default ListingCard;
