/**
 * @file services/index.js
 * @overview example service
 */

const Bluebird = require('bluebird')
const config = require('config')

module.exports = function service({ api, logger }) {
  const { enabled, label, level } = config.get('logger.service')

  return {
    context: (correlation) => {
      const { req_id } = correlation
      const log = logger.child({ module: label, req_id, level })

      async function get() {
        return Bluebird.try(() => api.client({
          url: '/',
          method: 'get',
        }))
          .then((res) => {
            if (enabled) log.info(res.data)
            return res.data
          })
          .catch((err) => {
            log.error(err)
            throw err
          })
      }

      return { get }
    },
  }
}

module.exports.inject = {
  require: {
    api: 'api/index',
    logger: 'logger',
  },
}
