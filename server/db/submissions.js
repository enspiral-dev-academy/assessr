const connection = require("./connection")

function getPendingSubmissions(testDb) {
  const db = testDb || connection

  return db("submissions").where("reviewed", false)
}

function getSubmissionByRecordId(record_id, testDb) {
  const db = testDb || connection

  return db("submissions").where("student_assessment_id", record_id)
}

function getUnreviewedSubsByRecordId(record_id, testDb) {
  const db = testDb || connection

  return db("submissions").where("student_assessment_id", record_id).andWhere("reviewed", false)
}

function getStudentByRecordId(record_id, testDb) {
  const db = testDb || connection

  return db("students_assessments")
    .select("students.user_id", "assessment_code", "status", "actual_name", "cohort_id")
    .where("students_assessments.id", record_id)
    .join("students", "students_assessments.user_id", "students.user_id")
    .join("users", "students.user_id", "users.id")
    .first()
}

function markAllReviewed(record_id, testDb) {
  const db = testDb || connection

  return db("submissions").where("student_assessment_id", record_id).update({ reviewed: true })
}

function markOneReviewed(id, note, testDb) {
  const db = testDb || connection

  return db("submissions")
    .where("id", id)
    .update({ reviewed: true , notes: note})
}

function submissionExists(id, testDb) {
  const db = testDb || connection

  return db("submissions")
    .where("id", id)
    .then(sub => {
      if (sub.length > 0) throw new Error("ID doesn't exist")
      return
    })
}

module.exports = {
  getPendingSubmissions,
  getSubmissionByRecordId,
  getUnreviewedSubsByRecordId,
  getStudentByRecordId,
  markAllReviewed,
  markOneReviewed,
  submissionExists,
}
