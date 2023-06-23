import {Router} from "express"
export const Route = Router();
import { productoController } from "../controllers/producto.controller";
import { categoriaController } from "../controllers/categoria.controller";
import { userController } from "../controllers/user.controller";
import { facturaController } from "../controllers/factura.controller";
import { auth } from "../middlewares/auth.middleware";
//import * as reporteController from "../controllers/reporte.controller";
import * as facturaReporteController from "../controllers/facturaReporte.controller";

//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});
// end point para reporte factura
Route.get('/reporteFactura',facturaReporteController.generarPDFFactura)
//crud producto
Route.get('/producto', productoController.listar);
Route.get('/producto/:idProducto/:otroid',auth,productoController.listarProducto);

Route.get('/productoCategoria',productoController.listarProductoCategoria);

//Route.get('/productoReporte',reporteController.generarPDFReporteProducto);

Route.post('/producto',auth,productoController.guardar);
Route.put('/producto/:idProducto',auth,productoController.modificar);
Route.delete('/producto/:idProducto',auth,productoController.eliminar);

//crud categoria
Route.post('/categoria',auth,categoriaController.crearCategoria);

//CRUD usuario tarea completar
Route.post('/usuario',userController.createUser);
Route.get('/login',userController.login);

//factura
Route.post('/factura',facturaController.guardar);
Route.get('/factura/:idFactura',facturaController.listarFacturaCliente);
