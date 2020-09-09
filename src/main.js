import Vue from 'vue'
import App from './App.vue'
import sugarUI from './plugs/index'
Vue.use(sugarUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
