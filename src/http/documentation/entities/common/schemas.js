/**
 * @file http/documentation/entities/common/schemas.js
 * @overview api documentation common schemas
 */

module.exports = function common() {
  const id = {
    type: 'string',
    description: 'Resource uuid',
    example: 'fd06abb2-f4a4-4598-a25d-0843b301e99d',
  }

  const name = {
    type: 'string',
    description: 'Entity name',
    example: 'foo',
  }

  return {
    id,
    name,
  }
}

module.exports.inject = {}
