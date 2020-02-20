<template>
  <div class="Center">
    <div class="content_container">
      <div class="Center_left">
        <!-- <div class="user-info">
          <div class="head_portrait">
            <img src="../../assets/imges/sp_2.jpg" alt="">
            <p>{{userName}}</p>
            <div class="admin">
            </div>
          </div>
        </div> -->
        <div class="order">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :default-openeds="openeds"
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :router="true">
            <el-submenu index="1">
                <span>会员中心</span>
                <el-menu-item index="/Center_home_page" >中心首页</el-menu-item>
                <el-menu-item index="/Account_setting" >账户设置</el-menu-item>
                <el-menu-item index="/Have_to_buy_goods">已买商品</el-menu-item>
                <el-menu-item index="/My_need">我的需求</el-menu-item>
                <el-menu-item index="/Enquiry">我要询价</el-menu-item>
                <el-menu-item index="/Shipping_address" >收货地址</el-menu-item>
                <el-menu-item index="/Discount_coupon" >领优惠券</el-menu-item>
                <el-menu-item index="/Favorite" >我的收藏</el-menu-item>
                <el-menu-item index="/Integral" >我的积分</el-menu-item>
                <el-menu-item index="/Sales_returns" >退换货物</el-menu-item>
                <el-menu-item index="/Complaint" >投诉管理</el-menu-item>
                <el-menu-item index="/Invoice" >发票设置</el-menu-item>
            </el-submenu>
            <!-- 我的收藏 -->
             <!-- <el-submenu index="1">
                <span>账户设置</span>
                <el-menu-item index="/AllOrder" >收藏商品</el-menu-item>
            </el-submenu> -->
            <!-- 退货记录 -->
             <!-- 我的收藏 -->
             <!-- <el-submenu index="1">
                <span>收货地址</span>
                <el-menu-item index="/AllOrder" >退货记录</el-menu-item>
            </el-submenu> -->
            <!-- 我的账户 -->
             <!-- <el-submenu index="1">
                <span>发票设置</span>
                <el-menu-item index="/AllOrder" >账户信息</el-menu-item>
                <el-menu-item index="/shippingAddress">收货地址</el-menu-item>
                <el-menu-item index="/ToSendTheGoods">发票信息</el-menu-item>
            </el-submenu> -->
            </el-menu>
            </el-col>
            <router-view></router-view>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {Account_setting, Have_to_buy_goods, My_need, Enquiry, Shipping_address, Discount_coupon, Favorite, Integral, Sales_returns, Complaint, Invoice, Center_home_page} from './Order' //yinruindex.js wenjian yiciiyinruduoge zizujian
import {Account_Information, Coupon, ShippingAddress} from './Account'
// import Brands from './Collecting/Brands'
export default {
  data () {
      return {
        openeds:["1"],
        userName:localStorage.getItem('userName')
      }
    },
  methods: {
      handleOpen(key, keyPath) {
          // console.log(key, keyPath);
        },
      handleClose(key, keyPath) {
          // console.log(key, keyPath);
      },
      goTo(path){
        this.$router.replace(path);
      }
    },
  component:{
  },
  created(){
    // console.log(this.order)
  },

//监听路由的变化，对应菜单高亮显示

}
</script>
<style scoped lang="scss">
@import "../../style/common";
  .content_container{
    .cur{
      background-color: #222;
      color:#fff;
    }
    height: 1800px;
    .Center_left{
      float: left;
      width: 200px;
      height: 1000px;
      margin-top: 80px;
      .user-info{
        margin-top: 50px;
        width: 150px;
        height: 150px;
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
<style lang="scss">
   .el-submenu__title{
      display:none;
    }
   .el-menu-item{
      padding-left:10px !important;
    }
    .el-menu-item:hover{
       background-color:#fff !important;
    }
    .el-menu-item.is-active {
      background-color:#fff !important;
    }
    .el-submenu .el-menu-item{
      min-width: 0px !important;
    }
</style>
