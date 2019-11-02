/**
 * @file http/documentation/entities/entity/paths.js
 * @overview api documentation entity paths
 */

module.exports = function paths() {
  const get = {}

  const post = {
    '/domain/entities': {
      post: {
        tags: ['entity'],
        description: 'Create a new entity',
        operationId: 'createEntity', // ??
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/DataSingleEntity',
              },
            },
          },
          required: true,
        },
        responses: {
          200: {
            description: 'Entity was created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/DataSingleEntityWithId',
                },
              },
            },
          },
          400: {
            description: 'Validation Error',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Errors',
                },
                example: {
                  errors: [{
                    status: '400',
                    source: { pointer: 'data/properties/name' },
                    title: 'ValidationError',
                    detail: '"name" cannot contain non-alphanumeric characters',
                  }],
                },
              },
            },
          },
        },
      },
    },
  }

  return { ...get, ...post }
}

module.exports.inject = {}
