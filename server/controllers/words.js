import Word from '../models/word.js'
import { errorCatcher, ErrorHandler } from '../utils/error.js'

export const getWords = errorCatcher(async (req, res) => {
  const words = await Word.find()
  res.status(200).json({ words })
})

export const getWord = errorCatcher(async (req, res, next) => {
  const word = await Word.findById(req.params.id)

  if (!word) {
    return next(new ErrorHandler(`This tour doesn't exist!`, 404))
  }

  res.status(200).json({ word })
})

export const updateWord = errorCatcher(async (req, res) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ word })
})

export const createNewWord = errorCatcher(async (req, res) => {
  const word = await Word.create(req.body)

  res.status(200).json({ word })
})

export const deleteWord = errorCatcher(async (req, res) => {
  const word = await Word.findByIdAndDelete(req.params.id)

  res.status(201).json({ word })
})
