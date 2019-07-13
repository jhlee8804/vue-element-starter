import NProgress from 'nprogress'

export default {
  install(Vue) {
    Vue.prototype.$nprogress = NProgress
  }
}
