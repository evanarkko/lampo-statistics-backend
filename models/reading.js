const mongoose = require('mongoose')
require('mongoose-long')(mongoose)

/*Readingin ja locationin kytkentä hyvin löyhä*/

const Reading = mongoose.model('Reading', {
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

module.exports = Reading