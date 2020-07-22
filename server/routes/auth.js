const router = require('express').Router()

const { userExists, createUser, getNewUsers } = require('../db/users')
const { addNewStudent } = require('../db/students')
const token = require('../auth/token')


router.get('/users', token.decode, (req, res) => {
  const {user_type} = req.user
  if(user_type != 'teacher') {
      res.json({})
  } else {
      getNewUsers()
          .then(users => res.json(users))
  }
})

router.post('/register', register, token.issue)
// TODO: Register should also add data to student/teacher table as needed
function register (req, res, next) {
  const { actual_name, user_name, password, user_type } = req.body
  userExists(user_name)
    .then(exists => {
      if (exists) return res.status(400).send({ message: "Username Taken" })

      createUser(actual_name, user_name, password, user_type)
        .then(user_id => {
          if (user_type == 'teacher') {
            // TODO: store campus info in a teachers table
          } else {
            return addNewStudent({
              user_id,
              cohort_id: 64 // TODO: Base this on user input
            })
          }
        })
        .then(() => next())
        .catch(err => res.status(500).send({message: "Server Error"}))
    })
    .catch(err => res.status(500).send({message: "Server Error"}))
}

router.post('/login', token.issue)

module.exports = router
