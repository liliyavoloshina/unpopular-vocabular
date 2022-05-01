import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { errorCatcher, ErrorHandler } from '../utils/error.js'
import Email from '../utils/email.js'

const createAndSetToken = (user, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true
  }

  res.cookie('jwt', token, cookieOptions)

  user.password = undefined

  res.status(200).json({ user, token })
}

export const signup = errorCatcher(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    return next(new ErrorHandler(`User with this email already exist`, 400))
  }

  const confirmationToken = jwt.sign({ email: req.body.email }, process.env.JWT_SECRET)

  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    confirmationToken,
    confirmationTokenExpires: Date.now() + 10 * 60 * 1000,
  })

  try {
    const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8080' : 'https://unpopular-vocabular.herokuapp.com'

    const confirmationUrl = `${url}/confirm-email/${confirmationToken}`
    await new Email(newUser, confirmationUrl).sendConfirmation()

    res.status(200).json({
      message: 'Please confirm your email',
    })
  } catch (err) {
    user.confirmationToken = undefined
    user.confirmationTokenExpires = undefined

    await user.save({ validateBeforeSave: false })

    return next(new ErrorHandler('There was an error sending your email. Try later', 500))
  }
})

export const verifyUser = errorCatcher(async (req, res, next) => {
  const user = await User.findOne({ confirmationToken: req.body.confirmationToken })

  if (!user) {
    return next(new ErrorHandler(`Your verification link may have expired. Please click on resend for verify your email again`, 400))
  }

  user.isVerified = true
  user.confirmationToken = undefined
  user.confirmationTokenExpires = undefined

  await user.save({ validateBeforeSave: false })

  createAndSetToken(user, res)
})

export const signin = errorCatcher(async (req, res, next) => {
  const { email, password } = req.body

  if (!email || !password) {
    return next(new ErrorHandler(`Please provide email and password`, 400))
  }

  const user = await User.findOne({ email }).select('+password')

  if (!user.isVerified) {
    return next(new ErrorHandler(`Please Verify Your Email`, 401))
  }

  if (!user) {
    return next(new ErrorHandler(`User with this email does not exist`, 401))
  }

  const isCorrect = await user.checkPassword(password, user.password)

  if (!isCorrect) {
    return next(new ErrorHandler(`Incorrect email or password`, 401))
  }

  createAndSetToken(user, res)
})

export const protect = errorCatcher(async (req, res, next) => {
  const headers = req.headers.authorization
  let token

  if (headers && headers.startsWith('Bearer')) {
    token = headers.split(' ')[1]
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

// TODO: make
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
    // await sendEmail({ email: user.email, subject: 'Resetting Password', resetUrl })

    res.status(200).json({
      message: 'Token sent to email',
    })
  } catch (err) {
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined

    await user.save({ validateBeforeSave: false })

    return next(new ErrorHandler('There was an error sending your email. Try later', 500))
  }
})
