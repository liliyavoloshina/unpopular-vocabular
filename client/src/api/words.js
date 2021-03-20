import axios from './axios'
import {errorCatcher} from '../helpers/helpers'

const getWords = errorCatcher(async () => {
	const response = await axios.get(`words`)
	return response.data
})

const postWord = errorCatcher(async (payload) => {
	const response = await axios.post(`words`, payload)
	return response.data
})

const getWord = errorCatcher(async (payload) => {
	const response = await axios.get(`words/${payload}`)
	return response.data
})

const deleteWord = errorCatcher(async (payload) => {
	const response = await axios.delete(`words/${payload}`)
	return response.data
})

export {getWords, postWord, getWord, deleteWord}
