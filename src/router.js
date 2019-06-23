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
    name: 'index',
    component: () => import('@/views/View1.vue')
  }]
})

// cf. https://github.com/rstacruz/nprogress#configuration
NProgress.configure({ showSpinner: false })

router.beforeResolve((to, from, next) => {
  if (to.name)
    NProgress.start()

  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
