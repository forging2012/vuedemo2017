<template>
    <div>
      <div class="wenzhang">
        <h1 v-text="vtitle"></h1>
        <transition-group tag="ul">
          <li :key="index" v-for="(item,index) in Baseconter":class="{'libottom':index===Baseconter.length-1}">
            <div class="outerlayer">
              <div class="layer-top">
                <span class="author">{{item.author}}</span>
                <span class="time">{{item.time}}</span>
                <span class="tag">{{item.tag}}</span>
              </div>
              <div class="layer-content">
                <router-link  :to="{path:'/article1/'+item.id}">

                  <span>{{item.content.article}}</span>
                  <span class="hot">{{item.content.hot}}</span>
                </router-link>
              </div>
              <div class="layer-tail">
                <div class="layer-see">
                  <i class="iconfont icon-chakan-copy"></i>
                  <span class="see">{{item.see.num}}</span>
                </div>
              </div>
            </div>
          </li>
        </transition-group>
      </div>
      <div>
        <BaseIndexLast></BaseIndexLast>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import BaseIndexLast from '@/components/subcomponents/Base/BaseIndex-last.vue'
  import Vue from 'vue'
  var eventBus = new Vue();
  export default {
      name:'BaseIndex',
      data(){
        return{
          show:false,
          vtitle:'最新文章',
          Baseconter:[
            {author:'孺子牛骑士',
                time:"1天前",
                tag:'python',
                id:100,
                content:{
                  article:"exports、module.exports 和 export、export default 到底是咋回事",
                  hot:'new',
                },
                see:{
                  num:10
                }
              },
            {author:'孺子牛骑士',
              time:"1天前",
              tag:'python',
              id:101,
              content:{
                article:"exports、module.exports 和 export、export default 到底是咋回事",
                hot:'new',
              },
              see:{
                num:10
              }
            }
          ]
        }
      },
      methods:{
        clickItem(index){
          alert(index)
        },
        addclis(){

        }
      },
      mounted(){
        eventBus.$emit('articles',this.vtitle)
      },
      components:{
        BaseIndexLast
      },
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../comm/css/index.styl"
  .wenzhang
    background #f5f7f8
    h1
      line-height 50px
      font-size: 30px
      text-align center
    li
      width 100%
      background #fff
      .outerlayer
        border-top #dfdfdf 1px solid
        padding 10px
        .layer-tail
          margin-top  6px
          .layer-see
            width 30%
            i.icon-chakan-copy
              font-size 26px
              vertical-align text-top
            .see
              padding-left 10px
        .layer-content
          position relative
          line-height 40px
          color: #2e3135
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-weight 600
          span.hot
            position absolute
            top -12px
            right 0
            color #ed4138
        .layer-top
          line-height 40px
          span
            color #909090
            padding-right 16px
/*私有class*/
.libottom
  border-bottom  #dfdfdf 1px solid
/*私有动画：只用于列表中*/

</style>
