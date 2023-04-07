// Estructura que tiene la colección en la base de datos.

const {Schema, model}= require('mongoose'); // Se requiere la librería necesaria.

const tareaSchema= new Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    status:{
        type: String, default: 'Nueva'
    },
    fechaCreacion: {
        type: Date, default: Date.now
    }
}); 

module.exports= model('tareas', tareaSchema); // Se exporta el modelo