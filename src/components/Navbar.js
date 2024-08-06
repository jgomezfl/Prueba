import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6">
            Restaurante
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
