import Vue from 'vue'
// import './plugins/axios'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN'
import Cookies from 'js-cookie'
import '@/global/global-permission'

import '@/assets/styles/index.scss' // global css
import * as filters from './filters' // global filters
import '@/assets/icons' // global icon

Vue.use(ElementUI,
  { size: Cookies.get('size') || 'medium', locale })

Vue.config.productionTip = false

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

if (process.env.NODE_ENV === 'development') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
