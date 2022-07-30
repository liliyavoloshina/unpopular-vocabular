import express from 'express'

import { getUser, updateUser } from '../controllers/user.js'
import { protect } from '../controllers/auth.js'

const router = express.Router()

router.route('/:id').get(protect, getUser).patch(protect, updateUser)
// router.route('/:id').get(getUser).patch(protect, updateWord).delete(protect, deleteWord)

export default router
