<template>
  <div class="CommonalityLeft">
    <div class="shop-info">
      <div class="shop-left-header">
        <h1>店铺信息</h1>
      </div>
      <div class="shop-left-body">
        {{sData.shop_info}}
      </div>
    </div>
    <div class="shop-product-hot">
      <div class="shop-left-header">
        <h1>商家推荐</h1>
      </div>
      <div class="shop-left-body">

      </div>
    </div>
    <!-- <div class="shop-record">
      <div class="shop-left-header">
        <h1>诚信档案</h1>
      </div>
      <div class="shop-left-body">

      </div>
    </div> -->
  </div>
</template>

<script type="text/javascript">
 import config from '../../../config/config'
export default {
  props:{
    sData:Object
  },
  data() {
    return {
      shopData:''
    }
  },
  methods: {

  },
  components: {

  },
  created(){
   
  },
  mounted(){
     let self = this
      self.$ajax({
        url: config.baseUrl + '/seller/shop/'+ self.sData.shop_id,
        method: 'get',
        // params:{
        
        // }
      }).then(res => {
        self.shopData = res.data.data
        console.log(self.shopDat)
      })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.CommonalityLeft{
  float: left;
  width: 270px;
  height: 1600px;
  // background:yellow;
  .shop-info{
    margin-bottom: 5px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
      padding: 20px 10px;
      border: 1px solid #e3e2e2;
      box-sizing: border-box;
      width: 100%;
      height: 291px;
      overflow: hidden;
      text-indent: 15px;
      // background: greenyellow;
    }
  }
  .shop-product-hot{
    margin-bottom: 13px;
    width: 100%;
    height: 876px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
        padding: 20px 10px;
        border: 1px solid #e3e2e2;
        box-sizing: border-box;
        width: 100%;
        height: 845px;
        // background: pink;
      }
  }
  .shop-record{
    margin-bottom: 13px;
    width: 100%;
    height: 317px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
        padding: 20px 10px;
        border: 1px solid #e3e2e2;
        box-sizing: border-box;
        width: 100%;
        height: 320px;
        // background: orange;
      }
  }
}
</style>
