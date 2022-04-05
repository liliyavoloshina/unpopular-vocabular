const express = require('express')

const app = express()

const cors = require('cors')

const wordsRouter = require('./routes/words')

app.use(cors())
app.use('/api/v1/words', wordsRouter)

module.exports = app
