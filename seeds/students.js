exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
          user_id: 2,
          actual_name: 'Kelly Keating',
          cohort_id: 31
        }
      ])
    })
}
