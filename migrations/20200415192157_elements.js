exports.up = function(knex) {
    return knex.schema.createTable('elements', table => {
      table.increments('id')
      table.string('text')
      table.string('assessment_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('elements')
  };
  