import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import History from './views/historicRates.vue'
import Gallery from './views/gallery.vue'
import Contact from './views/contact.vue'
import News from './views/news.vue'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/historic-rates',
      name: 'history',
      component: History
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Contact
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery
    },
    { path: '*', redirect: '/' }
  ]
})
