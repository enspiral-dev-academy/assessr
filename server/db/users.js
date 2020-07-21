const {generatePasswordHash} = require('../auth/hash')

const connection = require('./connection')

function createUser (actual_name, user_name, password, user_type, testDb) {
  const db = testDb || connection

  return generatePasswordHash(password)
    .then(hash => {
      return db('users')
        .insert({actual_name, user_name, hash, user_type}, 'id')
    })
}

function userExists (user_name, testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_name', user_name)
    .then(users => users.length > 0)
}

function getUserByUsername (user_name, testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_name', user_name).first()
    .then(user => {
      if (!user) throw new Error('User doesn\'t exist')
      return db('users')
      .where('user_name', user_name).first()
    })
}

function getNewUsers (testDb) {
  const db = testDb || connection

  return db('users')
    .where('user_type', null)
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getNewUsers
}
