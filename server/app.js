import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import path from 'path'
import express from 'express'

import wordsRouter from './routes/words.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import errorSender from './controllers/error.js'

dotenv.config({ path: './.env' })

const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
  app.get('*', (req, res) => {
    res.sendFile('dist/index.html')
  })
}

app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: [process.env.DEV_CLIENT_URL, process.env.PROD_CLIENT_URL] }))
app.use('/api/v1/words', wordsRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1', authRouter)
app.use(errorSender)

export default app
