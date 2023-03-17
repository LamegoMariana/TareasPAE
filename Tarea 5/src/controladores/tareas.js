// Operaciones CRUD para tareas.

const modelo = require('./../modelos/tareas'); // Requerir modelo

// Objeto
const controlador = {
    // Listar todas las tareas
    listarTodas: (req, res) => {
        modelo.find({}).then(response => {
            console.log('Respuesta: ', response);
            res.send(response);
        }).catch(err => {
            console.log('Algo salió mal ', err);
            res.status(400).send('No se encontraron resultados');
        });
    },
    // Ver detalle de una tarea por su identificador
    verUna: (req, res) => {
        const id = req.params.id;
        modelo.findOne({_id: id}).then(response => {
            if(response){
                res.send(response);
            } else {
                res.status(404).send('No se encontró');
            }
        }).catch(err => {
            res.status(400).send('El ID no es correcto');
        });
    },
    // Crear/insertar una tarea
    crear: (req, res) => {
        const datos = req.body;
        modelo.create(datos).then(response => {
            console.log('Se creó la tarea correctamente');
            res.send(response);
        }).catch(err => {
            res.status(400).send('No se pudo crear la tarea')
        });
    },
    // Actualizar/editar una tarea por su identificador
    actualizar: (req, res) => {
        const id = req.params.id;
       modelo.findOne({_id: id}).then(response => {
        response.nombreBeneficiario = req.body.nombreBeneficiario;
        response.solicitudRelacionada = req.body.solicitudRelacionada;
        response.save();
        res.send(response);
       }).catch(err => {
        res.status(404).send('No se pudo actualizar');
       });
    },
    // Eliminar/borrar (lógico) una tarea
    eliminar: (req, res) => {
        const id = req.params.id;
        modelo.findOne({_id: id}).then(response => {
            response.status = 2;
            response.save();
            res.send('Eliminado con éxito');
        }).catch(err =>{
            res.status(400).send('No se pudo eliminar')
        });
    }
}

module.exports = controlador; // Exportar
