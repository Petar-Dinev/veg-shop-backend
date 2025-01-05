const express = require('express');
const expressConfig = require('./configs/expressConfig');
const dbConfig = require('./configs/dbConfig');

const PORT = 3000;

start()

async function start() {

    const app = express();

    expressConfig(app)
    await dbConfig(app)

    app.get('/data', (req, res) => {
        res.json(['Petar', 'Anita', 'Bojidar'])
    })

    app.listen(PORT, () => console.log(`Server listen at port ${PORT}...`)
    )
}