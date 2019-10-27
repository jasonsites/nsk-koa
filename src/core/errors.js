/**
 * @file core/errors.js
 * @overview application errors
 */

module.exports = function errors() {
  const ErrorType = {
    Forbidden: 'ForbiddenError',
    NotFound: 'NotFoundError',
    Unauthorized: 'UnauthorizedError',
    Validation: 'ValidationError',
  }

  class ForbiddenError extends Error {
    constructor(message) {
      super(message)
      this.type = ErrorType.Forbidden
    }
  }

  class NotFoundError extends Error {
    constructor(message) {
      super(message)
      this.type = ErrorType.NotFound
    }
  }

  class UnauthorizedError extends Error {
    constructor(message) {
      super(message)
      this.type = ErrorType.Unauthorized
    }
  }

  class ValidationError extends Error {
    constructor(message) {
      super(message)
      this.type = ErrorType.Validation
    }
  }

  return {
    ErrorType,
    ForbiddenError,
    NotFoundError,
    UnauthorizedError,
    ValidationError,
  }
}

module.exports.inject = {}
