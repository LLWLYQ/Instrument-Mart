<template>
  <div class="ShopHome">
    <div class="sh-left">
      <CommonalityLeft></CommonalityLeft>
    </div>
    <div class="sh-right">
      <div class="company-profile">
        <div class="cp-her">
          <h1>公司简介</h1>
          <a>更多>></a>
        </div>
        <div class="cp-mine">
          <div class="cp-mine-left">
            <img src="https://www.yishangm.com//upload/2018/05/18/20180518100228612.jpg" alt="">
          </div>
          <div class="cp-mine-right">
            浙江大立科技股份有限公司是于1984年成立的浙江省测试技术研究所改制而成的股份制高新技术企业，公司股票于2008年2月18日在深圳证券交易所挂牌上市（股票代码002214），是红外和安防系统国内A股首家上市公司。
            公司专业从事非制冷焦平面探测器、红外热像仪、红外热成像系统的研发、生产和销售。经过多年稳健的发展，从研究所成长为具有较强自主研发和技术创新能力且经营业绩稳定增长的上市公司。
            公司座落于美丽的中国杭州，拥有功能齐全、设备完善的产业化基地以及技术研发中心，公司的技术人员占员工总数35%以上，从根本上保证了技
          </div>
        </div>
      </div>
      <div class="supply-of-goods">
        <div class="sog-her">
          <h1>供应商品</h1>
        </div>
        <div class="sog-mine">

        </div>
      </div>
      <div class="shop-foot">
        <div class="manufacturer">
          <div class="mauf-tit">
            <h1>厂商在线</h1>
            <a href="">更多>></a>
          </div>
          <div class="mauf-body">

          </div>
        </div>
        <div class="product-application">
          <div class="pa-tit">
            <h1>产品应用</h1>
            <a href="">更多>></a>
          </div>
          <div class="pa-body">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import CommonalityLeft from './CommonalityLeft'
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {
      CommonalityLeft
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/common';

  .ShopHome {
    width: 1230px;
    // position: absolute;
    top: 480px;
    overflow: hidden;

    // .sh-left{
    //   width: 270px;
    //   height: 1500px;
    //   background-color:yellow;
    //   float: left;
    // }
    .sh-right {
      width: 950px;
      margin-left: 10px;
      // background-color:#000;
      float: left;
    }

    .company-profile {
      overflow: hidden;

      .cp-her {
        width: 100%;
        padding-bottom: 15px;
        border-bottom: 5px solid #dd4b1c;
        overflow: hidden;

        h1 {
          float: left;
          font-size: 14px;
          padding-left: 15px;
          border-left: 5px solid #dd4b1c;
        }

        a {
          float: right;
          font-size: 14px;
        }
      }

      .cp-mine {
        margin-top: 17px;

        .cp-mine-left {
          float: left;
          width: 300px;
          height: 197px;
          border: 1px solid #ddd;
          box-sizing: border-box;

          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }

        .cp-mine-right {
          float: right;
          font-size: 14px;
          width: 590px;
          height: 197px;
          line-height: 33px;
          text-indent: 15px;
          margin-right: 10px;
          overflow: hidden;
        }
      }
    }

    .supply-of-goods {
      width: 100%;
      height: 927px;
      margin-top: 40px;

      .sog-her {
        width: 100%;
        padding-bottom: 30px;
        border-bottom: 5px solid #dd4b1c;

        h1 {
          float: left;
          font-size: 14px;
          padding-left: 15px;
          border-left: 5px solid #dd4b1c;
        }
      }

      .sog-mine {
        margin-top: 10px;
        height: 900px;
        width: 100%;
        background: black;
      }
    }

    .shop-foot {
      width: 100%;
      margin-top: 40px;
      overflow: hidden;

      .manufacturer {
        width: 450px;
        float: left;

        .mauf-tit {
          width: 100%;
          padding-bottom: 15px;
          border-bottom: 5px solid #dd4b1c;
          overflow: hidden;

          h1 {
            float: left;
            font-size: 14px;
            padding-left: 15px;
            border-left: 5px solid #dd4b1c;
          }

          a {
            float: right;
            font-size: 14px;
            color: #333;
          }
        }

        // background:red;
        .mauf-body {
          padding: 10px;
          border: 1px solid #ddd;
          margin-top: 18px;
          width: 450px;
          height: 267px;
          background: red;
        }
      }

      .product-application {
        float: right;
        width: 450px;

        // background: pink;
        .pa-tit {
          width: 100%;
          padding-bottom: 15px;
          border-bottom: 5px solid #dd4b1c;
          overflow: hidden;

          h1 {
            float: left;
            font-size: 14px;
            padding-left: 15px;
            border-left: 5px solid #dd4b1c;
          }

          a {
            float: right;
            font-size: 14px;
            color: #333;
          }
        }

        .pa-body {
          padding: 10px;
          border: 1px solid #ddd;
          margin-top: 18px;
          width: 450px;
          height: 267px;
          background: pink;
        }
      }
    }
  }

</style>
