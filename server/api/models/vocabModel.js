const mongoose = require('mongoose')
const { Schema } = mongoose
const VocabSchema = new Schema(
  {
    popular: {
      type: String,
      required: 'Popular word cannot be blank'
    },
    unpopular: {
      type: String,
      required: 'Unpopular word cannot be blank'
    },
    description: {
      type: String
    }
  },
  { collection: 'vocab' }
)
module.exports = mongoose.model('Vocab', VocabSchema)
