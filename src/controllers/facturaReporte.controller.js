import PDFDocument from "pdfkit";
import { DATE } from "sequelize";
import models from "../models";
import factura from "../models/factura";

export  const generarPDFFactura = async function (req,res) {
    
      const doc =new PDFDocument({bufferPages:true,
        layout: 'landscape',
        size: 'A4'  
            });

            let buffers=[];

            // Configuramos el documento
            doc.on('data',buffers.push.bind(buffers))
            
            doc.on('end',()=>{
                let pdfData = Buffer.concat(buffers)
                  res.writeHead(200,{
                  'Content-Length':Buffer.byteLength(pdfData),
                  'Content-Type': 'application/pdf',  
                 }).end(pdfData)
            })
            doc.image('public/logos/emi.png', 30, 20, {width: 70})

            doc.fillColor('#e3b155')
            .fontSize(20)
            .text('Reporte Back End', 260, 50,{aling:'center'})  
            
            //insertamos la consulta Producto
            const lista= await models.producto.findAll() ;  
           /* const lista2= await models.factura.findOne({
                    atributos;
                    where {num_factura:req.params.numfactura}
                    include:[{
                        atributos
                        models.cliente
                    }]
            }) ;  */


            doc.moveTo(40,90) //inicio
            .lineTo(40+400,90) //fin
            .fillColor('#c20000')
            .lineWidth(2) // grosor
            .stroke()  //negrilla
            

            doc.fillColor('#00000')
            .fontSize(10)
            .text('Nombre de Producto', 60, 95,{aling:'center'})  
            .text('Descripcion', 200, 95,{aling:'center'})  
            .text('Codigo Barra', 330, 95,{aling:'center'})  

            doc.moveTo(40,110) //inicio
            .lineTo(40+400,110) //fin
            .lineWidth(2) // grosor
            .stroke()  //negrilla

           let inicio_y=120;
            for(let i=0;i<lista.length;i++){
                doc.moveDown();
                const lista_producto = lista[i]
                
                doc.fontSize(12)
                .fillColor('#000')
                .text(lista_producto.nombre,60,inicio_y)                
                .text(lista_producto.descripcion,200,inicio_y)
                .text(lista_producto.codigobarra,330,inicio_y,{width: 70})
                .lineTo(100, 160)    
                doc.moveTo(40,inicio_y+10) //inicio
                .lineTo(40+400,inicio_y+10) //fin
                .lineWidth(1) // grosor
                .stroke()  //negrilla
                inicio_y=inicio_y+20;
            }
            
            doc.fontSize(12)
                .fillColor('#000')
                .text(parseDate.now(),60,200) 

            doc.end(); 

}
