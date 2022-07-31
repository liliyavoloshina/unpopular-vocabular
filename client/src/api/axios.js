import axios from 'axios'
import { getToken } from '@/helpers/localStorage'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_DEV_SERVER_URL : process.env.VUE_APP_PROD_SERVER_URL
axios.defaults.withCredentials = true

axios.interceptors.request.use(
  async config => {
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    } else {
      delete config.headers.Authorization
    }

    console.log(config)

    return config
    // const token = getToken()

    // if (token) {
    //   axios.defaults.headers.common = { Authorization: `Bearer ${token}` }
    // }
    // return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axios
