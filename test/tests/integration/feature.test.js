const { expect } = require('chai')
const { describe, it } = require('mocha')

const handler = require('../../../src/feature')

describe('[feature]', function () {
  it('should return correct data', function () {
    const data = { data: 'feature data example' }
    return handler(data)
      .then((res) => {
        console.log(JSON.stringify(res))
        expect(res).to.deep.equal({ data: 'feature data example' })
      })
  })
})
