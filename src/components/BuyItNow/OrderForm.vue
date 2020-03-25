<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <div class="top_img">
          <img src="../../assets/imges/logo.png" alt="">
        </div>
        <div class="plan">
          <div class="plan_top">
            <ul>
              <li>1</li>
              <p></p>
              <li>2</li>
              <p></p>
              <li>3</li>
              <p ></p>
              <li>4</li>
              <p style="width:78px;"></p>
              <li>5</li>
            </ul>
          </div>
          <div class="plan_bottom">
            <ul>
              <li>查看购物车</li>
              <p></p>
              <li>拍下商品</li>
              <p></p>
              <li>付款到支付宝</li>
              <p ></p>
              <li>确认收货</li>
              <p></p>
              <li>评价</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="Top">
          <!-- <h4>收货地址</h4> -->
        </div>
        <h1 style="font-size:14px;">选择收获地址</h1>
        <Address v-if="AddressList" @addressData="addressData" style="height:auto;border-bottom: 3px solid #b2d1ff;margin-bottom:20px;padding:0px 0 20px 0;overflow:hidden;"></Address>
      </div>
      <div class="order_information">
        <div class="payment">
          <h4 style="font-size:14px;">支付方式</h4>
          <ul class="MOP">
            <li>
              <template>
                <!-- `checked` 为 true 或 false -->
                <el-radio v-model="ZFB" :label="ZFB"></el-radio>
              </template>
              <img src="../../../src/assets/imges/zfb.jpg" style="height:80px;width:200px;">
            </li>
          </ul>
        </div>
        <div class="sku">
          <h2 style="font-size:14px;">确认订单信息</h2>
          <ul class="first">
            <!-- <li><input type="checkbox" v-model="checkAll" @click="allCheck(checkAll)">全选</li> -->
            <li>商品信息</li>
            <li>商品属性</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
          </ul>
           <ul v-for="(item,index) in orderData" :key="index" class="center_tr">
                <!-- <li><input type="checkbox" :value="item.id" v-model="checked" @click="currClick(item,index)" ></li> -->
                <li><a href="" style="display:block;height:80px;color:#000;"><img :src="baseUrl+item.img" alt=""><span>{{item.productName}}</span></a></li>
                <li><p v-for="Opt in item.option" :key="Opt.id"><span v-for="opt in Opt" :key="opt.id"  >{{opt.option_name}}：{{opt.name}}</span></p></li>
                <li>￥{{item.price}}</li>
                <li>{{item.count}}</li>
                <li>￥{{item.price*item.count}}</li>
                <!-- <li><span @click="removeGoods(item,index)">删除商品</span></li> -->
          </ul>
        </div>
      </div>
      <div class="OrderFrom">
        <ul>
          <li>实付款:<span class="price"><a>￥</a>{{totalMoney}}</span></li>
          <li v-if="adrID">寄送至：{{AddressData.address}}</li>
          <li v-if="adrID">收货人:{{AddressData.receiver}}</li>
        </ul>
        <span class="order_over" v-if="adrID == ''">请选择地址</span>
        <span class="order" @click="submitOrder()" v-if="adrID">提交订单</span>
      </div>
      <div style="clear:both;"></div>
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
      orderData:JSON.parse(this.$route.query.orderData),
      totalMoney:JSON.parse(this.$route.query.totalMoney),
      AddressList:true,
      province_id:'',
      city:'',
      area:'',
      ZFB:1,
      ListData:'',
      SumData:0,
      // sales_price:'',
      goods_name:'',
      goods_id:'',
      quantity:'',
      List:'',
      Sum:'',
      adrID:'',
      DataList:'',
      option:'',
      member_id:localStorage.getItem('userId'),
      Logistics_Selecting:'',
      LogS:'1',
      AddressData:''
    }
  },
  methods: {
    addressData(addressData){
      // console.log(addressData)
     this.AddressData =  addressData
     this.adrID = addressData.id
    //  console.log(this.AddressData)
    },
    submitOrder(){
      this.$ajax({
        url:config.baseUrl + '/home/order',
        method:'post',
        data:{
          member_id:localStorage.getItem('userId'),
          address_id:this.adrID,
          payment_type:this.ZFB,
          shipping_method:1,
          goods:this.DataList
        }
      }).then(res=>{
        // console.log(res.data.data.order_id)
        if( res.data.code ==20000 ){
          this.$router.push({
            path:'/TuningUpThePayment',
            query:{
              order_id:res.data.data.order_id
            }
          })
        }
      })
    }
  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  },
  created(){
        let result = []
        let optres = []
        var goods = {}
        var option = {}
        this.orderData.map((item,index)=>{
          goods = {}
          goods.total = this.totalMoney
          goods.quantity = item.count
          goods.product_id = item.id
          goods.name = item.productName
          goods.price = item.price
          goods.shop_id = item.shop;
          this.option = item.option;
          result.push(goods)
        })
        this.option.map(item=>{
            item.map((item,index)=>{
              option = {}
              option.goods_option_value_id = item.goods_option_value_id
              option.goods_option_id = item.goods_option_id

            })
            optres.push(option)
              goods.option = optres
              console.log(goods.option)
          })
        this.DataList =  goods
        console.log(this.DataList)
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
.plan{
  width: 710px;
  height: 95px;
  float: right;
  // line-height: 95px;
  .plan_top{
    ul{
      float: right;
      margin-top: 20px;
      li{
        cursor: pointer;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #fff;
        color:#222;
        float: left;
        line-height: 32px;
        text-align: center;
        border:1px solid #a0a2ad;
      }
      p{
        width: 100px;
        height: 1px;
        float: left;
        margin: 16px 10px 0 10px;
        background: #e6e7eb;
      }
    }
    ul li:active{
        transform:scale(0.7);
        -ms-transform:rotate(0.7); 	/* IE 9 */
        -moz-transform:rotate(0.7); 	/* Firefox */
        -webkit-transform:rotate(0.7); /* Safari 和 Chrome */
        -o-transform:rotate(0.7); 	/* Opera */
      }
    ul li:nth-child(1){
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #e94c15;
      color:#fff;
      float: left;
      line-height: 32px;
      text-align: center;
      border:none;
    }
  }
  .plan_bottom{
    ul{
      float: right;
      margin-top: 10px;
      li{
        // width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #fff;
        color:#222;
        float: left;
        font-size: 16px;
        font-weight: 700;
        line-height: 32px;
        text-align: center;
        // border:1px solid #a0a2ad;
      }
      p{
        width: 56px;
        height: 1px;
        float: left;
        margin: 16px 10px 0 10px;
        background: #e6e7eb;
      }
    }
    // ul li:nth-child(1){
    //   width: 32px;
    //   height: 32px;
    //   border-radius: 50%;
    //   background: #ff0036;
    //   color:#fff;
    //   float: left;
    //   line-height: 32px;
    //   text-align: center;
    //   border:none;
    // }
  }
}
.center_tr{
      height: 130px;
      width:1188;
      border-bottom: 1px dotted rgb(128, 178, 255);
      margin-bottom: 15px;
      padding:17px 0 0 0;
      li{
        float: left;

      }
    }
      .center_tr li:nth-child(1){
        width: 280px;
        img{
          width: 80px;
          height: 80px;
          float: left;
        }
        span:hover{
          text-decoration: underline;
          color:#f40;
          cursor: pointer;
          float: left;
        }
      }
      .center_tr li:nth-child(3){
        width: 392px;
        padding-left: 135px;
        p{
          margin-bottom: 5px;
          span{
            font-size: 12px;
          }
        }
        // text-align: center;
        // width: 359px;
        // padding-left: 220px;
        // color: #3c3c3c;
        // font-weight: 700;
        // font-family: Verdana,Tahoma,arial;
      }
      .center_tr li:nth-child(4){
        text-align: center;
        width: 107px;
        color: #3c3c3c;
        font-weight: 700;
        font-family: Verdana,Tahoma,arial;
      }
      .center_tr li:nth-child(5){
        text-align: center;
        width: 120px;
        padding-left: 10px;
        color: rgb(255, 0, 54);
        font-size: 14px;
        font-weight: bold;
        .el-input-number{
          width: 80px;
          // color:#222;
        }

      }
      // .center_tr li:nth-child(6){
      //   text-align: center;
      //   color: #f40;
      //   font-weight: 700;
      //   width: 138px;
      //   font-family: Verdana,Tahoma,arial;
      //   padding-top: 3px;

      // }
      // .center_tr li:nth-child(7){
      //   text-align: center;
      //   width: 149px;
      //   padding-left: 30px;
      //   span:hover{
      //     text-decoration: underline;
      //     color:#f40;
      //     cursor: pointer;
      //   }
      // }
.sku{
  border-bottom: 1px dotted rgb(221, 221, 221);
  h2{
    line-height: 25px;
    color: #333;
    font-weight: 700;
    font-size: 14px;
  }
    margin-top: 20px;
    .first{
      border-bottom: 3px solid #b2d1ff;
      height: 24px;
      line-height: 24px;
      margin-top: 15px;
      li{
        float: left;
      }
    }
    .first li:nth-child(1){
      width: 160px;
      padding-left: 80px;
    }
    .first li:nth-child(2){
      width: 322px;
      padding-left: 120px;
    }
    .first li:nth-child(3){
      width: 252px;
    }
    .first li:nth-child(4){
      text-align: center;
      width: 107px;
    }
    .first li:nth-child(5){
      text-align: center;
      width: 120px;
      padding-left: 10px;
    }
    .first li:nth-child(6){
      text-align: center;
      width: 140px;
    }
    .first li:nth-child(7){
      text-align: center;
      width: 149px;
      padding-left: 30px;
    }
    .cartLsit{
      .carLi{
        border-bottom: 3px solid #b2d1ff;
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
  .top{
    margin: 30px 0;
    height: 95px;
    position: relative;
    // line-height: 95px;
    img{
      height: 75px;
      width: 200px;
      float: left;
      margin-top: 20px;
    }
    // h1{
    //   float: left;
    //   font-size: 20px;
    //   line-height: 95px;
    // }
    // .Search_Goods{
    //   margin-left: 590px;
    //   position: absolute;
    //   top: 28px;
    // }
  }
  // .Top{
  //   h4{
  //     font-size: 16px;
  //     // border-bottom:2px solid #f40;
  //     padding-bottom: 10px;
  //   }
  //    border-bottom: 3px solid #b2d1ff;
  //    overflow: hidden;
  //    margin-bottom: 10px;
  // }
   .payment{
      h4{
        padding-bottom: 10px;
        border-bottom: 3px solid #b2d1ff;
      }
      .MOP{
        height: 10px;
        margin-top: 10px;
        padding-bottom: 15px;
        border-bottom: 3px solid #b2d1ff;
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
    .Logistics_Selecting{
      margin-top: 20px;
      border-bottom: 3px solid #b2d1ff;
      h4{
        padding-bottom: 10px;
        border-bottom: 3px solid #b2d1ff;
      }
      .LS{
        height: 10px;
        margin: 10px 0px;
        padding-bottom: 15px;
        height: 50px;
        li{
          line-height: 25px;
          font-size: 14px;
        }
      }
    }
    .OrderFrom{
    // float: right;
    margin-top: 10px;
    float: right;
    padding-bottom: 60px;
    ul{
      width: 350px;
      height: 160px;
      border: 1px solid #f40;
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
      padding:10px 60px;
      cursor: pointer;
    }
    .order_over{
      float: right;
      background: #B0B0B0;
      cursor: not-allowed;
      color: #fff;
      padding:10px 60px;
    }
  }

</style>
<style lang="">
  .el-radio__label{
    display: none;
  }
</style>
