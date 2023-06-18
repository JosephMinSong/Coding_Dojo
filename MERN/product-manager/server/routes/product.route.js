const ProductController = require('../controllers/product.controller')

module.exports = app => {

    // Get all products
    app.get('/api/products', ProductController.getAll)

    // Get one product
    app.get('/api/products/:id', ProductController.getOne)

    // Create
    app.post('/api/products', ProductController.create)

    // Edit
    app.put('/api/products/:id/edit', ProductController.edit)

    // Delete
    app.delete('/api/products/:id', ProductController.delete)

}