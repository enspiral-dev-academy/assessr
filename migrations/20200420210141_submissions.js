exports.up = function(knex) {
  return knex.schema.createTable('submissions', table => {
    table.integer('student_assessment_id')
    table.text('evidence')
    table.boolean('reviewed')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('submissions')
};
