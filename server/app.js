const express = require('express')

const app = express()

const wordsRouter = require('./routes/words')

app.use('/api/v1/words', wordsRouter)

module.exports = app
