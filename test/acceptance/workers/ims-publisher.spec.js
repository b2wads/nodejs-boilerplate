'use strict'

const nock = require('nock')
const httpStatus = require('http-status')

const ImsPublisherWorker = require('../../../workers/ims-publisher')
const { worker, publish } = ImsPublisherWorker
const { imsApiConfig } = require('../../../config')

describe('ImsPublisherWorker', () => {

  describe('a successful message publishing', () => {

    let ImsApiScope, forwardedMsg
    const publishedMsg = { msg: 'tem que enviar isso aí!' }

    before(async () => {
      ImsApiScope = nock(imsApiConfig.host)
        .post('/path')
        .reply(
          httpStatus.OK,
          (uri, requestBody) => forwardedMsg = requestBody
        )
      await worker.start()
      await publish(publishedMsg)
      await worker.stop()
    })

    after(() => {
      nock.cleanAll()
    })

    it('should call IMS endpoint and relay the message', () => {
      expect(ImsApiScope.isDone()).to.be.true
      expect(forwardedMsg).to.be.eql(publishedMsg)
    })
  })
})
