const Bluebird = require('bluebird')
const { before } = require('mocha')
const td = require('testdouble')

const container = require('../../../src/container')

td.config({ promiseConstructor: Bluebird })
global.td = td

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
