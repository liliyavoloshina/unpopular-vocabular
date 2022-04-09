import cors from 'cors'

import express from 'express'

import wordsRouter from './routes/words.js'

const app = express()

app.use(cors())
app.use('/api/v1/words', wordsRouter)

export default app
