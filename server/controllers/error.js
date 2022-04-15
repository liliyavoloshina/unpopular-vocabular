import { ErrorHandler } from '../utils/error.js'

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  })
}

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`
  return new ErrorHandler(message, 400)
}

const handleDuplicateErrorDB = (err) => {
  const message = `The field "${err.keyValue.name}" is duplicated!!!`
  return new ErrorHandler(message, 400)
}

const handleValidationErrorDB = (err) => {
  const errors = Object.values(err.errors).map((e) => e.message)
  const message = errors.join('. ')
  return new ErrorHandler(message, 400)
}

const handleJsonWebTokenError = () => new ErrorHandler('Invalid token. Please log in again', 401)

const handleTokenExpiredError = () => new ErrorHandler('Token expired. Please log in again', 401)

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    })
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Something really went wrong...',
    })
  }
}

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err }

    if (err.name === 'ValidationError') {
      error = handleValidationErrorDB(error)
    }

    if (err.name === 'CastError') {
      error = handleCastErrorDB(error)
    }

    if (err.code === 11000) {
      error = handleDuplicateErrorDB(error)
    }

    if (err.name === 'JsonWebTokenError') {
      error = handleJsonWebTokenError(error)
    }

    if (err.name === 'TokenExpiredError') {
      error = handleTokenExpiredError(error)
    }

    sendErrorProd(error, res)
  }
}
