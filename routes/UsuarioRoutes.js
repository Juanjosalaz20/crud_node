const express= require('express');
const router = express.Router();
const controlador = require('../controllers/UsuarioController');

router.get('/usuarios/todos', controlador.obtenerUsuarios);

module.exports=router;