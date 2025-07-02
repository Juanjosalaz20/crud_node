const express=require('express'); //importar paquetes instalados con npm
const app=express(); //la variable guarda una instancia de un servidor de express

//ruta de prueba
//req: Request
//res: Response
//definicion 
app.get('/',(req,res)=>{
    res.send('Mensaje desde el backend')
})

const port=3000;

let usuarios=[
    {id:1, nombre:'Diana', email:'diana@email.com'},
    {id:2, nombre:'Lina', email:'lina@email.com'}
]


//ruta para obtener usuario de
app.get('/usuarios', (req,res)=>{
    res.json(usuarios)
})



app.listen(port,()=>{
    console.log(`Servidor activo en el puerto ${port}`)
})