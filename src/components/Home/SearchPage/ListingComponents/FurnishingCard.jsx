import React from 'react';
import { FaCouch } from 'react-icons/fa';
import { PiDesk } from "react-icons/pi";
import { GiLoincloth, GiPillow } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaChair } from "react-icons/fa6";
import { IoBed } from "react-icons/io5";

// Map of furnishing icons
const furnishingIcons = {
'Desk': <PiDesk size={30} /> ,
  'Couch': <FaCouch size={30} />,
  'Wardrobe': <GiLoincloth size={30}/>,
  'Bed Space': <IoBed size={30}/>,
  'Pillows': <GiPillow size={30}/>,
  'A.C' : <TbAirConditioning size={30}/>,
  'Chair' : <FaChair size={30}/>
};

const FurnishingCard = () => (
  <div 
  style={{background: 'linear-gradient(to right bottom, #c6c9c1, #c2d7a4, #bbe486, #b1f163, #a3fe35)'}}
  className="text-black py-3 px-2 rounded-lg flex flex-col w-full">
    <h2 className="text-xl font-normal mb-4 text-left">Furnishings</h2>
    <div className="grid grid-cols-4 gap-8 p-3">
      {Object.entries(furnishingIcons).map(([name, icon]) => (
        <div key={name} className="flex flex-col items-center">
          <div className="mb-2">{icon}</div>
          <span className="text-xs whitespace-nowrap">{name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default FurnishingCard;
