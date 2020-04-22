exports.up = function(knex) {
    return knex.schema.createTable('cohorts', table => {
      table.increments('id')
      table.string('name')
      table.string('campus')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('cohorts')
  };
  