const { register, login } = require('../services/userService');

const userController = require('express').Router();


userController.post('/register', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        const newUser = await register(email, username, password)
        res.json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await login(email, password)
        res.json(result)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

userController.get('/logout', (req, res) => {
    console.log('Logout successfull', req.body);
    res.status(204).end()
})

module.exports = userController;