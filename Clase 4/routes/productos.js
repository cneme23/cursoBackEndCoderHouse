const { Router  } = require('express');
const { productosGet, productosGetId, agregarProducto, actualizarProducto, eliminarProducto } = require('../controllers/productosController');
const router = Router();

router.get ('/',productosGet)
router.get ('/:id',productosGetId)
router.post ('/',agregarProducto)
router.put ('/:id',actualizarProducto)
router.delete ('/:id',eliminarProducto)

module.exports = router;