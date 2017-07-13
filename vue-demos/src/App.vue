<template>
  <div id="app">

    <div class="header-top">
      <div class="left">
        <i class="iconfont icon-threestripeshoriz1160221easyiconnet"></i>
      </div>
        <ul>
          <li v-for="(icon,index) in Ico" @click="selectIcon1(index)">
            <router-link :to="{path:icon.url}":class="[{'header-icon':countNUms==index}]">
              <i :class='icon.ico'></i>
            </router-link>
          </li>
        </ul>
      <span class="iconfont icon-sousuo icon">
      </span>

      <keep-alive>
        <router-view class="overflow"></router-view>
      </keep-alive>
    </div>
    <div class="webplay">
      <a>
        <!--需要一个组件-->
        <div class="left">
          <div class="iconfont icon-aixin1"></div>
          <div class="Songname">有没有想起我</div>
          <div class="Author">火车头</div>
        </div>
        <div class="right">
          <span class="plays iconfont icon-bofang"id="plays "></span>
          <span class="collection iconfont icon-aixin" id="collection"></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {selectIcon} from '../static/js/index'
export default {
  name: 'app',
  data(){
   return {
     countNUms:0,
     Ico:[{
       ico:'iconfont icon-yinle',
       url:'/Home/Usermusic'

        },
       {
         ico:'iconfont icon-u',
         url:'/Home/Indexpage'
       },{
         ico:'iconfont icon-ren',
         url:'/Home/Microblog'
       }
     ]
   }
  },
  methods:{
    selectIcon1(index){
      selectIcon(this,'countNUms',index)
    }
  },
}
</script>

<style>
  body{
    /*background: #eeeeee;*/
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="stylus" rel="stylesheet/stylus">
  .header-top
    height 100%
    width 100%
    border-bottom 1px solid rgba(206, 206, 206, 0.46)
    line-height 100px
    background #fff
    position fixed
    top 0
    z-index 4
    .left
      float: left
      width 10%
      i
        width 50px
        font-size 46px
    span.icon
      float right
      width 50px
      font-size 40px
      padding-right 28px
    ul
      padding-left 30px
      width 50%
      overflow hidden
      display inline-block
      li
        float left
        width 30%
        display inline-block
        a
          text-decoration none
          display: block;
          i
            width 50px
            font-size 46px


.header-icon{
  color #d33d34
}
.webplay
  position absolute
  bottom  0
  width 100%
  z-index 1000
  background #191919
  color #fff
  a
    overflow hidden
    width 75%
    display block
    margin 0 auto
    .right
      float right
      span
        line-height 46px
      .collection
        vertical-align middle
        padding 0 0 0 10px
    .left
      float left
      width 154px
      .iconfont
        line-height 46px
        float left
      .Songname,.Author
          line-height 20px
          width 120px
          float left
          text-align left


</style>
