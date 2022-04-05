const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
  popular: {
    type: String,
    required: 'Popular word cannot be blank',
    unique: true,
    trim: true,
  },
  unpopular: {
    type: String,
    required: 'Unpopular word cannot be blank',
    unique: true,
    trim: true,
  },
  popularity: {
    type: String,
    required: 'Popularity is required',
  },
  description: {
    type: String,
    required: 'Description is required',
  },
})

const Word = mongoose.model('Word', wordSchema)

module.exports = Word
