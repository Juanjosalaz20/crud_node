const Usuario = require('../models/Usuario');

//controlador
exports.obtenerUsuarios= async (req, res)=>{
    const usuarios = await Usuario.findAll()
    res.json(usuarios)
};

exports.obtenerUsuariosporId= async (req, res)=>{
    const id=parseInt(req.params.id);

    const usuario = await Usuario.findByPk(id)

    if (!usuario){
        return res.status(404).json({ mensaje: 'Usuario no encontrado'});
    }
    res.json(usuario)
};