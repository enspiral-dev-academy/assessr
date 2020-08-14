const connection = require('./connection')

function getAllStudents (testDb) {
    const db = testDb || connection

    return db('students')
        .select('students.*', 'actual_name')
        .join('users', 'students.user_id', 'users.id') 
}

function getStudentInfo (id, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .where('user_id', id)
        .select('assessment_code AS code', 'status', 'students_assessments.id AS assessment_record')
}

module.exports = {
    getAllStudents,
    getStudentInfo
}