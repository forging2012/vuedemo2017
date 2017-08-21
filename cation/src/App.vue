<template>
  <div id="app">
    <div class="hello">
      <div class="nav">
        <swiper :options="swiperOption" class="navs" ref="dom">
          <swiper-slide v-for=" item,index in lists" >

            <span ref="swiperslide" class="navs1":class="{'spans':num==index}"@click="gettoggled(index)"
            >
            <router-link :to="{path:item.url}"
                         :class="{'getshow':item.url===''}"
            >
            {{item.name}}
              </router-link>
            <div ref="botts" class="bottoms " :class="{'button':num==index}"></div>
          </span>

          </swiper-slide>
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
        </swiper>
      </div>
    </div>
    <transition :name="transitionName">
      <!--路由动画-->
    <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<script>
  import VueRouter from 'vue-router'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'hello',
    components: {
      swiper,
      swiperSlide
    },
    data () {
      return {
        transitionName: 'slide-right',
        num:0,
        msg: 'Welcome to Your Vue.js App',
        lists:[
          {name: '全部',
            url:'Index'
          },
          {name: '前端',
            url:'Demo01'},
          {name: '后台',
            url:'Demo02'},
          {name: '其他'},
          {name: '关于'},
        {name: 'vue.js'},
        {name: 'javascript'},
        {name: 'c++'},
        {name: 'python'},
        {name: '美女图片'},
        ],
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          slidesPerView: 'auto',
          spaceBetween: 4,
          setWrapperSize :true,
          paginationClickable :true,
          speed:300,
          breakpoints: {
            640: {

              slidesPerView: 5,
              spaceBetween: 6
            },
            onClick(swiper){
              alert(swiper);
            }
          },

        }
      }
    },
    methods:{

      gettoggled(index){
        this.num=index
      },
      getdom(dom){
        return this.$refs[dom]
      },
      touchstart(event){
        console.log(event);
        console.log('开始');
      },
      touchmove(event){
        console.log(event);
        console.log('移动');
      },
      touchend(event){
        console.log(event);
        console.log('结束');
      },
      load(){
        this.getdom('dom').addEventListener('touchstart',this.touchstart,false)
        this.getdom('dom').addEventListener('touchmove',this.touchmove,false)
        this.getdom('dom').addEventListener('touchend',this.touchend,false)
      },
      setWidth(){
        let line=this.getdom('swiperslide');
        let botts=this.$refs.botts;
        let line_len=line.length;
        let botts_len=botts.length;
        let num='';
        for(let i=0;i<line_len;i++){
          num=line[i].offsetWidth;
          botts[i].style.width=num+'px';
        }


      },

    },
    mounted(){
      this.setWidth();
//    window.addEventListener('load',this.load, false);


      VueRouter.prototype.goBack = function () {  //重点，给VueRoute添加一个goBack方法，用于记录路由的前进后退状态 this.isBack = true
        this.isBack = true
        window.history.go(-1)
      }
    },
    watch: {
      '$route' (to, from) {
        let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
        if(isBack) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
        this.$router.isBack = false
      }
    },
//    beforeRouteUpdate(to,from,next){
//      let isBack = this.$router.isBack
//      if (isBack) {
//        this.transitionName = 'slide-right'
//      } else {
//        this.transitionName = 'slide-left'
//      }
//      // 做完回退动画后，要设置成前进动画，否则下次打开页面动画将还是回退
//      this.$router.isBack = false
//      next()
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body{
    overflow: hidden;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  .nav{
    position: relative;
    height: 40px;
  }
  a{
    text-decoration: none;
  }
  .navs{
    line-height: 40px;
    display: inline-block;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
  }
  .navs1{
    font-size:30px;
    position: relative;
  }
  span{
    color: rgba(0,0,0,0.54);
    width: 100%;
    display: block;
  }
  .button{
    border-bottom: 2px solid #4285f4;
  }
  .getshow{
    display: none;
  }
  .spans{
    color: #4285f4;
  }
  .bottoms{
    display: inline-block;
    position: absolute;
    width: 100px;
    bottom: 1px;
    left: 0;
  }
  .swiper-pagination{
    /*display: none;*/
  }
  .swiper-slide{
    width: initial;
  }
</style>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.Router {
  position: absolute;
  width: 100%;
  transition: all .8s ease;
  top: 100px;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
