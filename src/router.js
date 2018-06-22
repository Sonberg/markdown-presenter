import Vue from 'vue'
import Router from 'vue-router'
import Compose from './views/Compose.vue'
import Present from './views/Present.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'compose',
      component: Compose,
      children: [
        {
          path: '/present',
          name: 'present',
          component: Present
        }
      ]
    }
  ]
})
