import { where } from "sequelize";
import models from "./../models";

class ProductoController{
    async listar(req,res){ 
        try {
            const productos = await models.Producto.findAll();
            return res.json(productos) ;           
        } catch (error) {
            return res.json(error);
            
        }
      
    } 
    async guardar(req,res){ 
        try {
             if(req.body.nombre!=''){
                const producto = await models.Producto.create({
                    nombre: req.body.nombre,
                    descripcion: req.body.descripcion,
                    codigobarra: req.body.codigobarra,
                    marca: req.body.marca,
                    precio: req.body.precio
                });
        
                return res.json({mensaje:"guardar producto"})
            }
            else{
                res.status(424).json({
                    status:424,
                    mensaje:"debe ingresar un nombre",
                    error:true
                })
            }
            
        } catch (error) {
            res.status(500).json({
                status:500,
                mensaje:"El sistema no puede completar la actualización",
                error:error
            })
        }
        


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
    async listarProducto(req,res){
       
        const producto = await models.Producto.findOne(
            {
                where:{
                    id:req.params.idProducto
                }
            }
        );

        return res.json(producto)
    }
}
   
export const productoController = new ProductoController;
    