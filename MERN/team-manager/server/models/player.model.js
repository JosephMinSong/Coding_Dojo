const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Please enter a name'],
        minlength : [2, 'Author name must be at least 2 characters long']
    },

    prefPosition : {
        type: String
    },

    game1 : {
        type: Number,
        default : 3
    },

    game2: {
        type: Number,
        default : 3
    },

    game3: {
        type: Number,
        default: 3
    }
}, { timestamps : true })

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player