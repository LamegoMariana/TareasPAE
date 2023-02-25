// Requerir la clase express
const express = require('express');
// Rutas
const rutas = require('./src/rutas');
// Path
const path = require('path');

// Pedir funciones
const app = express();  

// Puerto con el que se va a conectar
const port = 3000;

// Vinculación con views (end points)
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// Usar rutas
//app.use('', rutas);

// Lamego (menú principal)
app.get('/', (req, res) => {
    const url =__dirname + '/src/views/LAM3GO.html';
    res.sendFile(url);
});

app.get('/LAM3GO.html', (req, res) => {
    const url =__dirname + '/src/views/LAM3GO.html';
    res.sendFile(url);
});

// Extracurriculars
app.get('/Extracurriculars.html', (req, res) => {
    const url =__dirname + '/src/views/Extracurriculars.html';
    res.sendFile(url);
});

// Projects
app.get('/Projects.html', (req, res) => {
    const url =__dirname + '/src/views/Projects.html';
    res.sendFile(url);
});

// NotFound
app.get('*', function(req, res) {
    const url =__dirname + '/src/views/NotFound.html';
    res.sendFile(url);
});

// Va por las tortillas y avisa cuando ya llegó
app.listen(port, function() {
    console.log('La app está corriendo en el puerto: ' + port);
});
