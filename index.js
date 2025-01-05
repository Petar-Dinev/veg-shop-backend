const express = require('express');
const expressConfig = require('./configs/expressConfig');
const dbConfig = require('./configs/dbConfig');
const routesConfig = require('./configs/routes');

const PORT = 3000;

start()

async function start() {

    const app = express();

    await dbConfig(app)
    expressConfig(app)
    routesConfig(app)

    app.get('/data', (req, res) => {
        res.json(['Petar', 'Anita', 'Bojidar'])
    })

    app.listen(PORT, () => console.log(`Server listen at port ${PORT}...`)
    )
}