import axios from './axios'

const getWords = async () => {
	try {
		const response = await axios.get()
		return response.data
	} catch (e) {
		return e.response
	}
}

export {getWords}
