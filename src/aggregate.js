
//*Se quiere saber cuales son productos comprados por Decathlon que son de calistenia \\*  
db.ventas.aggregate(
    [
        {$limit:4},{$skip:2}
    ]
).pretty() 


//*Se pretende mostrar el precio máximo y el precio mínimo  vendido a cada empresa\\*
db.ventas.aggregate(
    [
        {
            $group:
            {
                _id: {"empresa":"$cliente"},
                precioMaximo: {$max:"$precio_de_venta"},
                precioMinimo: {$min:"$precio_de_venta"},
            }

        }
    ]
).pretty() 

   

//*Enseña las valoraciones de los usuarios webs referente a la empresa\\*
db.páginaweb.aggregate(
    [
        { 
            $lookup:
            {
                from: "opiniondeusuario",
                localField: "Apartado",
                foreignField: "Subapartado",
                as: "valoraciones"
            }
        }
    ]
).pretty() 


 //*Pretende enseñar las ventas totales de Agosto hacia delante\\*
db.ventas.aggregate(
    [
        { $match: { $expr: { $gt: [{ $month: "$fecha_venta" }, 07] } } },
        {
            $group:
            {
                _id: {mes:{ $month: "$fecha_venta" },
                venta_total: { $sum: { $multiply: ["$precio_de_venta", "$unidades"] } }}
            }
        }
    ]
).pretty() 


 //*Muestra el descuento específicamente de este producto\\*
db.ventas.aggregate(
     [ 
         { $match : { producto : "fondos" } },
        {
            $project:{ descuentodelproducto: { $round:[{$multiply: [{$divide:["$Descuento","$precio_de_venta"]},100]},0]}}
        }
        
    ]
).pretty() 


 //*Se muestra los beneficios generados por cada compra hecha por el cliente\\*
 db.ventas.aggregate(
    [ 
        {
            $project:
                    {
                        id:"$producto",
                        producto:1,
                        beneficios: {$subtract:[{ $multiply: [ "$precio_de_venta", "$unidades" ]},
                        { $multiply: [ "$precio_de_coste", "$unidades" ]}]}}
                    }       
    ]
).pretty() 


 //*Se quiere saber el tiempo promedio de la llegada del producto\\*
db.ventas.aggregate(
    [
        { 
            $project: { tiempodellegadaAvg: { $avg: "$tiempodellegada"} }
        }
    ]
).pretty() 
            


//*Muestra el importe total de la venta de cada producto\\*
db.ventas.aggregate(
    [
        {
            $group:
            {
                _id:"$producto",
                venta_total: { $sum: { $multiply: ["$precio_de_venta", "$unidades"] } }
            }
        }
    ]
).pretty() 



//*Enseña cuales son los mejores y peores meses de venta con cada empresa\\*


  db.ventas.aggregate( 
    [ 
         { $project: { _id: { mes: { $month: "$fecha_venta" },empresa:"$cliente",
                        mejormes: {$gte:[{ $round: [{ $multiply: [{ $divide: [{ $subtract: ["$precio_de_venta", "$precio_de_coste"] }, "$precio_de_venta"] }, 100] }] },50] } } } 
        }
    ]
). pretty()