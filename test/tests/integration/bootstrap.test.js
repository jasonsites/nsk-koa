const Bluebird = require('bluebird')
const { before } = require('mocha')

const container = require('../../../src/container')

before('initialize containers', async function () {
  this.timeout(30000)
  return Bluebird.resolve()
    .then(() => {
      console.log('starting application...')
    })
    .then(() => container.load('http/app'))
    .then((app) => {
      this.app = app
      console.log('application started')
    })
})
