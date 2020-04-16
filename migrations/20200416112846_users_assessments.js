exports.up = function(knex) {
    return knex.schema.createTable('users_assessments', table => {
      table.string('user_id')
      table.string('assessment_id')
      table.string('status')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users_assessments')
  };
  