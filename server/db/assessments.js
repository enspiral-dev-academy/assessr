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
        .where('user_name', name).first()
        .then(user => {
            if (!user) throw new Error('User doesn\'t exist')
            return db('users')
            .join('students_assessments', 'users.id', 'students_assessments.user_id')
            .where('user_name', name)
            .select('assessment_code AS code', 'status', 'students_assessments.id AS assessment_record')
        })
}

function getUserAssessment (id, code, testDb) {
    const db = testDb || connection

    return db('students_assessments')
        .where('user_id', id).first()
        .then(user => {
            if (!user) throw new Error('User doesn\'t exist')
            return db('students_assessments')
            .where('user_id', id)
            .andWhere('assessment_code', code)
            .first()
        })
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

function markAsComplete (id, testDb){
    const db = testDb || connection

    return db('students_assessments')
        .where('id', id).first()
        .then(assmt => {
            if (!assmt) throw new Error('ID doesn\'t exist')
            return db('students_assessments')
            .where('id', id)
            .update({ status: 'complete' })
        })
}

function markAsInProgress (id, testDb){
    const db = testDb || connection

    return db('students_assessments')
        .where('id', id).first()
        .then(assmt => {
            if (!assmt) throw new Error('ID doesn\'t exist')
            return db('students_assessments')
            .where('id', id)
            .update({ status: 'in progress' })
        })
}

module.exports = {
    getAllAssessments,
    getAllModules,
    getUserAssessments,
    getUserAssessment,
    createRecord,
    saveSubmission,
    markAsComplete,
    markAsInProgress
}