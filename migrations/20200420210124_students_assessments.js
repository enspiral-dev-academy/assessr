exports.up = function(knex) {
    return knex.schema.createTable('students_assessments', table => {
      table.increments('id')
      table.integer('student_id')
      table.integer('assessment_code')
      table.string('status')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('students_assessments')
  };
  