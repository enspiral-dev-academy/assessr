const router = require('express').Router()
// const verifyJwt = require('express-jwt')

const { decode } = require('../auth/token')
const db = require('../db/submissions')
const assmtDb = require('../db/assessments')


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

router.patch('/done/:id', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        const record_id = req.params.id
        assmtDb.markAsComplete(record_id)
            .then(() => db.markAllReviewed(record_id))
            .then(() => res.json({})) 
        // TODO: work out what to res.json back
    }
})

router.patch('/reviewed/:id', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        const record_id = req.params.id
        const idArr = req.body

        console.log('id', record_id)
        console.log('ids', idArr)
        res.json({})
        // mark as reviewed
	    // if no more to review, mark as in progress
        // TODO: work out what to res.json back
    }
})

module.exports = router
