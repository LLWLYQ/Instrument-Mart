<template>
 <!-- @mousemove="moveEvent" @click="moveEvent" -->
  <div id="app" @click="isDo()">
    <div v-if="$route.meta.keepAlive">
      <router-view></router-view>
      <app-header  ></app-header>
      <app-foot ></app-foot>
    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Foot from './components/Foot/Foot'
export default {
  name: 'App',
  data () {
    return {
      Height: 0,
      lastTime:null,
      currentTime:null,
      timeOut:1000 * 60 * 30
    }
  },
  methods:{
    //判断用户是否三十分钟有没有操作 没有操作 就返回登录页面
    isDo() {
              this.currentTime = new Date().getTime(); //记录这次点击的时间
              if(this.currentTime - this.lastTime > this.timeOut) {  //判断上次最后一次点击的时间和这次点击的时间间隔是否大于10分钟
                  // 这里写状态已过期后执行的操作
                  localStorage.clear();
                  this.lastTime = new Date().getTime();
                  return this.$router.push('/register') 
              } else {
                  this.lastTime = new Date().getTime(); //如果在10分钟内点击，则把这次点击的时间记录覆盖掉之前存的最后一次点击的时间
              }
        }
      },
  created(){
    this.lastTime = new Date().getTime();
      },
      components: {
        'app-header':Header,
        'app-foot':Foot
      },
      updated() {
        window.scroll(0,0);
      },
      mounted(){
        //动态设置内容高度 让footer始终居底   header+footer的高度是100
        this.Height = document.documentElement.clientHeight - 100;
    　　//监听浏览器窗口变化
        window.onresize = ()=> {this.Height = document.documentElement.clientHeight -100}
      }
    }
</script>

<style  lang="scss" scoped>
#app{
  background-color: #fff;
}
</style>
