import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueContentPlaceholders from 'vue-content-placeholders'

import 'normalize.css';
import './registerServiceWorker'
import './global';


Vue.use(VueContentPlaceholders)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
