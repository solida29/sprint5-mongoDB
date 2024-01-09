// 1. Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
db.data.find();

// 2. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants.
db.data.find(
  {}, // filtro de consulta vacio, devolverá todos los docs de la coleccion
  {
    // objeto de proyección
    restaurant_id: true, // se puede usar 1 o true - 0 o false
    name: true,
    borough: true,
    cuisine: true,
  }
);

// 3. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp \_id per tots els documents en la col·lecció Restaurants.
db.data.find(
  {},
  {
    _id: false,
    restaurant_id: true,
    name: true,
    borough: true,
    cuisine: true,
  }
);

// 4. Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp \_id per tots els documents en la col·lecció Restaurants.
db.data.find(
  {},
  {
    _id: 0, // no queremos el _id
    restaurant_id: 1,
    name: 1,
    borough: 1,
    "address.zipcode": 1, // dot notation: hay que poner entre comillas
  }
);

// 5. Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
db.data.find({
  borough: "Bronx",
});

// 11. Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen menjar 'American ' i tenen algun score superior a 70 i longitud inferior a -65.754168.
db.data.find({
  $and: [
    { cuisine: { $ne: "American" } }, // not equal
    { "grades.score": { $gt: 70 } }, // greater than
    { "address.coord.0": { $lt: -65.754168 } }, // lower than
  ],
});

// 12. Escriu una consulta per trobar els restaurants que no preparen menjar 'American' i tenen algun score superior a 70 i que, a més, es localitzen en longituds inferiors a -65.754168. Nota: Fes aquesta consulta sense utilitzar operador $and.
db.data.find({
  cuisine: { $ne: "American" },
  "grades.score": { $gt: 70 },
  "address.coord.0": { $lt: -65.754168 },
});
// En MongoDB, no es necesario usar el operador $and para combinar condiciones en una consulta. Si proporcionas varias condiciones en el objeto de consulta, MongoDB las combinará utilizando un operador AND de forma predeterminada. La 11. y las 12. son equivalentes

// 21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.
db.data.find(
  {
    $and: [
      { cuisine: "Seafood" },
      { cuisine: { $ne: "American" } },
      { cuisine: { $ne: "Chinese" } },
    ],
    name: { $ne: /^Wil/ },
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);
// En MongoDB, si el mismo campo está especificado más de una vez en el mismo objeto, sólo se aplica la última condición.
// Para aplicar múltiples condiciones a un mismo campo, hay que usar el operador $and.

// 21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.
// pretty_ignore
db.data.find(
  {
    $and: [
      { cuisine: "Seafood" },
      {
        $nor: [
          // el operador $nor selecciona los documentos donde ninguna de las condiciones siguientes se cumple
          { cuisine: "American" },
          { cuisine: "Chinese" },
          { name: /^Wil/ },
        ],
      },
    ],
  },
  { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 }
);

// 22. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".
db.data.find(
  {
    grades: {
      // $elemMatch selecciona los documentos donde más de una condición debe cumplirse en el mismo elemento de un array (grades)
      // $elemMatch permite filtrar sobre atributos de docs dentro de un listado-array
      $elemMatch: {
        grade: "A",
        score: 11,
        date: ISODate("2014-08-11T00:00:00Z"), // formato ISODate
      },
    },
  },
  {
    restaurant_id: 1,
    name: 1,
    grades: 1,
  }
);

// 29. Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double.
db.data.find({ "address.coord": { $elemMatch: { $type: "double" } } });
// $elemMatch se usa para buscar documentos donde al menos un elemento en un array cumple con varias condiciones
// $type se usa para buscar documentos donde el valor de un campo es de un tipo específico. En este caso, estás buscando documentos donde al menos un elemento en address.coord es de tipo Double.

// 30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7.
db.data.find(
  { "grades.score": { $mod: [7, 0] } },
  { restaurant_id: 1, name: 1, "grades.grade": 1 }
);
// El operador $mod en MongoDB toma un array de dos elementos como valor, donde el primer elemento es el divisor y el segundo elemento es el residuo esperado.
