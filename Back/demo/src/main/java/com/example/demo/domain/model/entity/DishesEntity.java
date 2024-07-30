package com.example.demo.domain.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Table(name="Dishes")
@Entity(name="Dishes")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of= "dishId")
public class DishesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "dish_id")
    private Integer dishId;
    @Column(name="dish_name")
    private String dishName;
    @Column(name="kitchen_type")
    private String kitchenType;
    @Column(name="dish_amount")
    private Integer dishAmount;
}
