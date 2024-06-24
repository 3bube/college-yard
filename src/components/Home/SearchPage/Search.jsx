// src/components/Search.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import ListingCard from './ListingComponents/ListingCard';

const allListings = [
  {
    title: "Wrace-Hall Maitama Ext.",
    price: "1.5M",
    location: "Maitama Avenue, Abuja, FCT",
    distance: "35 Minutes",
    amenities: ["1-4 Person", "WiFi", "Food", "Bus"],
    imageUrl: '/pexels-expect-best-323780 2.png',
    rating: 4.5
  },

];

const Search = () => {
  const [isFiltersActive, setIsFiltersActive] = useState(false);
  const [listings, setListings] = useState(allListings);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleSearch = (query) => {
    const filteredListings = allListings.filter((listing) =>
      listing.title.toLowerCase().includes(query.toLowerCase()) ||
      listing.location.toLowerCase().includes(query.toLowerCase())
    );
    setListings(filteredListings);
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
    setIsFiltersActive(!isFiltersActive);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className='flex items-center justify-center mb-3'><SearchBar onSearch={handleSearch} onToggleFilters={toggleFilters} /></div>
      {filtersVisible && <SearchFilters />}
      <div className="p-4">
        {listings.map((listing, index) => (
          <ListingCard key={index} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Search;
