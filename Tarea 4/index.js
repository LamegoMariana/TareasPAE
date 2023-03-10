// Requerir la clase express
const express = require('express');
// Requerir handlebars
const { engine } = require('express-handlebars');
// Path
const path = require('path');
// Rutas
const rutas = require('./src/rutas');
// Pedir funciones
const app = express();
// Para leer archivo .env
const dotenv = require("dotenv");
dotenv.config();

// Llamar a handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
// Puerto con el que se va a conectar
const port = 3000; // Cuando se despliegue en Heroku o similar dará la variable, hay que poner: process.env.PORT || 3000

// Vinculación con views (end points)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Se hace a través del router
app.use('', rutas);

// Va por las tortillas y avisa cuando ya llegó
app.listen(port, function() {
    console.log('La app está corriendo en el puerto: ' + port);
});
