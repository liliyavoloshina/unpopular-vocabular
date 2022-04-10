import mongoose from 'mongoose'

const wordSchema = new mongoose.Schema({
  popular: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Popular word cannot be blank'],
  },
  unpopular: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Unpopular word cannot be blank'],
  },
  popularity: {
    type: String,
    enum: {
      values: ['high', 'low'],
      message: [true, `Popularity must be 'high' or 'low'`],
    },
    required: [true, 'Popularity is required'],
  },
  description: {
    type: String,
    min: [10, 'Decsription must be longer than 10'],
    max: [100, 'Decsription must be less than 100'],
  },
})

const Word = mongoose.model('Word', wordSchema)

export default Word
