"use strict"

const envLoader = require("env-o-loader")

const config = Object.freeze({
  rabbitmqConfig: envLoader('./rabbitmq.yaml'),
  imsApiConfig: envLoader('./ims-api.yaml')
})

module.exports = config
