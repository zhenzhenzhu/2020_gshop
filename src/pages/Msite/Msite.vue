
<template>
    <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
          <!-- 头部搜索框 -->
          <router-link class="header_search" slot="left" to="/search">
              <i class="iconfont icon-sousuo"></i>
          </router-link>
           <!-- 头部登陆注册部分 -->
          <router-link class="header_login" slot="right" :to="userInfo._id ? '/userInfo' :'/login'">
            <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else><i class="iconfont icon-person"></i></span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="categorys.length>0">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key = 'index'>
                <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key = 'index'>
                  <div class="food_container">
                    <!-- :src 动态强制绑定 -->
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
                <!-- <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/3.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/4.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/5.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/6.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/7.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/8.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a> -->
              </div>
              <!-- <div class="swiper-slide">
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/9.jpg">
                  </div>
                  <span>甜品饮品</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/10.jpg">
                  </div>
                  <span>商超便利</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/11.jpg">
                  </div>
                  <span>美食</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/12.jpg">
                  </div>
                  <span>简餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/13.jpg">
                  </div>
                  <span>新店特惠</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/14.jpg">
                  </div>
                  <span>准时达</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/1.jpg">
                  </div>
                  <span>预订早餐</span>
                </a>
                <a href="javascript:" class="link_to_food">
                  <div class="food_container">
                    <img src="./images/nav/2.jpg">
                  </div>
                  <span>土豪推荐</span>
                </a>
              </div> -->
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>

        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
          <!-- <div class="shop_container">
            <ul class="shop_list">
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/1.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item half"></span>
                          <span class="star-item off"></span>
                        </div>
                        <div class="rating_section">
                          3.6
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/2.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item off"></span>
                        </div>
                        <div class="rating_section">
                          4.1
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/3.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item off"></span>
                          <span class="star-item off"></span>
                        </div>
                        <div class="rating_section">
                          3.2
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
              <li class="shop_li border-1px">
                <a>
                  <div class="shop_left">
                    <img class="shop_img" src="./images/shop/4.jpg">
                  </div>
                  <div class="shop_right">
                    <section class="shop_detail_header">
                      <h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
                      <ul class="shop_detail_ul">
                        <li class="supports">保</li>
                        <li class="supports">准</li>
                        <li class="supports">票</li>
                      </ul>
                    </section>
                    <section class="shop_rating_order">
                      <section class="shop_rating_order_left">
                        <div class="star star-24">
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item on"></span>
                          <span class="star-item half"></span>
                          <span class="star-item off"></span>
                        </div>
                        <div class="rating_section">
                          3.6
                        </div>
                        <div class="order_section">
                          月售106单
                        </div>
                      </section>
                      <section class="shop_rating_order_right">
                        <span class="delivery_style delivery_right">硅谷专送</span>
                      </section>
                    </section>
                    <section class="shop_distance">
                      <p class="shop_delivery_msg">
                        <span>¥20起送</span>
                        <span class="segmentation">/</span>
                        <span>配送费约¥5</span>
                      </p>
                    </section>
                  </div>
                </a>
              </li>
            </ul>
          </div> -->
        </div>
      </section>
</template>
<script>
/* eslint-disable */
  // 引入vuex中辅助函数/映射函数 mapState
  import {mapState} from 'vuex'
  // 引入swiper插件 js
  import Swiper from 'swiper'
  // 引入swiper css部分 可以在HTML引入，也可以在此引入
  import 'swiper/css/swiper.min.css'
// 引入公共header部分
  import HeaderTop  from '../../components/HeaderTop/HeaderTop.vue';
  // 引入商家部分
  import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  data(){
    return{
      baseImageUrl:'https://fuss10.elemecdn.com'
    }
  },
  // swiper 轮播图
  mounted(){ // 渲染dom之后调用，此时页面已经显示了

   this.$store.dispatch('getAddress'),
   
    // 触发actions调用 指定action名称getCategorys
    this.$store.dispatch('getCategorys'),

    // 发请求 获取getShops商家列表
    this.$store.dispatch('getShops')

   
  },
  // 监听categorys 的变化
  watch:{
    categorys(value){ // 有值说明categorys发生变化了
    this.$nextTick(() => {
       // 创建一个 swiper实例渲染轮播图
    /**
     * 参数1：容器
     * 参数2：配置对象
     */
    new Swiper ('.swiper-container',{
    loop: true, // 循环模式选项
    //  direction: 'vertical', // 垂直切换选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    }
    })
    })

    }
  },
  // 计算属性
  computed:{
    ...mapState(['address','categorys','userInfo']),
    
    /**
     * 根据categorys一维数组生成一个二维数组
     * 小数组最大长度为8
     */
    categorysArr(){
      // 取出以为数组
      const {categorys} = this
      

      // 准备一个空的二维数组
      const arr = []
      // 准备一个小数组
      let minArr =[]

      // 遍历categorys
      categorys.forEach(item =>{
       
        // 判断-当小数组的长度为8 的时候，给它一个新的数组
       if (minArr.length === 8) {
         minArr =[]
       }
        //判断-当小数组为空的数组，把它添加到大数组（二维数组）里面
        if (minArr.length === 0){
          arr.push(minArr)
        }
        // 把当前分类保存到小数组
        minArr.push(item)
      })

      return arr


    }
  },
  components:{
    HeaderTop,
    ShopList
  }
}
</script>
<style lang="stylus" ref = "stylesheet/stylus">
@import "../../common/stylus/mixins.styl";
  .msite  //首页
          width 100%
          // .header
          //   background-color #02a774
          //   position fixed
          //   z-index 100
          //   left 0
          //   top 0
          //   width 100%
          //   height 45px
          //   .header_search
          //     position absolute
          //     left 15px
          //     top 50%
          //     transform translateY(-50%)
          //     width 10%
          //     height 50%
          //     .icon-sousuo
          //       font-size 25px
          //       color #fff
          //   .header_title
          //     position absolute
          //     top 50%
          //     left 50%
          //     transform translate(-50%, -50%)
          //     width 50%
          //     color #fff
          //     text-align center
          //     .header_title_text
          //       font-size 20px
          //       color #fff
          //       display block
          //   .header_login
          //     font-size 14px
          //     color #fff
          //     position absolute
          //     right 15px
          //     top 50%
          //     transform translateY(-50%)
          //     .header_login_te xt
          //       color #fff
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            // .shop_container
            //   margin-bottom 50px
            //   .shop_list
            //     .shop_li
            //       bottom-border-1px(#f1f1f1)
            //       width 100%
            //       >a
            //         clearFix()
            //         display block
            //         box-sizing border-box
            //         padding 15px 8px
            //         width 100%
            //         .shop_left
            //           float left
            //           box-sizing border-box
            //           width 23%
            //           height 75px
            //           padding-right 10px
            //           .shop_img
            //             display block
            //             width 100%
            //             height 100%
            //         .shop_right
            //           float right
            //           width 77%
            //           .shop_detail_header
            //             clearFix()
            //             width 100%
            //             .shop_title
            //               float left
            //               width 200px
            //               color #333
            //               font-size 16px
            //               line-height 16px
            //               font-weight 700
            //               &::before
            //                 content '品牌'
            //                 display inline-block
            //                 font-size 11px
            //                 line-height 11px
            //                 color #333
            //                 background-color #ffd930
            //                 padding 2px 2px
            //                 border-radius 2px
            //                 margin-right 5px
            //             .shop_detail_ul
            //               float right
            //               margin-top 3px
            //               .supports
            //                 float left
            //                 font-size 10px
            //                 color #999
            //                 border 1px solid #f1f1f1
            //                 padding 0 2px
            //                 border-radius 2px
            //           .shop_rating_order
            //             clearFix()
            //             width 100%
            //             margin-top 18px
            //             margin-bottom 8px
            //             .shop_rating_order_left
            //               float left
            //               color #ff9a0d
            //               .star //2x图 3x图
            //                 float left
            //                 font-size 0
            //                 .star-item
            //                   display inline-block
            //                   background-repeat no-repeat
            //                 &.star-48
            //                   .star-item
            //                     width 20px
            //                     height 20px
            //                     margin-right 22px
            //                     background-size 20px 20px
            //                     &:last-child
            //                       margin-right: 0
            //                     &.on
            //                       bg-image('./images/stars/star48_on')
            //                     &.half
            //                       bg-image('./images/stars/star48_half')
            //                     &.off
            //                       bg-image('./images/stars/star48_off')
            //                 &.star-36
            //                   .star-item
            //                     width 15px
            //                     height 15px
            //                     margin-right 6px
            //                     background-size 15px 15px
            //                     &:last-child
            //                       margin-right 0
            //                     &.on
            //                       bg-image('./images/stars/star36_on')
            //                     &.half
            //                       bg-image('./images/stars/star36_half')
            //                     &.off
            //                       bg-image('./images/stars/star36_off')
            //                 &.star-24
            //                   .star-item
            //                     width 10px
            //                     height 10px
            //                     margin-right 3px
            //                     background-size 10px 10px
            //                     &:last-child
            //                       margin-right 0
            //                     &.on
            //                       bg-image('./images/stars/star24_on')
            //                     &.half
            //                       bg-image('./images/stars/star24_half')
            //                     &.off
            //                       bg-image('./images/stars/star24_off')
            //               .rating_section
            //                 float left
            //                 font-size 10px
            //                 color #ff6000
            //                 margin-left 4px
            //               .order_section
            //                 float left
            //                 font-size 10px
            //                 color #666
            //                 transform scale(.8)
            //             .shop_rating_order_right
            //               float right
            //               font-size 0
            //               .delivery_style
            //                 transform-origin 35px 0
            //                 transform scale(.7)
            //                 display inline-block
            //                 font-size 12px
            //                 padding 1px
            //                 border-radius 2px
            //               .delivery_left
            //                 color #fff
            //                 margin-right -10px
            //                 background-color #02a774
            //                 border 1px solid #02a774
            //               .delivery_right
            //                 color #02a774
            //                 border 1px solid #02a774
            //           .shop_distance
            //             clearFix()
            //             width 100%
            //             font-size 12px
            //             .shop_delivery_msg
            //               float left
            //               transform-origin 0
            //               transform scale(.9)
            //               color #666
            //             .segmentation
            //               color #ccc
</style>
