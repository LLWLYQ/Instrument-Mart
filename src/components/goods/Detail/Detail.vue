<template>
  <div id="Detail">
    <div class="content_container">
      <div class="LoginForm" v-if="LF">
        <i class="el-icon-circle-close" @click="closeLF()"></i>
        <LoginForm style="width:100%;height:100%;" v-on:closeLogin='closeLogin'></LoginForm>
      </div>
      <div class="over" v-if="LF" @click="closeLF()"></div>
      <div class="Shinetop">
        <div class="big_shinetop">
          <ul class="tabImages">
            <li
            v-show="iscur==index"
            v-for="(TI,index) in tebImg" :key="index"
            @mouseover="tabChange(index)"
            >
              <img :src="baseUrl+TI.files_path" alt="">
            </li>
          </ul>
        </div>
        <div class="small_shinetop">
          <ul>
            <li
              v-for="(TI,index) in tebImg" :key="index"
              :class="{cur:iscur===index}"
              @mouseover="iscur=index,tabChange(index)"
              ref="cur"
            >
              <img :src="baseUrl+TI.files_path" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="SKU">
        <div class="introduce" >
          <div class="brand">
            <p>
              <span>{{Infos.brand}}</span><span>{{Infos.goods_name}}</span>
            </p>
          </div>
          <div class="price">
            <dl >
              <del><dt><span>价格</span><b>￥</b>{{Infos.sales_price}}</dt></del>
            </dl>
            <dl>
              <dt><span>促销</span><p><b>￥</b>{{Infos.market_price}}</p></dt>
            </dl>
          </div>
        </div>
        <div>
          <quantity @AandS="Change($event)" :goods_unit="Infos.goods_unit" ></quantity>
          <div class="select">
            <ul v-for="Go in goods_option" :key="Go.id">
              <li v-for="(go,index) in Go.goods_option_value" :key="index" :class="{Select:isSelect===index}" @click="select(index)">
                {{go.name}}
              </li>
            </ul>
          </div>
        </div>
        <div class="buy">
          <span>立即购买</span>
          <span @click="addToShopCar()">加入购物车</span>
        </div>
      </div>
      <div class="comment">
        <div class="comment_left">
        </div>
        <div class="comment_right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品详情" name="first" >
              <h1>PRODUCT INFO</h1>
              <p class="commodity_information" v-html="Infos.pc_goods_content"></p>
              <div class="GoodTab">
                <table>
                  <tbody>
                    <tr v-for="SizeTab in sizeTable" :key="SizeTab.id">
                      <td>{{SizeTab.product_size}}</td>
                      <td>{{SizeTab.specifications}}</td>
                      <td>{{SizeTab.def19}}</td>
                      <td>{{SizeTab.def14}}</td>
                      <td>{{SizeTab.def8}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="PRODUCT">
                <ul>
                  <li v-for="product in attributesList" :key="product.id"><span>{{product.name}}</span>:<span style="color:#000;margin-left:5px;">{{product.value}}</span></li>
                </ul>
                <div class="bigimg">
                  <ul class="tabImages"  >
                    <li >
                      <img :src="baseUrl + Infos.goods_img_path" alt="">
                    </li>
                  </ul>
                </div>
                <div class="packageURL">
                  <h1>PACKING</h1>
                  <img :src="Infos.packageURL" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="累计评价" name="second">
              <table class="rate-grid">
                <tbody>
                  <tr v-for="red in reviewData" :key="red.id">
                    <td class="tm-col-master">
                      <div class="tm-rate-content">
                        {{red.content}}
                        <div class="tm-m-photos">
                          <ul class="tm-m-photos-thumb">

                          </ul>
                        </div>
                      </div>
                    </td>
                    <td class="col-meta">
                      {{red.goods_name}}
                    </td>
                    <td class="col-author">
                      {{red.user_name}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from '../../LoginForm/LoginForm'
import quantity from './Quantity/quantity';
import {mapGetters} from 'vuex'
import config from '../../../config/config'
export default {
  data () {
    return {
      activeName: 'first',
      isSelect:0,
      baseUrl:config.baseUrl,
      detailID:this.$route.query.listId,
      tebImg:'',
      iscur:0,
      Infos:'',
      sizeTable:'',
      attributesList:'',
      brandId:'',
      name:'',
      price:'',
      pictUrl:'',
      quantity:'',
      num:1,
      DiscountPrice:'',
      LF:false,
      UserId:localStorage.getItem('userId'),
      goods_option:'',
      title:'',
      reviewData:'',
      option:{"10":"1"}
    }
  },
  computed:mapGetters([
    'count'
  ]),
  methods: {
    //累计评论
    handleClick(tab, event) {
      // console.log(this.title)
    },
    select(index){
      this.isSelect = index
    },
    closeLF(){
      this.LF = false
    },
    tabChange(index,event){
      this.iscur = index
    },
    addToShopCar(){
      if(this.UserId){
        this.$ajax({
          url:config.baseUrl+'/home/cart/add',
          method:'post',
          data:{
            goods_id:this.Infos.goods_id,
            member_id:localStorage.getItem('userId'),
            option:this.option,
            quantity:this.num
          }
        }).then(res=>{
          if( res.data.code = 20000){
            const h = this.$createElement;
            this.$notify({
                title: '加入购物车成功',
                message: '商品已成功加入购物侧，欢迎选购其他商品',
                type: 'success',
                customClass:'Notification',
              });
          }
        })
      }else{
        this.LF = true
      }
  },
  Change(data){
      this.num = data
    },
  closeLogin(closeLogin){
    this.LF = closeLogin
  }
  },
  created(){
    this.$ajax({
      url:config.baseUrl+'/home/goods/'+ this.detailID,
      methods:'post',
    }).then(res=>{
      console.log(res)
      this.Infos = res.data.data.result
      this.title = this.Infos.goods_name
      this.goods_option = this.Infos.goods_option
      this.brandId = this.Infos.goods_id
      this.tebImg = res.data.data.result.piclist
      this.pictUrl = config.baseUrl + this.tebImg[0].files_path
      this.name =  this.Infos.goods_name
      this.price = this.Infos.sales_price
    })
    this.$ajax({
        url:config.baseUrl + '/home/comment',
        methods:'get',
        params:{
          member_id:90,
          title:this.title
        }
      }).then(res=>{
        this.reviewData = res.data.data.items.data
    })
  },
  components:{
    quantity,
    LoginForm
  }
}
</script>

<style scope lang="scss">
@import "../../../style/common.css";
#tab-first{
  width: 150px;
  text-align: center;
  border-right: 1px solid #ccc;
}
#tab-second{
  width: 150px;
  text-align: center;
}
.el-tabs__header {
  margin: 0;
  border-left:1px solid #ccc;
  border-right:1px solid #ccc;
}
.rate-grid{
  width: 100%;
  table-layout: fixed;
  tbody{
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    tr{
      display: table-row;
      vertical-align: inherit;
      border-color: inherit;
      .tm-col-master{
        width: 494px;
        padding-right: 30px;
        .tm-rate-content{
          color:#333;
          word-wrap: break-word;
          word-break: break-all;
          line-height: 19px;
          overflow: hidden;
          .tm-m-photos{
            zoom: 1;
            .tm-m-photos-thumb{
              margin: 10px 0;
              list-style-type: none;
              height: 40px;
            }
          }
        }
      }
      .col-meta{
        width: 135px;
        color: #999;
      }
      .col-author{
        padding-right: 0;
      }
      td{
        padding: 16px 7px;
        border-bottom: 1px solid #e3e3e3;
      }
    }
  }
}
.LoginForm {
      position: fixed;
      font-size: 24px;
      height: 430px;
      width: 350px;
      background-color: #fff;
      border-radius: 0.25rem;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -20%);
      z-index: 1000;
      padding: 10px 0 0 30px;
       .el-icon-circle-close{
            font-size: 20px;
            float: right;
            margin: 0px 10px 0 0;
            cursor: pointer;
          }
    }
.over {
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0.7;//透明度为70%
        filter: alpha(opacity=70);
        top: 0;
        left: 0;
        z-index: 999;
        background-color: #111111;
      }
  #Detail{
    margin-top:30px;
  }
  .Shinetop{
    width: 460px;
    height: 600px;
    position: relative;
    float: left;
    .big_shinetop{
      ul{
        li{
          position: absolute;
          height: 460px;
          width: 460px;
          padding: 13px 20px 20px 20px;
          // border:1px solid #ccc;
          img{
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0,0,0,.05);
          }
        }
      }
    }
    .small_shinetop{
      position: absolute;
      bottom: 50px;
      left: 0;
      .cur{
        border:2px solid black;
      }
      li{
        width: 60px;
        height: 60px;
        float: left;
        margin: 0 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .SKU{
    float: left;
    width: 500px;
    height: 700px;
    margin-left: 30px;
    .brand{
      p{
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        span{
          font-size: 16px;
        }
      }
      p span:nth-child(1){
          // margin-right: 20px;
          font-size: 20px;
        }
    }
    .price{
        height: 80px;
        background-color: #e9e9e9;
        background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAggAAADGCAMAAACAX4i8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEhQTFRF7Ovr5+fn8vHx7e3t6ejo8/Ly5uXl7u3t6unp5+bm6urq9PT09fX18fDw9PPz7u7u8fHx8/Pz7ezs5eTk7+7u8O/v9vX16enpNd0tWQAABxVJREFUeNrs3GFy2zgMBWBomWyiNNt0s459/5vW3jZNHNsSJYEAHvh0AP/AfAM+DEjLsOC7e3iL+v21P37f/lH8xV2RFt/hP8Pv77tD7SeJHOyf/9WU8FY6crAEQngHp57wI3ZPCOtgAQQEB/v997fIEuI6qIeA4WD/rNoTlE+HwA6qIYA4OJ0OYXtCZAe1EHAcxE2MoR1UQgByoD5FvnbhoA4CloNjTwh4OgR3UAUBzIH2FKlyOkR3UAMBz0G8KTK8gwoIiA72z99DJcb4DuYhQDoIlhgBHMxCQHWwf75/i9ITEBzMQYB1EGjvAOFgBgKygyiJEcPBNARsB8fEGGCKBHEwCQHcQYibKigOpiDgO/DfO8A4mICQwIF7T8BxcBtCDgf7vefeAcjBTQhZHHjeVEFycAtCGgeOUySUgxsQMjnw2jtgObgOIZUDp8QI5uAqhGwOPPYOaA6uQUjnwOGmCpyDKxAyOrBOjHgOLiHkdGC7dwB0cAEhqQPTxIjo4CuEvA7s9g6QDr5ASOzA7KYKpoNzCLkd2CRGUAdnELI7sNg7oDr4DCG9A4OeAOvgE4QeHLROjLgOPiB04aDxFAns4A+EXhy0fCGL7OAdQjcOGu4doB38htCTg1aJEdvBLwh9OWizdwB38D+Ezhw0SYzoDk4Q+nOwf75XniLhHRwhdOhAfe/wBO/gIH060E2M5W5Ed3CQTh1oJsZyrOMI7uAgnTpQTIwnBwerntDKQVwIzR1o7R3K70oO0A7CQmjvQKknvDsw6QntHESFYOJA44Vs+Sjl3QDsICgEIwfbp8hyVswR10FMCGYOtk6R5w4anw5NHYSEYOhg2wvZclHOEdVBRAiWDjYlxksHDXtCYwcBIRg7WP9Ctlwt6IDpIB4EawerE+N1B416QnMH4SA4OFiXGMutiraQ0N5BNAguDtbsHcpETUdAB8Eg+DhYkRinHKj3BAsHsSC4OVh6U6XMVHWAcxAKgp+DhYlxzoFqT7BxEAmCq4Mle4cyX1a9vYORg0AQnB3Uv5AtVYUdsRzEgeDtoHqKrHOgdDqYOQgDIYCDupsqpbq0A5KDKBAiOKiaIusdKPQEQwdBIARxML93KIuKO+A4iAEhioPZKbIsrO4I4yAEhEAOphPjUgebTgdbBxEghHIwtXcoK+o7gjgIACGWg4nEuMbB6p5g7cAfQjgHt/YOZWWFBwgH7hDiObiRGNc6WNUT7B14Qwjp4FpiLOtLvHzv4ODAGUJQB5eJsWwq8hjfgS+EqA4uesI2BwtPBxcHrhACOzjfO5TNZR6iO/CEENnB2RS53cGCnuDkwBFCcAcf/8xZNOpcmxi9HPhBiO7gzxRZlCo9hnbgBgHAwa/EqOWg6nTwc+AFAcLB6YVsUaz1GNiBEwQMB8fvx6Nired6gqcDHwgwDu5fXlWrPYR14AIBx8FutytPRj3B14EHBCgHRwkHEwnODhwggDnYvaj2hFuJ0duBPQQ0B6ee0D4xujswhwDoYPegKuFaYvR3YA0B0UH7xBjAgTEEUAfaiXGI58AWAqyDpokxhANTCLgOWk6RMRxYQoB2oJ0Yx2AODCFgO2g1RUZxYAcB3sExJ+jvHcI4MIOA70B7ijydDnEcWEFI4UA9MQZyYAQhiYNjYlTtCYEc2EDI4kA7MR46g5DIwe7h9ZEQ6EA/MXYEIZkD5cTYD4R0DrT3Dp1AyOcgaU8QOljsQHvv0AGEnA5STpFCBysc7JTfOySHkNdBwilS6GCVg3SJUehgnQPtvUNaCNkdZEuMQgerv5dMewehgw1fotNB6GCTBEKgg1x7B6GDjT3hkRDoINHeQeiAPaEJhO4cJEmMQgcKEp4IgQ6S9AShAyZGdQi9OsiQGIUOVD74mypCB0yMuhA6d4CeGIUO1E4H6J4gdMDEqAiBDtBfyAodMDGqQaAD/MQodMDEqASBDjL0BKED7cSIOTsIHXCK1IBAB83/mRMCAh1kmSKFDpgYN0OggzwvZIUOmBg3QqCDTHsHoQMmxk0Q6CBXYhQ64N5hAwQ6yNYThA64d1gNgQ7yTZFCB9w7rIRABxmnSKEDJsZVEOggZ2IUOmBiXAGBDrK+kBU6YGJcDIEO8iZGoQPuHRZCoIPMiVHogDdVFkGgg9yJUeiAiXEBBDrInhiFDtgTqiHQQf69g9ABp8hKCHTQw95B6IBTZBUEOugjMQodcIqsgEAHvSRGoQPuHWYh0EE/iVHogIlxBgId9JQYhQ7YEyYh0EFfewehA06RExDowCYnRIdAB91NkUIHTIy3INBBh4lR6ICJ8ToEOujyporQARPjNQh00GliFDrg3uESAh10mxiFDjhFfoVABx33BKEDJsZzCHTQdWIUOmBP+AyBDjpPjEIHTIwfEOig+5sqQgfcO7xDoAMmxhMEOuAUeTj8FGAACqmqUagiyncAAAAASUVORK5CYII=);
        dl{
          margin:0;
        }
        dt{
          font-size: 16px;
          height: 35px;
          line-height: 35px;
          span{
            float: left;
            margin-left: 10px;
          }
          b{
            margin-left: 40px;
          }
          p{
            float: left;
            color:#FF0036;
            font-size: 30px;
            b{
              font-size: 22px;
              font-weight: 400;
            }
          }
        }
      }
      // .freight{
      //   height: 60px;
      //   dl{
      //     dt{
      //       font-size:16px;
      //       span{
      //         float: left;
      //       }
      //       p{
      //         float: left;
      //         margin-left: 60px;
      //       }
      //     }
      //   }
      // }
    .buy{
      width: 100%;
      height: 100px;
      line-height: 100px;
      position: relative;
      span{
        cursor: pointer;
      }
      span:nth-child(1){
        background-color: #dd2828;
        color:#fff;
        padding:10px 60px;
        margin-left: 100px;
      }
      span:nth-child(2){
        background-color: #222;
        color:#fff;
        padding:10px 50px;
        margin-left: 30px;
      }
    }
    .Promise{
      height: 100px;
      .sever{
        width: 100px;
        height: 100px;
        font-size: 16px;
        float: left;
      }
      ul{
        height: 30px;
        float: left;
        li{
          float: left;
          font-size: 16px;
          margin-right: 20px;
        }
      }
    }
  }
  .comment{
    width: 100%;
    height: 5000px;
    overflow:hidden;
    h1{
      text-align: center;
    }
    .comment_left{
      width: 190px;
      background-color: black;
      height: 100%;
      float: left;
    }
    .comment_right{
      float: left;
      width: 790px;
      margin-left: 10px;
      height: 100%;
      border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
      .commodity_information{
        text-align: center;
        font-size: 20px;
        letter-spacing:10px;
      }
      .GoodTab{
        // width: 920px;
        // height: 310px;
        td{
          padding:20px 20px;
          width: 150px;
          text-align: center;
          border:0.1px solid #ccc;
        }
        tbody tr:nth-child(1){
          background: #222;
          color:#fff;
        }
        tbody tr:nth-child(n+2){
          border:none;
        }

      }
      .PRODUCT{
        li{
          width: 280px;
          height: 50px;
          line-height: 50px;
          float: left;
          text-align: center;
          border-bottom: 1px solid #e7e7e7;
          margin-left: 20px;
          font-size: 14px;
          color:#ccc;
        }
        .bigimg{
          li{
            width: 100%;
            height: 600px;
            margin:0 auto;
            overflow: hidden;
            margin-bottom: 20px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .packageURL{
          img{
            width: 100%;
          }
        }
      }
    }
  }

 .Notification{
      position: absolute;
      left:50%;
      margin-top:520px;
    }
    .select{
      ul{
        width: 100%;
        height: 70px;
        li{
          float: left;
          line-height: 40px;
          margin-right: 50px;
          padding:0px 10px;
          border:1px solid #ccc;
          cursor: pointer;
        }
      }
    }
    .Select{
      background:#222;
      color: #fff;
    }
</style>
