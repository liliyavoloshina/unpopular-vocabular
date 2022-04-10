import Word from '../models/word.js'

export const getWords = async (req, res) => {
  const words = await Word.find()
  res.status(200).json({ words })
}

export const getWord = async (req, res) => {
  const word = await Word.findById(req.params.id)
  res.status(200).json({ word })
}

export const updateWord = async (req, res) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({ word })
}

export const createNewWord = async (req, res) => {
  const word = await Word.create(req.body)

  res.status(200).json({ word })
}

export const deleteWord = async (req, res) => {
  const word = await Word.findByIdAndDelete(req.params.id)

  res.status(201).json({ word })
}
