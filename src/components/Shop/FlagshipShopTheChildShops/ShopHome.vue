<template>
  <div class="ShopHome">
    <div class="sh-left">
      <CommonalityLeft :sData="shopData"></CommonalityLeft>
    </div>
    <div class="sh-right">
      <div class="company-profile">
        <div class="cp-her">
          <h1>公司简介</h1>
          <a>更多>></a>
        </div>
        <div class="cp-mine">
          <!-- {{shopData.files_two}} -->
          <div class="cp-mine-left" v-if="shopData">
            <img :src="baseUrl + shopData.files_two.files_path" alt="">
          </div>
          <div class="cp-mine-right" v-if="shopData">
            {{shopData.get_company.company_info}}
          </div>
        </div>
      </div>
      <div class="supply-of-goods">
        <div class="sog-her">
          <h1>供应商品</h1>
        </div>
        <div class="sog-mine">
          <ul>
            <li v-for="(item,index) in goodsData.slice(0,12)" :key="index">
              <div class="LD-img">
                <router-link :to="{name:'Detail',query:{listId:item.goods_id}}" target="_blank" tag="a">
                  <img :src="baseUrl + item.files_path" alt="">
                </router-link>
              </div>
              <p class="list-price"><b>￥</b><span>{{item.sales_price/100}}</span></p>
              <p class="list-title">
                <router-link :to="{name:'Detail',query:{listId:item.goods_id}}" target="_blank" tag="a">
                  {{item.goods_name}}
                </router-link>
              </p>
              <p class="list-shop">
                <router-link to="" target="_blank" tag="a">
                  {{item.get_shop.shop_name}}
                </router-link>
              </p>
              <p class="car">
                <span><i class="el-icon-goods"></i>加入购物车</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="shop-foot">
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
      </div> -->
    </div>
  </div>
</template>
<script type="text/javascript">
  import CommonalityLeft from './CommonalityLeft'
  import config from '../../../config/config'
  export default {
    data() {
      return {
        shopData: '',
        shopID: this.$route.query.shopID,
        baseUrl: config.baseUrl,
        goodsData: '',
      }
    },
    methods: {

    },
    components: {
      CommonalityLeft
    },
    created() {
      let self = this
      self.$ajax({
        url: config.baseUrl + '/seller/shop/8',
        method: 'get',
        // params:{

        // }
      }).then(res => {
``
        self.shopData = res.data.data
        console.log(this.shopData)
      })
      self.$ajax({
        url: config.baseUrl + '/home/goods',
        method: "get",
        params: {
          shopid: self.shopData.id,
        }
      }).then(res => {
        this.goodsData = res.data.data.items
        // console.log(this.goodsData)
      })
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
          cursor: pointer;
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

        // background: black;
        ul {
          li {
            margin: 10px 10px 10px 10px;
            width: 210px;
            padding: 7px 7px 0 7px;
            height: 370px;
            float: left;
            border: 1px solid #f5f5f5;

            // box-shadow: 0 1px 6px #999;
            a {
              margin: auto;
              display: block;

              img {
                width: 196px;
                height: 210px;
              }
            }

            .list-price {
              width: 202;
              height: 30px;
              line-height: 30px;
              margin: 0 0 5px;
              letter-spacing: normal;
              white-space: nowrap;

              span {
                float: left;
                font-family: arial;
                font-weight: 400;
                font-size: 20px;
                color: #ff0036;
              }

              b {
                margin-left: 5px;
                float: left;
                font-size: 14px;
                font-weight: 700;
                color: #ff0036;
              }
            }

            .list-title {
              height: 40px;
              line-height: 20px;
              display: block;
              margin-bottom: 3px;
              font-size: 12px;
              position: relative;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

              a {
                margin-left: 8px;
                color: #666;
                font-family: \5FAE\8F6F\96C5\9ED1;
                line-height: 14px;
                cursor: pointer;
              }
            }

            .list-title a:hover {
              text-decoration: underline;
              color: #ff0036;
            }

            .list-shop {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 10px;
              display: block;
              margin-bottom: 3px;
              font-size: 12px;
              position: relative;

              a {
                margin-left: 8px;
                color: #999;
                font-family: \5FAE\8F6F\96C5\9ED1;
                line-height: 14px;
                cursor: pointer;
                font-size: 12px;
              }
            }

            .list-shop a:hover {
              text-decoration: underline;
              color: #ff0036;
            }

            .car {
              margin: 10px 0 0 5px;

              span {
                cursor: pointer;

                i {
                  font-size: 25px;
                  margin-right: 5px;
                }
              }

              span:hover {
                color: #ff0036;
              }
            }
          }

          li:hover {
            border: 4px solid #ff0036;
            padding: 4px 4px 0 4px;
          }
        }
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
