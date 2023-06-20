const Author = require('../models/author.model')

module.exports = {
    getAll : (req,res) => {
        Author.find()
            .then(authors => res.json(authors))
            .catch(err => res.json(err))
    }
}