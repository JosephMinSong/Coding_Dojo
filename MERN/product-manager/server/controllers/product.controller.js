const Product = require('../models/product.model')

module.exports = {

    // Get all products
    getAll : (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    },

    // Get one product
    getOne : (req, res) => {
        Product.findOne({ _id : req.params.id })
            .then(one => res.json(one))
            .catch(err => res.json(err))
    },

    // Create one product
    create : (req, res) => {
        Product.create(req.body)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.status(400).json(err))
    }

}