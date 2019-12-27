<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <h3>确认订单信息</h3>
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
import config from '../../config/config'
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
  },
  created(){
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .top{
    margin-bottom: 30px;
  }
</style>
