// Requerir express
const express = require('express');
// Requerir mongoose
const mongoose= require('mongoose');
// Requerir swagger
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConf = require('./swagger.config')
// Requerir rutas (api)
const api = require('./src/rutas');
// Iniciar la aplicación
const app = express();
// Requerir dotenv para leer las variables de entorno
require('dotenv').config();

// Habilitar el uso del body: 
app.use(express.json());
// Usar rutas
app.use('/api', api);
// Liga a base de datos
const MongoURL = process.env.MONGO_URL;

// Puerto definido (fallback)
const port = process.env.PORT || 3000;

// Swagger
const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Conexión con mongoose (base de datos)
mongoose.connect(MongoURL).then(() => {
    console.log('Conexión correcta con la BD c:');
    // Va por las tortillas y avisa cuando ya llegó
    app.listen(port, function() {
        console.log('La app está corriendo en el puerto: ' + port);
    });
}).catch(err => {
    console.log('No se pudo conectar a la BD :c', err);
});