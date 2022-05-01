import mongoose from 'mongoose'
import validator from 'validator'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'

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
  isVerified: {
    type: Boolean,
    default: false,
  },
  confirmationToken: {
    type: String,
  },
  confirmationTokenExpires: String,
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: String,
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
  if (!this.isModified('password')) return next()

  this.password = await bcrypt.hash(this.password, 12)
  next()
})

userSchema.methods.checkPassword = async (possiblePassword, realPassword) => await bcrypt.compare(possiblePassword, realPassword)

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex')
  this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest('hex')
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000

  return resetToken
}

const User = mongoose.model('User', userSchema)

export default User
