exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('students_assessments').del()
    .then(function () {
      // Inserts seed entries
      return knex('students_assessments').insert([
        {
          id: 1,
          student_id: 2,
          assessment_code: 'FT01',
          status: 'complete'
        },
        {
          id: 2,
          student_id: 2,
          assessment_code: 'CP06',
          status: 'pending review'
        },
        {
          id: 3,
          student_id: 2,
          assessment_code: 'CP01',
          status: 'in progress'
        },
        {
          id: 4,
          student_id: 3,
          assessment_code: 'FT03',
          status: 'pending review'
        },
      ])
    })
}
