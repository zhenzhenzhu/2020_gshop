/**
 * 包含了n个接口请求函数的模块
 */

import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
const BASE_URL = '/api'

// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)
// 2、获取食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {
  longitude,
  latitude
})
// [4、根据经纬度和关键字搜索商铺列表](#4 根据经纬度和关键字搜索商铺列表) < br />
export const reqSearchShop = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
// [5、获取一次性验证码](#5 获取一次性验证码) < br />
// 在前面模板中=》src直接获取接口里面的数据

// [6、用户名密码登陆](#6 用户名密码登陆) < br />
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(BASE_URL + '/login_pwd', {name, pwd, captcha}, 'POST')
// [7、发送短信验证码](#7 发送短信验证码) < br />
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', {phone})
// [8、手机号验证码登陆](#8 手机号验证码登陆) < br />
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, code}, 'POST')
// [9、根据会话获取用户信息](#9 根据会话获取用户信息) < br />
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
// [10、用户登出](#10 用户登出) < br / >
export const reqLogout = () => ajax(BASE_URL + '/logout')
// [11、获取商家信息) < br / >
export const reqShopInfo = () => ajax('/info')
// [12、获取商家评价数组) < br / >
export const reqShopRatings = () => ajax('/ratings')
// [13、获取商家商品数组) < br / >
export const reqShopGoods = () => ajax('/goods')
