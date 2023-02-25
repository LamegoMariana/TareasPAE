// Requerir la clase express
const express = require('express');

// Pedir funciones
const app = express();  

// Rutas
const lam3go = require('./src/rutas/lam3go.js');
const extracurriculars = require('./src/rutas/extracurriculars.js');
const projects = require('./src/rutas/projects.js');

// Puerto con el que se va a conectar
const port = 3000;

// Va por las tortillas y avisa cuando ya llegó
app.listen(port, function() {
    console.log('La app está corriendo en el puerto: ' + port);
});
