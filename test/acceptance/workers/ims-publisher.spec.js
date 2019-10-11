'use strict'

const nock = require('nock')
const httpStatus = require('http-status')

const ImsPublisherWorker = require('../../../workers/ims-publisher')
const { worker, publish } = ImsPublisherWorker
const { imsApiConfig } = require('../../../config')

describe('ImsPublisherWorker', () => {

  describe('a successful message publishing', () => {

    let ImsApiScope

    before(async () => {
      debugger
      //ImsApiScope = nock(imsApiConfig.host, httpStatus.OK)
      await publish({ msg: 'eita porra!' })
      await worker.start()
      await worker.stop()
    })

    after(() => {
      nock.cleanAll()
    })

    it('should...', () => {
      debugger
      expect(false).to.be.equal(true)
    })
  })
})
