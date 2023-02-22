import App from './App'
import uView from 'uview-ui'
import store from './store/index.js'
import axios from './api/ajax.js'



// #ifndef VUE3
import Vue from 'vue'
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
App.mpType = 'app'

//config uview-ui and size
Vue.use(uView)
uni.$u.config.unit = 'rpx'

Vue.prototype.$store = store
const app = new Vue({
    ...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif