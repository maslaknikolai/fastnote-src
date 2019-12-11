import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import VTooltip from 'v-tooltip'

import App from './App.vue'
import store from './store/'

import methods from './plugins/global-methods'
import components from './plugins/global-components'
import networkStatus from './plugins/network-status'
import axios from './plugins/axios'
import auth from './plugins/auth'

import './registerServiceWorker'
import './sass/main.scss'

Vue.use(VTooltip)
Vue.use(VueCompositionApi)

Vue.use(methods)
Vue.use(components)
Vue.use(networkStatus)

Vue.use(auth, { axios, store })

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
