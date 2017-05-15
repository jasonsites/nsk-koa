
export default function createAddRequestLogger({ logger, requestId }) {
  return function addRequestLogger(ctx, next) {
    const id = ctx.get(requestId || 'test-request-id')
    ctx.request.log = logger.child({ req_id: id })
    return next()
  }
}

export const inject = { type: 'object' }
