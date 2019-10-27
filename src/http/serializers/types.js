/**
 * @file serializers/types.js
 * @overview
 */

module.exports = function types() {
  function serializeDomainEntity({ meta, record, type }) {
    const { id, ...fields } = record
    const {
      name,
      created_on,
      created_by,
      modified_on,
      modified_by,
    } = fields

    const properties = {
      name,
      created_on,
      created_by,
      modified_on,
      modified_by,
    }

    return { type, id, meta, properties }
  }

  return { serializeDomainEntity }
}

module.exports.inject = {}
