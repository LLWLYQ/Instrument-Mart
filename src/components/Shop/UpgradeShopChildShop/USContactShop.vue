<template>
  <div class="ContactShop">
    <div class="CS-left">
      <div class="CS-header">
        <h1>店铺信息</h1>
      </div>
    </div>
    <div class="CS-right">
      <div class="CS-header">
        <h1>联系店铺</h1>
      </div>
      <div class="CS-body">

      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.ContactShop{
  overflow: hidden;
  width: 1230px;
  // position: absolute;
  // top: 480px;
  .CS-left{
    width: 270px;
    height: 500px;
    background-color:yellow;
    float: left;
    .CS-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
  }
  .CS-right{
    width: 950px;
    margin-left: 10px;
    height: 700px;
    // background-color:#000;
    float: left;
    .CS-header{
      width: 100%;
      padding-bottom: 15px;
      border-bottom: 5px solid #dd4b1c;
      overflow: hidden;
      h1{
        float: left;
        font-size: 14px;
        padding-left: 15px;
        border-left: 5px solid #dd4b1c;
      }
    }
    .CS-body{
      width: 100%;
      height: 600px;
      background: pink;
    }
  }
}
</style>
