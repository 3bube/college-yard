// src/components/RoomTypesCard.js
import React, { useState } from 'react';
import { FaBed } from 'react-icons/fa';

const roomTypesData = [
  { id: 1, name: 'Certified Loner', price: '₦500,000', capacity: 1, available: true, imgUrl: '/single-room.png' },
  { id: 2, name: 'Iconic Duo', price: '₦700,000', capacity: 2, available: false, imgUrl: '/duo-room.png' },
  { id: 3, name: 'Magic Trio', price: '₦900,000', capacity: 3, available: true, imgUrl: '/trio-room.png' },
  { id: 4, name: 'Full Squad', price: '₦1,200,000', capacity: 4, available: false, imgUrl: '/full-squad.png' },
];

const RoomTypesCard = () => {
  const [roomTypes, setRoomTypes] = useState(roomTypesData);
  const [filter, setFilter] = useState('All');

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredRoomTypes = filter === 'Available'
    ? roomTypes.filter(room => room.available)
    : roomTypes;

  return (
    <div className="bg-[#222] mt-4 text-white p-4 rounded-lg w-full max-w-md mx-auto">
      <div className="mb-4 flex flex-row items-center justify-between px-4">
        <h2 className="text-xl font-bold">Room Types</h2>
        <select
          id="filter"
          className="bg-[#222] text-white px-2 py-1 rounded outline"
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="All">All</option>
          <option value="Available">Available Only</option>
        </select>
      </div>

      <div className="space-y-4 flex flex-col items-center">
        {filteredRoomTypes.map(room => (
          <div key={room.id} 
            style={{
              backgroundImage: `url(${room.imgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '200px',
              width: '290px'
            }}
            className="relative p-4 rounded-lg flex flex-col justify-end bg-gray-800 bg-opacity-50"
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative z-10 ">
              <div className=" text-black font-semibold flex flex-col gap-1"><span className='bg-[#A3FE35] w-[100px] text-lg'>{room.price}</span> <span className='bg-[#A3FE35] w-[115px] text-xl'>PER YEAR</span></div>
              <div className="flex items-center justify-between mt-2">
              <h3 className="text-2xl font-semibold w-[104px]">{room.name}</h3>
              <div className='flex flex-col items-center justify-center'>
                <span className="text-sm text-black bg-white h-5 w-5 rounded-full text-center font-semibold">{room.capacity}</span>
                <FaBed className="text-white mr-2" />
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomTypesCard;
