<template>
  <div id="app">
    <router-view v-on:public_header="public_header"/>
    <app-header v-if="header_show"></app-header>
    <app-foot v-if="header_show"></app-foot>
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
    }
  },
  methods:{
     public_header:function (bool) {
        this.header_show = bool;
      },
      public_footer:function (bool) {
          this.footer_show = bool;
      }
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
  }
}
</script>

<style>

</style>
