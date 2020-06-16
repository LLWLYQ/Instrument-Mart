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
              <p></p>
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
              <p></p>
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
        <Address v-if="AddressList" @addressData="addressData"
          style="height:auto;border-bottom: 3px solid #b2d1ff;margin-bottom:20px;padding:0px 0 20px 0;overflow:hidden;">
        </Address>
      </div>
      <div class="order_information">
        <div class="payment">
          <h4 style="font-size:14px;">支付方式</h4>
          <ul class="MOP">
            <li>
              <template>
                <!-- `checked` 为 true 或 false -->
                <el-radio v-model="ZFB" :label="1"></el-radio>
              </template>
              <img src="../../../src/assets/imges/zfb.jpg" style="height:80px;width:200px;">
            </li>
          </ul>
        </div>
        <div class="payment">
          <h4 style="font-size:14px;">平台优惠券</h4>
          <p style="text-align:left; margin-bottom:20px; margin-top:20px;">
            <template>
              <el-select v-model="coupon_id" placeholder="请选择优惠券" @change="Coupon()">
                <el-option v-for="item in CouponList" :key="item.receive_id" :label="item.money"
                  :value="item.receive_coupon_id">优惠券{{item.money}}
                </el-option>
              </el-select>
            </template>
          </p>
        </div>
        <div class="sku">
          <h2 style="font-size:14px;">确认订单信息</h2>
          <ul class="first">
            <li>商品信息</li>
            <li>商品属性</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
          </ul>
          <ul v-for="(item,index) in OrderDataList" :key="index" class="center_tr" >
            <li
              style="width:100%; height:40px; line-height:40px; border-bottom:1px solid; font-size:14px; font-weight:bold;">
              <router-link :to="{name:'Detail',query:{listId:item.id}}" target="_blank" tag="a"
                style="display:block;height:40px;color:#000;">
                店铺：<span style="font-size:12px; color:#999;">{{item.shop_name}}</span>
              </router-link>
            </li>
            <ul v-for="(item2,index2) in item.carts_list" :key="index2" style="width:100%; min-height:100px;display:inline-block;margin-top:5px;
      vertical-align:middle;">
              <li
                style="font-size:10px; font-weight:100; width:260px; height:100px; line-height:100px; margin-left:10px; ">
                <img :src="baseUrl+item2.files_path" alt=""
                  style="width:50px; height:50px; margin:25px 10px 0 0; border:1px solid;">{{item2.goods_name}}
              </li>
              <li style="width:240px; height:100px; text-align: center; padding-left:0px;line-height:100px;">
                <p v-if="item2.goods_option_value" v-for="Opt in item2.goods_option_value" :key="Opt.id">
                  <span>{{Opt.option_name}}：{{Opt.name}} 价格:<strong style="color:red;">{{Opt.price_prefix}}
                      {{Opt.price}}</strong>
                  </span>
                </p>
                <p v-if="!item2.goods_option_value" style="color:#999;">
                  <span>无</span>
                </p>
              </li>
              <li style="width:120px; height:100px; margin-right:10px;  text-align: center;line-height: 100px;">
                ￥{{(item2.last_price/100)}}</li>
              <li style="width:120px; height:100px; margin-right:10px;  text-align: center;line-height: 100px;">
                {{item2.quantity}}</li>
              <li style="width:120px; height:100px; margin-right:10px;  text-align: center; line-height: 100px; ">
                ￥{{(item2.last_price/100)*item2.quantity}}</li>
            </ul>
            <li
              style="width:100% !important; min-height:40px; line-height:40px; border-bottom:1px solid; font-size:14px; font-weight:bold; margin-top:20px;">
              <h4 style="font-size:14px; text-align:left;margin: 30px 0 0 0;">店铺优惠券</h4>
              <p style="text-align:left; margin-bottom:20px;">
                <template>
                  <el-select v-model="item.shop_coupon_id" placeholder="请选择优惠券" @change="CouponTwo()">
                    <el-option v-for="item in ShopCouponList" :key="item.receive_id" :label="item.money"
                      :value="item.receive_coupon_id">优惠券{{item.money}}
                    </el-option>
                  </el-select>
                </template>
              </p>

              <h4 style="font-size:14px; text-align:left;">运送方式</h4>
              <p style="text-align:left; margin-bottom:20px;">
                <el-input v-model="item.shipping_money" type="text" placeholder="请输入内容" value="1111111111"></el-input>
                <!-- {{base_fee}} -->
                普通配送:快递 <strong style="color:red;">0.00</strong> 元
              </p>

              <h4 style="font-size:14px; text-align:left;">
                <el-checkbox v-model="item.invoice">开具发票</el-checkbox>
              </h4>
              <p style="text-align:left; margin-bottom:20px;" v-if="item.invoice==true">
                <template>
                  <el-form :inline="true" :model="item" class="demo-form-inline">
                    <el-form-item label="名称">
                      <el-input v-model="item.title" placeholder="请输入企业名称或个人名称"></el-input>
                    </el-form-item>
                    <el-form-item label="信用代码">
                      <el-input v-model="item.code" placeholder="请输入信用代码"></el-input>
                    </el-form-item>
                    <el-form-item label="电话">
                      <el-input v-model="item.phone" placeholder="请输入联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="寄送地址" style="margin-top:20px;">
                      <el-input v-model="item.address" placeholder="请输入地址" style="width:600px;"></el-input>
                    </el-form-item>
                  </el-form>
                </template>
              </p>
              <!-- <p style="text-align:left; margin-bottom:20px; color:#999;" v-for="(item3,index2) in item.carts_list" :key="index2"> 店铺合计费用: <strong style="color:red;">{{item3.sales_price*item3.quantity/100}}</strong> 元</p> -->
            </li>
          </ul>
        </div>
      </div>
      <div class="OrderFrom">
        <ul>
          <li>实付款:<span class="price"><a>￥</a>{{TotalMoney/100}}</span></li>
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
    data() {
      return {
        invoice: {
          show: true,
          type: 1,
          text: '',
        },
        orderData: [],
        TotalMoney: JSON.parse(this.$route.query.totalMoney),
        OrderDataList:JSON.parse(this.$route.query.OrderDataList),
        AllOrderDataList:JSON.parse(this.$route.query.AllOrderDataList),
        AddressList: true,
        province_id: '',
        city: '',
        area: '',
        ZFB: 1,
        ListData: '',
        SumData: 0,
        // sales_price:'',
        goods_name: '',
        goods_id: '',
        quantity: '',
        List: '',
        Sum: '',
        adrID: '',
        DataList: '',
        CouponList: '',
        ShopCouponList: '',
        option: '',
        member_id: localStorage.getItem('userId'),
        Logistics_Selecting: '',
        LogS: '1',
        AddressData: '',
        coupon_id: '',
        shop_coupon_id: '',
        base_fee: 0,
        step_fee: 0,
        total_weight: 0,
        shop_total:0
        
      }
    },
    methods: {
      Coupon() {
        this.DataList.coupon_id = this.coupon_id
      },
      CouponTwo() {

        this.DataList.shop_coupon_id = this.shop_coupon_id

      },
      addressData(addressData) {
        this.AddressData = addressData
        this.adrID = addressData.id
        this.DataList.address_id = addressData.id

        //console.log(this.adrID)

        this.$ajax({
          url: config.baseUrl + '/home/address/' + this.adrID,
          method: 'get',
        }).then(res => {

          // console.log(res.data.data.city_id)
          //查看配送费
          this.$ajax({
            url: config.baseUrl + '/home/shipping/' + res.data.data.city_id,
            method: 'get',
          }).then(res => {

            // console.log(res.data)

            this.base_fee = res.data.data.configure.base_fee //首重1KG费用
            // console.log(this.base_fee)
            this.step_fee = res.data.data.configure.step_fee //续重第KG费用
          })
        })
      },
      submitOrder() {
        this.$ajax({
          url: config.baseUrl + '/home/order',
          method: 'post',
          data: this.DataList
        }).then(res => {
          if (res.data.code == 20000) {
            this.$router.push({
              path: '/TuningUpThePayment',
              query: {
                order_id: res.data.data.order_id
              }
            })
          }
        })
      }
    },
    components: {
      'Address': Address,
      'OrderInfromation': OrderInfromation
    },
    created() {
      // console.log(this.AllOrderDataList)
      let result = []
      let optres = []
      var goods = []
      var option = {}
      let GList = {}
      let OrDL = []
      this.OrderDataList.map(item=>{
         item.carts_list.map(citem=>{
           OrDL.push(citem)
         })
      })
      // GList.carts_list = OrDL
      // console.log(GList.carts_list)
      //查询购物车数据
      this.$ajax({
        url: config.baseUrl + '/home/cart',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        //console.log(res.data.data.items.data)
        // console.log(res.data.data.items)
        res.data.data.items.map((item, index) => {
          
          this.goodsNumber = index + 1
          GList = {}
          GList.shop_name = item.shop_name
          GList.shop_id = item.shop_id
          GList.shop_all_weight = item.shop_all_weight
          GList.title = ''
          GList.code = ''
          GList.phone = ''
          GList.address = ''
          GList.invoice = item.invoice
          GList.carts_list = OrDL
          GList.shipping_money = item.shipping_money
          console.log(GList)
          let total_pricesTwo = item.carts_list.map(itemTwo => {
            return itemTwo.last_price * itemTwo.quantity;
          })
          this.shop_total = eval(total_pricesTwo.join("+")); //店铺总价
          this.orderData.push(GList)
          
        })
        console.log(this.orderData)
        let newdata = {

          member_id: localStorage.getItem('userId'),
          address_id: this.adrID,
          payment_type: this.ZFB,
          shipping_method: 1,
          goods: this.orderData,
        }
        this.DataList = newdata //提交订单数据




        //计算总重量
        let total_weight = 0;
        for (let t in res.data.data.items) {

          total_weight += res.data.data.items[t].shop_all_weight;

        }

        this.total_weight = total_weight //总重量


        //计算价格
        let total_prices = res.data.data.items.map((itemOne, indexOne) => {

          let total_pricesTwo = res.data.data.items[indexOne].carts_list.map(itemTwo => {

            return itemTwo.last_price * itemTwo.quantity;

          })
          return total_pricesTwo;

        })

        var newPrice = 0;
        for (let t in total_prices) {

          newPrice += eval(total_prices[t].join("+"));

        }

        // this.totalMoney=newPrice  //总订单价格


        //查询优惠券数据
        this.$ajax({
          url: config.baseUrl + '/home/coupon_receive/can',
          method: 'post',
          data: {

            member_id: localStorage.getItem('userId'),
            money: this.TotalMoney,

          }
        }).then(res => {

          if (res.data.code == 20000) {

            this.CouponList = res.data.datas.data
          }
        })


        //查询店铺优惠券数据
        this.$ajax({
          url: config.baseUrl + '/home/shop_coupon_receive/can',
          method: 'post',
          data: {

            member_id: localStorage.getItem('userId'),
            money: this.TotalMoney,
            shop_id: 8,

          }
        }).then(res => {

          if (res.data.code == 20000) {
            this.ShopCouponList = res.data.datas.data
          }
        })
      })
    }
  }

</script>

<style scoped lang="scss">
  @import '../../style/common';

  .plan {
    width: 710px;
    height: 95px;
    float: right;

    // line-height: 95px;
    .plan_top {
      ul {
        float: right;
        margin-top: 20px;

        li {
          cursor: pointer;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fff;
          color: #222;
          float: left;
          line-height: 32px;
          text-align: center;
          border: 1px solid #a0a2ad;
        }

        p {
          width: 100px;
          height: 1px;
          float: left;
          margin: 16px 10px 0 10px;
          background: #e6e7eb;
        }
      }

      ul li:active {
        transform: scale(0.7);
        -ms-transform: rotate(0.7);
        /* IE 9 */
        -moz-transform: rotate(0.7);
        /* Firefox */
        -webkit-transform: rotate(0.7);
        /* Safari 和 Chrome */
        -o-transform: rotate(0.7);
        /* Opera */
      }

      ul li:nth-child(1) {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #e94c15;
        color: #fff;
        float: left;
        line-height: 32px;
        text-align: center;
        border: none;
      }
    }

    .plan_bottom {
      ul {
        float: right;
        margin-top: 10px;

        li {
          
          // width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fff;
          color: #222;
          float: left;
          font-size: 16px;
          font-weight: 700;
          line-height: 32px;
          text-align: center;
          // border:1px solid #a0a2ad;
        }

        p {
          width: 56px;
          height: 1px;
          float: left;
          margin: 16px 10px 0 10px;
          background: #e6e7eb;
        }
      }
    }
  }

  .center_tr {
    min-height: 180px;
    // width: 1188px;
    border-bottom: 1px dotted rgb(128, 178, 255);
    margin-bottom: 15px;
    padding: 17px 0 0 0;

    li {
      float: left;

    }
  }

  .center_tr li:nth-child(1) {
    width:100%;
    margin: 0 !important;

    img {
      width: 80px;
      height: 80px;
      float: left;
    }

    // span:hover{
    //   text-decoration: underline;
    //   color:#f40;
    //   cursor: pointer;
    //   float: left;
    // }
  }

  .center_tr li:nth-child(2) {
    width: 260px !important;
    margin: 0 !important;

    p {
      width: 282px;
    }
  }

  .center_tr li:nth-child(3) {
    width: 120px !important;
    margin: 0 !important;

    // padding-left: 135px;
    p {
      margin-bottom: 5px;

      span {
        font-size: 12px;
      }
    }
  }

  .center_tr li:nth-child(4) {
    text-align: center;
    width: 120px !important;
    margin: 0 !important;
    color: #3c3c3c;
    font-weight: 700;
    font-family: Verdana, Tahoma, arial;
  }

  .center_tr li:nth-child(5) {
    text-align: center;
    width: 180px !important;
    margin: 0 !important;
    padding-left: 10px;
    color: rgb(255, 0, 54);
    font-size: 14px;
    font-weight: bold;
    // .el-input-number{
    //   width: 80px;
    //   // color:#222;
    // }
  }

  .sku {
    border-bottom: 1px dotted rgb(221, 221, 221);

    h2 {
      line-height: 25px;
      color: #333;
      font-weight: 700;
      font-size: 14px;
    }

    margin-top: 20px;

    .first {
      border-bottom: 3px solid #b2d1ff;
      height: 24px;
      line-height: 24px;
      margin-top: 15px;

      li {
        float: left;
      }
    }

    .first li:nth-child(1) {
      width: 260px;
      padding-left: 80px;
    }

    .first li:nth-child(2) {
      width: 260px;
      text-align: center;
    }

    .first li:nth-child(3) {
      width: 120px;
      text-align: center;
    }

    .first li:nth-child(4) {
      text-align: center;
      width: 120px;
    }

    .first li:nth-child(5) {
      text-align: center;
      width: 180px;
      padding-left: 10px;
    }

    // .first li:nth-child(6){
    //   text-align: center;
    //   width: 140px;
    // }
    // .first li:nth-child(7){
    //   text-align: center;
    //   width: 149px;
    //   padding-left: 30px;
    // }
    .cartLsit {
      .carLi {
        border-bottom: 3px solid #b2d1ff;
        padding-bottom: 20px;
        height: 230px;
      }

      p {
        float: left;
        height: 200px;
      }

      p:nth-child(n+2) {
        padding-top: 40px;
      }

      p:nth-child(2) {
        width: 200px;
      }

      p:nth-child(5) {
        width: 430px;
        text-align: right;
      }

      p:nth-child(3) {
        width: 210px;
        text-align: center;
      }

      p:nth-child(4) {
        width: 270px;
        text-align: center;
      }

    }
  }

  .top {
    margin: 30px 0;
    height: 95px;
    position: relative;

    // line-height: 95px;
    img {
      height: 75px;
      width: 200px;
      float: left;
      margin-top: 20px;
    }
  }

  .payment {
    h4 {
      margin-top: 10px;
      padding-bottom: 10px;
      border-bottom: 3px solid #b2d1ff;
    }

    .MOP {
      height: 10px;
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom: 3px solid #b2d1ff;
      min-height: 100px;

      li {
        float: left;
        line-height: 70px;
        margin-left: 15px;

        img {
          margin-left: 0px;
        }

        .el-radio {
          float: left;
          line-height: 80px;
          margin-right: 0px;
        }
      }
    }
  }

  .Logistics_Selecting {
    margin-top: 20px;
    border-bottom: 3px solid #b2d1ff;

    h4 {
      padding-bottom: 10px;
      border-bottom: 3px solid #b2d1ff;
    }

    .LS {
      height: 10px;
      margin: 10px 0px;
      padding-bottom: 15px;
      height: 50px;

      li {
        line-height: 25px;
        font-size: 14px;
      }
    }
  }

  .OrderFrom {
    // float: right;
    margin-top: 10px;
    float: right;
    padding-bottom: 60px;

    ul {
      width: 350px;
      height: 160px;
      border: 1px solid #f40;
      padding: 10px;

      li {
        width: 100%;
        text-align: right;
        margin-top: 15px;
        font-size: 14px;
        font-weight: bold;

        .price {
          font-size: 30px;
          color: #ff0036;
          font-weight: normal;

          a {
            color: #999;
          }
        }
      }
    }

    .order {
      float: right;
      background-color: #ff0036;
      color: #fff;
      padding: 10px 60px;
      cursor: pointer;
    }

    .order_over {
      float: right;
      background: #B0B0B0;
      cursor: not-allowed;
      color: #fff;
      padding: 10px 60px;
    }
  }
  // .sku ul:nth-child(3){
  //   display:none !important;
  // }
</style>
<style lang="">
  .el-radio__label {
    display: none;
  }

</style>
