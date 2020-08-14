const router = require('express').Router()

const { decode } = require('../auth/token')

const db = require('../db/assessments')
const userDb = require('../db/users')
const subDb = require('../db/submissions')

router.get('/', decode, (req, res) => {
    userDb.usernameExists(req.user.user_name)
        .then(() => db.getUserAssessments(req.user.user_name))
        .then(assmts => {
            let queries = assmts.map(obj => {
                return subDb.getSubmissionByRecordId(obj.assessment_record)
                    .then(subs => {
                        obj.evidence = subs
                        return obj
                    })
            })
            return Promise.all(queries)
        })
        .then(arr => res.json(arr))
        .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
})

router.post('/submission', decode, (req, res) => {
    let {code, evidence} = req.body
    let {user_name} = req.user

    userDb.usernameExists(user_name)
        .then(() => userDb.getUserByUsername(user_name))
        .then(user => user.id)
        .then(user_id => {
            return db.getUserAssessment(user_id, code)
                .then(record => (record === undefined) ? db.createRecord(user_id, code).then(arr => arr[0]) : record.id)
        })
        .then(student_assessment_id => {
            let sub = {
                student_assessment_id,
                evidence,
                reviewed: false
            }
            return db.saveSubmission(sub)
                .then(() => res.json({record_id: student_assessment_id}))
                
            })
        .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
})


// router.get('/', (req, res) => {
//     let modules = null
//     db.getAllModules()
//         .then(mods => {
//             modules = mods
//             return db.getAllAssessments()
//         })
//         .then(assmts => collate(modules, assmts))
//         .then(result => res.json(result))
//         .catch(err => res.status(500).json({message: "Server Error"}))
// })

// function collate(modules, assessments) {
//     modules = modules.map(mod => ({...mod, assessments:[]}))
//     return assessments.reduce((mods, assmt) => {
//         mods.forEach((mod) => {
//             if(mod.id == assmt.module_id) mod.assessments.push(assmt)
//         })
//         return mods
//     }, modules)
// }

module.exports = router
