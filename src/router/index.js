import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mine/home'
import home_serach from '@/components/home_child/home_serach'
import register from '@/components/User/register'
import sign_in from '@/components/User/sign_in'
import List from '@/components/goods/List/List'
import Detail from '@/components/goods/Detail/Detail'
import Center from '@/components/accountCenter/Center'
import AllOrder from '@/components/accountCenter/Order/AllOrder' //所有订单
import Payment from '@/components/accountCenter/Order/Payment'  //代付款
import ToSendTheGoods from '@/components/accountCenter/Order/ToSendTheGoods'
import Shipped from '@/components/accountCenter/Order/Shipped' //待发货
import Distribution from '@/components/accountCenter/Order/Distribution' //配送完成
import Evaluation from '@/components/accountCenter/Order/Evaluation'  //购物评价s
import Brands from '@/components/accountCenter/Collecting/Brands' //所有品牌
import OrderForm from '@/components/BuyItNow/OrderForm' //提交订单
import Address from '@/components/BuyItNow/Address/Address'//收货地址
import OrderInfromation from '@/components/BuyItNow/OrderInfromation/OrderInfromation'; //购物购物清单
import MemberRegistration from '@/components/Member/MemberRegistration' //会员注册
import cart from '@/components/ShoppingTrolley/cart' //购物车
import ApplicationIn from '@/components/ApplicationIn/ApplicationIn' //申请入驻
import application_approved from '@/components/ApplicationIn/application_approved'//申请入驻成功



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
        title:'登录页'
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
      path: '/List',
      name: 'List',
      component: List,
      meta:{
        title:'列表页'
      }
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail,
      meta:{
        title:'详情页'
      }
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center,
      meta: {
        title:'个人中心'
      },
      children:[
        {
          path:'/AllOrder',
          name: 'AllOrder',
          component: AllOrder,
          meta: {
          }
        //所有订单
        },
        {
          path:'/Payment',
          name:'Payment',
          component:Payment,
          meta:{
          }
          //代付款
        },
        {
          path:'/ToSendTheGoods',
          name:'ToSendTheGoods',
          component:ToSendTheGoods,
          meta:{
          }
          //待发货
        },
        {
          path:'/Shipped',
          name:'Shipped',
          component:Shipped,
          meta:{
          }
          //已发货
        },
        {
          path:'/Distribution',
          name:'Distribution',
          component:Distribution,
          meta:{
          }
          //配送完成
        },
        {
          path:'/Evaluation',
          name:'Evaluation',
          component:Evaluation,
          meta:{
          }
          //购物评价
        }
      ]
    },
    {
      path:'/Brands',
      name:'Brands',
      component:Brands,
      meta:{
      }
    },
    {
      path:'/OrderForm',
      name:'OrderForm',
      component:OrderForm,
      meta:{
      }
    },
    {
      path:'/Address',
      name:'Address',
      component:Address,
      meta:{
      }
      //收货地址
    },
    {
      path:'/OrderInfromation',
      name:'OrderInfromation',
      component:OrderInfromation,
      meta:{
      }
    },
    {
      path:'/MemberRegistration',
      name:'MemberRegistration',
      component:MemberRegistration,
      meta:{
      }
    },
    {
      path:'/cart',
      name:'cart',
      component:cart,
      meta:{
        title:'购物车'
      }
    },
    {
      path:'/ApplicationIn',
      name:'ApplicationIn',
      component:ApplicationIn,
      meta:{
        title:'申请入驻'
      }
    },
    {
      path:'/application_approved',
      name:'application_approved',
      component:application_approved,
      meta:{
        title:'申请入驻成功'
      }
    }
  ]
})
