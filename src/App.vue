<template>
    <div id="app">
        <!-- 路由部分 -->
        <router-view></router-view>
        <!-- 底部导航 -->
        <FooterGuide v-show='$route.meta.showFooter'></FooterGuide>
    </div>
</template>

<script>
/* eslint-disable */ 
import {mapActions} from 'vuex'
// 引入底部导航footer
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
// import {reqFoodCategorys} from './api/index.js'
export default {
   mounted(){
    //   const result = await reqFoodCategorys()
    //   console.log(result);
    //   console.log(result.data);
    //  发请求第一种方法
    // this.$store.dispatch('getAddress')

    // 第二中 => import {mapActions} from 'vuex' => methods:{...mapActions(['getAddress'])} => this.getAddress()
    this.getAddress()
    this.reqGetInfo()
      
    },
     methods: {
      ...mapActions(['getAddress','reqGetInfo'])
    },
    components:{
        FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
    width 100%
    height 100%
    background #fff
</style>
