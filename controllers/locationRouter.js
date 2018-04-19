const locationRouter = require('express').Router()

let mockLocations = [
    {
        name: 'Tokyo',
        lat: 35.658,
        long: 139.733,
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
    ,
    {
        name: 'Helsinki',
        lat: 60.170,
        long: 24.949,
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

locationRouter.get('/', (req, res) => {
    console.log('get call')
    res.json(mockLocations)
})

module.exports = locationRouter