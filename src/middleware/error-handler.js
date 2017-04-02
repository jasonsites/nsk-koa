/* eslint no-unused-vars: 0 */
import { wrap } from 'boom'

export default function errorHandler(err, req, res, next) {
  console.error(err)
  wrap(err, 500)
  const { error, message, statusCode } = err.output.payload
  const body = {
    errors: [{
      detail: message,
      meta: err.data,
      status: statusCode.toString(),
      title: error,
    }],
  }
  res.status(statusCode).json(body)
}
