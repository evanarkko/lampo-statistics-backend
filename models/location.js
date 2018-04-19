const mongoose = require('mongoose')


const Location = mongoose.model("Location", {
    name: {
        type: String,
        required: true
    },
    lat: String,
    long: String,
    readings: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Reading'
    }]
})

module.exports = Location