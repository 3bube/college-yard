import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React, { useState } from "react";

const PaymentCard = ({ perYearPrice, perSemesterPrice }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [yearCount, setYearCount] = useState(1);
  const [semesterCount, setSemesterCount] = useState(1);

  const tabStyles = { color: "white", bg: "black", borderRadius: ".5rem", border: '1px solid black' };

  const handleYearIncrement = () => setYearCount(yearCount + 1);
  const handleYearDecrement = () =>
    yearCount > 1 && setYearCount(yearCount - 1);

  const handleSemesterIncrement = () => setSemesterCount(semesterCount + 1);
  const handleSemesterDecrement = () =>
    semesterCount > 1 && setSemesterCount(semesterCount - 1);

  return (
    <div 
    style={{background: 'linear-gradient(to right, #c6c9c1, #c2d7a4, #bbe486, #b1f163, #a3fe35)'}}
    className="text-black p-4 rounded-lg flex flex-col items-center">
      <Tabs index={selectedTab} onChange={(index) => setSelectedTab(index)}>
        <TabList className="flex space-x-4">
          <Tab _selected={tabStyles} className="cursor-pointer px-4 py-2 outline outline-black">
            Per Year
          </Tab>
          <Tab _selected={tabStyles} className="cursor-pointer px-4 py-2">
            Per Semester
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center outline outline-black outline-1 rounded-lg">
                <span className="bg-[#222222] py-2 px-4 rounded-l-lg text-white font-semibold">{yearCount}</span>
                <span className="px-8">Year(s)</span>
                </div>
              <button
                onClick={handleYearDecrement}
                className="bg-[#222222] text-white px-4 py-1 rounded"
              >
                -
              </button>
              <button
                onClick={handleYearIncrement}
                className="bg-[#222222] text-white px-4 py-1 rounded"
              >
                +
              </button>
            </div>
            <div className="mt-4 flex flex-col items-left">
                <span className="text-sm">Room Price</span>
                <p className="text-[40px] font-bold">₦{perYearPrice * yearCount}.</p>
              
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center outline outline-black outline-1 rounded-lg">
                <span className="bg-[#222222] py-2 px-4 rounded-l-lg text-white font-semibold">{yearCount}</span>
                <span className="px-4">Semester(s)</span>
                </div>
              <button
                onClick={handleSemesterDecrement}
                className="bg-[#222222] text-white px-4 py-1 rounded"
              >
                -
              </button>
              <button
                onClick={handleSemesterIncrement}
                className="bg-[#222222] text-white px-4 py-1 rounded"
              >
                +
              </button>
            </div>
            <div className="mt-4 flex flex-col items-left">
                <span className="text-sm">Room Price</span>
                <p className="text-[40px] font-bold">₦{perSemesterPrice * semesterCount}.</p>
              
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default PaymentCard;
