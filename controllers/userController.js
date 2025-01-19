const userController = require('express').Router();

const { errorParser } = require('../utils/parser');
const { register, login, logout } = require('../services/userService');



userController.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        if (!email || !username || !password) {
            throw new Error('All fields are required')
        }

        if (password.length < 6) {
            throw new Error('Password must be at least 6 characters long')
        }

        const newUser = await register(email, username, password)

        res.status(201).json(newUser)

    } catch (err) {
        res.status(400).json({ message: errorParser(err) })
    }
})

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            throw new Error('All fields are required')
        }

        const result = await login(email, password)

        res.json(result)

    } catch (err) {
        res.status(401).json({ message: errorParser(err) })
    }
})

userController.get('/logout', (req, res) => {
    console.log('Logout successfull', req.token);
    logout(req.token)
    res.json({ message: 'Logout successfull' })

})

module.exports = userController;