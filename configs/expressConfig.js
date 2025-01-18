const express = require('express')
const cors = require('../middlewares/cors')
const trimBody = require('../middlewares/trimBody')
const session = require('../middlewares/session')

module.exports = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(trimBody())
    app.use(session())
}