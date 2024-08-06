import React, { useState, useEffect } from 'react';
import { red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import { Container, Typography, Card, CardContent, Grid, CircularProgress, CardHeader } from '@mui/material';
import axios from 'axios';
import AddDishBanner from './AddDishBanner';
import Navbar from './Navbar';
import Footer from './Footer';

const DishList = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDishes = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:8080/Dishes/byList');
      if (Array.isArray(response.data.data)) {
        setDishes(response.data.data);
      } else {
        console.error('Dishes data is not an array');
      }
    } catch (error) {
      console.error('Error fetching dishes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDishAdded = () => {
    fetchDishes();
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <>
        <Navbar />
        <Container maxWidth="lg" sx={{ my: 4 }}>
            <AddDishBanner onDishAdded={handleDishAdded} />
            <Typography variant="h4" gutterBottom align="center">
                Lista de Platos
            </Typography>
            {loading ? (
            <CircularProgress />
            ) : (
            <Grid container spacing={3} justifyContent="center">
                {dishes.length > 0 ? (
                dishes.map(dish => (
                    <Grid item xs={12} sm={6} md={4} key={dish.dishId}>
                    <Card>
                        <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                {dish.dishName[0]}
                            </Avatar>
                        }
                        title={dish.dishName}/>
                        <CardContent>
                        <Typography color="textSecondary">Tipo de Cocina: {dish.kitchenType}</Typography>
                        <Typography color="textSecondary">Cantidad: {dish.dishAmount}</Typography>
                        </CardContent>
                    </Card>
                    </Grid>
                ))
                ) : (
                <Typography align="center">No hay platos disponibles</Typography>
                )}
            </Grid>
            )}
        </Container>
        <Footer />
    </>
    
  );
};

export default DishList;
