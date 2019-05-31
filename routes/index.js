const routes = require("express").Router()
const HealthcheckRoutes = require("./healthcheck")

routes.use('', [
  HealthcheckRoutes
])

module.exports = routes
