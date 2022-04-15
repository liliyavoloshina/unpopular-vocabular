import { promisify } from 'util'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
import { errorCatcher, ErrorHandler } from '../utils/error.js'

const createAndSendToken = (user, res) => {
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

  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  })

  createAndSendToken(newUser, res)
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

  const isCorrect = await user.checkPassword(password, user.password)

  if (!isCorrect) {
    return next(new ErrorHandler(`Incorrect email or password`, 401))
  }

  createAndSendToken(user, res)
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
