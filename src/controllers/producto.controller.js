import { where } from "sequelize";
import models from "./../models";

class ProductoController{
    async listar(req,res){ 
        const productos = await models.Producto.findAll();

        return res.json(productos)
    } 
    async guardar(req,res){ 
        req.body.nombre
        const producto = await models.Producto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigobarra: req.body.codigobarra,
            marca: req.body.marca,
            precio: req.body.precio
          });

        return res.json({mensaje:"guardar producto"})

    } 
    async modificar(req,res){ 
        const producto = await models.Producto.update(
                         {  nombre: req.body.nombre,
                            descripcion: req.body.descripcion,
                            codigobarra: req.body.codigobarra,
                            marca: req.body.marca,
                            precio: req.body.precio
                         },
                         {
                            where:{
                                id:req.params.idProducto
                             }
                         })
        return res.json(producto)
    } 
    async eliminar(req,res){ 
        const producto=await models.Producto.destroy({
            where:{
                id:req.params.idProducto
             }
        })
        return res.json({mensaje:"eliminar producto"})
    }

}
   
export const productoController = new ProductoController;
    