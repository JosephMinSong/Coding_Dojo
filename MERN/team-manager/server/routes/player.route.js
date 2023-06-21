const PlayerController = require('../controllers/player.controller')

module.exports = app => {

    app.get('/api/players', PlayerController.getAll)

}