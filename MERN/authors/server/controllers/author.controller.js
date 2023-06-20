const Author = require('../models/author.model')

module.exports = {

    getAll : (req,res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    },

    getOne : (req,res) => {
        Author.findOne({ _id : req.params.id })
            .then(author => res.json(author))
            .catch(err => res.json(err))
    },

    createOne : (req,res) => {
        Author.create(req.body)
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    updateOne : (req,res) => {
        Author.findOneAndUpdate({ _id : req.params.id }, req.body, { runValidators : true, new : true })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    deleteOne : (req, res) => {
        Author.findByIdAndDelete({ _id : req.params.id })
            .then(author => res.json(author))
            .then(err => res.json(err))
    }
}