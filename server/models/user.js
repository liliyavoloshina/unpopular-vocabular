import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: [true, 'That email address is taken'],
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

userSchema.virtual('id').get(function () {
  return this._id.toHexString()
})

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id
  },
})

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.checkPassword = async (possiblePassword, realPassword) => await bcrypt.compare(possiblePassword, realPassword)

const User = mongoose.model('User', userSchema)

export default User
