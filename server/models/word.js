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
    required: [true, 'Description is required'],
  },
})

const Word = mongoose.model('Word', wordSchema)

export default Word
