import { where } from "sequelize";
import categoria from "../models/categoria";
import models from "./../models";

class ProductoController{
    async listar(req,res){ 
        try {
          //console.log(111111);

            const productos = await models.Producto.findAll();
            return res.status(200).json(productos);   

        } catch (error) {
            return res.status(500).json(error);            
        }
      
    } 
    async listarProductoCategoria(req,res){ 
        try {
            
           /* 
           sequelize
           const productos = await models.categoria.findAll({ 
                attributes: ['nombre'],          
             include: {
                    model: models.producto,
                    attributes:{exclude:['createdAt','updatedAt']} ,                     
                   right: true                 
                  }   

            });*/
   ///sql
            const  [productos, metadata] = await models.sequelize.query("select c.nombre,p.* from categoria as c, producto as p where c.id_categoria=p.id_categoria ")
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
    