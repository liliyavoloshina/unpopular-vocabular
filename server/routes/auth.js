import express from 'express'

import { signup, signin, forgotPassword, verifyUser, resetPassword } from '../controllers/auth.js'

const router = express.Router()

router.route('/signup').post(signup)
router.route('/signin').post(signin)
router.route('/forgot-password').post(forgotPassword)
router.route('/confirm-email').post(verifyUser)
router.route('/reset-password').post(resetPassword)

export default router
