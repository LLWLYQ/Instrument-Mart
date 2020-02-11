<template>
  <div class="foot">
    <div class="content_container">
      <div class="mine">
        <div class="foot_top">
          <ul>
            <i class="el-icon-shopping-cart-2"><span>购物指南</span></i>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
          </ul>
          <ul>
            <i class="el-icon-bank-card"><span>支付帮助</span></i>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
          </ul>
          <ul>
            <i class="el-icon-map-location"><span>配送帮助</span></i>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
          </ul>
          <ul>
            <i class="el-icon-headset"><span>售后服务</span></i>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
          </ul>
          <ul>
            <i class="el-icon-chat-line-round"><span>帮助信息</span></i>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
            <li>购物流程</li>
          </ul>
        </div>
        <div class="cut-off_rule"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
@import '../../../src/style/common';
  .foot{
    margin-top:30px;
    background-color: #e94c15;
    height: 250px;
    width: 100%;
    position:absolute;
    .foot_top{
      ul{
        float: left;
        width: 20%;
        padding:30px 0;
        color:#fff;
        i{
          font-size: 22px;
          span{
            font-size: 20px;
            margin-left: 5px;
          }
        }
        li{
          margin-top: 10px;
          margin-left: 35px;
          font-size: 14px;
        }
      }
    }
  }
</style>
