<template>
    <div>
      <nav>
        <ul>
          <li :class='{"router-link-active":navIndex==index}' v-for="(item,index) in navList" @click="toggle(index)">
            <router-link :to="item.path">
              <i :class='[item.icon]'></i>
            </router-link>
          </li>
        </ul>
      </nav>
      <div class="conter">
        <router-view></router-view>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name:'Index',
      data() {
        return {
          screenWidth: document.body.clientWidth,
          isCollapse: false,
          navIndex:0,
          navList:[
            {
              id:1,
              span:'首页',
              path:'/BaseIndex',
              icon:'iconfont icon-home'
            },
            {
              id:2,
              span:'博客',
              path:'/ArticleIndex',
              icon:'iconfont icon-article'
            },
            {
              id:3,
              span:'分享',
              path:'/ShareIndex',
              icon:'iconfont icon-share'
            },
            {
              id:4,
              span:'地球',
              path:'/EarthIndex',
              icon:'iconfont icon-diqiu'
            },
            {
              id:5,
              span:'关于',
              path:'/AboutIndex',
              icon:'iconfont icon-guanyu'
            },
          ]
        };
      },

      methods: {
        toggle(index){
         this.navIndex=index
        },
        updatePaged(){
//          alert(window.location.href)

        }
      },
      components:{
      },

      mounted () {
        const that = this
        window.onresize = () => {
          return (() => {
            window.screenWidth = document.body.clientWidth
            that.screenWidth = window.screenWidth
          })()
        };
      },
      updated(){
//        alert(this.navIndex)
      }

    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../src/comm/css/index.styl"
  .conter
    float left
    width 80%
    padding 12px
    box-sizing border-box
  nav
    width 15%
    text-align center
    float left
    ul
      padding 12px
      li
        padding 0!important
        font-size 40px
        line-height 60px
        a
          text-decoration none
          i.iconfont
            font-size inherit
/*nav切换时*/
.router-link-active
  color #f66
  a
    text-decoration none

</style>
