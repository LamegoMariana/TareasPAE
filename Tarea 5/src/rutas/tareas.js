// Requerir router de express
const router = require('express').Router();

// Requerir controlador
const controladorTareas = require('./../controladores/tareas');

/* Acciones/funciones que se ejecutarán cuando se llegué al endpoint actual */

// Listado completo
/**
 * @swagger
 * /tareas:
 *  get:
 *   description: Para ver la lista completa de tareas.
 *   responses:
 *     200:
 *       description: Lista de tareas del usuario (todo bien)
 *     400:
 *       description: No se encontraron las tareas (todo mal)
 */
router.get('/', controladorTareas.listarTodas);

// Listado específico
/**
 * @swagger
 * /tareas:id:
 *  get:
 *   description: Para ver una tarea en específico.
 *   parameters:
 *     - in: params
 *       name: id
 *       description: ID de la tarea.
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Tareas del usuario (todo bien)
 *     400:
 *       description: No se encontró la tarea (todo mal)
 */
router.get('/:id', controladorTareas.verUna);

// Insertar/crear
/**
 * @swagger
 * /crear:
 *  post:
 *   description: Para crear una tarea.
 *   parameters:
 *     - in: body
 *       name: titulo
 *       description: Título de la tarea
 *       schema:
 *         type: string
 *     - in: body
 *       name: descripcion
 *       description: Explicación de en que consiste la tarea
 *       schema:
 *         type: string
 *     - in: body
 *       name: status
 *       description: Estado de la tarea (Nuevo, En progreso, Terminada)
 *       schema:
 *         type: string
 *     - in: body
 *       name: fechaCreacion
 *       description: Fecha en que se creó de la tarea
 *       schema:
 *         type: date
 *   responses:
 *     200:
 *       description: Se crea la tarea (todo bien)
 *     400:
 *       description: No se crea la tarea (todo mal)
 */
router.post('/crear', controladorTareas.crear);

// Editar/Actualizar
/**
 * @swagger
 * /actualizar:
 *  put:
 *   description: Para actualizar una tarea.
 *   parameters:
 *     - in: body
 *       name: titulo
 *       description: Título de la tarea
 *       schema:
 *         type: string
 *     - in: body
 *       name: descripcion
 *       description: Explicación de en que consiste la tarea
 *       schema:
 *         type: string
 *     - in: body
 *       name: status
 *       description: Estado de la tarea (Nueva, En progreso, Terminada)
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Se actualiza la tarea (todo bien)
 *     400:
 *       description: No se actualiza la tarea (todo mal)
 */
router.put('/actualizar/:id', controladorTareas.actualizar);

// Eliminar
/**
 * @swagger
 * /eliminar:
 *  delete:
 *   description: Para borrar una tarea.
 *   parameters:
 *     - in: params
 *       name: id
 *       description: ID de la tarea
 *       schema:
 *         type: string
 *   responses:
 *     200:
 *       description: Se borra la tarea (todo bien)
 *     400:
 *       description: No se borra la tarea (todo mal)
 */
router.delete('/borrar/:id', controladorTareas.eliminar);

// Exportar
module.exports = router;

