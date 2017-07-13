import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Indexpage from '@/components/Home/Indexpage'
import Microblog from '@/components/Home/Microblog'
import Usermusic from '@/components/Home/Usermusic'

//子路由
import Anchorstation from '@/components/Home/Indexchildren/Anchorstation'
import Personality  from '@/components/Home/Indexchildren/Personality'
import Ranking from '@/components/Home/Indexchildren/Ranking'
import Songsheet from '@/components/Home/Indexchildren/Songsheet'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      redirect:'/Home/Indexchildren/Personality',
    },
    {
      //首页
      path: '/Home/Indexpage',
      name: 'Indexpage',
      // component: Indexpage,
      component:resolve=>require(['@/components/Home/Indexpage'],resolve),
      redirect:'/Home/Indexchildren/Personality',
      //子路由
      children:[
        {
          //修改
          path:'/Home/Indexchildren/Anchorstation',
          name:'Anchorstation',
          // component:Anchorstation
          component:resolve=>require(['@/components/Home/Indexchildren/Anchorstation'],resolve)
        },{
          path:'/Home/Indexchildren/Personality',
          name:'Personality',
          // component:Personality,
          component:resolve=>require(['@/components/Home/Indexchildren/Personality'],resolve),

        },{
          path:'/Home/Indexchildren/Ranking',
          name:'Ranking',
          // component:Ranking,
          component:resolve=>require(['@/components/Home/Indexchildren/Ranking'],resolve)
        },{
          path:'/Home/Indexchildren/Songsheet',
          name:'Songsheet',
          // component:Songsheet,
          component:resolve=>require(['@/components/Home/Indexchildren/Songsheet'],resolve)
        }
      ]
    },{
    //微博
      path: '/Home/Microblog',
      name: 'Microblog',
      // component: Microblog,
      component:resolve=>require(['@/components/Home/Microblog'],resolve)
    },{
    //有下载，最近播放等
      path: '/Home/Usermusic',
      name: 'Usermusic',
      // component: Usermusic,
      component:resolve=>require(['@/components/Home/Usermusic'],resolve)
    }
  ]
})
