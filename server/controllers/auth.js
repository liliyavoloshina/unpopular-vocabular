import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import User from '../models/user.js'
import { errorCatcher, ErrorHandler } from '../utils/error.js'
import Email from '../utils/email.js'

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })

const createAndSetToken = (user, req, res) => {
  const token = signToken(user._id)

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: 'None',
    secure: process.env.NODE_ENV !== 'development',
  }

  res.cookie('jwt', token, cookieOptions)

  user.password = undefined

  res.status(200).json({ user, token })
}

export const signup = errorCatcher(async (req, res, next) => {
  let user = await User.findOne({ email: req.body.email })

  if (user) {
    return next(new ErrorHandler(`User with this email already exist`, 400))
  }

  const confirmationToken = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET)

  const newUser = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  }

  user = await User.create({
    ...newUser,
    confirmationToken,
    confirmationTokenExpires: Date.now() + process.env.CONFIRMATION_TOKEN_EXPIRES_IN * 60 * 1000,
  })

  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://unpopular-vocabular.herokuapp.com'
  const confirmationUrl = `${url}/confirm-email/${confirmationToken}`

  try {
    await new Email(newUser, confirmationUrl).sendConfirmation()

    res.status(200).json({ user: newUser, message: 'Confirmation link was sent to your email' })
  } catch (err) {
    await User.findByIdAndDelete(user.id)

    return next(new ErrorHandler('There was an error sending message to your email. Please try to signup again', 500))
  }
})

export const verifyUser = errorCatcher(async (req, res, next) => {
  const user = await User.findOne({ confirmationToken: req.body.confirmationToken })

  if (!user) {
    return next(new ErrorHandler(`Error occuried. Please try to signup again`, 400))
  }

  if (user.confirmationTokenExpires < Date.now()) {
    await User.findByIdAndDelete(user.id)
    return next(new ErrorHandler(`Your verification link may have expired. Please try to signup again`, 400))
  }

  user.isVerified = true
  user.confirmationToken = undefined
  user.confirmationTokenExpires = undefined

  await user.save({ validateBeforeSave: false })

  createAndSetToken(user, req, res)
})

export const signin = errorCatcher(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorHandler(`Please provide email and password`, 400))
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorHandler(`User with this email does not exist`, 401))
  }

  if (!user.isVerified) {
    return next(new ErrorHandler(`Please verify your email`, 401))
  }

  const isCorrect = await user.checkPassword(password, user.password)

  if (!isCorrect) {
    return next(new ErrorHandler(`Incorrect email or password`, 401))
  }

  createAndSetToken(user, req, res)
})

export const protect = errorCatcher(async (req, res, next) => {
  const headers = req.headers.authorization
  let token

  if (headers && headers.startsWith('Bearer')) {
    token = headers.split(' ')[1]
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt
  }

  if (!token) {
    return next(new ErrorHandler(`You are not authorized. Please login to proceed`, 401))
  }

  const decodedToken = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

  const user = await User.findById(decodedToken.id)

  if (!user) {
    return next(new ErrorHandler(`The user with this token does not longer exist`, 401))
  }

  req.user = user

  next()
})

export const forgotPassword = errorCatcher(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (!user) {
    return next(new ErrorHandler('User with this email does not exist', 404))
  }

  const resetToken = user.createPasswordResetToken()

  await user.save({ validateBeforeSave: false })

  const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://unpopular-vocabular.herokuapp.com'

  const resetUrl = `${url}/reset-password/${resetToken}`

  try {
    await new Email(user, resetUrl).sendForgotPassword()

    res.status(200).json({ user, message: 'Instructions for resetting your password were sent to your email' })
  } catch (err) {
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined

    await user.save({ validateBeforeSave: false })

    return next(new ErrorHandler('There was an error sending message to your email. Try later', 500))
  }
})

export const resetPassword = errorCatcher(async (req, res, next) => {
  const hashed = crypto.createHash('sha256').update(req.body.token).digest('hex')
  const user = await User.findOne({ passwordResetToken: hashed, passwordResetExpires: { $gt: Date.now() } })

  if (!user) {
    return next(new ErrorHandler('Password ressetting procedure time was expired!', 400))
  }

  user.password = req.body.newPassword

  user.resetPassword = undefined
  user.passwordResetExpires = undefined

  await user.save()

  createAndSetToken(user, req, res)
})
