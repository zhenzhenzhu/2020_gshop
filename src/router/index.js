/**
 路由对象模块
 */
/* eslint-disable */
Vue.use(vueRouter)
import Vue from 'vue'
import vueRouter from 'vue-router'
// 引入首页
import Msite from '../pages/Msite/Msite.vue'
// 引入搜索
import Search from '../pages/Search/Search.vue'
// 引入订单
import Order from '../pages/Order/Order.vue'
// 引入个人中心
import Profile from '../pages/Profile/Profile.vue'
// 引入登陆
import Login from '../pages/Login/Login.vue'
// 引入商品页
import Shop from '../pages/Shop/Shop.vue'
// 引入点餐页
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
// 引入评价
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// 引入商家
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'



// 声明使用插件

export default new vueRouter({
    //规则
    //所有路由
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                showFooter:true
            }
       },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
              }
       },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
              }
       },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
              }
        },
        {
            path: '/',
            redirect: '/msite'
        },
        {
            path:'/login',
            component:Login
        },
        {
          path:'/shop',
          component: Shop,
          children: [
            {
              path:'/shop/goods',
              component: ShopGoods
            },
            {
              path:'/shop/ratings',
              component: ShopRatings
            },
            {
              path:'/shop/info',
              component: ShopInfo
            },
            {
               path:'',
               redirect:'/shop/goods'
            },
          ]
        }
    ]
})