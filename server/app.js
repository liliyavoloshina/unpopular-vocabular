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

//here we are configuring dist to serve app files
app.use('/', express.static(path.join('dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, (req, res) => {
  res.sendFile(path.join('dist/index.html'))
})

app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: [process.env.DEV_CLIENT_URL, process.env.PROD_CLIENT_URL] }))
app.use('/api/v1/words', wordsRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1', authRouter)
app.use(errorSender)

// app.use(express.static(path.join('/dist')))

export default app
