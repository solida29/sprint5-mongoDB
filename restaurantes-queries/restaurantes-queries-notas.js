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
