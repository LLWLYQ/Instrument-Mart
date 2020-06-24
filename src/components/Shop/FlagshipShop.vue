<template>
  <div class="FlagshipShop">
    <div class="center">
      <div class="fs-header">
        <img src="https://www.yishangm.com//upload/2018/09/13/20180913110716847.jpg" alt="">
        <p>大立红外热像仪旗舰店</p>
        <div class="ss">
          <img src="https://www.yishangm.com//views/yimall/skin/default/images/seller_4s/images/4S-logo.png" alt="" class="ss">
        </div>
      </div>
      <div class="BanImg">
        <img src="https://www.yishangm.com//views/yimall/skin/default/images/seller_4s/images/banner.png" alt="">
      </div>
      <div class="router-set">
        <p>位置：首页 > 4S旗舰店 > 大立红外热像仪旗舰店 > {{menutitle}}></p>
      </div>
      <div class="shop-nav">
        <el-col :span="7">
          <el-menu
            :default-openeds="openeds"
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
            >
            <el-menu-item v-for="(menu,index) in menuItem" :key="index" :index="menu.path" style="padding: 0;" @click="menuClik(menu)">{{menu.title}}</el-menu-item>
          </el-menu>
        </el-col>
        <div style="clear:both"></div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      openeds:["1"],
      menutitle:'店铺主页',
      menuItem:[{
        path:'/ShopHome',
        title:'店铺主页'
      },
      {
        path:'/CompanyProfile',
        title:'公司简介'
      },
      {
        path:'/SupplyProducts',
        title:'供应产品'
      },
      // {
      //   path:'/vendor',
      //   title:'厂商在线'
      // },
      // {
      //   path:'/ProductApplication',
      //   title:'产品应用'
      // },
      // {
      //   path:'/CreditFile',
      //   title:'诚信档案'
      // },
      {
        path:'/ContactShop',
        title:'联系店铺'
      }
      ]
    }
  },
  methods: {
    menuClik(menu){
      console.log(menu)
      this.menutitle = menu.title
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  components: {

  },
  created() {
    // console.log(this.openeds)
    // this.menuClik()
  },
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.center{
  width: 1230px;
  // height: 2100px;
  margin: 0 auto;
  // overflow: hidden;
  .fs-header{
    height: 60px;
    margin: 50px 0 0px 0 ;
    img{
      width: 140px;
      height: 60px;
      float: left;
    }
    .ss{
      width: 125px;
      height: 60px;
      float: right;
      line-height: 60px;
      img{
        width: 100%;
        height: 46px;
        margin-top: 7px;
      }
    }
    p{
      float: left;
      height: 60px;
      font-size: 25px;
      font-weight: 500;
      line-height: 60px;
    }
  }
  .shop-nav {
    .el-col{
      width: 1230px;
      height: 50px;
      margin-top: 25px;
      overflow: hidden;
      position: absolute;
      top:100px;
      .el-menu{
        background: #f5f5f5;
      }
      .el-menu-item{
        float: left;
        width: 120px;
        line-height: 56px;
        text-align: center;
      }
      .el-menu-item:hover{
        background: #dd4b1c;
        color:#fff;
      }
    }
    .el-menu-item.is-active {
      color:#fff;
      background:#dd4b1c;
    }
  }
  .BanImg{
    margin-top: 65px;
    img{
      width: 100%;
    }
  }
  .router-set{
    height: 50px;
    line-height: 30px;
  }
}
</style>
