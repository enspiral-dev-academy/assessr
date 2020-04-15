exports.up = function(knex) {
    return knex.schema.createTable('modules', table => {
      table.increments('id')
      table.string('title')
      table.string('course')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('modules')
  };
  