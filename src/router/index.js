import {Router} from "express"
export const Route = Router();
import { productoController } from "../controllers/producto.controller";
import { categoriaController } from "../controllers/categoria.controller";

//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});

//crud producto
Route.get('/producto',productoController.listar);
Route.get('/producto/:idProducto/:otroid',productoController.listarProducto);

Route.post('/producto',productoController.guardar);
Route.put('/producto/:idProducto',productoController.modificar);
Route.delete('/producto/:idProducto',productoController.eliminar);

//crud categoria
Route.post('/categoria',categoriaController.crearCategoria)