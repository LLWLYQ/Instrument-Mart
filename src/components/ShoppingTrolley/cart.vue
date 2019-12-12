<template>
  <div class="cart">
    <div class="content_container">
      <div class="top">
        <p>
          <span>全部商品(商品数量)</span>
        </p>
      </div>
      <div class="mine">
        <ul class="cartLsit"  v-for="(CD,index) in carData" :key="index">
          <li v-for="(cd,index) in CD" :key="index">
            <img :src="cd.pictUrl" alt="">
            <p>{{cd.name}}</p>
            <p>
              <del><span style="color:#9c9c9c;">￥{{cd.DiscountPrice}}</span></del>
              <span>￥{{cd.price}}</span>
            </p>
            <el-input-number v-model="cd.quantity"  :min="1" :max="99" ></el-input-number>
            <p><span style="color:#f40;">￥{{cd.quantity*cd.price}}</span></p>
            <!-- <p>{{cd.quantity}}</p> -->
            <span @click="removeGoods(CD,index)" class="last">删除商品</span>
          </li>
           <p>
              <span>总价</span>
              <span @click="totalPrice()">￥{{total_prices}}</span>
            </p>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import quantity from '../goods/Detail/Quantity/quantity';
export default {
  data () {
    return {
      carData:'',
      total_prices:0
    }
  },
  methods: {
    // ...mapActions(['delProduct']),
    removeGoods(CD,index){
      // CD.splice(index,1)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {

          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          CD.splice(index,1)
          showClose = false,
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    totalPrice(){

    }
  },
  created(){
      this.carData = this.$store.state.car
      this.carData.car.map(item => {
        this.total_prices += item.price*item.quantity
      })
  },
  computed:{
    count (){
      return this.$store.state.car
    }
  },
  // components:{
  // }
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
    // .diu:hover{
    //   color:red;
    // }
    // .cur{
    //   position: absolute;
    //   top:0px;
    //   overflow: hidden;
    // }
  }
  .cartLsit{
    li{
      border:1px solid #ccc;
      margin-top: 30px;
      width: 100%;
      height: 200px;
      img{
        height: 160px;
        width: 130px;
        float: left;
        margin: 20px 0 0 20px;
        border:1px solid #ccc;
      }
      p{
        float: left;
        width: 200px;
        margin: 20px 0 0 20px;
        line-height: 30px;
        span{
          display: block;
          width: 200px;
          margin-left: 200px;
        }
      }
    }
    .el-input-number{
      margin:20px 0 0 200px;
    }
    .last{
        width: 200px;
        margin-left: 100px;
        padding:10px 20px;
        background-color: red;
        color:#fff;
      }
  }
</style>
