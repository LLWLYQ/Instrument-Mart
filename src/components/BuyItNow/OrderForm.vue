<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <p>确认订单信息</p>
      </div>
      <div class="address">
        <Address></Address>
      </div>
      <div class="order_information">
        <OrderInfromation></OrderInfromation>
      </div>
    </div>
  </div>
</template>
<script>
import Address from './Address/Address'
import OrderInfromation from './OrderInfromation/OrderInfromation'
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .top{
    p{
      border-bottom:1px solid #000;
    }
  }
</style>
