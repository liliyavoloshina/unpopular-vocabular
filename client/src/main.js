import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'

library.add(fas)

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
