exports.up = function(knex) {
    return knex.schema.createTable('assessments', table => {
      table.increments('id')
      table.string('code')
      table.string('module_id')
      table.string('title')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('assessments')
  };
  