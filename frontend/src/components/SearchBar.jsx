import React, { useState, useCallback } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const SEARCH_ENDPOINT = 'http://localhost:5000/places/search';
// const PLACE_ENDPOINT = 'http://localhost:5000/place/';

const DEBOUNCE_TIME = 3000;

function SearchBar({ setPlaceId }) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);

  const handleInputChange = useCallback((value) => {
    const debounced = setTimeout(async () => {
      if (!value) {
        setOptions([]);
        return;
      }

      try {
        const response = await fetch(`${SEARCH_ENDPOINT}?input=${value}`);
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error(error);
        setOptions([]);
      }
    }, DEBOUNCE_TIME);

    return () => {
      clearTimeout(debounced);
    };
  }, []);

  const handleInputValueChange = (event, value) => {
    setInputValue(value);
    handleInputChange(value);
  };

  const handleOptionChange = async (event, value) => {
    if (value) {
      setPlaceId(value.place_id);
    } else {
      setPlaceId(null);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.description}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
      inputValue={inputValue}
      onInputChange={handleInputValueChange}
      onChange={handleOptionChange}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
}

export default SearchBar;
