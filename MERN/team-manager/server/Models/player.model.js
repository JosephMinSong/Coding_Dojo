const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please enter a name'],
        minlength: [1, 'Player name must be at least 2 characters long']
    },

    prefPosition : {
        type: String
    }
}, { timestamps: true })

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player