import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { IoMdPhotos } from "react-icons/io";
import { FaPlayCircle } from "react-icons/fa";
import { TbView360Number } from "react-icons/tb";
import CustomVideoPlayer from "./CustomVideoPlayer";
import FurnishingCard from "./FurnishingCard";
import BathroomCard from "./BathroomCard";
import PaymentCard from "./PaymentCard";
import video from '/video/Learn useEffect In 13 Minutes.mp4'
import Button from './GetRoomButton.jsx'

import ListingDetailsLayout from "./Layout/ListingDetailsLayout";

const RoomDetails = () => {
  const location = useLocation();
  const room = location.state;

  const tabStyle = {
    color: "black",
    bg: "white",
    height: "100%",
    width: "30%",
  };

  if (!room) {
    return <div>Room details not found</div>;
  }

  return (
    <ListingDetailsLayout>
      <h1 className="text-center text-2xl font-bold">{room.name}</h1>
      <div className="container mx-auto p-4">
        
        <div className="bg-[#222] shadow-md rounded-xl overflow-hidden p-6 ">
        <h1 className="font-semibold mb-4">Preview</h1>
          <Tabs variant="enclosed" colorScheme="green">
            <TabList className="flex items-center justify-between place-content-center outline outline-1 h-12 rounded-lg px-4 ">
              <Tab _selected={tabStyle}>
                <IoMdPhotos size={22} /> <span className="text-xs">Photos</span>{" "}
              </Tab>
              <Tab _selected={tabStyle}>
                <FaPlayCircle size={22} />
                <span className="text-xs">Video</span>
              </Tab>
              <Tab _selected={tabStyle}>
                <TbView360Number size={22} />
                <span className="text-xs">360</span>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="mt-4">
                <div className="h-96 w-full">
                  <img
                    src={room.imgUrl}
                    alt={room.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </TabPanel >
              <TabPanel className="mt-4">
              <CustomVideoPlayer src={video}/>
              </TabPanel>
              <TabPanel>
                <div>
                  <iframe
                    src="/path/to/360-view.html"
                    className="w-full h-96"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>

        <div className="bg-[#222] shadow-lg rounded-lg p-6 w-full mt-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FurnishingCard />
      <BathroomCard />
      <PaymentCard  perYearPrice={500000} perSemesterPrice={250000}/>
    </div>
    <Button />
  </div>
      </div>
    </ListingDetailsLayout>
  );
};

export default RoomDetails;
