<template>
  <div class="vendor">
    <div class="vendor-body">
      <div class="vendor-header">
        <h1>厂商在线</h1>
      </div>
      <div class="ven-body">

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
.vendor{
  overflow: hidden;
  width: 1230px;
  margin-bottom: 30px;
  // position: absolute;
  // top: 480px;
  .vendor-body{
    margin-top: 10px;
    width: 100%;
    height: 1200px;
    // background-color:#000;
    .vendor-header{
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
    .ven-body{
      width: 100%;
      height: 1400px;
      background: pink;
    }
  }
}
</style>
