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
    font-size: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
