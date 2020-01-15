const request = require('supertest')

const app = require('../../../app')

describe('HealthCheck test', () => {
  describe('GET /healthcheck', () => {
    let res

    before(async () => {
      res = await request(app).get('/healthcheck')
    })

    it('should return 200', () => {
      expect(res.status).to.be.eql(200)
    })

    it("should return { status: 'ok' }", () => {
      expect(res.body).to.have.property('status', 'ok')
    })
  })
})
