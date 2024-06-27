import React, { useState, useEffect } from 'react';
import { useJsApiLoader, GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import ListingDetailsLayout from './Layout/ListingDetailsLayout';
import { Skeleton } from '@chakra-ui/react';
import { useLocation } from "react-router-dom";
import { FaBusAlt } from 'react-icons/fa';
import { LuMapPin } from "react-icons/lu";
import { BsStopwatch } from "react-icons/bs";

const mapStyles = [
  {
    elementType: 'geometry',
    stylers: [{ color: '#212121' }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#A3FE35' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#212121' }],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#A3FE35' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#181818' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#1b1b1b' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [{ color: '#2c2c2c' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#8a8a8a' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [{ color: '#373737' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#3c3c3c' }],
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [{ color: '#4e4e4e' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#000000' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3d3d3d' }],
  },
];

const mapOptions = {
  zoomControl: false, 
  scrollwheel: false, 
  disableDoubleClickZoom: true, 
  draggableCursor: 'default', 
  fullscreenControl: false, 
  streetViewControl: false, 
  mapTypeControl: false, 
  scaleControl: false, 
  clickableIcons: false, 
  styles: mapStyles,
};


const ListingMap = () => {
  const location = useLocation();
  const { state } = location;
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyCbaWuoUFFG74e63HulZMcQPkyEuAqN-Ww', // Replace with your actual API key
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 9.0063244, lng: 7.4046693 }); // Default center

  useEffect(() => {
    if (isLoaded && state) {
      const { listingLocation } = state;
      if (listingLocation) {
        setMapCenter(listingLocation);
      }
    }
  }, [isLoaded, state]);

  useEffect(() => {
    if (isLoaded && directionsResponse === null && mapCenter) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: mapCenter,
          destination: { lat: 9.0063244, lng: 7.4046693 }, 
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            setDirectionsResponse(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  }, [isLoaded, directionsResponse, mapCenter]);

  if (!isLoaded) {
    return <Skeleton />;
  }

  return (
    <ListingDetailsLayout >
    <div className="mt-6 flex flex-col gap-4">
      <div>
      <GoogleMap
        center={mapCenter}
        zoom={16}
        options={mapOptions}
        mapContainerStyle={{ width: '100%', height: '600px', borderRadius: '1rem' }}
      >
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                strokeColor: '#FFFFFF', // White color for the route line
                strokeOpacity: 0.8,
                strokeWeight: 6,
              },
            }}
          />
        )}
      </GoogleMap>
      </div>
    <div className="flex justify-center items-center gap-2 my-4 text-[#A3FE35]"><FaBusAlt className="bg-[#A3FE35] text-black h-10 w-10 p-1 rounded-full" /> Bus Schedule(Monday - Friday)</div>
    <div className="bg-[#262626] text-[#A3FE35] flex items-center justify-between p-7 rounded-lg shadow-md">
  <div className="flex items-center">
    <LuMapPin className="text-3xl mr-2" /> {/* Assuming LuMapPin is an icon component */}
    <span className="font-normal w-[86px]">Lakeside Apartments</span>
  </div>
  <div className="flex items-center ">
    <BsStopwatch className="text-3xl mr-2" /> {/* Assuming BsStopwatch is an icon component */}
    <span className="font-normal w-[86px]">Departure Time</span>
  </div>
</div>

    </div>
    </ListingDetailsLayout>
  );
};

export default ListingMap;
