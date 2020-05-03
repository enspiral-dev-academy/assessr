const router = require('express').Router()
// const verifyJwt = require('express-jwt')

const db = require('../db/students')
const { decode } = require('../auth/token')

router.get('/', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        db.getAllStudents()
            .then(students => res.json(students))
    }
})

router.get('/:id', decode, (req, res) => {
    const {user_type} = req.user
    if(user_type != 'teacher') {
        res.json({})
    } else {
        db.getStudentInfo(req.params.id)
            .then(assmts => res.json(assmts))
    }
})

module.exports = router
