import axios from './axios'
import errorCatcher from '../helpers/helpers'

export const signup = errorCatcher(async user => {
  const response = await axios.post('/signup', user)
  return response.data
})

export const signin = errorCatcher(async user => {
  const response = await axios.post('/signin', user)
  return response.data
})

export const forgotPassword = errorCatcher(async email => {
  const response = await axios.post('/forgot-password', email)
  return response.data
})
