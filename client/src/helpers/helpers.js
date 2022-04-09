import Vue from 'vue'

const EventBus = new Vue()
const errorCatcher = fn => (...params) =>
  fn(...params).catch(e => {
    console.error(e)
    const error = `${e.response.status}: ${e.response.statusText}`
    EventBus.$buefy.toast.open({
      message: error,
      type: 'is-danger',
      duration: 5000
    })
    throw error
  })
export default errorCatcher
