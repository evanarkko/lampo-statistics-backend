const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const locationRouter = require('./controllers/locationRouter')

app.use(cors())
app.use(bodyParser.json())
app.use('/api/locations', locationRouter)

const server = http.createServer(app)
const PORT = process.env.port || 3001

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})