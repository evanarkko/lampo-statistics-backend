const readingRouter = require('express').Router()
const Location = require('../models/location')
const Reading = require('../models/reading')

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

        let updatedFields = {
            latest: {
                temp: 284.15,
                added: ''
            },
            recent: {
                high: 286.15,
                low: 280.15,
                avg: 283.65
            }
        }

        res.status(201).json(newReading)

    } catch (e) {
    }
})

module.exports = readingRouter