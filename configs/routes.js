const userController = require('../controllers/userController')
const productController = require('../controllers/productController')

module.exports = (app) => {
    app.use('/users', userController)
    app.use('/products', productController)
}