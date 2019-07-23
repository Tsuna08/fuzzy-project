import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/state/Home.vue'
import About from '@/state/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
