import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'

import wordsRouter from './routes/words.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import errorSender from './controllers/error.js'

const __dirname = path.resolve()

dotenv.config({ path: './.env' })

const app = express()

// if (process.env.NODE_ENV === 'production') {
app.use('/', express.static(`${__dirname}/client/dist`))
// }

app.use(cookieParser())
app.use(express.json())
app.use(cors({ credentials: true, origin: [process.env.DEV_CLIENT_URL, process.env.PROD_CLIENT_URL] }))
app.use('/api/v1/words', wordsRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1', authRouter)
app.use(errorSender)

// if (process.env.NODE_ENV === 'production') {
app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/client/dist/index.html`)
})
// }

export default app
