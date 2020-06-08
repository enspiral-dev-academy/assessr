const connection = require('./connection')

function getAllStudents (testDb) {
    const db = testDb || connection

    return db('students')
}

function getStudentInfo (id, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .select('assessment_code AS code', 'status', 'students_assessments.id AS assessment_record')
        .where('user_id', id)
}

module.exports = {
    getAllStudents,
    getStudentInfo
}