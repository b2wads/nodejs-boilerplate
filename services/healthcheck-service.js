const HealthCheckService = {
  async status() {
    return await {
      status: "ok"
    }
  }
}

module.exports = HealthCheckService
