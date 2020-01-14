<template>
  <div id="app">
    <router-view v-on:public_header="public_header"/>
    <app-header v-if="header_show"></app-header>
  </div>
</template>

<script>
import Header from './components/Header/Header'
export default {
  name: 'App',
  data () {
    return {
      header_show:true,
      // footer_show:true,
    }
  },
  methods:{
     public_header:function (bool) {
        this.header_show = bool;
      },
      //是否显示底部
      // public_footer:function (bool) {
      //     this.footer_show = bool;
      // }

  },
  components: {
    'app-header':Header,
    // 'app-footer':Footer,
  },
  updated() {
    window.scroll(0,0);
  }
}
</script>

<style>

</style>
