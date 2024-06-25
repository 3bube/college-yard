// src/components/AmenitiesCard.js
import React from 'react';
import AmenityCard from './AmenityCard';

const amenitiesData = [
  { id: 1, name: 'Bus', imgUrl: '/bus.png' },
  { id: 2, name: 'Restaurant', imgUrl: '/pasta.png' },
  { id: 3, name: 'Super-Mart', imgUrl: '/super-mart.png' },
  { id: 4, name: 'Pharmacy', imgUrl: '/pharmacy.png' },
];

const AmenitiesCard = () => {
  return (
    <div className="bg-[#222] text-white p-4 mt-4 rounded-lg w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-left">Amenities</h2>
      <div className="grid grid-cols-2 gap-6">
        {amenitiesData.map(amenity => (
          <AmenityCard key={amenity.id} name={amenity.name} imgUrl={amenity.imgUrl} />
        ))}
      </div>
    </div>
  );
};

export default AmenitiesCard;
