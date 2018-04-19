const mongoose = require('mongoose')
require('mongoose-long')(mongoose)

/*Readingin ja locationin kytkentä hyvin löyhä*/

const readingSchema = new mongoose.Schema({
    locationName: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    timeStamp: {
        type: Number,
        required: true
    }
})

readingSchema.statics.format = (reading) => {
    return{
        id: reading.id,
        locationName: reading.locationName,
        temperature: reading.temperature,
        timeStamp: reading.timeStamp
    }
}

const Reading = mongoose.model('Reading', readingSchema)

module.exports = Reading