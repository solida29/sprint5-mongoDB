# Entrega 5.4: MongoDB queries

## Descripció

Tenim una col·lecció d'Objectes Restaurant a la ciutat de Nova York, i necessitem algunes consultes... pots ajudar-nos?

1. Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants.
2. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants.
3. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloent el camp \_id per tots els documents en la col·lecció Restaurants.
4. Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloent el camp \_id per tots els documents en la col·lecció Restaurants.
5. Escriu una consulta per mostrar tots els restaurants que estan en el Bronx.
6. Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx.
7. Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que siguin del Bronx.
8. Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90.
9. Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que 100.
10. Escriu una consulta per trobar els restaurants que estan situats en una longitud inferior a -95.754168.
11. Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen menjar 'American ' i tenen algun score superior a 70 i longitud inferior a -65.754168.
12. Escriu una consulta per trobar els restaurants que no preparen menjar 'American' i tenen algun score superior a 70 i que, a més, es localitzen en longituds inferiors a -65.754168. Nota: Fes aquesta consulta sense utilitzar operador $and.
13. Escriu una consulta per trobar els restaurants que no preparen menjar 'American ', tenen alguna nota 'A' i no pertanyen a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent.
14. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' en les tres primeres lletres en el seu nom.
15. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' en les últimes tres lletres en el seu nom.
16. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' en qualsevol lloc del seu nom.
17. Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats Americans o xinesos.
18. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn.
19. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn.
20. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10.
21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen marisc ('seafood') excepte si són 'American ', 'Chinese' o el name del restaurant comença amb lletres 'Wil'.
22. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants que aconsegueixin un grade de "A" i un score d'11 amb un ISODate "2014-08-11T00:00:00Z".
23. Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z".
24. Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element de l'array coord conté un valor entre 42 i 52.
25. Escriu una consulta per organitzar els restaurants per nom en ordre ascendent.
26. Escriu una consulta per organitzar els restaurants per nom en ordre descendent.
27. Escriu una consulta per organitzar els restaurants pel nom de la cuisine en ordre ascendent i pel barri en ordre descendent.
28. Escriu una consulta per saber si les direccions contenen el carrer.
29. Escriu una consulta que seleccioni tots els documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double.
30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7.
31. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name.
32. Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'Mad' com a primeres tres lletres del seu name.

## Nivell 1

Certificaràs el teu nivell 1 si construeixes 17 consultes correctes.

## Nivell 2

Tindràs nivell 2 si construeixes entre 17 i 25 consultes correctes.

## Nivell 3

Nivell 3 si aconsegueixes construir correctament més de 25 consultes correctes!!!

## Recursos

Pots descarregar la base de dades en el fitxer adjunt.

## Objectius

Aprendre a consultar una base de dades NoSQL.

## Durada: 4 dies

## Lliurament:

Enviar l'URL a un repositori anomenat mongoDB-queries que contingui la solució:
S'ha d'entregar en un mateix fitxer .js amb el codi ofuscat (cada sentència en una línia).
Si ho desitges, pots lliurar també un altre fitxer que no tingui el codi ofuscat i que inclogui les teves anotacions en les consultes.

<hr>

## Docker

Para usar el Docker:

- Ejecutar el contenedor mongodb_container del Docker en la terminal

```sh
docker start mongodb_container
```

- Conectarse a la consola del Docker

```sh
docker attach mongodb_container
```

- Trabajo en Visual Studio Code, con la extensión de Mongo DB.
  Hay que conectarse al contenedor del Docker, que está en localhost:

```sh
mongodb://root:password@localhost:27017
```

- Para conectar con Mongo DB Shell: Mongosh, hay que entrar en la Terminal:

```sh
mongosh "mongodb://root:password@localhost:27017"
```

- Conectarse al container con mongosh

```sh
docker exec -it mongodb_container mongosh
```
