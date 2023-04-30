const express = require('express');
const axios = require('axios');
const qs = require('qs');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const port = process.env.PORT;

const apiKey = process.env.GPLACE_API_KEY;
const endpoint = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

app.use(cors());

// Routes
app.get('/places/search', async (req, res) => {
  const { input } = req.query;

  const params = {
    input,
    key: apiKey,
  };
  const queryString = qs.stringify(params);
  const url = `${endpoint}?${queryString}`;

  try {
    const response = await axios.get(url);

    // console.log(response);

    const predictions = response.data.predictions;

    res.send(predictions);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching autocomplete predictions');
  }
});

app.get('/place/:placeId', async (req, res) => {
  try {
    const response = await axios.get(
      'https://maps.googleapis.com/maps/api/place/details/json',
      {
        params: {
          place_id: req.params.placeId,
          fields:
            'name,formatted_address,geometry,types,photos,opening_hours,rating,website,formatted_phone_number',
          // add any other fields you want to retrieve
          key: apiKey,
        },
      }
    );
    const placeData = response.data.result;
    res.send(placeData);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving place data');
  }
});

// End of routes

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
