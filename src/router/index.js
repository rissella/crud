import {Router} from "express"
export const Route = Router();
import { productoController } from "../controllers/producto.controller";
import { categoriaController } from "../controllers/categoria.controller";
import { userController } from "../controllers/user.controller";
import { auth } from "../middlewares/auth.middleware";
//endpoint
Route.get('/inicio',function(req, res){
    res.json({
    mensaje:"hola curso backend",
    error:false
    })
});

//crud producto
Route.get('/producto',auth, productoController.listar);
Route.get('/producto/:idProducto/:otroid',auth,productoController.listarProducto);

Route.post('/producto',auth,productoController.guardar);
Route.put('/producto/:idProducto',auth,productoController.modificar);
Route.delete('/producto/:idProducto',auth,productoController.eliminar);

//crud categoria
Route.post('/categoria',auth,categoriaController.crearCategoria)
//CRUD usuario
Route.post('/usuario',auth,userController.createUser);
Route.get('/login',userController.login);