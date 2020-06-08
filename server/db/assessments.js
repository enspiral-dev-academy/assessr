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
        .join('students_assessments', 'users.id', 'students_assessments.user_id')
}

function getUserAssessment (id, code, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .where('user_id', id)
        .andWhere('assessment_code', code)
        .first()

}

function createRecord (user_id, assessment_code, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .insert({
            user_id,
            assessment_code,
            status: 'pending review'
        }, 'id')
}

function saveSubmission (submission, testDb) {
    const db = testDb || connection

    return db('submissions')
        .insert(submission, 'id')
}

module.exports = {
    getAllAssessments,
    getAllModules,
    getUserAssessments,
    getUserAssessment,
    createRecord,
    saveSubmission
}