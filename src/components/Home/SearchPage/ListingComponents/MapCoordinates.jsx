import React from 'react';
import ListingMap from './ListingMap';

const MapCoordinates = () => {
 
  return (
    <div>
      <h1>{listing.title}</h1>
      <ListingMap center={listingLocation} destination={schoolLocation} />
    </div>
  );
};

export default MapCoordinates ;
