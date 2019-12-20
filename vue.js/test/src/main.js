import Vue from 'vue'
import App from './App.vue'
import ninjas from './App.vue'

Vue.component('ninjas')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
