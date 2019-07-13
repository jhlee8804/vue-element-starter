export default {
  install(Vue, options) {
    Vue.prototype.$sleep = function(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    Vue.prototype.$timeout = function(fn, ms) {
      return new Promise((resolve) => setTimeout(() => resolve(fn()), ms))
    }
  }
}
