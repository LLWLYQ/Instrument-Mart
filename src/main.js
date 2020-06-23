// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//全局引入elemnt-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from './router'
import date from './assets/DATE/date'//引入登录成功获取的当前时间戳

import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

//引入swiper轮播图插件
import "swiper/dist/css/swiper.css"

//引入vue-resource
import  VueResource  from 'vue-resource'

Vue.use(VueResource)

//引入vuex
// import vuex from 'vuex'
import store from './store/index'
// Vue.use(vuex)

// 引入ajax
import axios from "axios";
Vue.prototype.$ajax = axios;
Vue.config.debug = true;
axios.defaults.withCredentials=false;
axios.defaults.headers = {
    'Content-type': 'application/json'
}

// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


//全局时间戳转时间
Vue.filter(
  'formatDate',function (value) {
      let date = new Date(parseInt(value) * 1000);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return y + "年" + m + "月" + d + "日 " + h + ":" + minute + ":"+second; 
  })

const baseUrl = 'http://shop.yishangm.com/'
Vue.prototype.baseUrl = baseUrl


router.beforeEach((to, from, next) => {
 if (to.meta.requiresAuth) {      // 下一个页面需要登录
  if(localStorage.getItem("userName")) {        // 已登录
      next()                       // 访问下一个页面
    } else {                       // 未登录
      next('/register')            // 回到登录界面         
    }
  } else {                         //下一个页面不需要登录
    next()                         // 访问下一个页面
  }
})


//修改头部title的名称
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  date,
  components: { App },
  template: '<App/>'
})
