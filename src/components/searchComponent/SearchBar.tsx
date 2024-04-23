import React, { ChangeEvent, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    // Check if the input contains only numbers
    setError(!/^\d+$/.test(value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Type PokeID Here"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        error={error}
        helperText={error ? 'Please enter only numbers' : ''}
      />
      <Button 
      size="small"
      onClick={() => {
        alert('clicked')
      }}
      variant="contained">
        Search
        </Button>
    </Box>
  );
};
