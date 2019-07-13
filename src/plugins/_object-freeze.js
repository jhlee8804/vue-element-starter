import deepFreeze from 'deep-freeze'

export default {
  install(Vue, options) {
    Vue.prototype.$isFrozen = function (obj) {
      return Object.isFrozen(obj)
    }

    // 인스턴스를 freeze 상태로 만든다.
    Vue.prototype.$freeze = function(obj) {
      return Object.freeze(obj)
    }

    // 인스턴스를 freeze 상태로 만든다.
    Vue.prototype.$deepFreeze = function(obj) {
      return deepFreeze(obj)
    }
  }
}
