import axios from 'axios'
import { getToken } from '../helpers/localStorage'

const token = getToken()

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/api/v1' : 'https://unpopular-vocabular.herokuapp.com/'

if (token) {
  axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
}

export default axios
