package com.example.demo.controller;

import com.example.demo.domain.model.dto.GenericResponse;
import com.example.demo.domain.model.entity.DishesEntity;
import com.example.demo.domain.service.DishesService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/Dishes")
public class DishesController {
    DishesService dishesService;
    List<DishesEntity> dishesEntities;

    DishesController(){
        dishesService = new DishesService();
        dishesEntities = new ArrayList<>();

        DishesEntity dish1 = new DishesEntity();
        dish1.setDishId(1);
        dish1.setDishName("Paella");
        dish1.setKitchenType("Al horno");
        dish1.setDishAmount(10);

        DishesEntity dish2 = new DishesEntity();
        dish2.setDishId(2);
        dish2.setDishName("Sushi");
        dish2.setKitchenType("Al vapor");
        dish2.setDishAmount(20);

        DishesEntity dish3 = new DishesEntity();
        dish3.setDishId(3);
        dish3.setDishName("Pizza");
        dish3.setKitchenType("Al horno");
        dish3.setDishAmount(15);

        // Agregar platos a la lista
        dishesEntities.add(dish1);
        dishesEntities.add(dish2);
        dishesEntities.add(dish3);

    }

    @PostMapping("create")
    public ResponseEntity<GenericResponse> create(@RequestBody DishesEntity dish){
        try {
            dishesService.createDish(dishesEntities, dish);
            GenericResponse response = GenericResponse.create(
                    dish,
                    String.valueOf(HttpStatus.CREATED),
                    "Plato creado"
            );
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            GenericResponse response = GenericResponse.create(
                    e,
                    String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR),
                    e.getMessage()
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    @GetMapping("byList")
    public ResponseEntity<GenericResponse> byList(){
        try {
            GenericResponse response = GenericResponse.create(
                    dishesService.getDishes(dishesEntities),
                    String.valueOf(HttpStatus.OK),
                    "Lista de platos entregada"
            );
            return ResponseEntity.status(HttpStatus.OK).body(response);
        } catch (Exception e) {
            GenericResponse response = GenericResponse.create(
                    e,
                    String.valueOf(HttpStatus.INTERNAL_SERVER_ERROR),
                    e.getMessage()
            );
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
