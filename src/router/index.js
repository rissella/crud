import {Router} from "express"
export const Route = Router();
import { productoController } from "../controllers/producto.controller";

//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});

Route.get('/producto',productoController.listar);
Route.post('/producto',productoController.guardar);
Route.put('/producto/:idProducto',productoController.modificar);
Route.delete('/producto/:idProducto',productoController.eliminar);
