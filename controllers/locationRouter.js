const locationRouter = require('express').Router()
const Location = require('../models/location')

locationRouter.get('/', async (req, res) => {

    const queryResults = await Location.find({})
    const formattedResults = queryResults.map(Location.format)

    res.json(formattedResults)
})

locationRouter.post('/', (req, res) => {
    try {
        console.log('post call')
        const body = req.body
        console.log(body)

        const location = new Location({
            name: body.name,
            lat: body.lat,
            long: body.long,
            readings: []
        })
        console.log('attempting location save')
        location.save()

        res.status(200)
    } catch (e) {
        res.status(500)
    }
})


module.exports = locationRouter