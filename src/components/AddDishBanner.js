import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import axios from 'axios';

const AddDishBanner = ({ onDishAdded }) => {
  const [dishId, setDishId] = useState('');
  const [dishName, setDishName] = useState('');
  const [kitchenType, setKitchenType] = useState('');
  const [dishAmount, setDishAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAddDish = async () => {
    if (!dishId || !dishName || !kitchenType || !dishAmount) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    setLoading(true);
    try {
      await axios.post('http://localhost:8080/Dishes/create', {
        dishId,
        dishName,
        kitchenType,
        dishAmount
      });
      setDishId('');
      setDishName('');
      setKitchenType('');
      setDishAmount('');
      onDishAdded(); // Llama a la función para actualizar la lista de platos
    } catch (error) {
      console.error('Error al agregar el plato:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Agregar Nuevo Plato
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <TextField
                label="ID del Plato"
                type="number"
                value={dishId}
                onChange={(e) => setDishId(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Nombre del Plato"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Tipo de Cocina"
                value={kitchenType}
                onChange={(e) => setKitchenType(e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Cantidad"
                type="number"
                value={dishAmount}
                onChange={(e) => setDishAmount(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            onClick={handleAddDish}
            variant="contained"
            color="primary"
            disabled={loading}
            style={{ marginTop: '16px' }}
          >
            {loading ? 'Añadiendo...' : 'Añadir Plato'}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AddDishBanner;
