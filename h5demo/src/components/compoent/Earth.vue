<template>
    <div class="Earth">
      <div class="about">{{about}}</div>
      <template v-for="(item,index) in EarthList.list">
       <div class="domestic" >
         <h3>{{item.title}}</h3>
         <ul>
           <li v-for="item in item.nav">
             <a :href="item.path" :id="item.id">
               {{item.name}}
             </a>
           </li>
           <div  style="clear: both"></div>
           <div class="more" v-if="
           index===EarthList.list.length-1" >
             {{more}}
           </div>
         </ul>
       </div>
      </template>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'Earth',
      methods:{

      },
      data(){
        return {
          about:'排名不分先后',
          more:'定期添加',
          EarthList:{
            list: [
              {
                title: '国内大神',
                nav: [
                  {
                    name: "阮一峰",
                    path: 'http://www.ruanyifeng.com/home.html',
                    id: '01',
                  },
                  {
                    name: "玉伯",
                    path: 'https://lifesinger.wordpress.com/',
                    id: '02',
                  },
                  {
                    name: "张鑫旭",
                    path: 'http://www.zhangxinxu.com/wordpress/',
                    id: '03',
                  },
                  {
                    name: "张路斌",
                    path: 'http://blog.csdn.net/lufy_Legend',
                    id: '04',
                  },
                  {
                    name: "寒冬winter",
                    path: 'http://winter-cn.cnblogs.com/',
                    id: '05',
                  },
                  {
                    name: "朴灵",
                    path: 'https://github.com/JacksonTian',
                    id: '06',
                  },

                ]
              },
              {
                title: '国内优秀博客',
                nav: [
                  {
                    name: "博客园",
                    path: 'https://www.cnblogs.com/',
                    id: '01',
                  },
                  {
                    name: "开源中国",
                    path: 'http://www.oschina.net/',
                    id: '02',
                  },
                  {
                    name: "segmentfault",
                    path: 'https://segmentfault.com/',
                    id: '03',
                  },
                  {
                    name: "掘金",
                    path: 'https://juejin.im/timeline',
                    id: '04',
                  },
                  {
                    name: "CNode",
                    path: 'https://cnodejs.org/',
                    id: '05',
                  },
                  {
                    name: "51CTO.COM",
                    path: 'http://www.51cto.com/',
                    id: '06',
                  },

                ]
              },
              {
                title: '国外优秀博客',
                nav: [
                  {
                    name: "github",
                    path: 'https://github.com/',
                    id: '01',
                  },
                  {
                    name: "stackoverflow",
                    path: 'https://stackoverflow.com/',
                    id: '02',
                  },
                  {
                    name: "mozilla",
                    path: 'https://developer.mozilla.org/en-US/#',
                    id: '03',
                  },
                  {
                    name: "vuejs",
                    path: 'https://vuejs.org/',
                    id: '04',
                  },
                ]
              },
            ]
          }
        }
      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../comm/css/index.styl"
.Earth
  .about
      line-height 25px
      text-align  right
  .domestic
    min-height 130px
    h3
      font-size 24px
      margin-bottom 11px
    ul
      .more
        font-size 20px
        text-align center
        margin-top 10px

      li
        width 33%
        float left
        padding 6px 4px
        text-align center
        box-sizing border-box

</style>
