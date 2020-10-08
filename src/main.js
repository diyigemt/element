import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/scss/normalize.scss'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/base.scss'
import ElementUI from 'element-ui'
import echars from 'echarts'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'
// Vue.component('v-icon', Icon)

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$echarts = echars

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
