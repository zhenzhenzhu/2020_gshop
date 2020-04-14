# gshop

# 底部导航
 选中的状态显示高亮
 1.给on这个类名添加颜色，所有添加on类名的都有高亮的颜色
 2.动态的判断当前是那个页面，判断$route.path === 当前添加on的页面
   :click = "{on : '/Msite' ==== $route.path}" (需要手动写url地址)
 3.如何当我们点击某个页面的时候，当前显示高亮？  给每一个底部按钮注册点击事件
 4.当我们点击当前首页，首页高亮，点击搜索，搜索高亮
   @click = 'goTo('/Msite')' => 传递路径 这个路径是我们当前所在页面的路径 
 5. script 中 methods事件方法里 写 goTo 这个函数 在里面实现路由跳转
    <script>
    export default{
        methods:{
            goTo(path){ //path 接受传过来的路径
                this.$router.replace(path) //替换路径 =》 replace =》 替换
            }
        }
    }
    </script>
# 提取公共部分header
  1.在components 文件里建一个 headertop文件夹里面建一个 HeaderTop.vue文件
  2.把公共header文件样式提取出来到HeaderTop.vue文件中style里面
  3.把公共header html文件提取出来 中间有标题文件的部分给title =》{{title}}
    其余不相同部分，给插槽占位置 左：<slot name = 'left'></slot> 
                              右：<slot name = 'right'></slot>
  4.在组件里面要接受一个title属性，首先要声明，声明用props
    <script>
        export defult{
            props:{
                title:String //类型是string
            }
        }
        
    </script>
# 使用公共header部分
  1.在script中引入公共部分文件
    import HeaderTop from '../../componets/HeaderTop/HeaderTop.vue
  2.映射成标签 
   <script>
        import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
        export default {
            components:{
                HeaderTop
            }
        }
    </script>
  3.使用 
    <HeaderTop title='想要的标题名'></HeaderTop>
    如果左右边边有东西就添加左边的插槽，没有就不添加插槽
     <!-- 头部搜索框 --> 
          <span class="header_search" slot="left">
              <i class="iconfont icon-sousuo"></i>
          </span>