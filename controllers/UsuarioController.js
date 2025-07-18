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

exports.crearUsuario = async (req,res)=>{

    //obtener los datos del json que llegaran por el body
    const {nombre,correo}=req.body;

    //insertar el nuevo usuario a la BBDD
    const nuevoUsuario ={
        nombre,
        correo
    };

    //entregar una respuesta al cliente
    const nuevo = await Usuario.create(nuevoUsuario);
        
    res.status(201).json({
        mensaje: 'Usuario creado con exito',
        usuario: nuevo
    });

}

