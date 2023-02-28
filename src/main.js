import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainHeader from "@/components/common/MainHeader";

import "@/styles/main.css"

Vue.config.productionTip = false

Vue.component('MainHeader', MainHeader)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
