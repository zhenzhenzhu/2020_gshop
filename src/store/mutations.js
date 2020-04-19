
/*
操作state
直接更新state多个方法的对象
*/
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutations-types'
export default {
  // 默认第一个参数是state
  [RECEIVE_ADDRESS] (state, {
    address
  }) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {
    categorys
  }) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {
    shops
  }) {
    state.shops = shops
  },

  [RECEIVE_USER_INFO] (state, {
    userInfo
  }) {
    state.userInfo = userInfo
  },

  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  }
}
