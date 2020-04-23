/*
操作state
直接更新state多个方法的对象
*/
/* eslint-disable */
import Vue from 'vue'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutations-types'
export default {
  // 默认第一个参数是state
  // 接收地址
  [RECEIVE_ADDRESS](state, {
    address
  }) {
    state.address = address
  },
  // 接收食品分类数组
  [RECEIVE_CATEGORYS](state, {
    categorys
  }) {
    state.categorys = categorys
  },
  // 接收商家数组
  [RECEIVE_SHOPS](state, {
    shops
  }) {
    state.shops = shops
  },
  // 接收用户信息
  [RECEIVE_USER_INFO](state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  // 重置用户信息
  [RESET_USER_INFO](state) {
    state.userInfo = {}
  },
  // 接收商家评价数组
  [RECEIVE_INFO](state, {
    info
  }) {
    state.info = info
  },
  // 接收商品数组
  [RECEIVE_GOODS](state, {
    goods
  }) {
    state.goods = goods
  },
  // 接收商家信息
  [RECEIVE_RATINGS](state, {
    ratings
  }) {
    state.ratings = ratings
  },
  // 增加food中count
  [INCREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (!food.count) { // 第一次增加
      // food.count = 1  // 新增属性(没有数据绑定)
      /*
      对象
      属性名
      属性值
      */
      Vue.set(food, 'count', 1) // 让新增的属性也有数据绑定

      // 将food添加到cartFoods中
      state.cartFoods.push(food)
    } else {
      food.count++
    }
  },
  // 减少food中count
  [DECREMENT_FOOD_COUNT](state, {
    food
  }) {
    if (food.count) { // 只有 count有值的时候才会减少
      food.count--
    }
    if (food.count === 0) {
      // 将food从cartFoods移除
      state.cartFoods.splice(state.cartFoods.indexOf(food), 1)

    }
  },

  // 清楚购物车
  [CLEAR_CART](state) {
    // 清楚food中的count
    state.cartFoods.forEach(food => food.count = 0);
    // 清除cartFoods 购物车中的所有购物项
    state.cartFoods = []
  },
  // 接收搜索的商家数组
  // [RECEIVE_SEARCH_SHOPS](state, {
  //   searchShops
  // }) {
  //   state.searchShops = searchShops
  // },
  [RECEIVE_SEARCH_SHOPS](state, {
    searchShops
  }) {
    state.searchShops = searchShops
  },
}
