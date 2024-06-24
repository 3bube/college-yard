import React from 'react';
import { FaWifi, FaUtensils, FaBus } from 'react-icons/fa'; // Example icons, add more as needed

const amenityIcons = {
  'WiFi': <FaWifi size={15}/>,
  'Food': <FaUtensils size={15}/>,
  'Bus': <FaBus size={15}/>,
};

const AmenityLogos = () => {
  return (
    <div className="relative flex flex-wrap space-x-2 mt-2 p-4 bg-[#222] w-40">
      <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-1 rounded-bl">
        Free
      </div>
      {Object.entries(amenityIcons).map(([_, Icon], index) => (
        <div key={index} className="flex items-center space-x-1 bg-white p-2 text-black rounded-full">
          {Icon}
        </div>
      ))}
    </div>
  );
};

export default AmenityLogos;
