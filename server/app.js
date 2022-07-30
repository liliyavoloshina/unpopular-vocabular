import cors from 'cors'

import express from 'express'

import wordsRouter from './routes/words.js'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import errorSender from './controllers/error.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/words', wordsRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1', authRouter)
app.use(errorSender)

export default app
