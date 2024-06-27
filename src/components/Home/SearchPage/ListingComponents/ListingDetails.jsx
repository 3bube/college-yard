import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ListingDetailsLayout from './Layout/ListingDetailsLayout';
import ListingDetailsCard from './ListingDetailsCard';
import AmenityLogos from './AmenityLogos';
import RoomTypesCard from './RoomTypesCard';
import FacilitiesCard from './FacilitiesCard';
import AmenitiesCard from './AmenitiesCard';
import SeeReviewsCard from './SeeReviewsCard';
import ContactManagerCard from './ContactManagerCard';

const ListingDetails = () => {
  const location = useLocation();
  const { title, price, location: listingLocation, distance, amenities, imageUrl, rating } = location.state || {};


  if (!location.state) {
    return <div>Listing details not found</div>;
  }

  return (
    <ListingDetailsLayout>
      <ListingDetailsCard
        imageUrl={imageUrl}
        title={title}
        listingLocation={listingLocation}
        price={price}
        distance={distance}
        rating={rating}
      />
      <AmenityLogos amenities={amenities} />
      <RoomTypesCard />
      <FacilitiesCard />
      <AmenitiesCard />
      <SeeReviewsCard />
      <ContactManagerCard /> 
    </ListingDetailsLayout>
  );
};

export default ListingDetails;
