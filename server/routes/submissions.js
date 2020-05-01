const router = require('express').Router()
// const verifyJwt = require('express-jwt')

const db = require('../db/submissions')
const { decode } = require('../auth/token')

router.get('/', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        db.getPendingSubmissions()
            .then(subs => {
                return subs.reduce((arr, sub) => {
                    let match = arr.find(elem => elem.record_id == sub.student_assessment_id)
                    if(match) {
                        match.submissions.push(sub)
                    } else {
                        arr.push({
                            record_id: sub.student_assessment_id,
                            submissions: [sub]
                        })
                    }
                    return arr
                }, [])
            })
            .then(records => {
                records = records.map(record => {
                    return db.getStudentByRecordId(record.record_id)
                        .then(student => ({...record, ...student}))
                })
                Promise.all(records).then(arr => res.json(arr))
            })
    }
})

module.exports = router
