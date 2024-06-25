
// src/components/FacilityCard.js
import React from 'react';

const FacilityCard = ({ icon, name }) => {
  return (
    <div className="bg-[#222] hover:bg-white hover:text-[#222] text-white p-2 rounded-lg flex flex-col items-center justify-center whitespace-nowrap outline outline-1 transition duration-150">
      <div className="text-2xl mb-2">
        {icon}
      </div>
      <p className="text-[9px] font-light">{name}</p>
    </div>
  );
};

export default FacilityCard;
