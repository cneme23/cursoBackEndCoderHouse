let productos = require ('../productos/productos')

//obtener los productos
const productosGet = (req,res) => {
    res.status(200).json({
        productos
    })
}

//obtener producto por id
const productosGetId = (req,res) => {
    const { id } = req.params;
    try {
        const producto = productos.find(p => p.id ===parseInt(id));
        if(!producto) throw new Error
        
        res.status(200).json({
            producto
        })
    } catch (error) {
        res.status(400).json({error: 'producto no encontrado'});
    }
}

//agregaar producto
const agregarProducto =(req,res) => {
    const producto = {
        id:productos.length + 1,
        title: req.body.title,
        price: req.body.price,
        thumbnail:req.body.thumbnail
    } 
    productos.push(producto);
    res.status(200).send({
        agregado: producto,
        total: productos
    })
}

const actualizarProducto = (req,res) => {
    const {id} = req.params;
    const posicion = req.params.id-1
    const productoActualizado = {
        title: req.body.title,
        price: req.body.price,
        thumbnail:req.body.thumbnail
    } 
    try {
        let producto = productos.find(p => p.id ===parseInt(id));
        if(!producto) throw new Error
        productos[posicion] = productoActualizado
        res.status(200).json({
            producto,
            actualizacion: productoActualizado,
            ArrayProductos:productos
        })
    } catch (error) {
        res.status(400).json({error: 'producto no encontrado'});
    }
}

const eliminarProducto= (req,res)=> {
    const {id} = req.params;
    const posicion = req.params.id-1
    try {
        let producto = productos.find(p => p.id ===parseInt(id));
        if(!producto) throw new Error
        
        productos.splice(posicion,1)
    
        res.status(200).json({
            Eliminado: producto,
            productos
        })
        
    } catch (error) {
        res.status(400).json({error: 'producto no encontrado'});
    }
}

module.exports = { productosGet, productosGetId, agregarProducto, actualizarProducto, eliminarProducto }