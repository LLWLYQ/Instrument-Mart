<template>
  <div class="Shipping_address">
    <div class="content_container">
      <p>管理收货地址</p>
      <AddCopy></AddCopy>
    </div>
  </div>
</template>

<script type="text/javascript">
import AddressCOPY from '../../BuyItNow/Address/AddressCOPY'
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  components: {
    'AddCopy':AddressCOPY
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Shipping_address{
  width: 1090px;
    margin-left: 220px;
    padding: 20px;
    background: #fff;
  p{
    font-size: 16px;
      font-weight: 700;
      height: 35px;
      width: 100%;
      line-height: 35px;
      border-bottom: 2px solid #333;
  }
}
.el-table__row {
    float: none !important;
    padding: 0 !important;
    width: 180px !important;
  }
  .el-table .cell, .el-table__row{
    padding: 0 !important;
    width: 180px !important;
  }
  .el-input__inner{
    padding: 0 !important;
    text-indent: 15px !important;
    border-radius: 0 !important;
  }
</style>
<style lang="scss">

</style>
