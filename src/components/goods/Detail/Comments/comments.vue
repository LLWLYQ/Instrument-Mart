<template>
  <div class="comments" style="background:#F5F5F5;">
    <div class="content_container">
      <div class="LoginForm" v-if="LF">
        <i class="el-icon-circle-close" @click="closeLF()"></i>
        <LoginForm style="width:100%;height:100%;" v-on:closeLogin='closeLogin'></LoginForm>
      </div>
      <div class="over" v-if="LF" @click="closeLF()"></div>
      <div class="Shinetop">
        <div class="big_shinetop">
          <ul class="tabImages">
            <!-- v-show="iscur==index"
            v-for="(TI,index) in tebImg" :key="index"
            @mouseover="tabChange(index)" -->
            <li>
              <img src="../../../../assets/imges/sp_5.jpg" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="SKU">
        <div class="db-icbu">
          <ol class="ui-form-bd">
            <li class="ui-form-row">
              <label class="ui-form-label">
                <h3 data-spm-anchor-id="0.0.0.i1.4c0a11937kszMI">菊花枸杞决明子茶养肝茶包清肝茶去肝火排肝毒明目护眼茶护肝排毒</h3>
              </label>
            </li>
            <li class="ui-form-row superstar-price">
              <label class="ui-form-label">价格</label>
              <div class="ui-form-right"> <strong
                  style=" font-size: 27px;vertical-align: top;font-weight: 700;color: #c00;">228.00</strong>
                <span></span>
                元
              </div>
            </li>
            <li class="ui-form-row">
              <label class="ui-form-label">配送</label>
              <div class="ui-form-right">快递:&nbsp;0.00</div>
            </li>
            <li class="ui-form-row evalate">
              <label class="ui-form-label">评价</label>
              <div class="ui-form-right"> <em class="superstar-tb-star" id="superstar-ratestar"><em>
                <i style="width: 57.6px;">
                  <el-rate
                    v-model="value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </i></em>
                  <span>分</span></em>
                <span>累计评价<span class="superstar-ratetotal">3421</span> )</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="comment">
        <!-- <div class="comment_left">
        </div> -->
        <div class="comment_right">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="累计评价" name="second">
              <div class="form">
                <div class="compose-header" style="position: relative;padding: 25px 0 30px 5%;">
                  <span>其他买家，需要你的建议哦！</span>
                </div>
                <div class="Text">
                  <div class="OrderRate">
                    <div class="OL">
                      <span>评价商品</span>
                    </div>
                    <div class="OR">
                      <textarea name="" id="" cols="30" rows="10" v-model="notedata">
                      </textarea>
                    </div>
                  </div>
                  <div style="clear:both"></div>
                  <!-- <div class="serve">
                    <div class="SL">
                      <span>评价服务</span>
                    </div>
                    <div class="SR">
                      <textarea name="" id="" cols="30" rows="10">
                      </textarea>
                    </div>
                  </div> -->
                </div>
                <div class="submit">
                  <span>
                    <button @click="submit()">
                      提交评价
                    </button>
                  </span>
                </div>
                <div class="StarLevel">
                  <p><span>*</span><span>商品评分</span></p>
                  <div class="block">
                    <el-rate v-model="value1" :colors="colors"></el-rate>
                  </div>
                </div>
              </div>
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
  import LoginForm from '../../../LoginForm/LoginForm'
  import quantity from '../Quantity/quantity';
  import {
    mapGetters
  } from 'vuex'
  import config from '../../../../config/config'
  export default {
    data() {
      return {
        activeName: 'second',
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
        value: 4.8,
        value1: null,
        colors: ['#99A9BF', '#F7BA2A', '#dd2727'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        notedata:''
      }
    },
    computed: mapGetters([
      'count'
    ]),
    methods: {
      //提交评论
      submit(){
        if(this.notedata && this.value1){
          this.$ajax({
          url:config.baseUrl + '/home/comment',
          method:'post',
          data:{
            comment_type:0,
            id_value:3,
            shop_id:4,
            email:'',
            user_name:localStorage.getItem('userName'),     
            content:this.notedata,
            comment_rank:this.value1,
            ip_address:'1583913258',
            parent_id:0,
            user_id:localStorage.getItem('userId')
          }
        }).then(res=>{
          if(res.data.code == 20000){
            this.$alert('评价提交成功', '', {
              confirmButtonText: '确定',
              callback: action => {
               this.$router.push({
                  path:'/'
                })
              }
            });
          }
        })
      }else{
        this.$alert('请填写完再提交', '', {
          confirmButtonText: '确定',
        });
      }
      },
      //累计评论
      handleClick(tab, event) {
        // console.log(this.title)
      },
      select(index) {
        this.isSelect = index
      },
      closeLF() {
        this.LF = false
      },
      tabChange(index, event) {
        this.iscur = index
      },
      addToShopCar() {
        if (this.UserId) {
          this.$ajax({
            url: config.baseUrl + '/home/cart/add',
            method: 'post',
            data: {
              goods_id: this.Infos.goods_id,
              member_id: localStorage.getItem('userId'),
              option: [],
              quantity: this.num
            }
          }).then(res => {
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
        } else {
          this.LF = true
        }
      },
      Change(data) {
        this.num = data
        // console.log('gaiyoudeyuaanyunhaishi zhecaishijixianhuanjingxiashengcun87&*')
      },
      closeLogin(closeLogin) {
        this.LF = closeLogina
      }
    },
    created() {
      this.$ajax({
        url: config.baseUrl + '/home/goods/' + this.detailID,
        methods: 'post',
      }).then(res => {
        this.Infos = res.data.data.result
        this.title = this.Infos.goods_name
        // console.log(this.Infos)
        // console.log(this.title)
        this.goods_option = this.Infos.goods_option
        // console.log(this.goods_option)
        this.brandId = this.Infos.goods_id
        this.tebImg = res.data.data.result.piclist
        this.pictUrl = config.baseUrl + this.tebImg[0].files_path
        this.name = this.Infos.goods_name
        this.price = this.Infos.sales_price
        // this.DiscountPrice =  this.Infos
      })
      this.$ajax({
        url:config.baseUrl + '/home/comment',
        methods:'get',
        params:{
          member_id:'',
          title:'',
          goods_id:this.detailID,
        }
      }).then(res=>{
        this.reviewData = res.data.data.items.data
      })
    },
    components: {
      quantity,
      LoginForm
    }
  }
</script>
<style scoped lang="scss">
  @import "../../../../style/common.css";
  .content_container{
    margin-top: 30px;
  }
  .el-rate{
    float: left;
  }
  // #tab-first {
  //   width: 150px;
  //   text-align: center;
  //   border-right: 1px solid #ccc;
  // }

  // #tab-second {
  //   width: 150px;
  //   text-align: center;
  // }

  // .el-tabs__header {
  //   margin: 0;
  //   border-left: 1px solid #ccc;
  //   border-right: 1px solid #ccc;
  //   border-top: none;
  // }

  .el-tabs__nav {
    border-right: 1px solid #ccc;
  }

  .rate-grid {
    width: 100%;
    table-layout: fixed;
    border-top:1px solid #ccc;
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      tr {
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;

        .tm-col-master {
          width: 494px;
          padding-right: 30px;

          .tm-rate-content {
            color: #333;
            word-wrap: break-word;
            word-break: break-all;
            line-height: 19px;
            overflow: hidden;

            .tm-m-photos {
              zoom: 1;

              .tm-m-photos-thumb {
                margin: 10px 0;
                list-style-type: none;
                height: 40px;
              }
            }
          }
        }

        .col-meta {
          width: 135px;
          color: #999;
        }

        .col-author {
          padding-right: 0;
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

  #Detail {
    margin-top: 30px;
  }

  .Shinetop {
    width: 460px;
    height: 540px;
    position: relative;
    float: left;

    .big_shinetop {
      ul {
        li {
          position: absolute;
          height: 460px;
          width: 460px;
          // padding: 0px 20px 20px 20px;

          // border:1px solid #ccc;
          img {
            width: 100%;
            height: 100%;
            border: 1px solid rgba(0, 0, 0, .05);
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
      }

      li {
        width: 60px;
        height: 60px;
        float: left;
        margin: 0 10px;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .SKU {
    // margin-top: 30px;
    .db-icbu {
      width: 526px;
      height: 462px;
      // margin-left: 463px;
      border-top: 1px solid #e7e7e7;
    }

    .db-icbu .ui-form-row {
      margin-bottom: 15px;
      overflow: hidden;

      .ui-form-label {
        float: left;
        color: #999;
      }

      .ui-form-right {
        margin-left: 70px;
        color: #666;
      }
    }

    .db-icbu .ui-form-row {
      margin-bottom: 15px;
      overflow: hidden;

      .ui-form-label {
        float: left;
        color: #999;
      }

      .ui-form-right {
        margin-left: 70px;
        color: #666;
      }
    }

    .ui-form-bd {
      display: block;
      padding: 15px 19px 19px 19px;
      min-height: 160px;

      .ui-form-row {
        margin-bottom: 15px;
        overflow: hidden;

        .ui-form-label {
          float: left;
          color: #999;

          h3 {
            padding: 3px 0;
            color: #000;
            font-size: 16px;
            vertical-align: top;
          }
        }
      }
    }

    .superstar-price {
      height: 27px;
      line-height: 27px;

      .ui-form-label {
        float: left;
        color: #999;
      }

      .ui-form-right {
        margin-left: 70px;
        color: #666;
      }
    }

    .buy {
      width: 100%;
      height: 100px;
      line-height: 100px;
      position: relative;

      span {
        cursor: pointer;
      }

      span:nth-child(1) {
        background-color: #dd2828;
        color: #fff;
        padding: 10px 60px;
        margin-left: 100px;
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
      width: 990px;
      // margin-left: 10px;
      height: 100%;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      .form{
        width: 980px;
        height: 366px;
        border: 1px solid #d1ccc8;
        margin: 5px 0 10px 0;
        background: #f6f6f6;
        .submit{
          position: relative;
          padding: 10px 0;
          height: 27px;
          text-align: center;
          span{
            float: left;
            text-align: center;
            border-radius: 2px;
            background-color: #c40000;
            padding: 0;
            margin-left: 430px;
            button{
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
        .StarLevel{
          position: absolute;
          top:160px;
          right: 150px;
          p{
            float: left;
            line-height: 23px;
          }
          p span:nth-child(1){
            color:red;
          }
          p span:nth-child(2){
            margin-left: 3px;
            font-size: 13px;
          }
          .block{
            float: left;
            margin-left: 10px;
            i{
              font-size: 23px;
            }
          }
        }
        .compose-header{
          span{
            font-weight: 600;
            font-size: 18px;
          }
        }
        .Text{
          width: 509px;
          height: 191px;
          border:1px solid #ccc;
          margin-left: 40px;
          margin-bottom: 30px;
          .OrderRate{
            width: 100%;
            border-bottom: 1px solid #E7E7E7;
          }
          .serve{
            width: 100%;
          }
          .OL{
              line-height: 188px;
              height: 188px;
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
          .SL{
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
          .OR{
            height: 189px;
            width: 446px;
            position: relative;
            float: left;
            padding: 10px 9px 0;
            background: #fff;
            border-bottom:1px solid #E7E7E7;
            textarea{
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
          .SR{
            height: 70px;
            width: 446px;
            position: relative;
            padding: 10px 9px 0;
            float: left;
            background: #fff;
            textarea{
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

  .Select {
    background: #222;
    color: #fff;
  }
</style>
