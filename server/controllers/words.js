const Word = require('../models/word')

exports.getWords = async (req, res) => {
  const words = await Word.find()
  res.status(200).json({ words })
}
