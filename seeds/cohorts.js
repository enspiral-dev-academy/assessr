exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {
          id: 31,
          name: 'Hihi 2017',
          campus: 'Wellington'
        }
      ])
    })
}
