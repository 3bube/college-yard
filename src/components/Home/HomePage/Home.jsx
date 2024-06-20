import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import FindApartment from './FindApartment';
import Image from './Image';
import NavigationBar from './NavigationBar';

const Home = () => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen w-full bg-[#161719] text-white">
      {/* Top Section */}
      <ProfileCard />
      {/* Middle Section */}
      <FindApartment />

      {/* Bottom Section */}
      <Image />

      {/* Navigation Bar */}
     <NavigationBar />
    </div>
  );
};

export default Home;
