const { serverPort, mongoDBUri } = require("./utils/Constants");
const path = require("path");
const PROJECT_DIR = path.resolve(__dirname, "..");

var express = require("express");
var app = express();

const swaggerHandler = require("./utils/swagger/SwaggerHandler");
swaggerHandler.handle(app);

const MongoDBHandler = require("./utils/mongodb/MongoDBHandler");
const mongoDBHandler = new MongoDBHandler(mongoDBUri);

async () => {
  await mongoDBHandler.init();
};

var appRouter = require("./router/AppRouter");
appRouter.route(app, PROJECT_DIR, mongoDBHandler);

app.listen(serverPort, () => {
  console.log(`Example app listening on port ${serverPort}`);
});
