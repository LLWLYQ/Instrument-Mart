<template>
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
        // let qinghua = wobiakhaihaoya
  // {"member_id":90,"address_id":"125","payment_type":1,"shipping_method":1,
  //   "goods":{ "0":{"product_id":"3","name":"华为手机荣耀8X",
  //   "option":{"0":{"goods_option_id":"234","goods_option_value_id":"40"},"1":{"goods_option_id":"235","goods_option_value_id":"44"} },"quantity":"4","price":2000,"total":2000,"shop_id":4},
  //   "1":{"product_id":"4","name":"华硕电脑580",
  //   "option":{"0":{"goods_option_id":"234","goods_option_value_id":"40"},"1":{"goods_option_id":"235","goods_option_value_id":"44"} },"quantity":"2","price":3000,"total":3000,"shop_id":5},
  //   "2":{"product_id":"4","name":"华硕电脑580",
  //   "option":{"0":{"goods_option_id":"234","goods_option_value_id":"40"},"1":{"goods_option_id":"235","goods_option_value_id":"44"} },"quantity":"3","price":3000,"total":3000,"shop_id":5} } }

      },
      public_footer (bool) {
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

</style>
