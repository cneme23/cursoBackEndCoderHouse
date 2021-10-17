//Aca estamos requiriendo el modulpo de express proveniente del paquete de Node.js
const express = require("express");
//Aca estamos guardando la ejecucion del metodo express
const app = express();

const Contenedor = require('/contenedor')


const PORT= 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.adress().port} `)
})

server.on("error",error => console.log(`Error en el servidor ${error}`));

app.get("/", (req,res)=> {
    res.send("Hola mundo")
});

app.get("/productos", async function (req, res, next) {
    const producto = new Contenedor('productos.txt');
    let resultado = await producto.getAll();
    res.send(resultado);
});


app.get("/productosRandom", async function (req, res, next) {
    const producto = new Contenedor('productos.txt');
    let resultado = await producto.getRandomId();
    res.send(resultado);
});