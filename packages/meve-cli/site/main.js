import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meve from '@meve/ui'
import config from '@config'
import '@meve/ui/es/style'
import '@meve/touch-emulator'
import AppCode from './components/AppCode'

Vue.use(Meve)
Vue.component('app-code', AppCode)

new Vue({
  provide: {
    config
  },
  router,
  render: h => h(App)
}).$mount('#app')
