"use strict"

const axios = require("axios")
const WorkerFactory = require("resilient-consumer")

const { imsApiConfig } = require('../config')

const { rabbitmqConfig: { url, exchange, workers } } = require("../config")
const { ['ims-publisher']: { queue, routingKey } } = workers

const bulkSize = parseInt(process.env.IMS_PUBLISHER_BATCH_SIZE || 1)
const prefetch = parseInt(process.env.IMS_PUBLISHER_PREFETCH_SIZE || bulkSize)

module.exports = WorkerFactory.createWorker({
  connectUrl: url,
  queue,
  bulkSize,
  prefetch,
  name: "ims-publisher",
  max_try: 4,
  retry_timeout: 400,
  publishIn: {
    routingKey,
    exchange
  },

  callback(messages) {

    return Promise.all(messages.map(msg => {
      const imsUpdateEvent = msg.getParsedContent()

      console.log(imsUpdateEvent)

      return axios({
        method: 'POST',
        url: `${imsApiConfig.host}/path`,
        data: imsUpdateEvent
      })
    }))
  },

  failCallback(messages) {
    return messages.map(msg =>
      console.log(`fail to process the following message: ${msg.getParsedContent}`)
    )
  }
})
