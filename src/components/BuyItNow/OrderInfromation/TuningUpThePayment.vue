<template>
  <div class="TuningUpThePayment">
    <div class="content_container">
      <div class="mine"></div>
    </div>
  </div>
</template>

<script>
import config from '../../../config/config'
export default {
  data () {
    return {
      order_id:this.$route.query.order_id,
      all:''
    }
  },
  methods: {

  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/order/send/pay',
      method:'get',
      params:{
        order_id:this.order_id
      }
    }).then(res=>{
      this.all = res.data
      if(res.status == 200){
        const div = document.querySelector('.mine');
        div.innerHTML = this.all;
        document.body.appendChild(div);
        document.forms.alipaysubmit.submit();
      }
    })
  }
}
</script>

<style scoped>
@import '../../../style/common';

</style>
