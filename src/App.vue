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
// 引入底部导航footer
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
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
