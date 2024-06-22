// src/components/MainLayout.js
import React from 'react';
import logo from '/logo2.png'; // Ensure this path is correct
import NavigationBar from './HomePage/NavigationBar';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-screen">
      <header className="flex justify-center items-center py-4 bg-black">
        <img src={logo} alt="Logo" className="h-8" /> {/* Adjust the height as needed */}
      </header>
      <div className="pb-20"> {/* Adjust padding to avoid overlap with navigation bar */}
        {children}
      </div>
      <NavigationBar />
    </div>
  );
};

export default MainLayout;
