const Product = require('../models/product.model')

module.exports = {

    // Get all products
    getAll : (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => console.log(err))
    }

}