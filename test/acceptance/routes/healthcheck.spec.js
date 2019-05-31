const request = require("supertest")

const app = require("../../../app")

describe("HealthCheck test", () => {
  describe("GET /healthcheck", () => {
    let res = undefined

    beforeAll(async () => {
      res = await request(app).get("/healthcheck")
    })

    it("should return 200", () => {
      expect(res.status).toBe(200)
    })

    it("should return { status: 'ok' }", () => {
      expect(res.body).toHaveProperty("status", "ok")
    })
  })
})
