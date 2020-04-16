<template>
  <div class="CompanyProfile">
    <div class="sh-left">
      <CommonalityLeft></CommonalityLeft>
    </div>
    <div class="sh-right">
      <div class="company-profile">
        <div class="cp-header">
          <h1>公司简介</h1>
        </div>
        <div class="cp-body">

        </div>
      </div>
      <div class="read">
        <div class="read-header">
          <h1>相关阅读</h1>
        </div>
        <div class="read-body">

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
.CompanyProfile{
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
    width: 950px;
    margin-left: 10px;
    height: 1500px;
    // background-color:#000;
    float: left;
    .company-profile{
      .cp-header{
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
      .cp-body{
        width: 100%;
        height: 820px;
        background: pink;
      }
    }
    .read{
      margin-top: 15px;
      .read-header{
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
      .read-body{
        width: 100%;
        height: 300px;
        background: greenyellow;
      }
    }
  }
}
</style>
