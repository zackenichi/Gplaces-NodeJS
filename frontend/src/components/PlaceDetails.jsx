import React, { useState } from 'react';
import { Box, Typography, Grid, Pagination, Link, Rating } from '@mui/material';

const PlaceDetails = ({ placeDetails }) => {
  const {
    name,
    formatted_address,
    formatted_phone_number,
    website,
    rating,
    photos,
  } = placeDetails;

  const [page, setPage] = useState(1);
  const photosPerPage = 6;
  const totalPhotos = photos ? photos.length : 0;
  const totalPages = Math.ceil(totalPhotos / photosPerPage);
  const startIndex = (page - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Typography variant="h5">{name}</Typography>
      <Typography variant="body1">{formatted_address}</Typography>
      <Typography variant="body1">{formatted_phone_number}</Typography>
      <Typography variant="body1">
        {website && (
          <Link href={website} target="_blank" rel="noopener">
            {website}
          </Link>
        )}
      </Typography>
      <Rating
        value={rating}
        precision={0.5}
        readOnly
        sx={{ mt: 1, borderColor: 'yellow.500', borderWidth: 2 }}
      />
      <Grid container spacing={2}>
        {photos &&
          photos.slice(startIndex, endIndex).map((photo, index) => (
            <Grid item xs={12} sm={6} md={4} key={photo.photo_reference}>
              <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
                alt={`placePhoto-${index}`}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            </Grid>
          ))}
      </Grid>
      {totalPhotos > photosPerPage && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Box>
      )}
    </Box>
  );
};

export default PlaceDetails;
