import cors from 'cors'

import express from 'express'

import wordsRouter from './routes/words.js'
import userRouter from './routes/user.js'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/words', wordsRouter)
app.use('/api/v1/auth', userRouter)

export default app
