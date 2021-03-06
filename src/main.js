// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import Bar from './components/Bar/Bar'
import BarItem from './components/Bar/BarItem'
import HeaderTab from './components/Header/Header'
Vue.component('Bar', Bar)
Vue.component('BarItem', BarItem)
Vue.component('HeaderTab', HeaderTab)

Vue.use(VueResource)

Vue.http.options.root = process.env.NODE_ENV === 'depelopment' ? 'static' : '/my-project-sui'
Vue.http.options.emulateJSON = true

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
