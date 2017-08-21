import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Index from '@/components/vue/index'
import Demo01 from '@/components/vue/demo01'
import Demo02 from '@/components/vue/demo02'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Demo01',
      name: 'Demo01',
      component: Demo01
    },
    {
      path: '/Demo02',
      name: 'Demo02',
      component: Demo02
    }
  ]
})
