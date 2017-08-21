<template>
<div>
  <header>

    <nav>
      <!--导航层-->
      <span v-for="(item,index) in NavList" :class="{'navL':num==index}"
      @click="selectIcon1(index)"
      >
        <router-link :to={path:item.url,query:item.query}
        >
          <!-- @click.native="getUrl"-->
          {{item.name}}
        </router-link>
      </span>
    </nav>
    <div class="overview">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </header>
  <article>

  </article>
  <footer></footer>

</div>
</template>
<script type="text/ecmascript-6">
  import {selectIcon} from '../../../static/js'

export default{
    name:'Indexpage',
  data(){
        return{
            num:0,
            NavList:[
              {
                  name:'个性推荐',
                  id:0,
                url:'/Home/Indexchildren/Personality'
              },{
                name:'歌单',
                id:1,
                url:'/Home/Indexchildren/Songsheet'
              },{
                name:'主播电台',
                id:2,
                url:'/Home/Indexchildren/Anchorstation'
              },{
                name:'排行榜',
                id:3,
                url:'/Home/Indexchildren/Ranking',
                query: { num:1}
              },
            ]
        }
  },
  computed: {

  },
  components:{

  },
  methods:{
    selectIcon1(index){
      selectIcon(this,'num',index)
    },
    getUrl(){

    }
  },
    props:[],
  created(){

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  header
    margin-top -40px
    nav
      line-height 40px
      display table
      width 100%
      background #fff
      span
        float left
        width 25%
      a,a:hover
        text-decoration none
        display block
        color #686868
        font-weight 700

.navL
  border-bottom 2px solid #d33a31
span.navL a
  color #dd6760 !important
.overview
  overflow auto
  top 2rem
  position: absolute
  z-index -3000
  bottom 4rem
  width 100%
  display block
  height 100%
 </style>
