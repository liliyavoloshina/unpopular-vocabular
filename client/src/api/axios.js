import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? `http://127.0.0.1:3000/api/v1` : 'https://unpopular-vocabular.herokuapp.com/'

export default axios