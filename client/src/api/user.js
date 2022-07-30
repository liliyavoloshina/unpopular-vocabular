import axios from './axios'
import { errorCatcher } from '../helpers/helpers'

export const getUser = errorCatcher(async id => {
  console.log(id, 'getUser')
  const response = await axios.get(`/user/${id}`)
  return response.data.user
})

export const updateUser = errorCatcher(async payload => {
  const response = await axios.patch(`/user/${payload.id}`, payload)
  return response.data.user
})

export const deleteUser = errorCatcher(async id => {
  const response = await axios.delete(`/user/${id}`)
  return response.data.user
})
