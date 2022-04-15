import jwt from 'jsonwebtoken'
import User from '../models/user.js'

// eslint-disable-next-line import/prefer-default-export
export const signup = async (req, res) => {
  const newUser = await User.create({
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
  })

  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET)

  const cookieOptions = {
    expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true
  }

  res.cookie('jwt', token, cookieOptions)

  newUser.password = undefined

  res.status(201).json({
    status: 'success',
    token,
    data: { newUser },
  })
}
