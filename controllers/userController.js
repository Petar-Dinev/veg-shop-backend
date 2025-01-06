const userController = require('express').Router();


userController.post('/register', (req, res) => {
    const { email, username, password } = req.body;
    console.log(email);
    res.status(204).end()
})

userController.post('/login', (req, res) => {
    console.log('Login successfull', req.body);
    res.status(204).end()
})

userController.get('/logout', (req, res) => {
    console.log('Logout successfull', req.body);
    res.status(204).end()
})

module.exports = userController;