import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import SearchFilters from './SearchFilters';
import ListingCard from './ListingComponents/ListingCard';
import { allListings } from './ListingComponents/DummyData';


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
      <div className="p-4 flex flex-col space-y-4">
        {listings.map((listing, id) => (
          <ListingCard key={id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default Search;
