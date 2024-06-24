// src/components/SearchFilters.js
import React, { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const SearchFilters = () => {
  const [filters, setFilters] = useState({
    closest: false,
    cheapest: false,
    highestRated: false,
    biggestCommunity: false,
    newlyListed: false,
  });

  const handleFilterClick = (filterName) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: !prevFilters[filterName],
    }));
  };

  return (
    <div className="grid grid-rows-2 grid-flow-col gap-2 p-4">
      <button
        className={`flex items-center justify-between rounded-full font-light text-sm ${filters.closest ? 'bg-[#A3FE35] text-black' : 'bg-white text-black'} p-2`}
        onClick={() => handleFilterClick('closest')}
      >
        <span className="mr-2">Closest</span>
        {filters.closest && <FiCheck className="rounded-full bg-[#222222] text-[#A3FE35]" size={16} />}
      </button>
      <button
        className={`flex items-center justify-between rounded-full font-light text-sm ${filters.cheapest ? 'bg-[#A3FE35] text-black' : 'bg-white text-black'} p-2`}
        onClick={() => handleFilterClick('cheapest')}
      >
        <span className="mr-2">Cheapest</span>
        {filters.cheapest && <FiCheck className="rounded-full bg-[#222222] text-[#A3FE35]" size={16} />}
      </button>
      <button
        className={`flex items-center justify-between rounded-full font-light text-sm ${filters.highestRated ? 'bg-[#A3FE35] text-black' : 'bg-white text-black'} p-2`}
        onClick={() => handleFilterClick('highestRated')}
      >
        <span className="mr-2">Highest Rated</span>
        {filters.highestRated && <FiCheck className="rounded-full bg-[#222222] text-[#A3FE35]" size={16} />}
      </button>
      <button
        className={`flex items-center justify-between rounded-full font-light text-sm ${filters.biggestCommunity ? 'bg-[#A3FE35] text-black' : 'bg-white text-black'} p-2`}
        onClick={() => handleFilterClick('biggestCommunity')}
      >
        <span className="mr-2">Biggest Community</span>
        {filters.biggestCommunity && <FiCheck className="rounded-full bg-[#222222] text-[#A3FE35]" size={16} />}
      </button>
      <button
        className={`flex items-center justify-between rounded-full font-light text-sm ${filters.newlyListed ? 'bg-[#A3FE35] text-black' : 'bg-white text-black'} p-2`}
        onClick={() => handleFilterClick('newlyListed')}
      >
        <span className="mr-2">Newly Listed</span>
        {filters.newlyListed && <FiCheck className="rounded-full bg-[#222222] text-[#A3FE35]" size={16} />}
      </button>
    </div>
  );
};

export default SearchFilters;
