import dotenv from 'dotenv'

import mongoose from 'mongoose'

import app from './app.js'

dotenv.config({ path: './.env' })

const db = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@cluster0.oedfl.mongodb.net/${process.env.DATABASE_NAME}?retryWrites=true&w=majority`
mongoose.connect(db, { useNewUrlParser: true })

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening to: http://127.0.0.1:${process.env.PORT || 3000}`))

process.on('unhandledRejection', (err) => {
  console.log(err)
  server.close(() => process.exit(1))
})
