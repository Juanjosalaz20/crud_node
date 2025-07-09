const express=require('express'); //importar paquetes instalados con npm
const app=express(); //la variable guarda una instancia de un servidor de express
require('dotenv').config();//cargamos .env
const sequelize=require('./config/database');

const port=process.env.PORT 


app.use(express.json())//esto permite pasar informacion por el body



sequelize.sync().then(()=>{
    app.listen(port,()=>{
    console.log(`Servidor activo en el puerto ${port}`)
    })

}).catch((error)=>{
    console.log(`Error al conectarse a la BBDD ${error}`)
})






//ruta de prueba
//req: Request
//res: Response
//definicion 
// app.get('/',(req,res)=>{
//     res.send('Mensaje desde el backend')
// })

// const port=3000;

// let usuarios=[
//     {id:1, nombre:'Diana', email:'diana@email.com'},
//     {id:2, nombre:'Lina', email:'lina@email.com'},
//     {id:3, nombre:'Andres', email:'andres@email.com'}
// ]


// //ruta para obtener todos los usuarios de la api
// app.get('/usuarios/todos', (req,res)=>{
//     res.json(usuarios)
// })

// //ruta para obtener un usuario especifico
// app.get('/usuarios/buscar/:id', (req,res)=>{
//     const id=parseInt(req.params.id);
//     //console.log(typeof(id))
//     const usuario=usuarios.find(user=>user.id===id)
//     //console.log(usuario)

//     if(!usuario){
//         return res.status(404).json({
//             mensaje:'Usuario no encontrado'
//         })
//     }

//     res.json(usuario)
// })

// //ruta para crear un nuevo usuario
// app.post('/usuarios/crear', (req,res)=>{
//     const {nombre,email}=req.body; //desestructuring
//     const nuevoUsuario={
//         id:usuarios.length+1,
//         nombre:nombre,
//         email: email,
//     }
//     usuarios.push(nuevoUsuario)
//     //console.log(nuevoUsuario)
//     res.status(201).json({
//         mensaje:'Usuario creado correctamente'
//     })
//     //console.log(nombre)
// })


// //ruta para modificar o actualizar un usuario
// app.put('/usuarios/modificar/:id',(req, res)=>{
//     const id = parseInt(req.params.id);
//     const {nuevoNombre}=req.body;
//     const usuario=usuarios.find(user=> user.id===id);
//     console.log(usuario.nombre)//verificar usuario
//     const nombreActual=usuario.nombre//Lina
//     usuario.nombre=nuevoNombre//Modificacion

//     res.status(214).json({
//         mensaje:`el usuario anterior era ${nombreActual}, el nuevo nombre es ${nuevoNombre}`,
//         datos:usuario
//     })

// })

// //ruta para eliminar usuario
// app.delete('/usuarios/eliminar/:id',(req,res)=>{

//     //obtener el id dek usuario por params de la url
//     const id=parseInt(req.params.id);

//     //buscar en la lista de usuarios el id que corresponda y recuperamos el indice
//     const indice = usuarios.findIndex(user=>user.id===id);
//     //console.log(indice)
//     //en caso de no encontrar el usuario a eliminar
//     if(indice===-1){
//         res.status(404).json({
//             mensaje: 'usuario no encontrado'
//         })
//     }

//     //dado que es una lista, elimminemos el usuario con el indice encontrado
//     usuarios.splice(indice,1)
//     res.status(201).json({
//         mensaje:`usuario ${indice+1} eliminado correctamente`
//     })


// })

