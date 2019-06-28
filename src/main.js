import Vue from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from './assets/js/bootstrap';

// import fontawesome from '@/src/assets/fonts/font-awesome'
Vue.config.productionTip = false

Vue.use(bootstrap);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
