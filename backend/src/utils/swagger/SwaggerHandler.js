const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

function handleSwagger(app) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

module.exports = { handle: handleSwagger };
