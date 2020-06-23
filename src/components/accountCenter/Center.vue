<template>
  <div class="Center">
    <div class="Center-mine">
      <div class="Center_left">
      <div class="order">
        <el-row class="tac">
          <el-col :span="12">
            <el-menu :default-openeds="openeds" :default-active="$route.path" class="el-menu-vertical-demo"
              @open="handleOpen" @close="handleClose" :router="true">
              <el-submenu index="1">
                <span style="font-size:14px;font-weight: 700;width:100px;">会员中心</span>
                <el-menu-item index="/Center_home_page">中心首页</el-menu-item>
                <el-menu-item index="/Account_setting">账户设置</el-menu-item>
                <el-menu-item index="/Have_to_buy_goods">站内消息</el-menu-item>
                <!-- <el-menu-item index="/My_need">我的需求</el-menu-item> -->
                <!-- <el-menu-item index="/Enquiry">我要询价</el-menu-item> -->
                <el-menu-item index="/Shipping_address">收货地址</el-menu-item>
                <el-menu-item index="/Discount_coupon">我的优惠券</el-menu-item>
                <el-menu-item index="/Favorite">我的收藏</el-menu-item>
                <el-menu-item index="/Integral">我的积分</el-menu-item>
                <!-- <el-menu-item index="/Sales_returns" >退换货物</el-menu-item> -->
                <el-menu-item index="/Complaint">评价管理</el-menu-item>
                <!-- <el-menu-item index="/Invoice" >发票设置</el-menu-item> -->
              </el-submenu>
            </el-menu>
          </el-col>
          <router-view></router-view>
        </el-row>
      </div>
    </div>
    <!-- </div> -->
    <div style="clear:both;"></div>
    </div>
    <div style="width:100%;height:50px;background:#f5f5f5;"></div>
  </div>

</template>
<script>
  import {
    Account_setting,
    Have_to_buy_goods,
    My_need,
    Enquiry,
    Shipping_address,
    Discount_coupon,
    Favorite,
    Integral,
    Sales_returns,
    Complaint,
    Invoice,
    Center_home_page
  } from './Order' //yinruindex.js wenjian yiciiyinruduoge zizujian
  import {
    Account_Information,
    Coupon,
    ShippingAddress
  } from './Account'
  // import Brands from './Collecting/Brands'
  export default {
    data() {
      return {
        openeds: ["1"],
        userName: localStorage.getItem('userName')
      }
    },
    methods: {
      handleOpen(key, keyPath) {},
      handleClose(key, keyPath) {},
      goTo(path) {
        this.$router.replace(path);
      }
    },
    component: {},
    created() {},

    //监听路由的变化，对应菜单高亮显示
  }

</script>
<style scoped lang="scss">
  @import "../../style/common";

  .Center {
    width: 100%;
    background: #f5f5f5;
    .Center-mine{
      width: 1230px;
      margin: 0 auto ;
      // min-height: 1000px;
      height: auto;
    }

    // overflow: hidden;
    .cur {
      background-color: #222;
      color: #fff;
    }

    // height: 1800px;
    .Center_left {
      float: left;
      width: 200px;
      height: auto;
      margin-top: 50px;
      background: #f5f5f5;
      
      .user-info {
        margin-top: 50px;
        width: 150px;
        height: 150px;

        .head_portrait {
          width: 200px;
          height: 100px;
          text-align: center;
          img {
            width: 100px;
            height: 100%;
          }
        }
      }

      .order {
       
        width: 200px;
        .el-row{
          
          width: 200px;
        }
       .el-col{
         width: 200px;
         
       }
        .el-menu {
          width: 200px;
           padding:20px 0 50px 10px;
        }

        .el-menu-item {
          padding-left: 10px !important;
          font-size: 12px;
          font-weight: 700;
        }

        .el-menu-item:hover {
          background-color: #fff !important;
        }

        .el-menu-item.is-active {
          background-color: #fff !important;
        }

        .el-submenu .el-menu-item {
          min-width: 0px !important;
        }

        p {
          font-size: 20px;
          height: 30px;
          margin-left: 10px;
          margin-bottom: 20px;
          cursor: pointer;
        }

        .myOrder {
          .box {
            height: 125px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }

          .draw-enter-active,
          .draw-leave-active {
            transition: all 0.5s ease
          }

          .draw-enter,
          .draw-leave-to {
            height: 0;
          }
        }

        .Collecting {
          .box {
            height: 35px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }

          .draw-enter-active,
          .draw-leave-active {
            transition: all 0.5s ease
          }

          .draw-enter,
          .draw-leave-to {
            height: 0;
          }
        }

        .Aftermarket {
          .box {
            height: 40px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }

          .draw-enter-active,
          .draw-leave-active {
            transition: all 0.5s ease
          }

          .draw-enter,
          .draw-leave-to {
            height: 0;
          }
        }

        .Account {
          .box {
            height: 200px;
            width: 200px;
            overflow: hidden;
            cursor: pointer;
          }

          .draw-enter-active,
          .draw-leave-active {
            transition: all 0.5s ease
          }

          .draw-enter,
          .draw-leave-to {
            height: 0;
          }
        }
      }
    }

    .Center_right {
      height: 2000px;
      width: 1240px;
      float: left;
      background-color: yellow;

      .top {
        ul li {
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
  .el-submenu__title {
    display: none;
  }

</style>
