import mongoose from 'mongoose'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Email is required'],
    validate: [validator.isEmail, 'Email format is invalid'],
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'Password is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
})

const User = mongoose.model('User', userSchema)

export default User
