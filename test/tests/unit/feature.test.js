import { expect } from 'chai'
import { describe, it } from 'mocha'

import handler from '../../../src/feature'

describe('[feature]', function () {
  it('should return correct data', function () {
    return handler()
    .then((data) => {
      console.log(JSON.stringify(data))
      expect(data).to.deep.equal({ data: 'feature data example' })
    })
  })
})
