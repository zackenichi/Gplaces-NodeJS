import { Grid, Typography } from '@mui/material';
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <Grid
      container
      spacing={2}
      alignContent="center"
      justifyContent="center"
      className="footer"
    >
      <Grid item xs={12}>
        <Typography textAlign="center">
          Made by <a href="https://github.com/zackenichi">ZacKenichi</a>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
