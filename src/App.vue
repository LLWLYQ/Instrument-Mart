<template>
 <!-- @mousemove="moveEvent" @click="moveEvent" -->
  <div id="app">
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
      Height: 0
    }
  },
  methods:{
  
  },
  created(){

  },
  components: {
    'app-header':Header,
    'app-foot':Foot
    // 'app-footer':Footer,
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
