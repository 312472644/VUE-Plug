import Vue from 'vue'
import App from './App.vue'
import keyBoard from './plugs/index'

Vue.config.productionTip = false
Vue.use(keyBoard);

new Vue({
  render: h => h(App),
}).$mount('#app')
