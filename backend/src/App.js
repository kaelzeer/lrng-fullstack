const { serverPort, mongoDBUri } = require('./utils/Constants')

var express = require('express')
var app = express()

const swaggerHandler = require('./utils/swagger/SwaggerHandler')
swaggerHandler.handle(app)

const MongoDBHandler = require('./utils/mongodb/MongoDBHandler')
const mongoDBHandler = new MongoDBHandler(mongoDBUri)

async () => {
  await mongoDBHandler.init()
}

var appRouter = require('./router/AppRouter')
appRouter.route(app, mongoDBHandler)

app.listen(serverPort, () => {
  console.log(`Example app listening on port ${serverPort}`)
})
