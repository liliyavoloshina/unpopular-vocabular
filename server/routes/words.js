import express from 'express'

import { getWords, getWord, updateWord, createNewWord, deleteWord } from '../controllers/words.js'

const router = express.Router()

router.route('/').get(getWords).post(createNewWord)
router.route('/:id').get(getWord).patch(updateWord).delete(deleteWord)

export default router
