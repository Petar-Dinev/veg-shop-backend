const mainRouter = require('express').Router()

const userController = require('../controllers/userController')

module.exports = (app) => {
    mainRouter.use('/users', userController)
    app.use(mainRouter)
}