exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("students")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("students").insert([
        {
          user_id: 2,
          student_id: "Kelly Keating-453",
          cohort_id: 31,
        },
        {
          user_id: 3,
          student_id: "Oliver Harcourt-1202",
          cohort_id: 44,
        },
      ])
    })
}
