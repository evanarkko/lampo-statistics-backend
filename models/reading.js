const mongoose = require('mongoose')
require('mongoose-long')(mongoose)

const Reading = mongoose.model('Reading', {
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location'
    },
    temperature: {
        type: Number,
        required: true
    },
    time: {
        type: Number,
        required: true
    }
})

module.exports = Reading