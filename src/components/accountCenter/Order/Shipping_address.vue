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
  margin-left: 120px;
  margin-top: -10px;
  p{
    font-size: 16px;
      font-weight: 700;
      height: 35px;
      width: 100%;
      line-height: 35px;
      border-bottom: 2px solid #333;
  }
}
</style>
<style lang="scss">
.el-table__row {
    float: none;
    padding: 0;
    width: 180px;
  }

  
</style>
