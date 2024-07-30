# DishesController

**Dependencias.**
*DishesService:* Servicio para manejar la lógica de negocio relacionada con los platos.
*GenericResponse:* DTO para la respuesta estándar de las solicitudes.
*DishesEntity:* Entidad que representa un plato.

**Métodos**
*create*
Ruta: /Dishes/create
Método HTTP: POST
Descripción: Crea un nuevo plato y lo agrega a la lista.
Parámetro de entrada: DishesEntity (plato a crear).
Respuesta:

    Éxito: 201 Created con un GenericResponse que contiene el plato creado.
    Error: 500 Internal Server Error con un GenericResponse que contiene el mensaje de error.

*byList*
Ruta: /Dishes/byList
Método HTTP: GET
Descripción: Obtiene la lista de platos.
Respuesta:

    Éxito: 200 OK con un GenericResponse que contiene la lista de platos.
    Error: 500 Internal Server Error con un GenericResponse que contiene el mensaje de error.

**Ejemplo de uso**
*create*
```http
POST /Dishes/create
Content-Type: application/json

{
  "dishId": 4,
  "dishName": "Tacos",
  "kitchenType": "Asado",
  "dishAmount": 25
}
