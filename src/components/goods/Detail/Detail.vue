<template>
  <!-- 引入样式 -->
  <div class="Detail">
    <div class="content_container">
      <div class="LoginForm" v-if="LF">
        <i class="el-icon-circle-close" @click="closeLF()"></i>
        <LoginForm style="width:100%;height:100%;" v-on:closeLogin='closeLogin'></LoginForm>
      </div>
      <div class="over" v-if="LF" @click="closeLF()"></div>
      <div class="Shinetop">
        <div class="big_shinetop">
          <ul class="tabImages">
            <li>
              <pic-zoom :url="baseUrl+imgurl" :scale="2" ></pic-zoom>
            </li>
            <!-- <li v-show="iscur==index" v-for="(TI,index) in tebImg" :key="index" @mouseover="tabChange(index,TI)">
              <img :src="baseUrl+TI.files_path" alt="">
            </li> -->
          </ul>
        </div>
        <div class="small_shinetop">
          <ul>
            <li v-for="(TI,index) in tebImg" :key="index" :class="{cur:iscur===index}"
              @mouseover="iscur=index,tabChange(index,TI)" ref="cur">
              <img :src="baseUrl+TI.files_path" alt="">
            </li>
          </ul>
        </div>
        <div class="collect">
          <p @click="collect()"><i class="el-icon-star-on" style="color:#FFD700;font-size:20px;"></i>收藏商品</p>
        </div>
        <div class="collect_succ" v-if="Collect">
          <h1><i class="el-icon-success"></i><span>成功加入收藏夹</span><i class="el-icon-error right" @click="close()"></i>
          </h1>
          <p>您可以前往 <router-link to="/Favorite" target="_blank">收藏夹</router-link>&nbsp;查看</p>
        </div>
      </div>
      <div class="SKU">
        <div class="introduce">
          <div class="brand">
            <p>
              <span>{{Infos.brand}}</span><span>{{Infos.goods_name}}</span>
            </p>
          </div>
          <div class="price">
            <dl>
              <del>
                <dt><span>价格</span><b>￥</b>{{Infos.sales_price/100}}</dt>
              </del>
            </dl>
            <dl>
              <dt><span>促销</span>
                <p><b>￥</b>{{Infos.market_price/100}}</p>
              </dt>
            </dl>
          </div>
        </div>
        <div>
          <quantity @AandS="Change($event)" :goods_unit="Infos.goods_unit" :goods_quantity="Infos.quantity"></quantity>
          <!-- 商品规格 -->
          <div class="select" style="color:#000;" ref="sele">
            <el-form ref="form" :model="Go" label-width="40px" v-for="Go in goods_option" :key="Go.id">
              <el-form-item :label="Go.name">
                <el-radio-group v-model="Go.cf" v-for="(go,index) in Go.goods_option_value" :key="index"
                  @change="aa(go)">
                  <el-radio-button :label="go.goods_option_value_id">
                    {{go.name}}
                  </el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="buy">
          <span @click="BuyNow()">立即购买</span>
          <span @click="addToShopCar()">加入购物车</span>
        </div>
      </div>
      <div class="comment">
        <div class="comment_left">
        </div>
        <div class="comment_right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品详情" name="first">
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
                  <li v-for="product in attributesList" :key="product.id"><span>{{product.name}}</span>:<span
                      style="color:#000;margin-left:5px;">{{product.value}}</span></li>
                </ul>
                <div class="bigimg">
                  <ul class="tabImages">
                    <li>
                      <img :src="baseUrl + Infos.goods_img_path" alt="">
                    </li>
                  </ul>
                </div>
                <div class="packageURL">
                  <!-- <h1>PACKING</h1> -->
                  <img :src="Infos.packageURL" alt="">
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="累计评价" name="second">
              <table class="rate-grid">
                <p v-if="reviewData == ''" class="PP">暂无评论</p>
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
            <el-tab-pane label="咨询列表" name="last">
              <div class="form">
                <div class="Detal">
                  <div class="userName">
                    <p>用户：{{userName}}</p>
                  </div>
                  <div class="ProName">
                    <p>商品：{{Infos.goods_name}}</p>
                  </div>
                </div>
                <div class="Text">
                  <div class="OrderRate">
                    <div class="OL">
                      <span>商品咨询内容</span>
                    </div>
                    <div class="OR">
                      <textarea name="" id="" cols="30" rows="10" v-model="notedata">
                      </textarea>
                    </div>
                  </div>
                  <div style="clear:both"></div>
                </div>
                <div class="anonymity">
                  <el-radio v-model="anonymity" label="0"><span>匿名</span></el-radio>
                  <el-radio v-model="anonymity" label="1"><span>不匿名</span></el-radio>
                  <!-- <p>woxiangzheyidingshigewanmeideaiqingba</p> -->
                </div>
                <div class="submit">
                  <span>
                    <button @click="submit()">
                      咨询商品
                    </button>
                  </span>
                </div>
              </div>
              <table class="Rate-Grid">
                <p v-if="MenberConsulting == ''" class="PP">暂无咨询数据</p>
                <tbody>
                  <tr v-for="red in MenberConsulting" :key="red.id">
                    <td class="tm-col-master">
                      <div class="tm-rate-content">
                        <div class="tm-m-photos">
                          <ul class="tm-m-photos-thumb">
                            <li><span>{{red.consult_content}}</span></li>
                          </ul>
                          <p><span>商家回复：{{red.consult_reply}}好用的不得了</span></p>
                        </div>
                      </div>
                    </td>
                    <td class="col-meta">
                      <p>{{red.goods_name}}</p>
                      <p><span>{{red.consult_replytime | formatDate}}</span></p>
                    </td>
                    <td class="col-author">
                      <p>{{red.member_name}}</p>
                      <p>{{red.store_name}}</p>
                      <p>{{red.store_diaonimade}}</p>
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
  import PicZoom from 'vue-piczoom'
  import {
    mapGetters
  } from 'vuex'
  import config from '../../../config/config'
  export default {
    data() {
      return {
        Collect: false,
        activeName: 'first',
        isSelect: 0,
        baseUrl: config.baseUrl,
        detailID: this.$route.query.listId,
        tebImg: '',
        iscur: 0,
        Infos: '',
        sizeTable: '',
        attributesList: '',
        brandId: '',
        name: '',
        price: '',
        pictUrl: '',
        quantity: '',
        num: 1,
        DiscountPrice: '',
        LF: false,
        UserId: localStorage.getItem('userId'),
        goods_option: '',
        title: '',
        reviewData: '',
        option: [],
        aaImg: '',
        aaArr: [],
        notedata: '',
        userName: localStorage.getItem('userName'),
        anonymity: '0',
        MenberConsulting: '',
        Consulting: '',
        OrderList:[],
        totalMoney:'',
        giao:'',
        imgurl:''
        // Unanonymity:'1'
      }
    },
    computed: mapGetters([
      'count'
    ]),
    methods: {
      BuyNow(){
        if (this.UserId) {
        if(this.option == ''){
          this.$refs.sele.style.border = '1px solid #FF0036'
        }else{
          this.$refs.sele.style.border = 'none'
          let routeData = this.$router.resolve({
            name: 'OrderForm',
            query: {
              orderData: JSON.stringify(this.OrderList),
              totalMoney: JSON.stringify(this.Infos.sales_price*this.num)/100
            }
          })
          window.open(routeData.href, '_blank');
        }
        if(this.goods_option == ''){
          // this.$refs.sele.style.border = 'none'
          let routeData = this.$router.resolve({
            name: 'OrderForm',
            query: {
              orderData: JSON.stringify(this.OrderList),
              totalMoney: JSON.stringify(this.Infos.sales_price*this.num)/100
            }
          })
          window.open(routeData.href, '_blank');
        }
        }else{
          this.LF = true
          
        } 
      },
      //商品咨询添加
      submit() {
        if (!localStorage.getItem('userId')) {
          if (this.notedata == '') {
            this.$alert('请填写要咨询的内容', '', {
              confirmButtonText: '',
            });
          } else {
            this.$ajax({
              url: config.baseUrl + '/home/consult',
              method: 'post',
              data: {
                goods_id: this.detailID,
                goods_name: this.Infos.goods_name,
                member_id: 0,
                member_name: '',
                store_id: this.Infos.get_shop.shop_id,
                store_name: this.Infos.get_shop.shop_name,
                consult_content: this.notedata,
                consult_isanonymous: this.anonymity
              }
            }).then(res => {
              if (res.data.code == 20000) {
                this.$alert('咨询成功', '', {
                  confirmButtonText: '',
                });
                this.notedata = ''
              }
            })
          }
        } else {
          if (this.notedata == '') {
            this.$alert('请填写要咨询的内容', '', {
              confirmButtonText: '',
            });
          } else {
            this.$ajax({
              url: config.baseUrl + '/home/consult',
              method: 'post',
              data: {
                goods_id: this.detailID,
                goods_name: this.Infos.goods_name,
                member_id: localStorage.getItem('userId'),
                member_name: this.userName,
                store_id: this.Infos.get_shop.shop_id,
                store_name: this.Infos.get_shop.shop_name,
                consult_content: this.notedata,
                consult_isanonymous: this.anonymity
              }
            }).then(res => {
              if (res.data.code == 20000) {
                this.$alert('咨询成功', '', {
                  confirmButtonText: '',
                });
                this.notedata = ''
              }
            })
          }
        }   
      },
      close() {
        this.Collect = false
      },
      collect() {
        this.$ajax({
          url: config.baseUrl + '/home/collect',
          method: 'post',
          data: {
            goods_id: this.detailID,
            member_id: localStorage.getItem('userId')
          }
        }).then(res => {
          this.Collect = true
        })
      },
      //累计评论
      handleClick(tab, event) {},
      select2(index, go) {
        this.isSelect = index
      },
      select(e) {
        let as = parseInt(this.Infos.market_price)
        let rs = 0
        rs = as + parseInt(e.target.dataset.price)

        // console.log(rs)

        this.Infos.market_price = rs
      },
      aa(go) {
        
        this.option = go
        this.OrderList = [{
          // goods_option_value: 
          count:this.num,
          id:this.giao ,
          img:this.Infos.goods_img_path,
          member_id:localStorage.getItem('userId'),
          option: this.option,
          price: this.Infos.sales_price,
          productName:this.Infos.goods_name,
          shop:this.Infos.get_shop.shop_id
        }]
        this.$ajax({
          url: config.baseUrl + '/home/goods/optionPrice',
          method: 'post',
          data: {
            goods_option_value_id: this.aaArr
          }
        }).then(res => {
          if (res.data.code == 20000) {
            // this.$refs.aaimg.style.display = 'block'
          }

          res.data.data.map(item => {
            this.Infos.market_price = item.sales_price
            this.aaImg = item.imageUrl
          })

        })
      },
      closeLF() {
        this.LF = false
      },
      tabChange(index, TI) {
        this.imgurl = TI.files_path
        this.iscur = index
        // this.$refs.aaimg.style.display = 'none'
      },
      addToShopCar() {
        if (this.UserId) {
          // if(this.option){
            this.$ajax({
              url: config.baseUrl + '/home/cart/add',
              method: 'post',
              data: {
                goods_id: this.Infos.goods_id,
                member_id: localStorage.getItem('userId'),
                option: this.option,
                quantity: this.num
              }
            }).then(res => {
              console.log(res)
              if (res.data.code = 20000) {
                const h = this.$createElement;
                this.$notify({
                  title: '加入购物车成功',
                  message: '商品已成功加入购物侧，欢迎选购其他商品',
                  type: 'success',
                  customClass: 'Notification',
                });
              }
            })
          // }
        } else {
          this.LF = true
        }
      },
      Change(data) {
        // console.log(data)
        this.num = data
        this.OrderList = [{
          // goods_option_value: 
          count:this.num,
          id:this.giao ,
          img:this.Infos.goods_img_path,
          member_id:localStorage.getItem('userId'),
          option: this.option,
          price: this.Infos.sales_price,
          productName:this.Infos.goods_name,
          shop:this.Infos.get_shop.shop_id
        }]
      },
      closeLogin(closeLogin) {
        this.LF = closeLogin
      }
    },
    created() {
      // this.tabChange()
      if (localStorage.getItem('userId')) { 
        //会员产品咨询列表 MenberConsulting
        this.$ajax({
          url: config.baseUrl + '/home/consult',
          method: 'get',
          params: {
            member_id: localStorage.getItem('userId')
          }
        }).then(res => {
          this.MenberConsulting = res.data.data.items.data
          // console.log(this.MenberConsulting)
          // this.yourNotFire = 'Noforu'
        })
      } else {
        //产品咨询列表 Consulting
        this.$ajax({
          url: config.baseUrl + '/home/goods/consult',
          method: 'POST',
          data: {
            goods_id: this.detailID
          }
        }).then(res => {
          this.MenberConsulting = res.data.data.items.data
        })
      }

      this.$ajax({
        url: config.baseUrl + '/home/goods/' + this.detailID,
        methods: 'post',
      }).then(res => {
        this.Infos = res.data.data.result
        this.giao = res.data.data.id
        this.title = this.Infos.goods_name
        this.goods_option = this.Infos.goods_option
        this.brandId = this.Infos.goods_id
        this.tebImg = res.data.data.result.piclist
        // this.tabChange()
        // console.log(this.tebImg)
        this.imgurl = this.tebImg[0].files_path
        this.pictUrl = config.baseUrl + this.tebImg[0].files_path
        this.name = this.Infos.goods_name
        this.price = this.Infos.sales_price
        // console.log(this.goods_option)
        // this.OrderList = [{
        //   // goods_option_value: 
        //   // goods_option_value:this.
        //   count:this.num,
        //   id:this.giao ,
        //   img:this.Infos.goods_img_path,
        //   member_id:localStorage.getItem('userId'),
        //   option: this.option,
        //   price: this.Infos.sales_price,
        //   productName:this.Infos.goods_name,
        //   shop:this.Infos.get_shop.shop_id
        // }]
        // console.log(this.Infos)
        // console.log(this.title)
        this.$ajax({
          url: config.baseUrl + '/home/comment',
          methods: 'get',
          params: {
            member_id: '',
            title: '',
            goods_id: this.detailID,
            // shop_id:'荣耀Play4T Pro' 
          }
        }).then(res => {
          this.reviewData = res.data.data.items.data
          // this.pictUrl = config.baseUrl + this.tebImg[0].files_path
          // this.tebImg = res.data.data.result.piclist
          // this.brandId = Infos.goods_option
          // debugger
          // console.log(this.reviewData)
        })
      })

    },
    components: {
      quantity,
      LoginForm,
      PicZoom
    }
  }

</script>

<style scope lang="scss">
  @import "../../../style/common.css";
  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background: #fff !important;
    border: 2px solid #FF0036 !important;
    color: #222 !important;
    box-shadow: none;
  }

  .collect_succ {
    width: 527px;
    height: 244px;
    border: 10px solid rgba(71, 65, 64, 0.5);
    opacity: 1;
    position: absolute;
    top: 300px;
    left: 208px;
    z-index: 10000;
    padding: 10px;
    background: #fff;

    p {
      float: left;
      width: 100%;
      padding-left: 20px;
      height: 30px;
      line-height: 30px;
    }

    h1 {
      height: 50px;
      line-height: 50px;
      margin-top: 0px;
      border-bottom: 1px solid #e6e6e6;

      .right {
        float: right;
        margin-top: 0px;
        color: #716564;
        cursor: pointer;
      }

      i {
        font-size: 30px;
        float: left;
        color: green;
        margin-top: 14px;
      }

      span {
        float: left;
        font-size: 18px;
        margin-top: 2px;
        margin-left: 10px;
      }
    }
  }

  .collect {
    position: absolute;
    bottom: 0px;
    left: 20px;

    p {
      font-size: 12px;
      height: 20px;
      line-height: 20px;
      color: #999;
      cursor: pointer;
    }

    i {
      margin-right: 5px;
      font-size: 14px;
      color: #999;
    }

  }

  .el-radio-button {
    margin-left: 15px;
  }

  .el-radio-button:first-child .el-radio-button__inner {
    border-left: 2px solid #DCDFE6;
  }

  .el-radio-button__inner {
    margin-left: 18px;
    font-size: 12px;
    color: #000;
    border: 2px solid #DCDFE6 !important;
  }

  .el-radio-button__inner:hover {
    background: #fff;
    border: 2px solid #FF0036 !important;
    color: #222 !important;
    box-shadow: none;
  }

  .el-form-item__label {
    font-size: 12px;
    color: #000;
  }

  // #tab-first{
  //   width: 150px;
  //   text-align: center;
  //   border-right: 1px solid #ccc;
  // }
  // #tab-second{
  //   width: 150px;
  //   text-align: center;
  // }
  // .el-tabs__header {
  //   margin: 0;
  //   border-left:1px solid #ccc;
  //   border-right:1px solid #ccc;
  // }
  .form {
    width: 788px;
    height: 386px;
    border: 1px solid #d1ccc8;
    margin: 5px 0 10px 0;
    background: #f6f6f6;
    overflow: hidden;

    .userName {
      width: 509px;
      height: 30px;
      // border:1px solid #ccc;
      margin-left: 40px;
      margin-bottom: 15px;
      line-height: 30px;
    }

    .ProName {
      width: 509px;
      height: 30px;
      margin-left: 40px;
      margin-bottom: 15px;
      line-height: 30px;
    }

    .submit {
      position: relative;
      padding: 10px 0;
      height: 27px;
      text-align: center;

      span {
        float: left;
        text-align: center;
        border-radius: 2px;
        background-color: #c40000;
        padding: 0;
        margin-left: 350px;

        button {
          display: inline-block;
          padding: 0 10px;
          border: 0;
          line-height: 25px;
          font-weight: 700;
          background: 0 0;
          color: #fff;
          cursor: pointer;
        }
      }
    }

    .Text {
      width: 509px;
      height: 191px;
      border: 1px solid #ccc;
      margin-left: 40px;
      margin-bottom: 30px;

      .OrderRate {
        width: 100%;
        border-bottom: 1px solid #E7E7E7;
      }

      .serve {
        width: 100%;
      }

      .OL {
        line-height: 188px;
        height: 188px;
        width: 100px;
        text-align: center;
        vertical-align: top;
        color: #666;
        background-color: #EFEFEF;
        border-left: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        border-right: 1px solid #e7e7e7;
        float: left;
      }

      .SL {
        line-height: 70px;
        height: 70px;
        width: 60px;
        text-align: center;
        vertical-align: top;
        color: #666;
        background-color: #EFEFEF;
        border-left: 1px solid #E7E7E7;
        border-bottom: 1px solid #E7E7E7;
        border-right: 1px solid #e7e7e7;
        float: left;
      }

      .OR {
        height: 189px;
        width: 406px;
        position: relative;
        float: left;
        padding: 10px 9px 0;
        background: #fff;
        border-bottom: 1px solid #E7E7E7;

        textarea {
          resize: none;
          display: block;
          outline: 0;
          overflow: auto;
          padding: 0;
          margin: 0;
          border: none;
          width: 100%;
          height: 100%;
        }
      }

      .SR {
        height: 70px;
        width: 446px;
        position: relative;
        padding: 10px 9px 0;
        float: left;
        background: #fff;

        textarea {
          resize: none;
          display: block;
          outline: 0;
          overflow: auto;
          padding: 0;
          margin: 0;
          border: none;
          width: 100%;
          height: 100%;
        }
      }
    }

    .anonymity {
      margin-left: 40px;
    }
  }

  .Rate-Grid {
    width: 788px;
    table-layout: fixed;
    border-top: 1px solid #ccc;

    .PP {
      height: 30px;
      line-height: 30px;
      text-align: center;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;

        .tm-col-master {
          width: 420px;
          padding-right: 10px;

          .tm-rate-content {
            color: #333;
            word-wrap: break-word;
            word-break: break-all;
            line-height: 19px;
            overflow: hidden;

            .tm-m-photos {
              zoom: 1;

              p {
                span {
                  float: left;
                }
              }

              .tm-m-photos-thumb {
                margin: 10px 0;
                list-style-type: none;
                height: 40px;
                // li{
                //   span{
                //     margin-left: 15px;
                //   }
                // }
              }
            }
          }
        }

        .col-meta {
          width: 150px;
          color: #999;

          p {
            span {
              color: #222;
            }
          }
        }

        .col-meta p:nth-child(2) {
          margin-top: 47px;
        }

        .col-author {
          padding-right: 0;

          p {
            margin-bottom: 5px;
            color: #222;
          }
        }

        td {
          padding: 16px 7px;
          border-bottom: 1px solid #e3e3e3;
        }
      }
    }
  }

  .rate-grid {
    width: 788px;
    table-layout: fixed;
    border-top: 1px solid #ccc;

    .PP {
      height: 30px;
      line-height: 30px;
      text-align: center;
    }

    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;

        .tm-col-master {
          width: 420px;
          padding-right: 10px;

          .tm-rate-content {
            color: #333;
            word-wrap: break-word;
            word-break: break-all;
            line-height: 19px;
            overflow: hidden;

            .tm-m-photos {
              zoom: 1;

              p {
                span {
                  float: left;
                }
              }

              .tm-m-photos-thumb {
                margin: 10px 0;
                list-style-type: none;
                height: 40px;
                // li{
                //   span{
                //     margin-left: 15px;
                //   }
                // }
              }
            }
          }
        }

        .col-meta {
          width: 150px;
          color: #999;

          p {
            span {
              color: #222;
            }
          }
        }

        .col-meta p:nth-child(2) {
          margin-top: 47px;
        }

        .col-author {
          padding-right: 0;

          p {
            margin-bottom: 5px;
            color: #222;
          }
        }

        td {
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

    .el-icon-circle-close {
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
    opacity: 0.7; //透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
  }

  .Detail {
    margin-top: 30px;
  }

  .Shinetop {
    width: 460px;
    height: 600px;
    position: relative;
    float: left;
    .big_shinetop {
      ul {
        li {
          position: absolute;
          height: 420px;
          width: 420px;
          margin: 20px auto 0;
          border: 1px solid rgba(0,0,0,.05);
          // border:1px solid #ccc;
          img {
            width: 100%;
            height: 100%;
            // border: 1px solid rgba(0, 0, 0, .05);
          }
        }
      }
    }

    .small_shinetop {
      position: absolute;
      bottom: 50px;
      left: 0;

      .cur {
        border: 2px solid black;
        padding: 0;
      }

      li {
        width: 60px;
        height: 60px;
        padding: 2px;
        float: left;
        margin-left: 20px;
        text-align: center;
        line-height: 60px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .SKU {
    float: left;
    width: 500px;
    height: 700px;
    margin-left: 30px;

    .brand {
      p {
        height: 40px;
        line-height: 40px;
        font-weight: 600;

        span {
          font-size: 16px;
        }
      }

      p span:nth-child(1) {
        // margin-right: 20px;
        font-size: 20px;
      }
    }

    .price {
      height: 80px;
      background-color: #e9e9e9;
      background-image: url(data:image/png;base64,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);

      dl {
        margin: 0;
      }

      dt {
        font-size: 16px;
        height: 35px;
        line-height: 35px;

        span {
          float: left;
          margin-left: 10px;
        }

        b {
          margin-left: 40px;
        }

        p {
          float: left;
          color: #FF0036;
          font-size: 30px;

          b {
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
    .buy {
      width: 100%;
      height: 100px;
      line-height: 100px;
      position: relative;

      span {
        cursor: pointer;
        font-size: 16px;
      }

      span:nth-child(1) {
        background-color: #dd2828;
        color: #fff;
        padding: 10px 60px;
        margin-left: 57px;
      }

      span:nth-child(2) {
        background-color: #222;
        color: #fff;
        padding: 10px 50px;
        margin-left: 30px;
      }
    }

    .Promise {
      height: 100px;

      .sever {
        width: 100px;
        height: 100px;
        font-size: 16px;
        float: left;
      }

      ul {
        height: 30px;
        float: left;

        li {
          float: left;
          font-size: 16px;
          margin-right: 20px;
        }
      }
    }
  }

  .comment {
    width: 100%;
    height: 5000px;
    overflow: hidden;

    h1 {
      text-align: center;
    }

    .comment_left {
      width: 190px;
      background-color: black;
      height: 100%;
      float: left;
    }

    .comment_right {
      float: left;
      width: 790px;
      margin-left: 10px;
      height: 100%;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;

      h1 {
        font-size: 20px;
      }

      .commodity_information {
        text-align: center;
        font-size: 20px;
        letter-spacing: 10px;
      }

      .GoodTab {

        // width: 920px;
        // height: 310px;
        td {
          padding: 20px 20px;
          width: 150px;
          text-align: center;
          border: 0.1px solid #ccc;
        }

        tbody tr:nth-child(1) {
          background: #222;
          color: #fff;
        }

        tbody tr:nth-child(n+2) {
          border: none;
        }

      }

      .PRODUCT {
        li {
          width: 280px;
          height: 50px;
          line-height: 50px;
          float: left;
          text-align: center;
          border-bottom: 1px solid #e7e7e7;
          margin-left: 20px;
          font-size: 14px;
          color: #ccc;
        }

        .bigimg {
          li {
            width: 100%;
            height: 600px;
            margin: 0 auto;
            overflow: hidden;
            margin-bottom: 20px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .packageURL {
          img {
            width: 100%;
          }
        }
      }
    }
  }

  .Notification {
    position: absolute;
    left: 50%;
    margin-top: 520px;
  }

  .select {
    ul {
      width: 100%;
      height: 70px;

      li {
        float: left;
        line-height: 40px;
        margin-right: 50px;
        padding: 0px 10px;
        border: 1px solid #ccc;
        cursor: pointer;
      }
    }
  }

  .select {
    dl {
      width: 100%;
      height: 70px;

      dt {
        float: left;
        font-size: 14px;
        line-height: 40px;
      }

      dd {
        float: left;
        line-height: 40px;
        margin-right: 5px;
        padding: 0px 10px;
        border: 1px solid #ccc;
        cursor: pointer;
      }
    }
  }

  .Select {
    background: #222;
    color: #fff;
  }

</style>
<style lang="scss">
  .mouse-cover-canvas{
    position: absolute !important;
    left: 920px !important;
    top:50px !important;
  }
</style>
