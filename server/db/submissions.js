const connection = require('./connection')

function getPendingSubmissions (testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('reviewed', false)
}

function getSubmissionByRecordId (record_id, testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('student_assessment_id', record_id)
}

function getIncompleteByRecordId (record_id, testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('student_assessment_id', record_id)
        .andWhere('reviewed', false)
}

function getStudentByRecordId (record_id, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .select('students.user_id', 'assessment_code', 'status', 'actual_name', 'cohort_id')
        .where('students_assessments.id', record_id)
        .join('students', 'students_assessments.user_id', 'students.user_id')
        .join('users', 'students.user_id', 'users.id')
        .first()
}

function markAllReviewed(id, testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('student_assessment_id', id)
        .update({ reviewed: true })
}

function markOneReviewed(id, note, testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('id', id)
        .update({ reviewed: true , notes: note})
}

module.exports = {
    getPendingSubmissions,
    getSubmissionByRecordId,
    getIncompleteByRecordId,
    getStudentByRecordId,
    markAllReviewed,
    markOneReviewed
}