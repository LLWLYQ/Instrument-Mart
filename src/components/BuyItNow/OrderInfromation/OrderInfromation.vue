<template>
  <div class="OrderInfromation">
    <div class="top">
      <p>购物清单</p>
    </div>
    <div class="sku">
      <ul>
        <li>品牌直发</li>
        <li>预计送达日期:</li>
        <li>2019年12月08日</li>
        <li>单价</li>
        <li>数量</li>
        <li>优惠</li>
        <li>小计</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';
  .top{
    margin-top: 20px;
    p{
      border-bottom:1px solid #000;
    }
  }
  .sku{
    margin-top: 20px;
    height: 25px;
    border-bottom:1px solid #222;
    ul{
      li{
        float: left;
      }
      li:nth-child(4){
        margin-left:300px;
      }
      li:nth-child(2){
        margin-left:20px;
      }
      li:nth-child(n+5){
        margin-left:200px;
      }
    }
  }
</style>
