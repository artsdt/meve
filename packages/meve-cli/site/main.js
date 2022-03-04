import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meve from '@meve/ui'
import '@meve/ui/es/style'
import '@meve/touch-emulator'
import AppCode from './components/AppCode'

Vue.use(Meve)
Vue.component('app-code', AppCode)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
