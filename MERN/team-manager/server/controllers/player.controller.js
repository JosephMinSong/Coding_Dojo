const Player = require('../models/player.model')

module.exports = {

    getAll : (req,res) => {
        Player.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    }
}