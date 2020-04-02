// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入elemnt-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import date from './assets/DATE/date'//引入登录成功获取的当前时间戳


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


const baseUrl = 'http://shop.yishangm.com/'
Vue.prototype.baseUrl = baseUrl



//引入rem布局
// import 'amfe-flexible'
// import 'lib-flexible/flexible.js'

//设置全局路由
// router.beforeEach((to, from, next) => {
//   if(localStorage.getItem('userToken')){
//     console.log(localStorage.getItem('userToken'))
//   }
// })

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
