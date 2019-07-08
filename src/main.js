import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/js/bootstrap';
import VueParticles from 'vue-particles'
import VuePageTransition from 'vue-page-transition'
// import fontawesome from '@/src/assets/fonts/font-awesome'
Vue.config.productionTip = false

window.$ = require('jquery')
window.JQuery = require('jquery')
Vue.use(VuePageTransition)
Vue.use(bootstrap);
Vue.use(VueParticles);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
