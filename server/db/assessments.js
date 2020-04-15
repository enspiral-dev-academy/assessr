const connection = require('./connection')

function getAllModules (testDb) {
    const db = testDb || connection

    return db('modules')
}

function getAllAssessments (testDb) {
    const db = testDb || connection

    return db('assessments')
}

module.exports = {
    getAllAssessments,
    getAllModules
}