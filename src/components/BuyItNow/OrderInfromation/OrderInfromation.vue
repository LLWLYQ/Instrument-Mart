<template>
  <div class="OrderInfromation">
    <div class="payment">
      <h4>支付方式</h4>
      <ul class="MOP"></ul>
    </div>
    <div class="sku">
      <h4>订单信息</h4>
      <ul class="St">
        <li>店铺宝贝</li>
        <!-- <li>商品属性</li> -->
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
      </ul>
      <ul class="cartLsit" v-for="(LD,index) in ListData" :key="index" >
        <li class="carLi">
          <p><img :src="baseUrl+LD.img" alt=""></p>
          <p>{{LD.name}}</p>
          <p>
              <!-- <del><span style="color:#9c9c9c;">￥{{cd.DiscountPrice}}</span></del> -->
            <span>￥{{LD.get_goods.sales_price}}</span>
          </p>
          <!-- <el-input-number v-model="LD.quantity"  :min="1" :max="99" @change="handelChange(LD)"></el-input-number> -->
          <p><span>{{LD.quantity}}</span></p>
          <p><span style="color:#f40;">￥{{LD.quantity*LD.get_goods.sales_price}}</span></p>
            <!-- <p>{{cd.quantity}}</p> -->
          <!-- <span @click="removeGoods(LD,index)" class="last">删除商品</span> -->
        </li>
      </ul>
    </div>
    <div class="OrderFrom">
      <ul>
        <li>实付款:<span class="price"><a>￥</a>{{SumData}}</span></li>
        <li>寄送至:</li>
        <li>收货人:</li>
      </ul>
      <span class="order">提交订单</span>
    </div>
  </div>
</template>

<script>
import config from '../../../config/config'
export default {
  data () {
    return {
      ListData:'',
      SumData:0,
    }
  },
  methods: {
     order(){
      this.$ajax({
        url:config.baseUrl + '/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId'),
        }
      }).then(res=>{
        this.ListData =  res.data.data.items.data
        this.ListData.map(item=>{
          this.SumData += item.quantity*item.get_goods.sales_price
        })
      })
    }
  },
  created(){
    this.order()
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';
  .top{
    margin-top: 20px;
    .TP{
      border-bottom:1px solid #000;
    }
  }
  .payment{
    h4{
      padding-bottom: 10px;
      border-bottom:1px solid #222;
    }
    .MOP{
      height: 10px;
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom:1px solid #222;
      height: 100px;
    }
  }
  .sku{
    margin-top: 20px;
    .St{
      height: 30px;
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom:1px solid #222;
      li{
        float: left;
      }
      li:nth-child(1){
        margin-left:100px;
      }
      li:nth-child(4){
        margin-left:500px;
      }
      li:nth-child(2){
        margin-left:350px;
      }
       li:nth-child(3){
        margin-left:200px;
      }

    }
    .cartLsit{
      .carLi{
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        height: 230px;
      }
      p{
        float: left;
        height: 200px;
      }
      p:nth-child(n+2){
        padding-top:40px;
      }
      p:nth-child(2){
        width: 200px;
      }
      p:nth-child(5){
         width: 430px;
         text-align: right;
      }
      p:nth-child(3){
        width: 210px;
        text-align: center;
      }
      p:nth-child(4){
         width: 270px;
         text-align: center;
      }

    }
  }
  .OrderFrom{
    float: right;
    margin-bottom: 50px;
    ul{
      width: 350px;
      height: 160px;
      border:1px solid #ff0036;
      padding:10px;
      li{
        width: 100%;
        text-align: right;
        margin-top: 15px;
        font-size: 14px;
        font-weight: bold;
        .price{
          font-size: 30px;
          color:#ff0036;
          font-weight: normal;
          a{
            color:#999;
          }
        }
      }
    }
    .order{
      float: right;
      background-color: rgb(255, 0, 54);
      color:#fff;
      padding:10px 50px;
    }
  }
</style>
