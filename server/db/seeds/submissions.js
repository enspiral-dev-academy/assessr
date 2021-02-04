exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("submissions")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("submissions").insert([
        {
          id: 1,
          student_assessment_id: 2,
          evidence: "some link to review",
          reviewed: false,
        },
        {
          id: 2,
          student_assessment_id: 1,
          evidence: "url with all the stuff working",
          reviewed: true,
        },
        {
          id: 3,
          student_assessment_id: 4,
          evidence: "i'm a sassy goose",
          reviewed: false,
        },
      ])
    })
}
