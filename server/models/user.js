import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

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
    select: false,
    required: [true, 'Password is required'],
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
})

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.checkPassword = async (possiblePassword, realPassword) => await bcrypt.compare(possiblePassword, realPassword)

const User = mongoose.model('User', userSchema)

export default User
