<template>
<div>
  <div class="banner">
    <transition-group name="fadeIn" tag="ul"  class="clearfix banslist">
      <div v-for="(item, nums) in banlist" :key="nums"
      v-show="nums==banindex"
      >
        <img :src="item.src"/>
        <span class="hot" :class="{bannimg:nums===1 ||nums===banlist.length-1 }">
          {{item.hot}}
        </span>
      </div>
    </transition-group>
    <div class="bullet">
      <span @click="change(index)" v-for="(item,index) in banlist.length"
            :class="{'active':index===banindex}"></span>
    </div>
  </div>
  <nav>
    <div  v-for="(icon,index) in bannIcon" class="banniconing"
          :class="{iconnav:index==baniiconIndex}"@click="changeIcon(index)">
      <span  class="iconfont"  :class=[icon.icon,] ></span>
      <i >{{icon.text}}</i>
    </div>
  </nav>
  <article>
    <template v-for="(item,index) in recommgd">
      <h3>
        <a :href="item.url">{{item.title}}</a>
      </h3>
      <div class="ajaxdata">
        <p v-for="(items,indexs) in item.list" class="data">
             <img :src="items.src">
          <span class="audience">
            {{items.title}}
          </span>
          <span class="title">
            {{items.num}}
          </span>
          <s class="iconfont icon-erji"></s>
        </p>

      </div>
    </template>
  </article>
  <footer>
    <strong>{{youtips}}</strong>
    <input type="button" :value="youtId" v-model="youtId"/>
  </footer>
</div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
export default{
    name:'Column',
  data(){
        return{
            banindex:0,
            baniiconIndex:0,
          scroll: 0,
          banBool:true,
          banlist:[],
          recommgd:[],
          youtips:'根据个人喜好，进行自由调整栏目位置~',
          youtId:'调整栏目顺序',
          bannIcon:[
            {
                icon:'iconfont icon-regepaihangbang',
                text:'私人FM',
              url:''
            },{
              icon:'iconfont icon-meirituijian',
              text:'每日歌曲推荐',
              url:''
            },
            {
              icon:'iconfont icon-fm',
              text:'云音乐热歌榜',
              url:''
            }
          ]
        }
  },
  created(){
      this.getAjax1();
      this.getAjax2();

      this.play();

  },
  computed: {

  },
  components:{

  },

  methods:{

      changeIcon(index){
        this.baniiconIndex=index
      },
    change(index){
      this.banindex=index
    },
    autoPlay(){
      this.banindex++;
      let len=this.banlist.length;
      if(this.banindex==len){
        this.banindex=0
      }
    },
    play() {
      setInterval(this.autoPlay, 4000)
    },
    getAjax1(){
      let url='/api/getNewsList'
      axios.get(url).then(
        (res)=>{
          this.banlist=res.data
        },
        (err)=>{
          console.log(err)
        })
    },
    getAjax2(){
      let url='/api/recommend'
      axios.get(url).then(
        (res)=>{
        this.recommgd=(res.data)

        },
        (err)=>{
          console.log(err)
        })
    },
  },

    props:[]
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../../static/css/style.styl"
  .banner
    position relative
    height 260px
    margin-top 4px
    .banslist
      position absolute
      height 100%
      padding 0
      width 100%
      div
        height 100%
      img
        width 100%
        height 100%
.clearfix
  content ''
  clear both
  display block
.bullet
  .active
    background red
.bullet
  width 100%
  position absolute
  bottom 0px
  margin 0 auto
  text-align center
  z-index 10
  line-height 45px
  span
    width: 40px
    height 10px
    border-radius 14px
    background-color white
    display inline-block
    margin-right 10px

 .image-enter-active {
    transform: translateX(0);
    transition: all 1s ease;
  }

  .image-leave-active {
    transform: translateX(-100%);
    transition: all 1s ease;
  }

  .image-enter {
    transform: translateX(100%)
  }

  .image-leave {
    transform: translateX(0)
  }
  .hot
    position absolute
    bottom 40px
    right 10px
    color: #fff
    background blue
    line-height 30px
    padding 4px
    border-radius 40px 0 0 40px
//指定轮播图的效果
.bannimg
  background-color red

nav
  line-height 38px
  margin-top  24px
  border-bottom  1px solid #d6d4d4
  padding-bottom 18px
  .banniconing
    width 33%
    float left
    .iconfont
      line-height 50px
      width 100%
      font-size 46px
    i
      width 100%
      display inline-block
      padding-top 10px
      font-style normal
  .iconnav
    color red
article
  overflow hidden
  h3
    width 100%
    overflow hidden
    line-height 30px
    text-align left
    margin-top 20px
    a
      color #000
      width 100%
      display block
      text-indent 12px
  .ajaxdata
    overflow hidden
    p.data
      width 33%
      float left
      box-sizing border-box
      padding 10px
      position relative
      img
        width 100%
      .audience
        position absolute
        bottom  0
        right 10px
        font-size 24px
        color #000
        line-height 30px
        overflow hidden
        display -webkit-box
        -webkit-line-clamp 1
        -webkit-box-orient vertical
        padding-left 10px
    .title
      display -webkit-box
      -webkit-line-clamp 1
      -webkit-box-orient vertical
      overflow hidden
      position absolute
      top 10px
      height 40px
      line-height 40px
      right 20px
      color #fff
    s.iconfont.icon-erji
      position absolute
      top 5px
      right -27px
      line-height 30px
      width 100%
      color #fff
footer
  height 120px
  overflow hidden
  strong
    display block
    line-height 40px
  input
    background #fff
    border-radius 30px
    border 1px solid #d33d34
    color #d33d34
    padding  10px 20px 10px 20px






 </style>
