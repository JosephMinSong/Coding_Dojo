const ProductController = require('../controllers/product.controller')

module.exports = app => {

    // Get all products
    app.get('/api/products', ProductController.getAll)

}