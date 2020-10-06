import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/normalize.scss'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/base.scss'
import ElementUI from 'element-ui'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
