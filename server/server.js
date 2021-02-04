const path = require('path')
const express = require("express")

const authRoutes = require("./routes/auth")
const assmtRoutes = require("./routes/assessments")
const subRoutes = require("./routes/submissions")
const studentRoutes = require("./routes/students")

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, "public")))

server.use("/api/auth", authRoutes)
server.use("/api/assessments", assmtRoutes)
server.use("/api/submissions", subRoutes)
server.use("/api/students", studentRoutes)

module.exports = server
