import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as firebase from 'firebase'
import NProgress from 'nprogress'

import '../node_modules/nprogress/nprogress.css'

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

Vue.use(firebase)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
