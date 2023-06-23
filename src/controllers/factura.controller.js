import models from "./../models";

class FacturaController{
    async guardar(req,res){ 
        try {
           //consulto si cliente existe
            const cliente = await models.cliente.findOne({
                where: {
                         cedula_cliente:req.body.cedula_cliente
                }
            });
           
             if(cliente){
                
                const factura = await models.factura.create({
                    fecha_factura: req.body.fecha_factura,
                    cedula_cliente: req.body.cedula_cliente,
                });
               
                return res.json({mensaje:"factura registrada"})
            }
            else{
                res.status(424).json({
                    status:424,
                    mensaje:"Cliente no registrado",
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
    async listarFacturaCliente(req,res){ 
        try {
            
           
          // sequelize
           /*const factura = await models.cliente.findAll({          
             include: {
                    model: models.factura,
                    attributes:{exclude:['createdAt','updatedAt']} , 
                    where:{num_factura:req.params.idFactura}   ,                 
                   right: true                 
                  }   

            });*/

            const factura = await models.factura.findAll({     
                attributes:{exclude:['createdAt','updatedAt']} , 
                       where:{num_factura:req.params.idFactura}   ,       
                include: {
                       model: models.cliente,
                       attributes:{exclude:['createdAt','updatedAt']} ,                
                      right: true                 
                     }   
   
               });
   ///sql
          //  const  [productos, metadata] = await models.sequelize.query("select c.nombre,p.* from categoria as c, producto as p where c.id_categoria=p.id_categoria ")
            return res.json(factura) ;           
        } catch (error) {
            return res.json(error);
            
        }
      
    } 
}

   
export const facturaController = new FacturaController;
    