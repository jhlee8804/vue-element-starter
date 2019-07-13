//import Vue from 'vue'

export default {
  install(Vue, options) {
    Vue.prototype.$get = require('lodash/get')
  }
}
