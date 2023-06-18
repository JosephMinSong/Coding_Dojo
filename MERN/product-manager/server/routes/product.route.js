const ProductController = require('../controllers/product.controller')

module.exports = app => {

    // Get all products
    app.get('/api/products', ProductController.getAll)

    // Create
    app.post('/api/products', ProductController.create)

}