exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {
          id: 31,
          name: 'Hihi',
          year: 2017,
          campus: 'Wellington'
        },
        {
          id: 44,
          name: 'Hihi',
          year: 2018,
          campus: 'Wellington'
        }
      ])
    })
}
