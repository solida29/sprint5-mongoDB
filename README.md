# Entrega 5.3: Estructura de dades MongoDB (NOU)

## Descripció

Crearem diferents bases de dades en MongoDB.

### Nivell 1

#### Òptica

Una òptica, anomenada “Cul d'Ampolla”, vol informatitzar la gestió dels clients/es i vendes d'ulleres.

En primer lloc, l'òptica vol saber quin és el proveïdor de cadascuna de les ulleres. En concret vol saber de cada proveïdor: El nom, l'adreça (carrer, número, pis, porta, ciutat, codi postal i país), telèfon, fax, NIF.

De les ulleres es vol saber: La marca, la graduació de cadascun dels vidres, el tipus de muntura (flotant, pasta o metàl·lica), el color de la muntura, el color de cada vidre i el preu.

Dels clients/es vol emmagatzemar: El nom, l'adreça postal, el telèfon, el correu electrònic, la data de registre.
Quan arriba un/a client/a nou, emmagatzemar el/la client/a que li ha recomanat l'establiment (sempre que algú li hagi recomanat).
El nostre sistema haurà d’indicar qui ha sigut l’empleat/da que ha venut cada ullera. Defineix quin dia/hora es realitza la venda.

1. Exercici 1
   Imagina que tenim la següent interfície gràfica, des del punt de vista d’un client de l'Òptica. Com dissenyaries la base de dades que facilités la informació?
   ![ejercicio1](/img/culdampolla1.jpg)

2. Exercici 2
   I si el punt de vista fos de la interfície fossin les ulleres?

   ![ejercicio2](/img/culdampolla2.jpg)

<hr>

## Docker

Para usar el Docker:

1. Ejecutar docker-compose.yml en la terminal

```sh
docker-compose up
```

2. Trabajo en Visual Studio Code, con la extensión de Mongo DB.
   Hay que conectarse al contenedor del Docker, que está en localhost:

```sh
mongodb://root:password@localhost:27017
```

3. Para conectar con Mongo DB Shell: Mongosh, , hay que entrar en la Terminal:

```sh
mongosh "mongodb://root:password@localhost:27017"
```

## Nivel 1: Optica

Schema
