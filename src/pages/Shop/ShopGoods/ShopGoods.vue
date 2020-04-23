<template>
  <div class="goods">
    <!-- 左边侧边栏 -->
    <div class="menu-wrapper"
         ref="menuWrapper">
      <ul>
        <!-- current 控制选中菜单颜色 -->
        <li class="menu-item "
            :class="{current: index===currentIndex}"
            v-for="(good,index) in goods"
            :key="index"
            @click="clickMeauItem(index)">
          <span class="text bottom-border-1px">
            <img class="icon"
                 :src="good.icon"
                 v-if="good.icon">
            {{good.name}}
          </span>
        </li>
        <!-- <li class="menu-item">
            <span class="text bottom-border-1px">
              <img class="icon"
                   src="https://fuss10.elemecdn.com/b/91/8cf4f67e0e8223931cd595dc932fepng.png">
              优惠
            </span>
          </li> -->
      </ul>
    </div>
    <!-- 右边部分 -->
    <div class="foods-wrapper"
         ref="foodsWrapper">
      <ul ref="foodsUl">
        <li class="food-list-hook"
            v-for="(good, index) in goods"
            :key="index">
          <h1 class="title">{{good.name}}</h1>
          <ul>
            <li class="food-item bottom-border-1px"
                v-for="(food,index) in good.foods"
                :key="index"
                @click="showFood(food)">
              <div class="icon">
                <img width="57"
                     height="57"
                     :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售 {{food.sellCount}} 份</span>
                  <span>好评率 {{food.rating}}%</span></div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old"
                        v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <CartControl :food='food'></CartControl>
                </div>
              </div>
            </li>
            <!-- <li class="food-item bottom-border-1px">
                <div class="icon">
                  <img width="57"
                       height="57"
                       src="http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114">
                </div>
                <div class="content">
                  <h2 class="name">红豆薏米美肤粥</h2>
                  <p class="desc">甜粥</p>
                  <div class="extra">
                    <span class="count">月售 86 份</span>
                    <span>好评率 100%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥12</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl
                  </div>
                </div>
              </li> -->
          </ul>
        </li>
        <!-- <li class="food-list food-list-hook">
            <h1 class="title">香浓甜粥</h1>
            <ul>
              <li class="food-item bottom-border-1px">
                <div class="icon">
                  <img width="57"
                       height="57"
                       src="http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageVi 
                            ew2/1/w/114/h/114">
                </div>
                <div class="content">
                  <h2 class="name">红枣山药粥</h2>
                  <p class="desc">红枣山药糙米粥,素材包</p>
                  <div class="extra">
                    <span class="count">月售 17 份</span>
                    <span>好评率 100%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥29</span>
                    <span class="old">￥36</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    CartControl
                  </div>
                </div>
              </li>
            </ul>
          </li> -->
      </ul>
      <ShopCart></ShopCart>
    </div>
    <Food :food="food"
          ref="food"></Food>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import BScroll from '@better-scroll/core'
import { mapState } from 'vuex'
import CartControl from '../../../components/CartControl/CartControl.vue'
import Food from '../../../components/Food/Food.vue'
import ShopCart from '../../../components/ShopCart/ShopCart.vue'
export default {
  /**
   * 类型current 标识当前分类
   * 设计一个计算属性：currentIndex
   * 根据哪些数据计算？
   *     scrollY:右侧滑动的Y轴坐标（滑动过程中实时变化）
   *     tops：所有右侧分类li的top组成的数组（列表第一次显示后就不再发生变化了）
   * 1.在滑动过程中实时收集scroll Y
   * 2.列表第一次显示后手机tops
   * 3.实现currentIndex的计算逻辑
   */
  data () {
    return {
      scrollY: 0,// 右侧滑动的Y轴坐标（滑动过程中实时变化）
      tops: [], // 所有右侧分类li的top组成的数组（列表第一次显示后就不再发生变化了）
      food: {} //需要显示的food
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {// 数据更新后执行
      this.$nextTick(() => {// 列表数据更新显示后执行
        this._initScorll()
        this._initTops()
      })
    })

  },
  computed: {
    ...mapState(['goods']),
    // 计算得到当前分类下标
    currentIndex () { // 初始值执行一次，相关数据发生变化的时候执行
      // 1.得到已知条件数据
      const { scrollY, tops } = this
      // 2.根据条件数据计算产生一个结果
      const index = tops.findIndex((top, index) => {
        return scrollY >= top && scrollY < tops[index + 1]
      })
      // 3.返回结果
      return index


    }
  },
  methods: {
    _initScorll () { // 初始化滚动条
      // 列表显示之后创建  和对应的div关联
      new BScroll('.menu-wrapper', {})
      this.foodsScroll = new BScroll('.foods-wrapper', {
        probeType: 2,
        click: true

      })
      // 给右侧绑定scroll监听
      this.foodsScroll.on('scroll', ({ x, y }) => {
        console.log(x, y);
        this.scrollY = Math.abs(y)

      })
      // 给右侧绑定scrollEnd监听
      this.foodsScroll.on('scrollEnd', ({ x, y }) => {
        console.log('scrollEnd', x, y);
        this.scrollY = Math.abs(y)
      })
    },
    // 初始化右侧tops
    _initTops () {

      // 1.初始化tops
      const tops = []
      let top = 0
      tops.push(top)

      // 2. 收集
      // 找到右侧的所有分类的li
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
      // console.log(lis);
      // 收集需要遍历 lis是伪数组，需要借助call转化为数组
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight
        tops.push(top)

      });

      // 3.根据收集的tops，更新数据
      this.tops = tops
      console.log(tops);

    },
    clickMeauItem (index) {
      console.log(index);

      // 点击左侧分类，使右侧列表滑倒对应的位置

      // 1.得到目标位置的scroll Y
      const scrollY = this.tops[index]
      // 2.立即更新scrollY（让点击的分类类项成为当前分类）
      this.scrollY = scrollY
      // 3.平滑滑动右侧列表
      this.foodsScroll.scrollTo(0, -scrollY, 300)
    },
    // 点击显示food
    showFood (food) {
      // 设置food
      this.food = food
      // 显示food (在父组件调用子组件的方法)
      this.$refs.food.isShowFood()

    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../../common/stylus/mixins.styl'
.goods
  display flex
  position absolute
  top 195px
  bottom 46px
  width 100%
  background #fff
  overflow hidden
  .menu-wrapper
    flex 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        position relative
        z-index 10
        margin-top -1px
        background #fff
        color $green
        font-weight 700
        .text
          border-none()
      .icon
        display inline-block
        vertical-align top
        width 12px
        height 12px
        margin-right 2px
        background-size 12px 12px
        background-repeat no-repeat
      .text
        display table-cell
        width 56px
        vertical-align middle
        bottom-border-1px(rgba(7, 17, 27, 0.1))
        font-size 12px
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      height 26px
      line-height 26px
      border-left 2px solid #d9dde1
      font-size 12px
      color rgb(147, 153, 159)
      background #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      bottom-border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        border-none()
        margin-bottom 0
      .icon
        flex 0 0 57px
        margin-right 10px
      .content
        flex 1
        .name
          margin 2px 0 8px 0
          height 14px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 10px
          font-size 10px
          color rgb(147, 153, 159)
        .desc
          line-height 12px
          margin-bottom 8px
        .extra
          .count
            margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom 12px
</style>
