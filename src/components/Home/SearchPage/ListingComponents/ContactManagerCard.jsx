// src/components/ContactManagerCard.js
import React from 'react';
import { IoChatbubblesSharp } from "react-icons/io5";
import profile from '/manager-profile.png'

const ContactManagerCard = () => {
  return (
    <div className="bg-[#222] text-white p-4 rounded-lg w-full max-w-md mx-auto mb-4">
      <h2 className="text-xl font-normal mb-2">Contact Manager</h2>
      <div className="flex items-center justify-between p-2">
        <div className='flex items-center space-x-2'>
            <img className='outline outline-2 rounded-full object-contain h-10' src={profile} alt="" />
            <div className='flex flex-col items-left'>
                <h2 className="text-sm font-normal">Lawal Musa</h2>
                <p className='text-[12px] text-[#7c7c80] font-light'>Apartment Manager</p>
            </div>
        </div>
        <div className='text-4xl cursor-pointer'>
        <IoChatbubblesSharp />
        </div>
      </div>
    </div>
  );
};

export default ContactManagerCard;
