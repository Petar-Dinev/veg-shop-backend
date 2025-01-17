const express = require('express')
const cors = require('../middlewares/cors')
const trimBody = require('../middlewares/trimBody')

module.exports = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(trimBody())
}