# README - Diagrama de Base de Datos
![Diagrama de la base de datos](diagrama.png)

### Conusltas

1. **Consulta para obtener platos de un chef específico:**
   ```sql
   select Dishes.dish_name, Dishes.dish_amount 
   from Dishes 
   join Dishes_Chefs on Dishes.dish_id = Dishes_Chefs.dish_id 
   join Chefs on Dishes_Chefs.chef_id = Chefs.chef_id 
   where Chefs.chef_name = 'Nombre del chef';


2. **Consulta obtimizada:**
   ```sql
    create view chef_dishes as 
    select Dishes.dish_name, Dishes.dish_amount, Chefs.chef_name 
    from Dishes 
    join Dishes_Chefs on Dishes.dish_id = Dishes_Chefs.dish_id 
    join Chefs on Dishes_Chefs.chef_id = Chefs.chef_id;
    
    select * from chef_dishes 
    where chef_name = 'Nombre del chef';