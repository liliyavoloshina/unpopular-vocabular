import { errorCatcher, ErrorHandler } from '../utils/error.js'
import User from '../models/user.js'

export const getUser = errorCatcher(async (req, res, next) => {
  const user = await User.findById(req.params.id, { name: 1, email: 1 })

  if (!user) {
    return next(new ErrorHandler(`This user doesn't exist!`, 404))
  }

  res.status(200).json({ user })
})

export const updateUser = errorCatcher(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    fields: { name: 1, email: 1 },
    new: true,
    runValidators: true,
  })

  res.status(200).json({ user })
})

export const deleteUser = errorCatcher(async (req, res, next) => {
  // const word = await Word.findById(req.params.id)
  // if (!word) {
  //   return next(new ErrorHandler(`This tour doesn't exist!`, 404))
  // }
  // res.status(200).json({ word })
})
