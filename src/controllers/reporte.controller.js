import PDFDocument from "pdfkit";
import models from "../models";

function generarCabecera(doc) {
  
   const fecha = new Date();
   //doc.image('images/test.jpeg', 0, 15, {width: 300})

   doc.fillColor('#A62735')
   .fontSize(20)
   .text('Reporte Back End', 260, 70,{aling:'center'})   

   doc.fillColor('#000')
      .fontSize(10)
      .text('Proyecto Genérico',610,65,{align:'left'})
      .text('Fecha de reporte:',610,78)
      .text(fecha.toDateString(),240,78,{align:'right'})
    //linea
   doc.moveTo(30,90)
      .lineTo(30+740,90)
      .lineWidth(1)
      .stroke() 
     
  }
export  const generarPDFReporteProducto = async function (req,res) {
      //crear un documento
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

     /// generar encabezado
     generarCabecera(doc) 
// creando una tabla para reporte
//cabecera de la tabla
 doc.moveDown()
      // generando el reporte
      let inicio_y= 100;
      doc.fontSize(12)
        .fillColor('#272BA6')
        .text('nombre',35,inicio_y,{width: 70,align: 'center'})
        .text('precio',220,inicio_y)
        .text('marca',335,inicio_y,{width: 70,align: 'center'})
        .text('descripcion',435,inicio_y,{width: 70,align: 'center'})

        inicio_y=inicio_y+20

        doc.moveTo(30,inicio_y)
        .lineTo(30+740,inicio_y)
        .lineWidth(1)
        .stroke() 
       
         //insertamos la consulta Producto
        const lista= await models.producto.findAll()    

        const pagina=1
           
        inicio_y=inicio_y+10
  // contenido tabla
for(let i=0;i<lista.length;i++){
            doc.moveDown();
            const lista_producto = lista[i]
            
            doc.fontSize(12)
            .fillColor('#000')
            .text(lista_producto.nombre,35,inicio_y,{width: 70})
            .text(lista_producto.precio,220,inicio_y)
            .text(lista_producto.marca,335,inicio_y,{width: 70,align: 'center'})
            .text(lista_producto.descripcion,435,inicio_y,{width: 70})

            inicio_y=inicio_y+30
            doc.moveTo(30,inicio_y)
            .lineTo(30+740,inicio_y)
            .lineWidth(1)
            .stroke()
          
           }
 doc.end(); 

    }
