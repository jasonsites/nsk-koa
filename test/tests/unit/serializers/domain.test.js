const { before, describe, it } = require('mocha')

// const assertions = require('../../assertions')
// const chance = require('../../../fixtures/chance')
const { loadModules } = require('../../../utils')


describe('[unit] http.serializers.domain', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await loadModules.call(this, { core: 'core', serializers: 'serializers' })
  })

  it('should serialize a single domain entity', function () {})

  it('should serialize a multiple domain entities', function () {})
})
