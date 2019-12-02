<template>
  <div class="Address">
    <div class="top">
      <p>收货地址</p>
    </div>
    <div class="mine">
      <p>使用新地址</p>
      <div class="address">
        <div class="consignee">
          <span>收货人:</span>
          <input type="text" v-model="consignee">
        </div>
      </div>
      <div class="number">
        <div class="Number">
          <span>手机号码</span>
          <input type="text" v-model="number">
        </div>
      </div>
      <div class="area">
        <span>所在地区</span>
        <v-distpicker province="广东省" city="广州市" area="海珠区"></v-distpicker>
      </div>
      <div class="detailed_address">
        <span>详细地址</span>
        <input type="text" v-model="detailed_address">
      </div>
      <div class="postal_code">
        <span>邮政编码</span>
        <input type="text" v-model="postal_code">
      </div>
    </div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  data () {
    return {
      consignee:'',
      number:'',
      area:'',
      detailed_address:'',
      postal_code:''
    }
  },
  methods: {

  },
  components:{
    VDistpicker
  }
}
</script>
<style scoped lang="scss">
  .top{
    p{
      border-bottom:1px solid #000;
    }
  }
</style>
