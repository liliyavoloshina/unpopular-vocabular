import express from 'express'

import { getUser, updateUser, deleteUser } from '../controllers/user.js'
import { protect } from '../controllers/auth.js'

const router = express.Router()

router.route('/:id').get(protect, getUser).patch(protect, updateUser).delete(protect, deleteUser)

export default router
