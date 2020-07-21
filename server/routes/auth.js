const router = require('express').Router()

const { userExists, createUser, getNewUsers } = require('../db/users')
const token = require('../auth/token')


router.get('/users', token.decode, (req, res) => {
  const {user_type} = req.user
  if(user_type != 'teacher') {
      res.json({})
  } else {
      getNewUsers()
          .then(users => res.json(users))
          .catch(err => res.status(500).send({err: 'Server Error', message: err.message}))
  }
})

router.post('/register', register, token.issue)
// TODO: Register should also add data to student/teacher table as needed
function register (req, res, next) {
  const { actual_name, user_name, password, user_type } = req.body
  userExists(user_name)
    .then(exists => {
      if (exists) return res.status(400).send({ message: 'Username Taken' })

      createUser(actual_name, user_name, password, user_type)
        .then(() => next())
    })
    .catch(err => res.status(500).send({err: 'Server Error', message: err.message}))
}

router.post('/login', token.issue)

module.exports = router
