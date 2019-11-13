import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mine/home'
import home_serach from '@/components/home_child/home_serach'
import register from '@/components/User/register'
import sign_in from '@/components/User/sign_in'
import Select_product_release from '@/components/SelectProductRelease/Select_product_release'
import List from '@/components/goods/List/List'
import Detail from '@/components/goods/Detail/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"仪商城"
      }
    },
    {
      path: '/home_serach',
      name: 'home_serach',
      component: home_serach,
      meta:{
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
      }
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: sign_in,
      meta:{
      }
    },
    {
      path: '/Select_product_release',
      name: 'Select_product_release',
      component: Select_product_release,
      meta:{

      }
    },
    {
      path: '/List',
      name: 'List',
      component: List,
      meta:{
      }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail,
      meta:{
      }
    }
  ]
})
