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
          actual_name: 'Admin Teach',
          hash: hashSync('admin', saltRounds),
          registration_confirmed: true
        },
        {
          id: 2,
          user_type: 'student',
          user_name: 'kelly',
          actual_name: 'Kelly Keating',
          hash: hashSync('kelly', saltRounds),
          registration_confirmed: true
        },
        {
          id: 3,
          user_type: 'student',
          user_name: 'ollie',
          actual_name: 'Oliver Harcourt',
          hash: hashSync('ollie', saltRounds),
          registration_confirmed: true
        }
      ])
    })
}
