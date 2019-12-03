<template>
  <div class="Address">
    <div class="content_container">
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
            <span>手机号码:</span>
            <input type="text" v-model="number">
          </div>
        </div>
        <div class="area">
          <div class="area_left">所在地区:</div>
          <v-distpicker province="" city="" area=""></v-distpicker>
        </div>
        <div class="detailed_address">
          <span>详细地址:</span>
          <input type="text" v-model="detailed_address">
        </div>
        <div class="postal_code">
          <span>邮政编码:</span>
          <input type="text" v-model="postal_code">
        </div>
        <div class="addressDIV"><span class="addressSPAN">使用该地址</span></div>
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
@import '../../../style/common';
  .top{
    margin-bottom: 20px;
    margin-top: 20px;
    p{
      border-bottom:1px solid #000;
    }
  }
  .mine{
    input{
      border:1px solid #222;
    }
    .distpicker-address-wrapper{
      width: 1340px;
      float: left;
    }
    .area{
      .area_left{
        width: 100px;
        float: left;
        height: 4px;
        line-height: 40px;
      }
    }
    .addressDIV{
      margin-top: 20px;
      overflow: hidden;
      height: 40px;
      line-height: 40px;
      .addressSPAN{
        background-color: #db2726;
        color:#fff;
        font-size: 14px;
        padding:10px 20px;
        width: 20px;
        cursor: pointer;
        border-radius:5px;
      }
    }
  }

</style>
