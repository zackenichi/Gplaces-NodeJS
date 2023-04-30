import React, { useState } from 'react';
import { Container, Box, Grid } from '@mui/material';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';

const App = () => {
  const [placeId, setPlaceId] = useState('');

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Container maxWidth="sm" style={{ paddingBottom: '6rem' }}>
        <Box
          sx={{
            flexGrow: 1,
            alignItems: 'center',
            flexDirection: 'column',
            padding: 4,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SearchBar setPlaceId={setPlaceId} />
            </Grid>
            <Grid item xs={12}>
              <SearchResults placeId={placeId} />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
