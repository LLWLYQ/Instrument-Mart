<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <h3>确认订单信息</h3>
      </div>
      <div class="address">
        <div class="Top">
          <h4>收货地址</h4>
        </div>
        <Address v-if="AddressList" @Addr="Addr()" style="height:auto;border-bottom: 1px solid #222;margin-bottom:20px;padding:0px 0 50px 0;overflow:hidden;"></Address>
      </div>
      <div class="order_information">
        <div class="payment">
          <h4>支付方式</h4>
          <ul class="MOP">
            <li>
              <template>
                <!-- `checked` 为 true 或 false -->
                <el-radio v-model="ZFB" ></el-radio>
              </template>
              <img src="../../../src/assets/imges/zfb.jpg" style="height:80px;width:200px;">
            </li>
          </ul>
        </div>
        <OrderInfromation></OrderInfromation>
      </div>
      <div class="OrderFrom">
        <ul>
          <li>实付款:<span class="price"><a>￥</a>{{SumData}}</span></li>
          <li>寄送至:大石</li>
          <li>收货人:Max</li>
        </ul>
        <span class="order" @click="submitOrder()">提交订单</span>
      </div>
    </div>
  </div>
</template>
<script>
import Address from './Address/Address'
import OrderInfromation from './OrderInfromation/OrderInfromation'
import config from '../../config/config'
import Qs from 'qs'
export default {
  data () {
    return {
      AddressList:true,
      province_id:'',
      city:'',
      area:'',
      ZFB: 1,
      ListData:'',
      SumData:0,
      sales_price:'',
      goods_name:'',
      goods_id:'',
      quantity:'',
      List:'',
      Sum:'',
      adrID:5,
      DataList:[],
      Logistics:[],
      member_id:localStorage.getItem('userId')
    }
  },
  methods: {
    Addr(Addr){
     let w =  Addr
     console.log(w)
    },

    submitOrder(){
      this.$ajax({
        url:config.baseUrl + '/home/order',
        method:'post',
        data:{
          member_id:localStorage.getItem('userId'),
          address_id:this.adrID,
          shop_id:'2',
          shop_name:'',
          payment_type:this.ZFB,
          shipping_method:1,
          goods:this.DataList
        }
      }).then(res=>{
        // if( res.data.code ==20000 ){
        //   this.$router.push({
        //     path:'/Alternate'
        //   })
        // }
      })
    }
  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  },
  created(){

    this.$ajax({
        url:config.baseUrl + '/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId'),
        }
      }).then(res=>{
        this.ListData =  res.data.data.items.data
        // // console.log(this.ListData)
        // this.DataList.push({
        // })
        let result = []
        var goods = {}
        this.ListData.map((item,index)=>{
          this.SumData += item.quantity*item.get_goods.sales_price
          goods.total = item.quantity*item.get_goods.sales_price
          goods.quantity = item.quantity
          goods.product_id = item.get_goods.goods_id
          goods.name = item.get_goods.goods_name
          goods.price = item.get_goods.sales_price
          result.push(goods)
        })
        this.DataList =  result
        var Diu = {}
        this.DataList.forEach((item,index)=>{
            Diu[index] = item
          })
         this.DataList =  Diu
      })
      this.$ajax({
        url:config.baseUrl + '/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId'),
        }
      }).then(res=>{
        this.ListData =  res.data.data.items.data
        let result = []
        var goods = {}
        this.ListData.map((item,index)=>{
          goods.quantity = item.quantity
          goods.product_id = item.get_goods.goods_id
          goods.name = item.get_goods.goods_name
          result.push(goods)
        })
        this.Logistics =  result
        var Diu = {}
        this.Logistics.forEach((item,index)=>{
            Diu[index] = item
          })
        this.Logistics =  Diu
        if(res.data.code == 20000){
        this.$ajax({
          url:config.baseUrl + '/home/shipping',
          method:'get',
          params:{
            member_id:this.member_id,
            goods:this.Logistics
          }
        }).then(res=>{
          console.log(res)
        })
        }
      })
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .top{
    margin-bottom: 30px;
  }
  .Top{
    h4{
      font-size: 16px;
      border-bottom:1px solid #222;
      padding-bottom: 10px;
    }
     border-bottom:1px solid #222;
     overflow: hidden;
     margin-bottom: 10px;
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
        li{
          line-height: 85px;
          img{
            margin-left:0px;
          }
          .el-radio{
            float: left;
            line-height: 80px;
            margin-right: 0px;
          }
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
      background-color: #ff0036;
      color:#fff;
      padding:10px 50px;
      cursor: pointer;
    }
  }
</style>
