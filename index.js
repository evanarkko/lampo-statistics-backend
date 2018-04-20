const express = require('express')
const app = express()
const http = require('http')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const locationRouter = require('./controllers/locationRouter')
const readingRouter = require('./controllers/readingRouter')
require('dotenv').config()

mongoose.connect('mongodb://lordevan7:yu6uahea@ds147459.mlab.com:47459/lampo_readings')
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use('/api/locations', locationRouter)
app.use('/api/readings', readingRouter)
app.use(express.static('build'))

const server = http.createServer(app)
const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})

server.on('close', () => {
    mongoose.connection.close()
})