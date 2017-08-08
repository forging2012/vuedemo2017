import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import BaseIndex from '@/components/compoent/BaseIndex'
import ArticleIndex from '@/components/compoent/Article'
import ShareIndex from '@/components/compoent/Share'
import EarthIndex from '@/components/compoent/Earth'
import AboutIndex from '@/components/compoent/About'
import ArticesLast from '@/components/subcomponents/article/article1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:'/BaseIndex'
    },{
    path:'/BaseIndex',
      name:'BaseIndex',
      component:BaseIndex,
    },{
      path:'/ArticleIndex',
      name:'ArticleIndex',
      component:ArticleIndex
    },{
      path:'/ShareIndex',
      name:'ShareIndex',
      component:ShareIndex
    },{
      path:'/EarthIndex',
      name:'EarthIndex',
      component:EarthIndex
    },{
      path:'/AboutIndex',
      name:'AboutIndex',
      component:AboutIndex
    },
    {
      path:'/article1/:newsId(\\d+)',
      name:'ArticesLast',
      component:ArticesLast
    }
  ]
})
