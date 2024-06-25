// src/components/AmenityCard.js
import React from 'react';

const AmenityCard = ({ name, imgUrl }) => {
  return (
    <div
      className="bg-cover bg-center text-white pb-4 rounded-xl flex items-end"
      style={{ backgroundImage: `url(${imgUrl})`, height: '150px', width: '160px', }}
    >
      <div className="bg-white text-black p-2 rounded">
        <p className="text-sm font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default AmenityCard;
