<template>
  <div class="CreditFile">
    <div class="cf-left">
      <div class="cl-header">
        <h1>店铺信息</h1>
      </div>
    </div>
    <div class="cf-right">
      <div class="cr-header">
        <h1>诚信档案</h1>
      </div>
      <div class="cf-body">

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
.CreditFile{
  overflow: hidden;
  width: 1230px;
  // position: absolute;
  // top: 480px;
  .cf-left{
    width: 270px;
    height: 500px;
    background-color:yellow;
    float: left;
    .cl-header{
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
  .cf-right{
    width: 950px;
    margin-left: 10px;
    height: 700px;
    // background-color:#000;
    float: left;
    .cr-header{
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
    .cf-body{
      width: 100%;
      height: 600px;
      background: pink;
    }
  }
}
</style>
