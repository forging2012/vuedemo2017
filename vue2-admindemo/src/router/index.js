import Vue from 'vue'
import Router from 'vue-router'
import Hello from'@/components/Hello.vue'
Vue.use(Router)
import Home from '@/components/Home/Home'
import User from '@/components/User/User'
import Login from '@/components/User/Login'
import AdminTab from '@/components/TaskImg/Administrators/Table'
import AdminMail from '@/components/TaskImg/Administrators/Mail.vue'
import BSearch from '@/components/TaskImg/Boss/Search.vue'
import Bmail from '@/components/TaskImg/Boss/Table'
import Mails from '@/components/TaskImg/Boss/Mail'
import Submits from '@/components/campaign/Submit.vue'
import Official from '@/components/campaign/Official.vue'
import region from '@/components/campaign/region.vue'
export default new Router({
  routes: [
    {
      path:'/campaign/Official',
      name:'Official',
      component:Official
    },
    {
      path:'/campaign/region',
      name:'region',
      component:region
    },
    {
      path:'/campaign/Submit',
      name:'Submit',
      component:Submits
    },
    {
      path:'/Boss/Mail',
      name:'Mail',
      component:Mails
    },
    {
      path:'/Boss/Table',
      name:'Table',
      component:Bmail
    },
    {
      path:'/Boss/Search',
      name:'Search',
      component:BSearch
    },
    {
      path:'/Administrators/Mail',
      name:'Mail',
      component:AdminMail
    },
    {
      path:'/Administrators/Table',
      name:'Table',
      component:AdminTab
    },
    {
      path:'/Login',
      name:'Login',
      component: Login
    },
   {
      path: '/',
      name: 'Hello',
      component: Hello,
     redirect:'/Home',
    }, {
      path: '/Home',
      name: 'Home',
      component: Home
    }, {
      path: '/User',
      name: 'User',
      component: User
    },
  ]
})
