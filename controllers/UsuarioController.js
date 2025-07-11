const Usuario = require('../models/Usuario');

//controlador
exports.obtenerUsuarios= async (req, res)=>{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
};