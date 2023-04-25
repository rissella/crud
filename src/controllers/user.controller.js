import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { DATE } from "sequelize";
import models from "./../models";
import { JWT_EXPIRATION,JWT_SECRET } from "../config/config";

class UserController{
    async createUser(req,res){
        try {
         
             let passwordCifrado= await bcrypt.hash(req.body.password,12);

             const usuario = await models.User.create({
                    name: req.body.name,
                    email: req.body.email ,
                    password:passwordCifrado,
                    status: req.body.status
               });
       
               return res.json({mensaje:"usuario creado"})          
           
           
       } catch (error) {
           res.status(500).json({
               status:500,
               mensaje:"El sistema no puede completar la registro del usuario",
               error:error
           })
       }
       

    }
    async login(req,res){
        try {
             
             let usuario= await models.User.findOne({
                where:{
                    name:req.body.name
                }
             });

            if(usuario){
                let passwordBD=usuario.password;
                let passwordUsuario=req.body.password;
   
                  let respuesta=await bcrypt.compare(passwordUsuario,passwordBD);
                  if(respuesta){ // si esta logeado
                        let payload={
                            name:usuario.name,
                            id:usuario.id,
                            time:new DATE()
                        };
                         let token = jwt.sign(payload,JWT_SECRET,{
                            expiresIn:JWT_EXPIRATION
                         })
                      return res.json({token:token})    

                  }else{
                      return res.json({mensaje:"constrasena incorrecto"})  
                  }
            }else{
                return res.json({mensaje:"nombre de usuario incorrecto"})  
            }

                 
            
        } catch (error) {
            res.status(500).json({
                status:500,
                mensaje:"El sistema no puede iniciar session",
                error:error
            })
        }
    }

}
export const userController = new UserController;