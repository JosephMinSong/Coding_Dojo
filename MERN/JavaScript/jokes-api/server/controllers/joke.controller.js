const { ObjectId } = require('mongodb')
const Joke = require('../models/joke.model')

module.exports = {

    // GET ALL
    getAll : (req, res) => {
        Joke.find()
            .then(allJokes => res.json(allJokes))
            .catch(err => res.json(err))
    },

    // GET ONE
    getOne : (req, res) => {
        Joke.findOne({ _id : req.params.id })
            .then(oneJoke => res.json(oneJoke))
            .catch(err => res.json(err))
    },

    // GET RANDOM JOKE
    getRandom : (req, res) => {
        Joke.find()
            .then(allJokes => {
                const randomNum = Math.floor(Math.random() * (allJokes.length))
                res.json(allJokes[randomNum])
            })
            .catch(err => res.json(err))
    },

    // CREATE
    createJoke : (req, res) => {
        Joke.create(req.body)
            .then(joke => res.json(joke))
            .catch(err => res.status(404).json(err))
    },

    // PATCH 
    patchOne : (req, res) => {
        Joke.findOneAndUpdate(
            { _id : req.params.id }, 
            req.body, 
            {runValidators: true, new: true}
            )
            .then(joke => res.json(joke))
            .catch(err => res.status(404).json(err))
    },

    //DELETE
    deleteOne : (req, res) => {
        Joke.deleteOne({ _id : req.params.id })
            .then(joke => res.json(joke))
            .catch(err => res.json(err))
    }

}