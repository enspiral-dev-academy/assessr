const router = require('express').Router()
// const verifyJwt = require('express-jwt')

const db = require('../db/students')
const userDb = require('../db/users')
const subDb = require('../db/submissions')
const { decode } = require('../auth/token')

router.get('/', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        db.getAllStudents()
            .then(students => res.json(students))
            .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
    }
})

router.get('/:id', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        userDb.userExists(req.params.id)
            .then(() => db.getStudentInfo(req.params.id))
            .then(assmts => {
                assmts = assmts.map(assmt => {
                    return subDb.getSubmissionByRecordId(assmt.assessment_record)
                        .then(subs => {
                            assmt.submissions = subs
                            return assmt
                        })
                })
                Promise.all(assmts)
                .then(assmts => res.json(assmts))
            })
            .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
    }
})

module.exports = router
