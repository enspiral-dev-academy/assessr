exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments("id")
    table.string("user_type")
    table.string("user_name")
    table.string("actual_name")
    table.text("hash")
    table.boolean("registration_confirmed").defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable("users")
}
