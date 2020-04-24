/**
 * @file http/middleware/local-type.js
 * @overview sets local resource type
 */

module.exports = function middleware({ type }) {
  return function setType(ctx, next) {
    ctx.state.type = type
    return next()
  }
}

module.exports.inject = { type: 'object' }
