const locationRouter = require('express').Router()
const Location = require('../models/location')
const readingService = require('../logic/readingService')

let mockLocations = [
    {
        name: 'Tokyo',
        lat: 35.658,
        long: 139.733
    }
    ,
    {
        name: 'Helsinki',
        lat: 60.170,
        long: 24.949,
        latest: {
            temp: 284.15,
            added: ''
        }
    },
    {
        name: 'New York',
        lat: 40.740,
        long: -73.994,
        latest: {
            temp: 284.15,
            added: ''
        },
        recent: {
            high: 286.15,
            low: 280.15,
            avg: 283.65
        }

    },
    {
        name: 'Amsterdam',
        lat: 52.365,
        long: 4.904,
        latest: {
            temp: 284.15,
            added: ''
        },
        recent: {
            high: 286.15,
            low: 280.15,
            avg: 283.65
        }
    },
    {
        name: 'Dubai',
        lat: 25.093,
        long: 55.156,
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
]

locationRouter.get('/', async (req, res) => {
    let clientQueue = []
    let sendToCli = {}

    const queryResults = await Location.find({})
    const formattedResults = queryResults.map(Location.format)

    console.log(formattedResults)

    formattedResults.forEach(async (location) => {
        clientQueue = clientQueue.concat({
            name: location.name,
            lat: location.lat,
            long: location.long,
            latest: {temp: 285, added: 'yesterday'}
        })
    })



    /*console.log(readingService.latestReading(await readingService.allReadingsByLocationName(location.name)))*/
    /*for entry (name)
        * getReadingsbylocationname
         * return  latest: {temp: val, added: timeStamp}
         * get "within 24h" subgroup
         *  return recent: {hi, lo, avg}*/

    res.json(mockLocations.concat(clientQueue))
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

    }
})


module.exports = locationRouter