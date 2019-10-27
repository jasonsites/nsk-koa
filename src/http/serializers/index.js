/**
 * @file serializers/index.js
 * @overview
 */

const { get } = require('lodash')

module.exports = function serializers({ core, types }) {
  const { Entity } = core
  /*
  {
    meta: {
      paging: {
        limit,
        offset,
        total
      }
    },
    data: [{
      type: 'domain-type',
      meta: {},
      record: domain-record,
      rel: [{
        type: 'rel-type',
        data: 'rel-record'[],
      }],
    }]
  }
  */

  /**
   * @param {Object[]}  params.input  - configured input data
   * @param {Boolean}   params.single - serialize as single entity (true) or list (false)
   * @return {Object}
   */
  function serialize({ input, single }) {
    const { data, meta } = input

    const result = {}
    if (meta) result.meta = serializeMeta({ meta })
    if (data) result.data = serializeData({ data, single })

    return JSON.stringify(result)
  }

  function serializeMeta({ meta }) {
    const total = get(meta, 'paging.total', undefined)
    if (total) meta.paging.total = parseInt(total, 10)
    return meta
  }

  function serializeData({ data, single }) {
    if (!Array.isArray(data)) {
      throw new Error('serializer input data must be an array')
    }

    const { length } = data

    // single entity
    if (single) {
      if (length !== 1) {
        throw new Error(`serializer input data with length '${length}' must contain one and only one entity for single entity serialization`)
      }
      const [params] = data
      return serializeRecord(params)
    }

    // entity list
    if (length === 0) return data
    return data.reduce((memo, params) => {
      memo.push(serializeRecord(params))
      return memo
    }, [])
  }

  /**
   * @private
   */
  function serializeRecord({ meta, record, rel, type }) {
    switch (type) {
      case Entity.DomainEntity:
        return types.serializeDomainEntity({ core, meta, record, rel, type })
      default:
        throw new Error(`invalid entity type ${type}`)
    }
  }

  return { serialize }
}

module.exports.inject = {
  name: 'serializers',
  require: {
    core: 'core',
    types: 'http/serializers/types',
  },
}
