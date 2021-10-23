const express = require('express');
const cors = require('cors');
class Server {
    constructor(){
        this.app = express();
        this.port = 8080;
        this.paths = {
            productos: '/api/productos'
        }
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( cors())
        this.app.use( express.json() );
        this.app.use(express.urlencoded({extended:true}))
        this.app.use( express.static('public'));
    }

     routes(){
        this.app.get('/',(req, res) =>{
            res.sendFile(__dirname + '/file/index.html')
        })
         this.app.use(  this.paths.productos, require('./routes/productos'))
    }


    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Server on port: ${this.port}`)
        })
    }
}

module.exports = Server;

