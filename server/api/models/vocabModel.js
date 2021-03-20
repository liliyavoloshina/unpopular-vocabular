const mongoose = require('mongoose')
const { Schema } = mongoose
const VocabSchema = new Schema(
  {
    english: {
      type: String,
      required: 'English word cannot be blank'
    },
    russian: {
      type: String,
      required: 'Russian word cannot be blank'
    },
    description: {
      type: String
    }
  },
  { collection: 'vocab' }
)
module.exports = mongoose.model('Vocab', VocabSchema)
