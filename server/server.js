const express = require('express')
const cors = require('cors')

const authRoutes = require('./routes/auth')
const assmtRoutes = require('./routes/assessments')
const subRoutes = require('./routes/submissions')

const server = express()

server.use(cors('*'))
server.use(express.json())
server.use(express.static('public'))


server.use('/api/auth', authRoutes)
server.use('/api/assessments', assmtRoutes)
server.use('/api/submissions', subRoutes)


module.exports = server
