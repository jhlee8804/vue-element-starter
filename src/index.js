// polyfill
import 'core-js'
import 'string.prototype.trimstart'
import 'string.prototype.trimend'

// global
import 'expose-loader?logger!loglevel'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'expose-loader?_!lodash'

// vue components
import Vue from 'vue'
//import Vuex from 'vuex'
import i18n from '@/lang'
import '@/filters'
import '@/icons'
import '@/mixins'
import '@/plugins'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App'
import router from './router'

Vue.use(ElementUI)

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
