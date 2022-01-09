db.ventas.drop()
db.ventas.insertMany(
  [

    { "_id" : 1,
      "producto": "magnesio",
      "Descuento": 0,
      "categoría": "escalada",
      "precio_de_coste": 3,
      "precio_de_venta": 5.99,
      "fecha_venta": ISODate("2021-05-14T08:00:00Z"),
      "unidades": 1500,
      "tiempodellegada": [20,10],
      "cliente": "Decathlon",
      "empleado_vendedor": "Agustín Salazar",
      
    },{
      "_id" : 2,
      "producto": "banda",
      "Descuento": 30,
      "categoría": "crossfit",
      "precio_de_coste": 4,
      "precio_de_venta": 6.99,
      "fecha_venta": ISODate("2021-04-21T08:00:00Z"),
      "unidades": 300,
      "tiempodellegada": [20,10],
      "cliente": "Decathlon",
      "empleado_vendedor": "Agustín Salazar",
      
    },{
      "_id" : 3,
      "producto": "paralelas",
      "Descuento": 0,
      "categoría": "calistenia",
      "precio_de_coste": 25,
      "precio_de_venta": 59.70,
      "fecha_venta": ISODate("2021-04-12T08:00:00Z"),
      "unidades": 600,
      "tiempodellegada": [25,15],
      "cliente": "Decathlon",
      "empleado_vendedor": "Agustín Salazar",
   
    },{
      "_id" : 4,
      "producto": "fondos",
      "Descuento": 40,
      "categoría": "calsitenia",
      "precio_de_coste": 50,
      "precio_de_venta": 89.50,
      "fecha_venta": ISODate("2021-07-16T08:00:00Z"),
      "unidades": 400,
      "tiempodellegada": [30,20],
      "cliente": "Decathlon",
      "empleado_vendedor": "Agustín Salazar",
      
    },{
      "_id" : 5,
      "producto": "magnesio",
      "Descuento": 0,
      "categoría": "escalada",
      "precio_de_coste": 7,
      "precio_de_venta": 12.70,
      "fecha_venta": ISODate("2021-01-01T08:00:00Z"),
      "unidades": 900,
      "tiempodellegada": [20,10],
      "cliente": "Sprinter",
      "empleado_vendedor": "Antonio Trujillo",
      
    },{
      "_id" : 6,
      "producto": "banda",
      "Descuento": 30,
      "categoría": "crossfit",
      "precio_de_coste": 5.10,
      "precio_de_venta": 10,
      "fecha_venta": ISODate("2021-02-22T08:00:00Z"),
      "unidades": 200,
      "tiempodellegada": [20,10],
      "cliente": "Sprinter",
      "empleado_vendedor": "Antonio Trujillo",
      
    },{
      "_id" : 7,
      "producto": "paralelas",
      "Descuento": 0,
      "categoría": "calsitenia",
      "precio_de_coste": 19.50,
      "precio_de_venta": 40.90,
      "fecha_venta": ISODate("2021-03-19T08:00:00Z"),
      "unidades": 350,
      "tiempodellegada": [25,15],
      "cliente": "Sprinter",
      "empleado_vendedor": "Antonio Trujillo",
     
    },{
      "_id" : 8,
      "producto": "fondos",
      "Descuento": 40,
      "categoría": "calsitenia",
      "precio_de_coste": 70,
      "precio_de_venta": 120,
      "fecha_venta": ISODate("2021-08-18T08:00:00Z"),
      "unidades": 700,
      "tiempodellegada": [30,20],
      "cliente": "Sprinter",
      "empleado_vendedor": "Antonio Trujillo",
      
    },{
      "_id" : 9,
      "producto": "magnesio",
      "Descuento": 0,
      "categoría": "escalada",
      "precio_de_coste": 8,
      "precio_de_venta": 15.20,
      "fecha_venta": ISODate("2021-07-13T08:00:00Z"),
      "unidades": 2000,
      "tiempodellegada": [23,14],
      "cliente": "Intersport",
      "empleado_vendedor": "Paco Nogales",
      
    },
    {
        "_id" : 10,
        "producto": "banda",
        "Descuento": 30,
        "categoría": "crossfit",
        "precio_de_coste": 12,
        "precio_de_venta": 20.50,
        "fecha_venta": ISODate("2021-10-10T08:00:00Z"),
        "unidades": 250,
        "tiempodellegada": [20,10],
        "cliente": "Intersport",
        "empleado_vendedor": "Paco Nogales",
       
    }
  ]
)

    

    db.páginaweb.drop()
    db.páginaweb.insertMany(
  [
    {   "_id" : 1,
        "página_web" : "Decatlon.com",
        "valoración_de_la_página" : 4.5,
        "Apartado": "opinionesdeusuarios"
        
    },
    {   "_id" : 2,
        "página_web" : "Sprinter.es",
        "valoración_de_la_página" : 4.1,
        "Apartado": "opinionesdeusuarios"
    },
    {   "_id" : 3,
        "página_web" : "Intersport.com",
        "valoración_de_la_página" : 3.5,
        "Apartado": "opinionesdeusuarios"
    }
  ]
)
  

    db.opiniondeusuario.drop()
    db.opiniondeusuario.insertMany(
  [
    {   "_id" : 1,
        "Subapartado" : "opinionesdeusuarios",
        "usuario" : "Rodolfo",
        "comentario" : "great read",
        "likes" : 3
    },
    {   "_id" : 2,
        "Subapartado" : "opinionesdeusuarios",
        "usuario" : "Manolo",
        "comentario" : "good info",
        "likes" : 0
    },
    {   "_id" : 3,
        "Subapartado" : "opinionesdeusuarios",
        "usuario" : "Peter",
        "comentario" : "i liked this post",
        "likes" : 12
    },
    {   "_id" : 4,
        "Subapartado" : "opinionesdeusuarios",
        "usuario" : "Anastasio",
        "comentario" : "not my favorite",
        "likes" : 8

    }
  ]
)