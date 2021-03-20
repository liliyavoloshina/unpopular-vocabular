import axios from './axios'
import {errorCatcher} from '../helpers/helpers'

const getWords = errorCatcher(async () => {
	const response = await axios.get()
	return response.data
})

export {getWords}
