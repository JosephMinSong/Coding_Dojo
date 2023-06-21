const Player = require('../models/player.model')

module.exports = {

    getAll : (req,res) => {
        Player.find()
            .then(players => res.json(players))
            .catch(err => res.json(err))
    },

    create : (req, res) => {
        Player.create(req.body)
            .then(player => res.json(player))
            .catch(err => res.json(err))
    }
}