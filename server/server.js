require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const uri = process.env.MONGODB_URI;
global.Vocab = require('./api/models/vocabModel')
const routes = require('./api/routes/vocabRoutes')
mongoose.Promise = global.Promise
mongoose.set('useFindAndModify', false)
mongoose.connect(
  uri,
  // `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@unpopular-vocabular-clu.wiqoo.mongodb.net/unpopular-vocabular`,
  { useNewUrlParser: true, useUnifiedTopology: true }
)

const port = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
routes(app)
app.listen(port)
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl} not found` })
})

console.log(`Server started on port ${port}`)
process.on('unhandledRejection', (err) => {
  throw err
})
