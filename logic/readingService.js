const Reading = require('../models/reading')

const allReadingsByLocationName = async (locationName) => {
    const readings = await Reading.find({"locationName": locationName})
    return readings.map(Reading.format)
}

const latestReading = (readings) => {
    if(readings.length === 0) return null

    return readings
        .reduce((latest, current) =>
            latest.timeStamp > current.timeStamp ?
                latest : current
        )
}




module.exports = {
    allReadingsByLocationName,
    latestReading
}