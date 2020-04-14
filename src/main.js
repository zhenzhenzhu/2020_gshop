/**
 * 入口js
 */
import Vue from 'vue'
import App from './app.vue'
// 引入路由
import router from './router'

// eslint-disable-next-line no-new

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  // 挂载路由
  router
})