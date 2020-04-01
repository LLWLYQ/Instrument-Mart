<template>
 <!-- @mousemove="moveEvent" @click="moveEvent" -->
  <div id="app">
    <router-view @public_header="public_header" @public_footer="public_footer"/>
    <app-header v-if="header_show" ></app-header>
    <app-foot v-if="footer_show"></app-foot>
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Foot from './components/Foot/Foot'
export default {
  name: 'App',
  data () {
    return {
      header_show:true,
      footer_show:true,
      Height: 0
    }
  },
  methods:{
     public_header (bool) {
        this.header_show = bool;
      },
      public_footer (bool) {
        this.footer_show = bool;
      },
    // moveEvent() {
    //   let path = ['/register']
    //   if(!path.includes(this.$route.path)) {
    //     clearTimeout(this.timmer)
    //     this.init()
    //   }
    // },
    // init() {
    //   this.timmer = setTimeout(() => {
    //     localStorage.clear()
    //     this.$router.push({
    //       path: '/register'
    //     })
    //   }, 1000*60*1)
    // }
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
