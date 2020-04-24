/**
 * @file repo/entities/db-entity.js
 * @overview exmaple db entity
 */

module.exports = function entity() {
  const table = 'db_table_name'

  const Field = {
    Id: `${table}.id`,
    Name: `${table}.name`,
  }

  const fields = Object.values(Field)

  return { Field, fields, table }
}

module.exports.inject = {}
