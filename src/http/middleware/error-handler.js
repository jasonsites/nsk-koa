/* eslint-disable no-unused-vars */
import { wrap } from 'boom'

export default async function errorHandler(ctx, next) {
  try {
    await next()
  } catch (err) {
    if (ctx.request.log) ctx.request.log.error(err)
    else console.error(err)
    if (!err.isBoom) wrap(err, 500)
    ctx.status = err.output.payload.statusCode
    ctx.state.error = err
  }
}

export const inject = { type: 'object' }
