const connection = require('./connection')

function getPendingSubmissions (testDb) {
    const db = testDb || connection

    return db('submissions')
        .where('reviewed', false)
}

function getStudentByRecordId (record_id, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .select('student_id', 'assessment_code', 'status', 'actual_name', 'cohort_id')
        .where('students_assessments.id', record_id)
        .join('students', 'students_assessments.student_id', 'students.user_id')
        .first()
}

module.exports = {
    getPendingSubmissions,
    getStudentByRecordId
}