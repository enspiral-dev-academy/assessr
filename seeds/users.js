const { hashSync } = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_type: 'teacher',
          user_name: 'admin',
          hash: hashSync('admin', saltRounds)
        },
        {
          id: 2,
          user_type: 'student',
          user_name: 'kelly',
          hash: hashSync('kelly', saltRounds)
        },
        {
          id: 3,
          user_type: 'student',
          user_name: 'ollie',
          hash: hashSync('ollie', saltRounds)
        }
      ])
    })
}
