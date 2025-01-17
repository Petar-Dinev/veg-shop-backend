const userController = require('../controllers/userController')

module.exports = (app) => {
    app.use('/users', userController)
}