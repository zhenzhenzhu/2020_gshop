
/*
操作state
直接更新state多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO
} from './mutations-types'
export default {
  // 默认第一个参数是state
  // 接收地址
  [RECEIVE_ADDRESS] (state, {
    address
  }) {
    state.address = address
  },
  // 接收食品分类数组
  [RECEIVE_CATEGORYS] (state, {
    categorys
  }) {
    state.categorys = categorys
  },
  // 接收商家数组
  [RECEIVE_SHOPS] (state, {
    shops
  }) {
    state.shops = shops
  },
  // 接收用户信息
  [RECEIVE_USER_INFO] (state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },
  // 重置用户信息
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },
  // 接收商家评价数组
  [RECEIVE_INFO] (state, { info }) {
    state.info = info
  },
  // 接收商品数组
  [RECEIVE_GOODS] (state, {goods}) {
    state.goods = goods
  },
  // 接收商家信息
  [RECEIVE_RATINGS] (state, { ratings }) {
    state.ratings = ratings
  }
}
