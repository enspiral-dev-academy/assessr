exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('submissions').del()
      .then(function () {
        // Inserts seed entries
        return knex('submissions').insert([
          {
            id: 1,
            student_assessment_id: 1,
            evidence: 'this url i gave you',
            reviewed: true
          }
        ])
      })
  }
  