import express from 'express'

import { getWords, getWord } from '../controllers/words.js'

const router = express.Router()

router.route('/').get(getWords)
router.route('/:id').get(getWord)

export default router
