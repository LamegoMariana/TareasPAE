// A partir de este archivo se da acceso a las rutas específicas para cada acción.
const router = require('express').Router(); // Requerir router de express
const rutasTareas = require('./tareas'); // Requerir archivo de tareas en el que se expresan las rutas concretas

router.use('/tareas', rutasTareas); // Usar rutas

module.exports = router; // Mediante el router de express.