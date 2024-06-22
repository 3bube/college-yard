import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePic from '/profilepic.png';

const NavigationBar = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState('');

  useEffect(() => {
    setActiveButton(window.location.pathname);
  }, []);

  const handleNavigation = (path) => {
    setActiveButton(path);
    navigate(path);
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 w-full bg-[#1E1E1E] flex justify-around items-center py-3 rounded-t-xl outline outline-[#A3FE35]">
      <button
        onClick={() => handleNavigation('/home')}
        className={`flex flex-col items-center font-light ${activeButton === '/home' ? 'text-[#A3FE35]' : 'text-white'}`}
      >
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34 16.5379L32.0719 18.6399L17 4.45993L1.92808 18.6184L0 16.5164L17 0.542969L34 16.5379ZM28.3333 19.0474L25.5 33.543H8.5L5.66667 19.0474L17 8.36684L28.3333 19.0474ZM18.4167 27.8038C18.4167 27.0118 17.782 26.3691 17 26.3691C16.218 26.3691 15.5833 27.0118 15.5833 27.8038C15.5833 28.5958 16.218 29.2386 17 29.2386C17.782 29.2386 18.4167 28.5958 18.4167 27.8038ZM19.8333 20.6299C19.8333 19.0445 18.564 17.7604 17 17.7604C15.436 17.7604 14.1667 19.0445 14.1667 20.6299C14.1667 22.2154 15.436 23.4995 17 23.4995C18.564 23.4995 19.8333 22.2154 19.8333 20.6299Z"
            fill={activeButton === '/home' ? '#A3FE35' : '#ffffff'}
          />
        </svg>
        Home
      </button>
      <button
        onClick={() => handleNavigation('/search')}
        className={`flex flex-col items-center font-light ${activeButton === '/search' ? 'text-[#A3FE35]' : 'text-white'}`}
      >
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.8976 23.6246C5.33796 23.6246 0 18.3262 0 11.8123C0 5.29842 5.33796 0 11.8976 0C18.4572 0 23.7951 5.29971 23.7951 11.8123C23.7951 18.3249 18.4585 23.6246 11.8976 23.6246ZM11.8976 4.03387C7.57697 4.03387 4.06299 7.52396 4.06299 11.8123C4.06299 16.1006 7.57827 19.5907 11.8976 19.5907C16.2168 19.5907 19.7334 16.1006 19.7334 11.8123C19.7334 7.52396 16.2181 4.03387 11.8976 4.03387ZM23.9486 20.1061C22.8857 21.6251 21.5392 22.9323 19.9858 23.9565L27.0788 31L31 27.1082L23.9486 20.1061Z"
            fill={activeButton === '/search' ? '#A3FE35' : '#ffffff'}
          />
        </svg>
        Search
      </button>
      <button
        onClick={() => handleNavigation('/my-stay')}
        className={`flex flex-col items-center font-light ${activeButton === '/my-stay' ? 'text-[#A3FE35]' : 'text-white'}`}
      >
        <svg width="24" height="29" viewBox="0 0 24 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.6 27.3763H24V28.543H0V27.3763H2.4V0.542969H21.6V27.3763ZM8.4 14.543H4.8V15.7096H8.4V14.543Z"
            fill={activeButton === '/my-stay' ? '#A3FE35' : '#ffffff'}
          />
        </svg>
        My Stay
      </button>
      <button
        onClick={() => handleNavigation('/profile')}
        className={`flex flex-col items-center font-light ${activeButton === '/profile' ? 'text-[#A3FE35]' : 'text-white'}`}
      >
        <img
          className={`rounded-full h-8 ${activeButton === '/profile' ? 'border border-[#A3FE35]' : ''}`}
          src={ProfilePic}
          alt="Profile"
        />
        Your Profile
      </button>
    </div>
  );
};

export default NavigationBar;
