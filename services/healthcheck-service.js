const logger = require('../clients/logger')

const HealthCheckService = {
  async status() {
    logger.debug({
      action: 'healthcheckService.status',
      msg: 'Check API health'
    })
    return Promise.resolve({ status: 'ok' })
  }
}

module.exports = HealthCheckService
