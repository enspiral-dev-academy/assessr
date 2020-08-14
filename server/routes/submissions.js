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
                Promise.all(records)
                .then(arr => res.json(arr))
            })
            .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
    }
})

router.patch('/done/:id', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type !== 'teacher') {
        res.json({})
    } else {
        const record_id = req.params.id
        assmtDb.assessmentExists(record_id)
            .then(() => assmtDb.markAsComplete(record_id))
            .then(() => db.markAllReviewed(record_id))
            .then(() => res.json({}))
            // TODO: work out what to res.json back
            .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
    }
})

router.patch('/reviewed/:id', decode, (req, res) => {
    const {user_type} = req.user
    const record_id = req.params.id

    if(user_type != 'teacher') {
        res.json({})
    } else {
        const idArr = [req.body] // TODO: check if this works?
        const markAllReviewed = idArr.map(id => db.submissionExists()
                .then(() => markOneReviewed(id))
            )

        return Promise.all(markAllReviewed)
            .then(() => db.getIncompleteByRecordId(record_id))
            .then(itemsStillToReview => {
                if(itemsStillToReview.length == 0) {
                    return assmtDb.assessmentExists(record_id)
                        .then(() => markAsInProgress(record_id))
                }
            })
            .then(() => res.json({})) 
            // TODO: work out what to res.json back
            .catch(err => res.status(500).json({err: 'Server Error', message: err.message}))
    }
})

module.exports = router
