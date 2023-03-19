# Tarea 5

## Descripción

Esta tarea consiste en el desarrollo de una API mediante Node + Express que permita al usuario administrar tareas a través de una base de datos en MongoDB.

Como administrador de tareas, el usuario tiene la capacidad de crear tareas, listar las tareas existentes, editar una tarea (modificar datos o su status), ver los detalles de una tarea o eliminar una tarea existente. 

Para ello, se realizaron los endpoints necesarios para que el usuario tenga la capacidad de realizar las acciones (get, post, put) correspondientes.

Las tareas son almacenadas en MongoDB, la cadena de conexión utilizada se compartió en los comentarios de la entrega y se especifica donde debe ser actualizada en la *pull request*. 

Cada tarea cuenta con las siguientes propiedades:

* Título
* Descripción
* Status
* Fecha de creación

Se documentó cada uno de los endpoints utilizados para dicho API mediante Swagger, se accede a través de localhost:3000/swagger (donde se muestra la UI de Swagger).

Se sigue la estructura de endpoints que se lista a continuación:

* GET /tareas
* GET /tareas/:id
* POST /tareas
* PUT /tareas/:id
* DELETE /tareas/:id

## Tecnologías

El proyecto utiliza Express y mongoose.

## Peticiones desde Postman

### Listar tareas

![Imagen de postman de listar tareas](https://user-images.githubusercontent.com/69441340/226148017-4420e1b1-719b-4ae3-800f-50971baf04cd.png)

### Ver una tarea

![Imagen de postman de ver una tarea](https://user-images.githubusercontent.com/69441340/226148452-f373b4eb-e3df-470b-8ada-8ff97c24b3b7.png)

### Actualizar una tarea

![Imagen de postman de actualizar una tarea](https://user-images.githubusercontent.com/69441340/226148489-0c9676b1-2150-461b-972b-88ae82b347ad.png)

### Crear una tarea

![Imagen de postman de crear una tarea](https://user-images.githubusercontent.com/69441340/226148554-61927b98-7697-4344-96b9-fb924c4d7a7f.png)

### Eliminar una tarea

![image](https://user-images.githubusercontent.com/69441340/226148587-d58701c1-2753-4fee-b46c-b4d573e3804b.png)
