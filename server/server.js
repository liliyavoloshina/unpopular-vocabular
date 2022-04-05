const dotenv = require('dotenv')

dotenv.config({ path: './.env' })

const mongoose = require('mongoose')

const app = require('./app')

const db = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.oedfl.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
mongoose.connect(db, { useNewUrlParser: true })

const PORT = process.env.DEV_SERVER_PORT

const server = app.listen(PORT, () => console.log(`Listening to: http://127.0.0.1:${PORT}`))

process.on('unhandledRejection', (err) => {
  console.log(err)
  server.close(() => process.exit(1))
})
