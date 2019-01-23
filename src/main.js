import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(axios);

import loading from './components/loading';
Vue.use(loading)

import "./assets/css/public.css"
import "./assets/font/font"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

