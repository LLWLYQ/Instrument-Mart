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
            <p>{{cd.DiscountPrice}}</p>
            <p>{{cd.price}}</p>
            <el-input-number v-model="cd.quantity"  :min="1" :max="99" ></el-input-number>
            <!-- <p>{{cd.quantity}}</p> -->
            <span @click="delProduct(CD,index)">删除商品</span>
          </li>
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
      carData:''
    }
  },
  methods: {
    ...mapActions(['delProduct']),
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
    }
  },
  created(){
      this.carData = this.$store.state.car
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
