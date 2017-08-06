const Ajv = require('ajv')

module.exports.createValidator = function createValidator({ schemas }) {
  const ajv = new Ajv({
    useDefaults: true,
    coerceTypes: 'array',
    schemas,
  })
  /**
   * Add convenience method for validation that throws on invalid
   * @param  {String} id - schema id
   * @param  {*} val - value to validate
   */
  ajv.throwOnInvalid = function throwOnInvalid({ id, val }) {
    const valid = ajv.validate(id, val)
    if (!valid) {
      const err = new Error(`Validation Error (${id})`)
      err.errors = ajv.errors.slice()
      throw err
    }
    return val
  }
  return ajv
}

module.exports.inject = {
  name: 'validation',
}
