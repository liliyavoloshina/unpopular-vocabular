import express from 'express'

import { getWords, getWord, updateWord, createNewWord, deleteWord } from '../controllers/words.js'
import { protect } from '../controllers/auth.js'

const router = express.Router()

router.route('/').get(getWords).post(protect, createNewWord)
router.route('/:id').get(getWord).patch(protect, updateWord).delete(protect, deleteWord)

export default router
