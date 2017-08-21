<template>
    <div class="about">
      <h1>关于我</h1>
      <div class="about-brief-introduction">
        <span class="brief-introduction">简介</span>
        <div class="introduction">
            刘默默，男，90后，后时代程序员，作为后时代程序员的我，
            时间过的很快，主攻用户体验，前端-------
            做一个简单的人~~~~
        </div>
        <div class="about-contact">
          <h1>在线联系</h1>
          <span class="about-contact-er">
              <img src="../../img/mmqrcode1501503000194.png">
            </span>
          <span class="about-contact-wb">
              <a href="http://weibo.com/fangjiayu1107">
                <i class="iconfont icon-weibo"></i>
              </a>
            </span>
          <span class="about-contact-github">
            <a href="https://github.com/mhxy13867806343">
              <i class="iconfont icon-github"></i>
            </a>
            </span>
        </div>
      </div>
      <div class="about-skill">
        <h1>技能表</h1>
        <div class="skill" v-for="(item,index) in skill">
          <span class="sk-title" v-text="item.skillame">
          </span>
          <div :title="item.progress" class="progress"
               :style="{width:item.progress}">
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      data(){
        return{
          skill:[
            {
              skillame:'html5/css3',
              progress:'70%'
            },
            {
              skillame:'javascript',
              progress:'60%'
            },{
              skillame:'jquery',
              progress:'65%'
            },{
              skillame:'python',
              progress:'62%'
            },{
              skillame:'less/sass/stylus',
              progress:'50%'
            },{
              skillame:'es6',
              progress:'25%'
            },{
              skillame:'vue2.x',
              progress:'60%'
            },{
              skillame:'webstorm',
              progress:'75%'
            },{
              skillame:'google',
              progress:'75%'
            }
          ]
        }
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../comm/css/index.styl"
  .about
    background #f4f4f4
    h1
      height 40px
      line-height 40px
      text-align center
      font-size 24px
      margin-bottom 10px
      border-bottom 1px solid #dedada
    .about-skill
        float left
        width 100%
        .skill
            height 60px
            margin-bottom 20px
            .sk-title,.progress
              display inline-block
              line-height 40px
              height 40px
              float left
            .sk-title
              width 20%
            .progress
              float right
              width 80%
              margin-left 12px
              border-radius 30px
              background-color #DEB887
    .about-contact
        span
            width 20%
            float left
            text-align center
            i
              font-size 40px
         span.about-contact-wb,span.about-contact-github
              margin-top 30px
        .about-contact-er
          display inline-block
          img
            width 100%
    .about-brief-introduction
        float left
      .brief-introduction
        font-size 22px
        margin-bottom 10px
        display inline-block
        padding-left 4px
      .introduction
        margin-top 10px
        padding-left 4px
        text-indent 10px
        line-height 20px
        margin-bottom 10px
</style>
