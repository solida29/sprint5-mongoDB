// Para incorporar los schemas en collection

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "telephone"],
      properties: {
        name: { bsonType: "string" },
        address: { bsonType: "string" },
        telephone: { bsonType: "string" },
        email: { bsonType: "string" },
        Register_date: { bsonType: "date" },
      },
    },
  },
});

db.createCollection("glasses", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["brand", "graduacion_L", "graduacion_R", "montura", "precio"],
      properties: {
        brand: { bsonType: "string" },
        graduation_L: { bsonType: "string" },
        graduation_R: { bsonType: "string" },
        glass_color_L: { bsonType: "string" },
        glass_color_R: { bsonType: "string" },
        frame_type: { bsonType: "string" },
        provider: { bsonType: "string" },
        price: { bsonType: "number" },
      },
    },
  },
});

db.createCollection("providers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "telephone", "Register_date"],
      properties: {
        name: { bsonType: "string" },
        adress: {
          bsonType: "object",
          properties: {
            street: { bsonType: "string" },
            num: { bsonType: "string" },
            floor: { bsonType: "string" },
            door: { bsonType: "string" },
            city: { bsonType: "string" },
            cp: { bsonType: "string" },
            country: { bsonType: "string" },
          },
        },
        telephone: { bsonType: "string" },
        email: { bsonType: "string" },
        nif: { bsonType: "string" },
      },
    },
  },
});

db.createCollection("sales", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_customer", "id_glasses", "register_date"],
      properties: {
        id_customer: { bsonType: "objectId" },
        id_glasses: { bsonType: "objectId" },
        register_date: { bsonType: "date" },
      },
    },
  },
});
