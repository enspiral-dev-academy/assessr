
exports.up = function(knex) {
  return knex.schema.table('submissions', (table) => {
      table.text('notes').defaultTo('')
  })
};

exports.down = function(knex) {
  return knex.schema.table('submissions', (table) => {
      table.dropColumn('notes')
  })
};
