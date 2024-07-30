package com.example.demo.domain.service;

import com.example.demo.domain.model.entity.DishesEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class DishesService {

    public List<DishesEntity> getDishes(List<DishesEntity> dishesEntities){
        return dishesEntities;
    }

    public List<DishesEntity> createDish(List<DishesEntity> dishesEntities, DishesEntity dish){
        dishesEntities.add(dish);
        return dishesEntities;
    }
}
