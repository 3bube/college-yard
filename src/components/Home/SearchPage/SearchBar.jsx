// src/components/SearchBar.js
import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchBar = ({ onSearch, onToggleFilters, isFiltersActive }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <div className="flex items-center bg-black rounded outline w-9/12">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          className="w-full pl-12 pr-4 py-2 rounded bg-black text-white outline-none"
        />
        <FiSearch
          className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white cursor-pointer"
          size={24}
          onClick={handleSearchClick}
        />
      </div>
      <button
        className="ml-2 p-2 rounded-full bg-black"
        onClick={onToggleFilters}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.3333 0H6.66667C2.984 0 0 2.98533 0 6.66667V25.3333C0 29.0147 2.984 32 6.66667 32H25.3333C29.016 32 32 29.0147 32 25.3333V6.66667C32 2.98533 29.016 0 25.3333 0ZM20 5.33333H22.6667V9.33333H20V5.33333ZM9.33333 5.33333H12V16H9.33333V5.33333ZM14.6667 22.6667H12V26.6667H9.33333V22.6667H6.66667V18.6667H14.6667V22.6667ZM25.3333 16H22.6667V26.6667H20V16H17.3333V12H25.3333V16Z"
            fill={isFiltersActive ? '#A3FE35' : '#FFFF'}
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
