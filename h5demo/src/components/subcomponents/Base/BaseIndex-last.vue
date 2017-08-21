<template>
    <div class="baseIndex">
      <div class="contering">
        <select v-model="selected" @change="getselecteds(selected)">
          <option  value="">请选择</option>
          <option>前端</option>
          <option>后台</option>
          <option>其他</option>
        </select>
        <transition  name="fade" mode="out-in">
          <div>
            <div class="web" ref="web"v-if="isShow">
              <div v-for="(item,index) in webLink" class="webLink">
                <a :href="'http://www.jqsite.com/notes/'
            +item.id+'.html'">
                  <span class="name"v-text="item.name"></span>
                  <span class="count":count="item.count"></span>
                  <span class="nick" :nick="item.nick"></span>
                  <span class="time">{{item.time}}</span>
                  <span class="times">{{item.times}}</span>
                  <span class="tags" :tags="item.tags"></span>
                  <span class="type" :type="item.tags"></span>
                  <span class="systemTypeID" :systemTypeID="item.systemTypeID"></span>
                </a>
              </div>
            </div>
            <div class="webback-end" ref="sql" v-if="isShow">
              <div class="python">
                <ul>
                  <li>python:{{backpy}}</li>
                </ul>
              </div>
            </div>

            <div class="ide"ref="ide">
              <ul>
                <li>{{backpy}}</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
      <!--热点关注:Hot spot-->
      <div class="hot-spot">
        热点关注

      </div>

      <div class="welfare">
        <div id="bg"></div>
        <div ref="showimg" class="showimg"@click="showimgs">
          <img src="http://mm.howkuai.com/wp-content/uploads/2017a/06/09/01.jpg">
        </div>
        <div ref="welfare" class="welfare-mm" v-for="(mm1,count) in MMimgList">
          <a href="#" @click="click1" >
            <div class="img">
              <img :src="mm1.src"ref="img"/>
            </div>
            <span>
              {{mm1.text}}
            </span>
          </a>
        </div>
        <div style="clear: both"></div>
      </div>

    </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  import jq from 'jquery'
    export default {
      name:'BaseIndex-last',
      data(){
        return{
          tags:null,
          isShow:true,
          MMimgList:[],
          webLink:[],
          selected:'',
          backpy:'暂无相关数据',
          backide:[],
          scroll1:0
        }
      },
      methods:{
        showimgs() {
          let $=jq
          $('.showimg img').click(function (e) {
            e.stopPropagation();
            $('#bg').css({'display':'block'})
            $(this).css({'display':'block'})
          })
          $(document).click(function () {
            $('#bg').css({'display':'none'})
            $(this).css({'display':'none'})
          })
        },
        widresize(){
          let $=jq;
          $(window).on("scroll", function() {
            let st = $(this).scrollTop();
          if(st>650 || st<1370){
            console.log(123);
            $(".showimg").css({
              top: st*.5 + "px"
            })
          }
          })
        },
        getIde0(){
          let url='/ide';
          axios.get(url).then((res)=>{
            console.log(res)
          }).catch((e)=>{
            console.log(e)
          })
        },
        getselecteds(item){
          let arr=['前端','后台','其他'];
          let self=this.$refs;
          let displayarr=['block','none'];
          if(item==arr[0]){
            self.web.style.display=displayarr[0];
            self.sql.style.display=displayarr[1];
            self.ide.style.display=displayarr[1];
          }
          else if(item==arr[1]){
            self.web.style.display=displayarr[1];
            self.sql.style.display=displayarr[0];
            self.ide.style.display=displayarr[1];
          }
          else if(item==arr[2]){
            self.web.style.display=displayarr[1];
            self.sql.style.display=displayarr[1];
            self.ide.style.display=displayarr[0];
          }else{
            self.web.style.display=displayarr[0];
            self.sql.style.display=displayarr[0];
            self.ide.style.display=displayarr[0];
          }
        },
        getweb(){
          let url='/list';
          axios.get(url).then((res)=>{
           this.webLink=res.data.Rows
          }).catch((e)=>{
            console.log(e)
          })
        },
        getmm(){
          let url='/api/mm';
          axios.get(url).then((res)=>{
            this.MMimgList=res.data.data.Item
            console.log(this.MMimgList)
          }).catch((e)=>{
            console.log(e)
          })
        },
        click1(e){
          var img=this.$refs.img
          var showimg=this.$refs.showimg
          var width='';
          var height='';
          var str;
          str=(showimg.children[0])
          for(var i=0;i<img.length;i++){
            img[i].index=i
            img[i].onclick=function () {
              width=((this.naturalWidth)+'px');
              height=((this.naturalWidth)+'px');
              showimg.style.display='block';
              showimg.style.width=width;
              showimg.style.height=height;
              str.setAttribute('src', this.getAttribute('src'))
            }

          }
          e.preventDefault();
          e.stopPropagation();
          jq(document).click(function () {
            showimg.style.display='none'
          })

        }

      },

      created(){
        this.getmm();
        this.getweb();
        this.getIde0();
        this.widresize();
      },
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../comm/css/index.styl"
  select
    display block
    margin 0 auto
  .webLink
    width 50%
    min-height 30px
    display inline-flex
    justify-content center
    align-items center
    justify-content space-between
    box-sizing border-box
    padding 4px
    a
      display block
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      position relative
      text-decoration none
      span
        padding 4px
        color #212121
      span.name
        font-size 20px
        display  block
        min-height  24px
        margin-bottom 4px
      span.time,span.times
          width 50%
  .baseIndex
    width 100%
    position absolute
    left 0
    padding 12px
    .welfare
      position relative
    .contering,.hot-spot,.welfare
      margin 0 auto
      text-align center
      width 85%
      margin-top 12px
      select
        option
          font-size 6px
          min-height inherit
          padding 0
          display inline-block
    .welfare
        .welfare-mm
          width 50%
          float left
          padding 6px 4px
          box-sizing border-box
          a
            width 100%
            display inline-block
            span
              display block
              padding 10px 2px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .img
              height 220px
              img
                width 100%
                height inherit
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .showimg
    width 80%
    height 210px
    display none
    position absolute
    left 25%
    top 0
    overflow auto
    z-index 111111111
    img
      width 85%
      height 80%
#bg {
    display none
    position absolute
    top 0%  left 0%
    width 100%
    height 100%
    background-color black
    z-index 1001
    opacity .70
  }
</style>
