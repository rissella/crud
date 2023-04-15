import models from "./../models";
class CategoriaController{
    async crearCategoria(req,res){
        const categoria = await models.Categoria.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
          });

        return res.json({mensaje:"guardar producto"})

    }
}
export const categoriaController = new CategoriaController;