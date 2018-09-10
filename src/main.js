// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router.js'
import product from '@/store/product.js'
import review from '@/store/review.js'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    product,review
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h=> h(App)
})
