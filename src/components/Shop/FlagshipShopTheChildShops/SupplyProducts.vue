<template>
  <div class="SupplyProducts">
    <div class="sh-left">
      <!-- <CommonalityLeft></CommonalityLeft> -->
    </div>
    <div class="sh-right">
      <div class="supply-products">
        <div class="sp-header">
          <h1>供应产品</h1>
        </div>
        <div class="sp-body">

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import CommonalityLeft from './CommonalityLeft'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    CommonalityLeft
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.SupplyProducts{
  overflow: hidden;
  width: 1230px;
  // position: absolute;
  // top: 480px;
  // .sh-left{
  //   width: 270px;
  //   height: 1500px;
  //   background-color:yellow;
  //   float: left;
  // }
  .sh-right{
    width: 1230px;
    margin-left: 10px;
    height: 1500px;
    // background-color:#000;
    float: left;
    .supply-products{
      .sp-header{
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
      .sp-body{
        // margin-top: 10px;
        width: 100%;
        height: 1200px;
        // background: pink;
      }
    }
  }
}
</style>
