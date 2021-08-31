const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: ''
})

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

const port = process.env.PORT || 4545

app.listen(port, () => {
    console.log('Server up on 4545')
})