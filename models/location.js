const mongoose = require('mongoose')


const Location = mongoose.model("Location", {
    name: {
        type: String,
        required: true
    },
    lat: String,
    long: String
})

module.exports = Location