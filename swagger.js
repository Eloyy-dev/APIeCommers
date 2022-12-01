const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commersEmlo",
      version: "1.0.0",
      description: "API que sirve para una tienda virtual",
    },
  },
  apis: [
    "./src/Routes/user.routes.js",
    "./src/Routes/cart.routes.js",
    "./src/Routes/auth.routes.js",
    "./src/Routes/product.route.js",
    "./src/Routes/order.routes.js",
    "./src/models/users.models.js",
    "./src/models/product.models.js",
    "./src/models/cart.models.js",
    "./src/models/order.models.js",

  ],
};

const swaggerSpec = swaggerJSDoc(options);


const swaggerDocs = (app, port) => {
  
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("ContentType", "application/json");
    res.send(swaggerSpec);
  });
  //
  console.log(
    `Documentación disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs;