exports.up = function(knex) {
    return knex.schema.createTable('students_assessments', table => {
      table.increments('id')
      table.integer('user_id')
      table.string('assessment_code')
      table.string('status')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('students_assessments')
  };
  