import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {
	faUser
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(
	faUser
)
// import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.use(Buefy, {
	defaultIconComponent: 'vue-fontawesome',
	defaultIconPack: 'fas'
})

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
