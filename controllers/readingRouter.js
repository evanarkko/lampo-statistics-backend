const readingRouter = require('express').Router()
const Location = require('../models/location')
const Reading = require('../models/reading')
const readingService = require('../logic/readingService')
const arithmeticLogic = require('../logic/arithmeticLogic')

readingRouter.post('/', async (req, res) => {
    try {
        const location = await Location
            .findOne({ name: req.body.locationName })

        console.log(req.body)

        const reading = new Reading({
            locationName: req.body.locationName,
            temperature: req.body.temperature,
            timeStamp: new Date()
        })

        await reading.save()

        res.status(201).json(reading.format)
    } catch (e) {
        res.status(500)
    }
})

readingRouter.get('/structured/:name', async (req, res) => {

    let readings = await readingService.allReadingsByLocationName(req.params.name)

    let recentReadings = readings.filter(r => arithmeticLogic.withinHours(r.timeStamp, 24))

    let high = arithmeticLogic.highest(recentReadings)
    let low = arithmeticLogic.lowest(recentReadings)
    let avg = arithmeticLogic.average(recentReadings)

    let mostRecent = readingService.latestReading(readings)

    let recent = recentReadings.length > 0 ?
        {
            high: high.temperature,
            low: low.temperature,
            avg: avg
        } :
        null

    let latest = mostRecent ?
        {
            temp: mostRecent.temperature,
            added: new Date(mostRecent.timeStamp).toUTCString()
        } :
        null

    const sendToClient = {
        latest: latest,
        recent: recent
    }


    res.json(sendToClient)
})

module.exports = readingRouter