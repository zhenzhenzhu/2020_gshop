/**
 * 入口js
 */
import Vue from 'vue'
// 引入mint-ui
import {Button} from 'mint-ui'
import App from './app.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入mockserver
import './mock/mockServer'

// 注册全局组件
Vue.component(Button.name, Button)

/* eslint-disable */
new Vue({
  el: '#app',
  render: h => h(App),
  // 挂载路由 =》 vue-rputer
  router,
  //挂在store =》 vuex
  store,
})