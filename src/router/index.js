import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mine/home'
import home_serach from '@/components/home_child/home_serach'
import register from '@/components/User/register'
import sign_in from '@/components/User/sign_in'
import List from '@/components/goods/List/List'
import Detail from '@/components/goods/Detail/Detail'
import Center from '@/components/accountCenter/Center'
import Account_setting from '@/components/accountCenter/Order/Account_setting' //账户设置
import Have_to_buy_goods from '@/components/accountCenter/Order/Have_to_buy_goods'  //已买商品
import My_need from '@/components/accountCenter/Order/My_need' //我的需求
import Enquiry from '@/components/accountCenter/Order/Enquiry'//我要询价
import Shipping_address from '@/components/accountCenter/Order/Shipping_address' //收货地址
import Discount_coupon from '@/components/accountCenter/Order/Discount_coupon' //优惠券
import Favorite from '@/components/accountCenter/Order/Favorite'  //我的收藏
import Integral from '@/components/accountCenter/Order/Integral'  //我的积分
import Sales_returns from '@/components/accountCenter/Order/Sales_returns'  //退换货管理
import Complaint from '@/components/accountCenter/Order/Complaint'  //投诉管理
import Invoice from '@/components/accountCenter/Order/Invoice'  //发票设置
import Center_home_page from '@/components/accountCenter/Order/Center_home_page'

import OrderForm from '@/components/BuyItNow/OrderForm' //提交订单
import Address from '@/components/BuyItNow/Address/Address'//收货地址
import AddressCOPY from '@/components/BuyItNow/Address/AddressCOPY'//收货地址_copy
import OrderInfromation from '@/components/BuyItNow/OrderInfromation/OrderInfromation'; //购物购物清单
import MemberRegistration from '@/components/Member/MemberRegistration' //会员注册
import cart from '@/components/ShoppingTrolley/cart' //购物车
import ApplicationIn from '@/components/ApplicationIn/ApplicationIn' //申请入驻
import application_approved from '@/components/ApplicationIn/application_approved'//申请入驻成功
import Alternate from '@/components/BuyItNow/Alternate' //支付页面
import TuningUpThePayment from '@/components/BuyItNow/OrderInfromation/TuningUpThePayment' //支付页面
import LoginForm from '@/components/LoginForm/LoginForm' //登录窗口
import Header from '@/components/Header/Header'//头部
import Foot from '@/components/Foot/Foot'//底部


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
          path:'/Account_setting',
          name: 'Account_setting',
          component: Account_setting,
          meta: {
          }
        },
        {
          path:'/Have_to_buy_goods',
          name:'Have_to_buy_goods',
          component:Have_to_buy_goods,
          meta:{
          }
        },
        {
          path:'/My_need',
          name:'My_need',
          component:My_need,
          meta:{
          }
        },
        {
          path:'/Enquiry',
          name:'Enquiry',
          component:Enquiry,
          meta:{
          }
        },
        {
          path:'/Shipping_address',
          name:'Shipping_address',
          component:Shipping_address,
          meta:{
          }
        },
        {
          path:'/Discount_coupon',
          name:'Discount_coupon',
          component:Discount_coupon,
          meta:{
          }
        },
        {
          path:'/Favorite',
          name:'Favorite',
          component:Favorite,
          meta:{
          }
        },
        {
          path:'/Integral',
          name:'Integral',
          component:Integral,
          meta:{
          }
        },
        {
          path:'/Sales_returns',
          name:'Sales_returns',
          component:Sales_returns,
          meta:{
          }
        },
        {
          path:'/Complaint',
          name:'Complaint',
          component:Complaint,
          meta:{
          }
        },
        {
          path:'/Invoice',
          name:'Invoice',
          component:Invoice,
          meta:{
          }
        },
        {
          path:'/Center_home_page',
          name:'Center_home_page',
          component:Center_home_page,
          meta:{
          }
        }
      ]
    },

    {
      path:'/OrderForm',
      name:'OrderForm',
      component:OrderForm,
      meta:{
        title:'订单页'
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
      path:'/AddressCOPY',
      name:'AddressCOPY',
      component:AddressCOPY,
      meta:{
      }
      //收货地址_copy
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
        title:'注册'
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
    },
    {
      path:'/Alternate',
      name:'Alternate',
      component:Alternate,
      meta:{
        title:'支付页面'
      }
    },
    {
      path:'/TuningUpThePayment',
      name:'TuningUpThePayment',
      component:TuningUpThePayment,
      meta:{
        title:''
      }
    },
    {
      path:'/LoginForm',
      name:'LoginForm',
      component:LoginForm,
      meta:{
        title:''
      }
    },
    {
      path:'/Header',
      name:'Header',
      component:Header,
      meta:{
        title:''
      }
    },
    {
      path:'/Foot',
      name:'Foot',
      component:Foot,
      meta:{
        title:''
      }
    }
  ]
})
