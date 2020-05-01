const connection = require('./connection')

function getAllModules (testDb) {
    const db = testDb || connection

    return db('modules')
}

function getAllAssessments (testDb) {
    const db = testDb || connection

    return db('assessments')
}

function getUserAssessments (name, testDb) {
    const db = testDb || connection

    return db('users')
        .select('assessment_code AS code', 'status', 'students_assessments.id AS assessment_record')
        .where('user_name', name)
        .join('students_assessments', 'users.id', 'students_assessments.student_id')
}

function getUserAssessment (id, code, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .where('student_id', id)
        .andWhere('assessment_code', code)
        .first()

}

function createRecord (student_id, assessment_code, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .insert({
            student_id,
            assessment_code,
            status: 'in progress'
        })
}

function saveSubmission (submission, testDb) {
    const db = testDb || connection

    return db('submissions')
        .insert(submission)
}

module.exports = {
    getAllAssessments,
    getAllModules,
    getUserAssessments,
    getUserAssessment,
    createRecord,
    saveSubmission
}