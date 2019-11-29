<template>
  <div class="Center">
    <div class="content_container">
      <div class="Center_left">
        <div class="user-info">
          <div class="head_portrait">
            <img src="../../assets/imges/sp_2.jpg" alt="">
            <p>15277748256</p>
          </div>
        </div>
        <div class="order">
            <div class="myOrder">
              <p @click="boxshow = !boxshow">我的订单</p>
              <transition name="draw">
                <ul class="box" v-show="boxshow">
                  <li v-for="(OD,index) in order" :key="index" :class="{cur:iscur===index}" @click="iscur=index,tabOrder(index)">{{OD.name}}</li>
                </ul>
              </transition>
            </div>
            <div class="Collecting">
              <p @click="boxshow2 = !boxshow2">我的收藏</p>
              <transition name="draw">
                <ul class="box" v-show="boxshow2">
                  <li class="brand" @click="brand()">所有品牌</li>
                </ul>
              </transition>
            </div>
            <div class="Aftermarket">
              <p @click="boxshow3 = !boxshow3">我的售后</p>
              <transition name="draw">
                <ul class="box" v-show="boxshow3">
                  <li>退货记录</li>
                </ul>
              </transition>
            </div>
            <div class="Account">
              <p @click="boxshow4 = !boxshow4">我的账户</p>
              <transition name="draw">
                <ul class="box" v-show="boxshow4">
                  <li>账户信息</li>
                  <li>收货地址</li>
                  <li>优惠券</li>
                </ul>
              </transition>
            </div>
          </div>
      </div>
      <div class="Center_right">
        <div class="top">
          <ul>
            <li v-for="(OD,index) in order" :key="index" :class="{cur:iscur===index}" @click="iscur=index,tabOrder(index)">
              {{OD.name}}
            </li>
          </ul>
        </div>
        <div v-if="!brands">
          <div class="order_tier">
            <All-Order v-if="iscur==0"></All-Order>
          </div>
          <div class="Collecting_tier">
            <Payment v-if="iscur==1"></Payment>
          </div>
          <div class="Aftermarket_tier">
            <To-Send-The-Goods v-if="iscur==2"></To-Send-The-Goods>
          </div>
          <div class="Account_tier">
            <Shipped v-if="iscur==3"></Shipped>
          </div>
          <div class="Goods">
            <Evaluation v-if="iscur==4"></Evaluation>
          </div>
        </div>
        <div class="Brand">
          <Brands v-if="brands==true"></Brands>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {AllOrder, Payment, ToSendTheGoods, Shipped, Distribution, Evaluation} from './Order'
import {Account_Information, Coupon, ShippingAddress} from './Account'
import Brands from './Collecting/Brands'
export default {
  data () {
    return {
      boxshow:true,
      boxshow2:true,
      boxshow3:true,
      boxshow4:true,
      order:[{name:'所有订单',id:0},{name:'待付款',id:1},{name:'待发货',id:2},{name:'待收货',id:3},{name:'购物评价',id:4}],
      iscur:0,
      brands:false,
    }
  },
  methods: {
    tabOrder(index){
      console.log(index)
    },
    brand(){
      this.brands = true
    }
  },
  components:{
    'All-Order': AllOrder,
    'Payment': Payment,
    'To-Send-The-Goods':ToSendTheGoods,
    'Shipped':Shipped,
    'Distribution':Distribution,
    'Evaluation':Evaluation,
    'Account-Information':Account_Information,
    'Coupon':Coupon,
    'Shipping-Address':ShippingAddress,
    'Brands':Brands
  },
  created(){
    console.log(this.order)
  }
}
</script>

<style scoped lang="scss">
@import "../../style/common";
  .content_container{
    .cur{
      background-color: #222;
      color:#fff;
    }
    height: 2000px;
    .Center_left{
      float: left;
      width: 200px;
      height: 2000px;
      .user-info{
        margin-top: 20px;
        width: 200px;
        height: 200px;
        .head_portrait{
          width: 200px;
          height: 100px;
          text-align: center;
          img{
            width: 100px;
            height: 100%;
          }
        }
      }
      .order{
        p{
          font-size: 20px;
          height: 30px;
          margin-left: 10px;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .myOrder{
          .box{
            height:125px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }
          .draw-enter-active, .draw-leave-active{
            transition: all 0.5s ease
          }
          .draw-enter, .draw-leave-to {
              height: 0;
          }
        }
        .Collecting{
           .box{
            height:35px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }
          .draw-enter-active, .draw-leave-active{
            transition: all 0.5s ease
          }
          .draw-enter, .draw-leave-to {
              height: 0;
          }
        }
        .Aftermarket{
           .box{
            height:40px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }
          .draw-enter-active, .draw-leave-active{
            transition: all 0.5s ease
          }
          .draw-enter, .draw-leave-to {
              height: 0;
          }
        }
        .Account{
           .box{
            height:200px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }
          .draw-enter-active, .draw-leave-active{
            transition: all 0.5s ease
          }
          .draw-enter, .draw-leave-to {
              height: 0;
          }
        }
      }
    }
    .Center_right{
      height: 2000px;
      width: 1240px;
      float: left;
      background-color: yellow;
      .top{
        ul li{
          float: left;
          width: 240px;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
</style>
