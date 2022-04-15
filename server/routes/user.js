import express from 'express'

import { signup, signin, forgotPassword } from '../controllers/user.js'

const router = express.Router()

router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/forgot-password').post(forgotPassword)

export default router
