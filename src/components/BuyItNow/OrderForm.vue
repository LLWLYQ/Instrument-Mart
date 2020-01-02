<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <h3>确认订单信息</h3>
      </div>
      <div class="address">
        <div class="Top">
          <h4>收货地址</h4>
          <ul v-for="(adr,index) in address" :key="index" :class="{cur:iscur===index}" @click="iscur=index,tabChange(index,adr)">
            <li>
              <h5>({{adr.receiver}}收)</h5>
              <p style="font-size:14px;">{{adr.address}}&nbsp;{{adr.tel}}&nbsp;{{adr.zip_code}}</p>
            </li>
          </ul>
        </div>
        <Address v-if="AddressList"></Address>
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
export default {
  data () {
    return {
      AddressList:true,
      province_id:'',
      city:'',
      area:'',
      address:'',
      ZFB: 1,
      ListData:'',
      SumData:0,
      sales_price:'',
      goods_name:'',
      goods_id:'',
      quantity:'',
      List:'',
      Sum:'',
      iscur:0,
      adrID:5,
      DataList:{
        member_id:localStorage.getItem('userId'),
        address_id:this.adrID,
        shop_id:'2',
        payment_type:this.ZFB,
        shipping_method:1,
        goods:{}
      },
       goods:{
        total:Number,
        quantity:Number,
        product_id:Number,
        name:String,
        price:Number
      },
    }
  },
  methods: {
    tabChange(index,adr){
      this.iscur = index
      this.adrID = adr.id
      // console.log(adr.id)
    },
    submitOrder(){
      this.$ajax({
        url:config.baseUrl + '/home/order',
        method:'post',
        data:{
          member_id:localStorage.getItem('userId'),
          address_id:this.adrID,
          shop_id:'2',
          payment_type:this.ZFB,
          shipping_method:1,
          goods:this.goods
        }
      }).then(res=>{
        console.log(res)
      })
    }
  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/address',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId'),
      }
    }).then(res=>{
      this.address = res.data.data.items
      let cityID = res.data.data.items
      cityID.map(item=>{
        this.province_id = item.province_id
        this.city = item.city_id
        this.area = item.area_id
      })
      if(res.data.data.items != ''){
        this.AddressList = false
      }
    })
    this.$ajax({
        url:config.baseUrl + '/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId'),
        }
      }).then(res=>{
        this.ListData =  res.data.data.items.data
        // console.log(this.ListData)

        this.ListData.map((item,index)=>{
          this.SumData += item.quantity*item.get_goods.sales_price
          this.goods[index][total] = item.quantity*item.get_goods.sales_price
          this.goods[index][quantity] = item.quantity
          this.goods[index][product_id] = item.get_goods.goods_id
          this.goods[index][name] = item.get_goods.goods_name
          this.goods[index][price] = item.get_goods.sales_price
        })
        this.DataList.goods = this.goods
        console.log(this.DataList)
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
    ul{
      float: left;
      margin: 15px 20px 10px 20px;
      width: 220px;
      height: 110px;
      padding: 10px;
      border:5px dashed  #ccc;
      cursor: pointer;
    }
    .cur{
      border:5px dashed  #ff0036;
    }
     border-bottom:1px solid #222;
     overflow: hidden;
     margin-bottom: 20px;
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
