import Vue from 'vue'

const EventBus = new Vue()

const errorCatcher = fn => (...params) =>
  fn(...params).catch(error => {
    EventBus.$buefy.toast.open({
      message: error.response.data.message,
      type: 'is-danger',
      duration: 5000
    })

    throw error
  })

export { errorCatcher, EventBus }
