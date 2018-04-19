const mongoose = require('mongoose')

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lat: String,
    long: String
})

locationSchema.statics.format = (location) => {
    return{
        id: location.id,
        name: location.name,
        lat: location.lat,
        long: location.long
    }
}

const Location = mongoose.model("Location", locationSchema)

module.exports = Location