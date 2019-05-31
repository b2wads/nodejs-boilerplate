const routes = require("express").Router()
const HealthCheckController = require('../controllers/healthcheck-controller')

routes.use("/healthcheck", [
  routes.get("/", HealthCheckController.status)
])

module.exports = routes
  