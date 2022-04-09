import express from 'express'

import { getWords, getWord, updateWord } from '../controllers/words.js'

const router = express.Router()

router.route('/').get(getWords)
router.route('/:id').get(getWord).patch(updateWord)

export default router
