const path = require('path')
const envPath = path.join(__dirname, '.env')
const envConfig = require("dotenv").config({ path: envPath })
if (envConfig.error) throw envConfig.error

const server = require("./server")
const PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log("Listening on port", PORT)
})
