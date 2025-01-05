const express = require('express');
const expressConfig = require('./configs/expressConfig');

const PORT = 3000;

start()

function start() {

    const app = express();

    expressConfig(app)

    app.get('/data', (req, res) => {
        res.json(['Petar', 'Anita', 'Bojidar'])
    })

    app.listen(PORT, () => console.log(`Server listen at port ${PORT}...`)
    )
}