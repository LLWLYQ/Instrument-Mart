<template>
  <div class="cart">
    <div class="content_container">
      <div class="top">
        <p>
          <span>全部商品(商品数量)</span>
        </p>
        <!-- <h1>{{carData}}</h1> -->
        <ul>
          <li  v-for="(D,index) in order" :key="index" style="cursor: pointer;margin-top:20px;" :class="{cur:iscur===index}"  @click="iscur=index,tabChange(index)" >{{D.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data () {
    return {
      carData:'',
      order:[{name:'所有订单',id:0},{name:'待付款',id:1},{name:'待发货',id:2},{name:'待收货',id:3},{name:'购物评价',id:4}],
      iscur:0
    }
  },
  methods: {
    tabChange(index){
       this.iscur = index
    }
  },
  created(){
      this.carData = localStorage.getItem('carList')
      console.log(this.carData)
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common' ;
  .top{
    p{
      border-bottom:1px solid #ccc;
      span{
        border-bottom:2px solid red;
      }
    }
    .diu:hover{
      color:red;
    }
    .cur{
      position: absolute;
      top:0px;
      overflow: hidden;
    }

  }
</style>
