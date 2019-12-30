<template>
  <div class="OrderForm">
    <div class="content_container">
      <div class="top">
        <h3>确认订单信息</h3>
      </div>
      <div class="address">
        <Address v-if="AddressList"></Address>
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
      AddressList:true,
    }
  },
  methods: {

  },
  components:{
    'Address':Address,
    'OrderInfromation':OrderInfromation
  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/address',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId')
      }
    }).then(res=>{
      console.log(res.data.data.items)
      if(res.data.data.items != ''){
        this.AddressList = false
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .top{
    margin-bottom: 30px;
  }
</style>
