/**
 * 入口js
 */
import Vue from 'vue'
// 引入mint-ui
import {
  Button
} from 'mint-ui'
// 引入图片懒加载
import VueLazyload from 'vue-lazyload'
import App from './app.vue'
// 引入路由
import router from './router'
// 引入vuex
import store from './store'
// 引入mockserver
import './mock/mockServer'

// 加载日期过滤器
import './filters'
// 配置使用懒加载
import loading from './common/imgs/loading.gif'
Vue.use(VueLazyload, {
  loading
})

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
