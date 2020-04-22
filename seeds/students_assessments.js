exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students_assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_assessments').insert([
        {
          id: 1,
          student_id: 2,
          assessment_id: 'FT01',
          status: 'complete'
        },
        {
          id: 2,
          student_id: 2,
          assessment_id: 'CP06',
          status: 'in progress'
        },
      ])
    })
}
