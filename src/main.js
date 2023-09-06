import 'core-js/stable'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  template: '<App/>',
  components: {
    App
  }
})