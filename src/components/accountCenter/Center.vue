<template>
  <div class="Center">
    <div class="content_container">
      <div class="Center_left">
        <div class="user-info">
          <div class="head_portrait">
            <img src="../../assets/imges/sp_2.jpg" alt="">
            <p>15277748256</p>
            <div class="admin">
            </div>
          </div>
        </div>
        <div class="order">
          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                :default-openeds="openeds"
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                :unique-opened="true"
                :router="true">
            <el-submenu index="1">
              <template slot="title">
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/AllOrder" >选项1</el-menu-item>
                <el-menu-item index="/Payment">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="/ToSendTheGoods">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="Shipped">
                <template slot="title">选项4</template>
              <el-menu-item index="Distribution">选项1</el-menu-item>
                  </el-submenu>
            </el-submenu>
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
import {AllOrder, Payment, ToSendTheGoods, Shipped, Distribution, Evaluation} from './Order'
import {Account_Information, Coupon, ShippingAddress} from './Account'
import Brands from './Collecting/Brands'
export default {
  data () {
    return {
      openeds:["1"],
      // boxshow:true,
      // boxshow2:true,
      // boxshow3:true,
      // boxshow4:true,
      // iscur:0
    }
  },
  methods: {
    // tabOrder(index){
    //   console.log(index)
    // },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
    },
    goTo(path){
      this.$router.replace(path);
      // this.$router.push(
      //   router-link  = 'yaotiaozhuandeyemian'
      // )
    }
  },
  components:{
    // 'All-Order': AllOrder,
    // 'Payment': Payment,
    // 'To-Send-The-Goods':ToSendTheGoods,
    // 'Shipped':Shipped,
    // 'Distribution':Distribution,
    // 'Evaluation':Evaluation,
    // 'Account-Information':Account_Information,
    // 'Coupon':Coupon,
    // 'Shipping-Address':ShippingAddress,
    // 'Brands':Brands,
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
