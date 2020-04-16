<template>
  <div class="UpgradeShop">
    <div class="center">
      <div class="top">
        <div class="top_img">
          <img src="../../assets/imges/logo.png" alt="">
          <h1>仪商通VIP品牌供应商</h1>
          <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          </div>
        </div>
      </div>
      <div class="router-set">
        <p>位置：首页 > 4S旗舰店 > 大立红外热像仪旗舰店 > {{menutitle}}></p>
      </div>
      <div class="us-nav">
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
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import HomeSerach from '../home_child/home_serach'
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      openeds:["1"],
      menutitle:'店铺首页',
      menuItem:[{
        path:'/USShopHome',
        title:'店铺首页'
      },
      {
        path:'/USCompanyProfile',
        title:'公司简介'
      },
      {
        path:'/USSupplyProducts',
        title:'供求商机'
      },
      {
        path:'/USvendor',
        title:'厂商在线'
      },
      {
        path:'/USProductApplication',
        title:'产品中心'
      },
      {
        path:'/USContactShop',
        title:'联系店铺'
      },
      {
        path:'/',
        title:'发商机'
      },
      {
        path:'/',
        title:'建商铺'
      }
      ]
    }
  },
  methods: {
    menuClik(menu){
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
    HomeSerach
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.center{
  width: 1230px;
  // height: 1200px;
  margin: 0 auto;
  .top{
    margin-top: 30px;
    height: 95px;
    position: relative;
    // line-height: 95px;
    img{
      height: 45px;
      width: 140px;
      float: left;
      margin-top: 25px;
    }
    h1{
      float: left;
      font-size: 20px;
      line-height: 95px;
    }
    .Search_Goods{
      margin-left: 630px;
      position: absolute;
      top: 28px;
    }
  }
   .us-nav {
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
      .el-menu-item:nth-child(n+7){
        float: right;
        // background: #000;
        // color:#fff;
        font-weight: 800;
        border:1px solid #fff;
      }
      .el-menu-item:hover{
        background: #000;
        color:#fff;
        // transform: rotateX(360deg);
        transition: all  s;
        font-weight: 800;
      }
    }
    .el-menu-item.is-active {
      color:#fff;
      background:#000;
      font-weight: 800;
    }
  }
  .router-set{
    height: 40px;
    line-height: 30px;
    margin-top: 65px;
  }
}
</style>
<style lang="">
  #ELB:hover{
    background-color: red;
    border: 2px solid red;
  }
  #ELB{
    border-radius:0; background-color: #e94c15;border: 2px solid #e94c15;color:#fff;
  }
</style>
