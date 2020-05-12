import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mine/home'
import home_serach from '@/components/home_child/home_serach'
import home_serachCOPY from '@/components/home_child/home_serachCOPY'
import register from '@/components/User/register'
import sign_in from '@/components/User/sign_in'
// import List from '@/components/goods/List/List'
import Detail from '@/components/goods/Detail/Detail'
import Center from '@/components/accountCenter/Center'
import Account_setting from '@/components/accountCenter/Order/Account_setting' //账户设置
import Have_to_buy_goods from '@/components/accountCenter/Order/Have_to_buy_goods'  //已买商品
import My_need from '@/components/accountCenter/Order/My_need' //我的需求
import Enquiry from '@/components/accountCenter/Order/Enquiry'//我要询价
import Shipping_address from '@/components/accountCenter/Order/Shipping_address' //收货地址
import Discount_coupon from '@/components/accountCenter/Order/Discount_coupon' //优惠券
import Favorite from '@/components/accountCenter/Order/Favorite'  //我的收藏

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
import BottomNavigationBar from '@/components/Foot/BottomNavigationBar'
import Security_settings from '@/components/Security_settings/Security_settings'//安全设置
import Enterprise_real_name from  '@/components/Enterprise_real_name/Enterprise_real_name' //企业实名
import Lottery from '@/components/Marketing/Lottery/Lottery' //抽奖
import Marketing from '@/components/Marketing/Marketing' //营销页面
import Discounts from '@/components/Marketing/Discounts/Discounts' //优惠券
import Hot_word from '@/components/Marketing/Hot_word/Hot_word' //热词
import Promotion from '@/components/Marketing/Promotion/Promotion' //促销管理
import Sign_in from '@/components/Marketing/Sign_in/Sign_in' //签到
import Integral from '@/components/accountCenter/Order/Integral'  //我的积分
//Mouqiuxingbudaikouzhaotiqiuzaodaocanpangeigongpaizhid
import comments from '@/components/goods/Detail/Comments/comments'
import ProductCategoryListPage from '@/components/goods/Detail/PCLP/ProductCategoryListPage'
import storelist from '@/components/goods/Detail/StoreList/storelist'

//公告
import notice_list from '@/components/Announcement/notice_list'
import notice_list_home from '@/components/Announcement/notice_list_home'
import notice_detail from '@/components/Announcement/notice_detail'
//店铺
import FlagshipShop from '@/components/Shop/FlagshipShop'
import FlagshipShopList from '@/components/Shop/FlagshipShopList'
//旗舰店导航栏
import CompanyProfile from '@/components/Shop/FlagshipShopTheChildShops/CompanyProfile'
import ContactShop from '@/components/Shop/FlagshipShopTheChildShops/ContactShop'
import CreditFile from '@/components/Shop/FlagshipShopTheChildShops/CreditFile'
import ProductApplication from '@/components/Shop/FlagshipShopTheChildShops/ProductApplication'
import ShopHome from '@/components/Shop/FlagshipShopTheChildShops/ShopHome'
import SupplyProducts from '@/components/Shop/FlagshipShopTheChildShops/SupplyProducts'
import vendor from '@/components/Shop/FlagshipShopTheChildShops/vendor'
import CommonalityLeft from '@/components/Shop/FlagshipShopTheChildShops/CommonalityLeft'


import UpgradeShop from '@/components/Shop/UpgradeShop'
import UpgradeShopList from '@/components/Shop/UpgradeShopList'
//升级店导航栏
import USCommonalityLeft from '@/components/Shop/UpgradeShopChildShop/USCommonalityLeft'
import USContactShop from '@/components/Shop/UpgradeShopChildShop/USContactShop'
import USProductApplication from '@/components/Shop/UpgradeShopChildShop/USProductApplication'
import USShopHome from '@/components/Shop/UpgradeShopChildShop/USShopHome'
import USSupplyProducts from '@/components/Shop/UpgradeShopChildShop/USSupplyProducts'
import USvendor from '@/components/Shop/UpgradeShopChildShop/USvendor'
import USCompanyProfile from '@/components/Shop/UpgradeShopChildShop/USCompanyProfile'

import GeneralShop from '@/components/Shop/GeneralShop'


Vue.use(Router)

//全局判断是否登录

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        title:"仪商城",
        keepAlive: true
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
      path: '/home_serachCOPY',
      name: 'home_serachCOPY',
      component: home_serachCOPY,
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
    // {
    //   path: '/List',
    //   name: 'List',
    //   component: List,
    //   meta:{
    //     title:'列表页'
    //   }
    // },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail,
      meta:{
        title:'详情页',
        keepAlive: true
      }
    },
    {
      path: '/comments',
      name: 'comments',
      component: comments,
      meta:{
        title:'评价',
        keepAlive: true
      }
    },
    {
      path: '/ProductCategoryListPage',
      name: 'ProductCategoryListPage',
      component: ProductCategoryListPage,
      meta:{
        title:'产品分类列表',
        keepAlive: true
      }
    },
    {
      path: '/storelist',
      name: 'storelist',
      component: storelist,
      meta:{
        title:'店铺列表',
        keepAlive: true
      }
    },
    {
      path: '/Center',
      name: 'Center',
      component: Center,
      meta: {
        title:'个人中心',
        keepAlive: true
      },
      children:[
        {
          path:'/Account_setting',
          name: 'Account_setting',
          component: Account_setting,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/Have_to_buy_goods',
          name:'Have_to_buy_goods',
          component:Have_to_buy_goods,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/My_need',
          name:'My_need',
          component:My_need,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Enquiry',
          name:'Enquiry',
          component:Enquiry,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Shipping_address',
          name:'Shipping_address',
          component:Shipping_address,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Discount_coupon',
          name:'Discount_coupon',
          component:Discount_coupon,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Favorite',
          name:'Favorite',
          component:Favorite,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Integral',
          name:'Integral',
          component:Integral,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Sales_returns',
          name:'Sales_returns',
          component:Sales_returns,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Complaint',
          name:'Complaint',
          component:Complaint,
          meta:{
            keepAlive: true,
            title:'评价管理'
          }
        },
        {
          path:'/Invoice',
          name:'Invoice',
          component:Invoice,
          meta:{
            keepAlive: true
          }
        },
        {
          path:'/Center_home_page',
          name:'Center_home_page',
          component:Center_home_page,
          meta:{
            keepAlive: true
          }
        }
      ]
    },

    {
      path:'/OrderForm',
      name:'OrderForm',
      component:OrderForm,
      meta:{
        title:'订单页',
        keepAlive: true
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
        title:'购物车',
        keepAlive: true
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
        title:'',
      }
    },
    {
      path:'/Foot',
      name:'Foot',
      component:Foot,
      meta:{
        title:'',
      }
    },
    {
      path:'/BottomNavigationBar',
      name:'BottomNavigationBar',
      component:BottomNavigationBar,
      meta:{
        title:'',
        keepAlive: true
      }
    },
    {
      path:'/Security_settings',
      name:'Security_settings',
      component:Security_settings,
      meta:{
        title:'',

      }
    },
    {
      path:'/Enterprise_real_name',
      name:'Enterprise_real_name',
      component:Enterprise_real_name,
      meta:{
        title:''
      }
    },
    {
      path:'/Lottery',
      name:'Lottery',
      component:Lottery,
      meta:{
        title:''
      }
    },
    {
      path:'/Marketing',
      name:'Marketing',
      component:Marketing,
      meta:{
        title:''
      }
    },
    {
      path:'/Discounts',
      name:'Discounts',
      component:Discounts,
      meta:{
        title:''
      }
    },
    {
      path:'/Hot_word',
      name:'Hot_word',
      component:Hot_word,
      meta:{
        title:''
      }
    },
    {
      path:'/Promotion',
      name:'Promotion',
      component:Promotion,
      meta:{
        title:''
      }
    },
    {
      path:'/Sign_in',
      name:'Sign_in',
      component:Sign_in,
      meta:{
        title:''
      }
    },
    {
      path:'/notice_list',
      name:'notice_list',
      component:notice_list,
      meta:{
        title:''
      }
    },
    {
      path:'/notice_list_home',
      name:'notice_list_home',
      component:notice_list_home,
      meta:{
        title:''
      }
    },
    {
      path:'/notice_detail',
      name:'notice_detail',
      component:notice_detail,
      meta:{
        title:''
      }
    },
    {
      path:'/FlagshipShopList',
      name:'FlagshipShopList',
      component:FlagshipShopList,
      meta:{
        title:'',
        keepAlive: true
      }
    },
    {
      //旗舰店
      path:'/FlagshipShop',
      name:'FlagshipShop',
      component:FlagshipShop,
      meta:{
        title:'',
        keepAlive: true
      },
      children:[
        {
          path:'/CompanyProfile',
          name: 'CompanyProfile',
          component: CompanyProfile,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/ContactShop',
          name: 'ContactShop',
          component: ContactShop,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/CreditFile',
          name: 'CreditFile',
          component: CreditFile,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/ProductApplication',
          name: 'ProductApplication',
          component: ProductApplication,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/ShopHome',
          name: 'ShopHome',
          component: ShopHome,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/SupplyProducts',
          name: 'SupplyProducts',
          component: SupplyProducts,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/vendor',
          name: 'vendor',
          component: vendor,
          meta: {
            keepAlive: true
          }
        },
        // CommonalityLeft
      ]
    },
    {
      //子页面左
      path:'/CommonalityLeft',
      name:'CommonalityLeft',
      component:CommonalityLeft,
      meta:{
        title:'',
        // keepAlive: true
      }
    },
    {
      //子页面左
      path:'/USommonalityLeft',
      name:'USCommonalityLeft',
      component:USCommonalityLeft,
      meta:{
        title:'',
        // keepAlive: true
      }
    },
    {
      //普通店
      path:'/GeneralShop',
      name:'GeneralShop',
      component:GeneralShop,
      meta:{
        title:'',
        keepAlive: true
      }
    },
    {
      //普通店
      path:'/UpgradeShopList',
      name:'UpgradeShopList',
      component:UpgradeShopList,
      meta:{
        title:'',
        keepAlive: true
      }
    },
    {
      //升级店
      path:'/UpgradeShop',
      name:'UpgradeShop',
      component:UpgradeShop,
      meta:{
        title:'',
        keepAlive: true
      },
      children:[
        {
          path:'/USCommonalityLeft ',
          name: 'USCommonalityLeft ',
          component: USCommonalityLeft ,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USCompanyProfile',
          name: 'USCompanyProfile',
          component: USCompanyProfile,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USContactShop',
          name: 'USContactShop',
          component: USContactShop,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USProductApplication',
          name: 'USProductApplication',
          component:USProductApplication,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USShopHome',
          name: 'USShopHome',
          component: USShopHome,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USSupplyProducts',
          name: 'USSupplyProducts',
          component: USSupplyProducts,
          meta: {
            keepAlive: true
          }
        },
        {
          path:'/USvendor',
          name: 'USvendor',
          component: USvendor,
          meta: {
            keepAlive: true
          }
        },
        // CommonalityLeft
      ]
    }
  ]
})

