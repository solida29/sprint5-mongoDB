conn = new Mongo(); // nueva conexión a un servidor MongoDB. Por defecto, se conectará a un servidor MongoDB en localhost en el puerto 27017.
db = conn.getDB("optica"); // referencia a la base de datos "optica" en el servidor MongoDB al que se ha conectado. Si la base de datos no existe, MongoDB la creará cuando se inserte datos en ella.

// Coleccion Clientes ----------------
db.createCollection("clientes"); // creación de la collection clientes

let clientes = [
  {
    nombre: "cliente1",
    direccion: "Passeig de Gracia, 23, 2-3, 08002, Barcelona",
    telefono: "+34 611 000 111",
    email: "cliente1@gmail.com",
    fechaRegistro: new Date(),
    recomendado: " ",
    compras: [
      {
        id: 1,
        marca: "Rayban",
        graduacionIzquierda: "2.3",
        graduacionDerecha: "2.0",
        colorCristalIzquierdo: "",
        colorCristalDerecho: "",
        montura: "metalica",
        precio: "127.00",
      },
      {
        id: 2,
        marca: "Polaroid",
        graduacionIzquierda: "2.3",
        graduacionDerecha: "2.0",
        colorCristalIzquierdo: "oscuro",
        colorCristalDerecho: "oscuro",
        montura: "plastico",
        precio: "78.00",
      },
    ],
  },
  {
    nombre: "cliente2",
    direccion: "Passeig del Born, 16, 3-3, 08002, Barcelona",
    telefono: "+34 622 000 222",
    email: "cliente2@gmail.com",
    fechaRegistro: new Date(),
    recomendado: "cliente1",
    compras: [
      {
        id: 1,
        marca: "Rayban",
        graduacionIzquierda: "2.3",
        graduacionDerecha: "2.0",
        colorCristalIzquierdo: "",
        colorCristalDerecho: "",
        montura: "metalica",
        precio: "127.00",
      },
    ],
  },
];

db.clientes.insertMany(clientes); // insertamos en la base de datos

// Coleccion Proveedores -------------
db.createCollection("proveedores"); // creación de la collection proveedores

let proveedores = [
  {
    nombre: "proveedor1",
    direccion: {
      calle: "Diagonal",
      numero: "120",
      piso: "3",
      puerta: "4",
      ciudad: "Barcelona",
      codigo_postal: "08002",
      pais: "España",
    },
    telefono: "+34 600 111 000",
    NIF: "P111",
  },
  {
    nombre: "proveedor2",
    direccion: {
      calle: "Padilla",
      numero: "120",
      piso: "3",
      puerta: "4",
      ciudad: "Barcelona",
      codigo_postal: "08002",
      pais: "España",
    },
    telefono: "+34 600 222 000",
    NIF: "P222",
  },
];
db.proveedores.insertMany(proveedores);
