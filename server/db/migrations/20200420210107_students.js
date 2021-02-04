exports.up = function (knex) {
  return knex.schema.createTable("students", table => {
    table.integer("user_id")
    table.string("student_id")
    table.integer("cohort_id")
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("students")
}
