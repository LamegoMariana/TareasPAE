// Librería path para concatenar directorios
const path = require('path');
// Requerir router de express
const router = require('express').Router();

//const rutasResultados = require('./resultados');

// El primer parámetro que recibe es el parámetro de petición y el segundo es el de respuesta
function cargarBuscador(req,res) {
    console.log('El API funciona');
    res.render('buscador');

}

function verNoticia (req,res) {
    const keyWord = req.params.keyWord;
    res.render('resultados', {keyWord : 'rip'})
}

// El middleware se usará en todas, así que se pone aquí v:
const auth = require('../middlewares').auth;

router.use('', auth);

router.get('/', auth, cargarBuscador);

router.get('/resultados', verNoticia);

module.exports = router;