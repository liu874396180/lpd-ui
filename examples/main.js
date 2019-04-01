import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import LpdUI from './../packages'
Vue.use(LpdUI)
Vue.config.productionTip = false
//在main.js注入
 
// 1. 注入全部方法
// import hjmvdirective from 'hjm-vue-directive'
// Object.keys(hjmvdirective).forEach(key => {
//   Vue.use(hjmvdirective[key])
// })
 
// 2. 单个方法注入
// import hjmvdirective from 'hjm-vue-directive'
// Vue.use(hjmvdirective.touch).use(hjmvdirective.load)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
