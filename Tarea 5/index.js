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

// Habilitar el uso del body: app.use(express.json());

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
mongoose.connect(MongoURL, (err ) => {
    if(!err){
        console.log('Se conectó a la BD');
        app.listen(port, () => {
            console.log('app is running in port ' + port)
        });
    } else {
            console.log('Fallo en la conexión', err);
        }
    
});