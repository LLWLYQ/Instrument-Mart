<template>
  <div class="CommonalityLeft">
    <div class="shop-info">
      <div class="shop-left-header">
        <h1>店铺信息</h1>
      </div>
      <div class="shop-left-body">
        {{sData.shop_info}}
      </div>
    </div>
    <div class="shop-product-hot">
      <div class="shop-left-header">
        <h1>商家推荐</h1>
      </div>
      <div class="shop-left-body">
        <ul>
          <li v-for="(item,index) in goodsData.slice(0,5)" :key="index">
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
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="shop-record">
      <div class="shop-left-header">
        <h1>诚信档案</h1>
      </div>
      <div class="shop-left-body">

      </div>
    </div> -->
  </div>
</template>

<script type="text/javascript">
 import config from '../../../config/config'
export default {
  props:{
    sData:{}
  },
  data() {
    return {
      goodsData:''
    }
  },
  methods: {

  },
  components: {

  },
  created(){

  },
  mounted(){
     let self = this
     self.$ajax({
        url: config.baseUrl + '/home/goods',
        method: "get",
        params: {
          shopid: self.sData.shop_id,
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
.CommonalityLeft{
  float: left;
  width: 270px;
  height: 1800px;
  // background:yellow;
  .shop-info{
    margin-bottom: 5px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
      padding: 20px 10px;
      border: 1px solid #e3e2e2;
      box-sizing: border-box;
      width: 100%;
      height: 291px;
      overflow: hidden;
      text-indent: 15px;
      
      // background: greenyellow;
    }
  }
  .shop-product-hot{
    margin-bottom: 13px;
    width: 100%;
    height: 876px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
        padding: 20px 20px;
        border: 1px solid #e3e2e2;
        box-sizing: border-box;
        width: 100%;
        height: 1400px;
        // text-align: center;
        ul {
          li {
            margin: 10px 10px 10px 10px;
            width: 210px;
            padding: 7px 7px 0 7px;
            height: 255px;
            float: left;
            border: 1px solid #ccc;

            // box-shadow: 0 1px 6px #999;
            a {
              margin: auto;
              display: block;

              img {
                width: 196px;
                height: 150px;
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
              height: 20px;
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

          // li:hover {
          //   border: 4px solid #ff0036;
          //   padding: 4px 4px 0 4px;
          // }
        }
        // background: pink;
      }
  }
  .shop-record{
    margin-bottom: 13px;
    width: 100%;
    height: 317px;
    .shop-left-header{
      width: 100%;
      padding: 10px;
      padding-left: 20px;
      background: #efe9e7;
      box-sizing: border-box;
      overflow: hidden;
      font-family: "微软雅黑";
      h1{
        float: left;
        font-size: 14px;
        font-weight: 600;
        padding-left: 10px;
        border-left: 5px solid #DD4B1C;
      }
    }
    .shop-left-body{
        padding: 20px 10px;
        border: 1px solid #e3e2e2;
        box-sizing: border-box;
        width: 100%;
        height: 320px;
        
        // background: orange;
      }
  }
}

</style>
