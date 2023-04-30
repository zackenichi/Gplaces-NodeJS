import React, { useEffect, useState } from 'react';
import NothingSelected from './NothingSelected';
import PlaceDetails from './PlaceDetails';

const SearchResults = ({ placeId }) => {
  const [placeDetails, setPlaceDetails] = useState(null);

  useEffect(() => {
    async function fetchPlaceDetails() {
      if (placeId) {
        try {
          const response = await fetch(
            `http://localhost:5000/place/${placeId}`
          );
          const data = await response.json();
          setPlaceDetails(data);
        } catch (error) {
          console.error(error);
        }
      }
    }

    fetchPlaceDetails();
  }, [placeId]);

  return (
    <div>
      {placeDetails ? (
        <PlaceDetails placeDetails={placeDetails} />
      ) : (
        <NothingSelected />
      )}
    </div>
  );
};

export default SearchResults;
