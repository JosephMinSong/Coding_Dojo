const Product = require('../models/product.model')

module.exports = {

    // Get all products
    getAll : (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => console.log(err))
    },

    // Create one product
    create : (req, res) => {
        Product.create(req.body)
            .then(oneProduct => res.json(oneProduct))
            .catch(err => console.log(err))
    }

}