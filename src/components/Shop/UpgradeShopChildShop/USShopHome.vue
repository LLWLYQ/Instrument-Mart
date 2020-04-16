<template>
  <div class="ShopHome">
    <div class="sh-mine">
      <div class="company-banner-mainr">
        <div class="banner">
          <img src="https://www.yishangm.com//upload/2018/07/05/20180705145218208.jpg" alt="">
        </div>
        <div class="company-msg">
          <h1>优利德科技(UINI-T)官方旗舰店</h1>
          <p>优利德科技(UINI-T)官方旗舰店，是优利德科技(中国)股份有限公司在仪商城的官方电子商务平台。
             优利德科技(中国)股份有限公司为亚洲规模较大的仪器仪表公司之一。优利德旗下拥有优利德（UNI-T）、米尼帕（Minipa）、拓利亚（TOPLIA）三大品牌。
             优利德在中国开发、制造具有创意、可靠、优质和安全易用的科技产品，产品涵盖电子测量仪器仪表，工业、电力电气、环境、测绘仪表和器材。是一家专注品质，以质拓市场的品牌企业，并透过遍布在全球九十多个国家的六百多个战略合作伙伴，向全球市场销售产品和提供解决方案。是中国大陆、香港、澳门第一家荣获英国劳氏质量认证机构颁发ISO9001品质检验证书的国际性专业测试仪表制造商。公司获得广东省“高新技术企业证书”，... 
            <a href="">更多>></a>
          </p>
        </div>
      </div>
      <div class="shop-main">
        <div class="shop-left">

        </div>
        <div class="shop-right product-main-wrapper notMgTop notBg">
          <div class="product-main">
            <div class="product-main-title">
              产品推荐
              <a href="">更多>></a>
            </div>
            <div class="product-list">
              
            </div>
          </div>
        </div>
        <div style="clear:both;"></div>
        <div class="Product-Main">
          <div class="Product-Main-title">
            <span><i class="el-icon-position"></i>&nbsp;通用仪表</span>
            <a href="">更多>></a>
          </div>
        </div>
        <div class="Product-Main">
          <div class="Product-Main-title">
            <span><i class="el-icon-search"></i>&nbsp;工业仪表</span>
            <a href="">更多>></a>
          </div>
        </div>
        <div class="Product-Main">
          <div class="Product-Main-title">
            <span><i class="el-icon-reading"></i>&nbsp;教育仪表</span>
            <a href="">更多>></a>
          </div>
        </div>
        <div class="news-dynamic">
          <h1>厂商在线</h1>
          <div class="news-mine">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import USCommonalityLeft from './USCommonalityLeft'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    USCommonalityLeft
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.ShopHome{
  width: 1230px;
  overflow: hidden;
  margin-bottom:20px;
  .sh-mine{
    width: 1230px;
    float: left;
    .company-banner-mainr{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .banner{
        width: 536px;
        height: 257px;
        margin-right: 20px;
        img{
          display: block;
          width: 534px;
          height: 257px;
        }
      }
      .company-msg{
        flex: 1;
        margin: 0 20px;
        h1{
          font-size: 18px;
          text-align: center;
          margin: 0;
        }
        p{
          font-size: 14px;
          line-height: 25px;
          margin: 15px 0 0;
          overflow: hidden;
          height: 200px;
          a{
            font-size: 10px;
            color: #333;
            line-height: 25px;
            display: inline-block;
            vertical-align: bottom;
            float: right;
            cursor: pointer;
          }
          a:hover{
            color:#e94c15;
          }
        }
      }
    }
  }
  .shop-main{
    .Product-Main{
      width: 1230px;
      height: 360px;
      // overflow: hidden;
      .Product-Main-title{
        padding-left: 10px;
        line-height: 30px;
        border-bottom: 1px solid #ddd;
        color: #222;
        span{
          i{
            font-size: 18px;
          }
        }
        a{
          font-size: 10px;
          font-weight: 500;
          float: right;
          color:#222;
        }
      }
    }
    .news-dynamic{
      width: 100%;
      height: 635px;
      h1{
        height: 50px;
        line-height: 50px;
        font-size: 22px;
        text-align: center;
      }
      .news-mine{
        width: 100%;
        height: 585px;
        background: pink;
      }
    }
    margin-top: 30px;
    overflow: hidden;
    .shop-left{
        float: left;
        width: 270px;
        height: 720px;
        border:1px solid #ddd;
        background: pink;
      }
      .shop-right{
        width: 950px;
        float: left;
        margin-left: 10px;
        // height: 800px;
        overflow: hidden;
        .product-main{
          margin-top: 0 !important;
          .product-main-title{
            font-weight: 600;
            padding-left: 0;
            background: none;
            // line-height: 30px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ddd;
            a{
              font-size: 10px;
              font-weight: 500;
              color: #333;
              text-decoration: none;
              float: right;
              margin-right: 18px;
              cursor: pointer;
            }
            a:hover{
              color:#e94c15;
            }
          }
          .product-list{
            height: 760px;
            width: 100%;
            margin-top: 10px;
            background: greenyellow;
            // overflow: hidden;
          }
        }
      }

    }
}
</style>
