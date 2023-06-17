const jokeController = require('../controllers/joke.controller')

module.exports = app => {

    // Returns a list of all jokes
    app.get('/api/jokes', jokeController.getAll)

    // Returns a random joke from existing jokes
    app.get('/api/jokes/random', jokeController.getRandom)

    // Returns one joke with a matching id
    app.get('/api/jokes/:id', jokeController.getOne)

    // Adds a new joke to the database
    app.post('/api/jokes', jokeController.createJoke)

    // Partially updates an existing joke with a matching id
    app.patch('/api/jokes/:id', jokeController.patchOne)

    // Removes a joke with a matching id
    app.delete('/api/jokes/:id', jokeController.deleteOne)

}