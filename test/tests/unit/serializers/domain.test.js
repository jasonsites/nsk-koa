const { before, describe, it } = require('mocha')

const chance = require('../../../fixtures/chance')
const { loadModules } = require('../../../utils')
const {
  assertDomain,
} = require('../../assertions')

describe('[unit] serializers.domain', function () {
  before('load modules', async function () {
    this.timeout(30000)
    await loadModules.call(this, { serializers: { domain: 'http/serializers/domain' } })
  })

  it('should `buildDomain`', function () {
    const body = {
      domain: {
        key1: chance.string(),
        key2: chance.string(),
      },
    }
    const data = this.serializers.domain.buildDomain({ data: body })
    assertDomain({ body, data })
  })
})
