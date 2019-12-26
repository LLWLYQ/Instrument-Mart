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
import config from '../../config/config'
export default {
  data () {
    return {
    }
  },
  methods: {
    order(){
      this.$ajax({
        url:config.baseUrl + '/home/order',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId'),
          title:''
        }
      }).then(res=>{
        // console.log(res.data)
      })
    }
  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  },
  created(){
    this.order()
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
