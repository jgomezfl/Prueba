import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 3, mt: 'auto' }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 Restaurante. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
