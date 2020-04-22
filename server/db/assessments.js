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
        .select('assessment_id AS code', 'status')
        .where('user_name', name)
        .join('students_assessments', 'users.id', 'students_assessments.student_id')
}

module.exports = {
    getAllAssessments,
    getAllModules,
    getUserAssessments
}