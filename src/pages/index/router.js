import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(VueRouter)

const router = new VueRouter({
  base: '/', // ex) "/{name}/" or "/"
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'index'
  }]
})

// cf. https://github.com/rstacruz/nprogress#configuration
NProgress.configure({
  minimum: 0.2,
  showSpinner: false
})

router.beforeResolve((to, from, next) => {
  if (to.name)
    NProgress.start()

  next()
})

router.beforeEach((to, from, next) => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 100)

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
