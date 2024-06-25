
// src/components/FacilitiesCard.js
import React from 'react';
import FacilityCard from './FacilityCard';
import { FaTableTennis, FaGolfBall, FaBook, FaSwimmingPool, FaFutbol } from 'react-icons/fa';
import { PiBoxingGloveDuotone } from "react-icons/pi";
import { GiPoolTableCorner } from "react-icons/gi";

const facilitiesData = [
  { id: 1, name: 'Badminton', icon: <FaTableTennis /> },
{id:2, name: 'Boxing ring', icon: <PiBoxingGloveDuotone />},
  { id: 3, name: 'Mini-Golf', icon: <FaGolfBall /> },
  { id: 4, name: 'Study Room', icon: <FaBook /> },
  { id: 5, name: 'Pool Table', icon: <GiPoolTableCorner /> },
  { id: 6, name: 'Soccer', icon: <FaFutbol /> },
];

const FacilitiesCard = () => {
  return (
    <div className="bg-[#222] text-white p-4 rounded-lg w-full max-w-md mx-auto mt-6">
      <h2 className="text-xl font-medium mb-4 text-left">Facilities</h2>
      <div className="grid grid-cols-4 gap-4">
        {facilitiesData.map(facility => (
          <FacilityCard key={facility.id} icon={facility.icon} name={facility.name} />
        ))}
      </div>
    </div>
  );
};

export default FacilitiesCard;
