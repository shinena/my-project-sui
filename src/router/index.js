import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Me from '@/components/Me'
import Star from '@/components/Star'
import Settings from '@/components/Settings'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      // 这里是区分大小写！！！默认路由和其他路由是区分大小写的，不然会出错！！！
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Star',
      name: 'Star',
      component: Star
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
    {
      path: '/Settings',
      name: 'Settings',
      component: Settings
    }
  ]
})
