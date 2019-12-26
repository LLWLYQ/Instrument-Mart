<template>
  <div class="cart">
    <div class="content_container">
      <div class="top">
        <p>
          <span>全部商品(商品数量)</span>
        </p>
      </div>
      <div class="mine">
        <ul class="cartLsit" v-for="(CD,index) in carData" :key="index" >
          <li>
            <img :src="baseUrl+CD.img" alt="">
            <p>{{CD.name}}</p>
            <p>
              <!-- <del><span style="color:#9c9c9c;">￥{{cd.DiscountPrice}}</span></del> -->
              <span>￥{{CD.get_goods.sales_price}}</span>
            </p>
            <el-input-number v-model="CD.quantity"  :min="1" :max="99" @change="handelChange(CD)"></el-input-number>
            <p><span style="color:#f40;">￥{{CD.quantity*CD.get_goods.sales_price}}</span></p>
            <!-- <p>{{cd.quantity}}</p> -->
            <span @click="removeGoods(CD,index)" class="last">删除商品</span>
          </li>
        </ul>
        <p>
          <span>总价</span>
          <span>￥{{(totalPrice)}}</span>
        </p>
        <p>
          <span class="To_settle_accounts" @click="ToSettleAccounts()">去结算</span>
          <router-link to="/OrderForm"></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import quantity from '../goods/Detail/Quantity/quantity';
import config from '../../config/config'
export default {
  data () {
    return {
      carData:'',
      total_prices:0,
      baseUrl:config.baseUrl,
      cart_id:'',
      goods_id:'',
      List:true,
      totalPrice:0,
      name:''
    }
  },
  methods: {
    ToSettleAccounts(){
      this.$ajax({
        url:config.baseUrl + '/home/order',
        method:'post',
        data:{
          member_id:localStorage.getItem('userId'),
          address_id:'',
          shop_id:'',
          payment_type:'',
          shipping_method:'',
          goods:'',
          product_id:this.goods_id,
          name:this.name,
          quantity:'',
          price:'',
          total:this.totalPrice
        }
      }).then(res=>{
        console.log(res)
      })
    },
    //数量加减
    handelChange(CD){
      this.$ajax({
        url:config.baseUrl + '/home/cart/add',
        method:'post',
        data:{
          goods_id:CD.goods_id,
          member_id:CD.member_id,
          option:[],
          quantity:CD.quantity
        }
      }).then(res=>{
        if(res.data.code === 20000){
          this.totalPrice = 0
          this.$ajax({
            url:config.baseUrl+'/home/cart',
            method:'get',
            params:{
              member_id:localStorage.getItem('userId')
            }
          }).then(res=>{
            this.carData = res.data.data.items.data
            this.carData.forEach(item=>{
              this.totalPrice += item.quantity*item.get_goods.sales_price
            })
          })
        }
      })
    },
    removeGoods(CD,index){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          type: 'warning'
        }).then(() => {
          this.$ajax({
            url:config.baseUrl + '/home/cart/del',
            method:'post',
            data:{
              cart_id:CD.cart_id,
              goods_id:CD.goods_id
            }
          }).then(res=>{
              this.carData.splice(index,1)
              this.totalPrice -= CD.quantity*CD.get_goods.sales_price
          })
        }).catch(() => {
      });
    },
  },
  created(){

      // this.carData = this.$store.state.car
      // console.log(this.carData)
      this.$ajax({
        url:config.baseUrl+'/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId')
        }
      }).then(res=>{
        this.carData = res.data.data.items.data
        this.carData.forEach(item=>{
          this.totalPrice += item.quantity*item.get_goods.sales_price
          this.goods_id = item.goods_id
          this.name = item.name
          console.log(this.goods_id)
        })
      })
  },
  computed:{
    count (){
      return this.$store.state.car
    },
    // ...mapGetters(['totalPrice'])
  },
  watch:{
    quantity(val,oldval){
    }
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
        cursor:pointer;
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
        cursor:poninter;
      }
  }
   .To_settle_accounts{
        float: right;
        margin-right: 30px;
        padding:10px 30px;
        background-color: #f40;
        color:white;
        cursor: pointer;
    }
    .To_settle_accounts:hover{
      background-color: red;
    }
</style>
