<template>
  <div class="SalesReturn">
    <hc></hc>
    <div class="mine">
      <div class="mine_top">
        <div class="top">
          <div class="top_img">
            <img src="../../../../assets/imges/logo.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="top">
        <p><span class="adrr">您的位置： 首页> 会员中心> 已买到的宝贝</span><span class="hot">服务热线：400-086-1718</span></p>
        <ul>
          <li><span class="num">1</span><span>买家申请仅退款</span></li>
          <img src="//img.alicdn.com/tps/TB1ZnmQNpXXXXX3XXXXXXXXXXXX-63-114.png" alt="">
          <li><span class="num">2</span><span>卖家处理退款申请</span></li>
          <img src="//img.alicdn.com/tps/TB1CuunNpXXXXaZXVXXXXXXXXXX-63-114.png" alt="">
          <li><span class="num">3</span><span>退款完毕</span></li>
        </ul>
      </div>
      <div class="frame">
        <div class="frame-left">
          <div class="Return-of-the-goods">
            <div class="Return-of-the-goods-left">
              <p>退款商品：</p>
            </div>
            <div class="Return-of-the-goods-right">
              <img :src="baseUrl+goodsData.files_path" alt="">
              <p>{{goodsData.name}}</p>
            </div>
          </div>
          <div class="reason-for-return">
            <div class="reason-for-return-left">
              <p>退款原因：</p>
            </div>
            <div class="reason-for-return-right">
              <el-radio v-model="radio" label="拍错不想要" ></el-radio>
              <el-radio v-model="radio" label="不发货" ></el-radio>
              <el-radio v-model="radio" label="缺货" ></el-radio>
              <el-radio v-model="radio" label="发票问题" ></el-radio>
              <el-radio v-model="radio" label="没有卖家协商好" ></el-radio>
            </div>
          </div>
          <div class="refund-amount">
            <div class="refund-amount-left">
              <p>退款金额：</p>
            </div>
            <div class="refund-amount-right">
              <input type="text" name="" :value="'￥'+goodsData.total/100" id="" readonly="readonly">
            </div>
          </div>
          <div class="Refund-instructions">
            <div class="Refund-instructions-left">
              <p>退款说明：</p>
            </div>
            <div class="Refund-instructions-right">
              <el-input type="textarea" :rows="6" placeholder="退款说明" v-model="textarea">
              </el-input>
            </div>
          </div>
          <div class="Picture-refund">
            <div class="Picture-refund-left">
              <p>上传图片：</p>
            </div>
            <div class="Picture-refund-right">
              <el-upload class="avatar-uploader" action="http://shop.yishangm.com/home/files/refund" :show-file-list="false"
                :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" style="border:1px solid #ccc;">
                <i v-else class="el-icon-plus avatar-uploader-icon" style="border:1px solid #ccc;"></i>
              </el-upload>
            </div>
          </div>
          <div class="sub">
            <p><span @click="submit()">提交申请</span></p>
          </div>
        </div>
        <div class="frame-right">
          
        </div>
      </div>
    </div>
    <Foot></Foot>
  </div>
</template>

<script type="text/javascript">
  import HeaderCOPY from '../../../Header/HeaderCOPY'
  import HomeSerach from '../../../home_child/home_serach'
  import Foot from '../../../Foot/Foot'
  import config from '../../../../config/config'
  export default {
    data() {
      return {
        radio: '拍错不想要',
        textarea: '',
        goodsData:JSON.parse(this.$route.query.goods),
        orderData:JSON.parse(this.$route.query.orderData),
        baseUrl:config.baseUrl,
        imageUrl:''
        // order_id
        // store_id
        // member_id
        // member_name
        // goods_name
        // goods_price
        // goods_num
        // refund_amount 退款金额
      }
    },
    methods: {
      handleAvatarSuccess(res, file) {
        console.log(res,file)
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        let arr = ['image/jpeg', 'image/png', 'image/bmp'];
        var rs = arr.find(function (value) {
          if (value === file.type) {
            return true
          } else {
            return false
          }
        })
        if (!rs) {
          rs = false
          this.$message.error('上传头像图片只能是 JPG、PNG、BMP 格式!');
        }

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        //return isJPG && isLt2M;
        return rs && isLt2M;
      },
      submit(){
        this.$ajax({
          url:config.baseUrl + '/home/refund_member',
          method:"post",
          data:{
            goods_id:0,
            order_goods_id:0,
            order_id:this.goodsData.order_id,
            store_id:this.goodsData.shop_id,
            member_id:localStorage.getItem("userId"),
            member_name:localStorage.getItem("userName"),
            goods_name:this.goodsData.name,
            goods_price:this.goodsData.price,
            goods_num:this.goodsData.quantity,
            refund_amount:this.goodsData.total,
            refund_type:2,
            reason_info:this.radio,
            buyer_message:this.textarea,
            pic_info:''
            // goods_state:this.orderData.status,
            // order_sn:'',

          }
        }).then(res=>{
          console.log(res)
        })
      }
    },
    components: {
      'hc': HeaderCOPY,
      HomeSerach,
      Foot
    },
    created() {
      console.log(this.orderData)
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../../style/common';

  .mine {
    margin-bottom: 10px;

    .mine_top {
      width: 990px;
      margin: 0 auto;

      // border-bottom:3px solid #e94c15;
      // background:#e94c15;
      .top {
        height: 95px;
        position: relative;
        width: 990px;
        margin: 30px auto 0 auto;
        // border-bottom: 1px solid #c8baaa;

        // line-height: 95px;
        img {
          height: 55px;
          width: 160px;
          float: left;
          margin-top: 25px;
          background: #fff;
        }

        h1 {
          float: left;
          font-size: 20px;
          line-height: 95px;
        }

        .Search_Goods {
          right: 0;
          position: absolute;
          top: 28px;

          .el-button {
            background: #e94c15;
          }
        }
      }
    }
  }

  .center {
    width: 990px;
    margin: 0 auto;
    min-height: 1000px;

    .top {
      overflow: hidden;

      p {
        height: 40px;
        line-height: 40px;

        .hot {
          float: right;
          margin-right: 5px;
        }
      }

      ul {
        li {
          height: 38px;
          width: 316px;
          background: #ccc;
          float: left;
          text-align: center;
          line-height: 38px;
          color: #fff;
          position: relative;

          span {
            font-size: 14px;
          }

          .num {
            display: block;
            width: 20px;
            height: 20px;
            font-size: 14px;
            font-weight: bold;
            line-height: 20px;
            border-radius: 50%;
            background: #fff;
            // color:#dd2727;
            color: #ccc;
            position: absolute;
            left: 81px;
            top: 9px;
          }
        }

        img {
          display: block;
          float: left;
          height: 38px;
          width: 21px;
        }
      }

      ul li:nth-child(1) {
        background: #dd2727;

        .num {
          color: #dd2727;
        }
      }
    }

    .frame {
      width: 990px;
      height: 700px;
      border: 1px solid #ccc;
      margin-top: 10px;

      .frame-left {
        width: 750px;
        height: 100%;
        border-right: 1px solid #ccc;
        padding-top: 20px;

        .Return-of-the-goods {
          width: 100%;
          height: 76px;

          .Return-of-the-goods-left {
            height: 76px;
            width: 134px;
            padding-top: 15px;
            float: left;

            p {
              float: right;
              font-size: 14px;
            }
          }

          .Return-of-the-goods-right {
            margin-left: 10px;
            float: left;

            img {
              width: 76px;
              height: 76px;
              float: left;
            }

            p {
              float: left;
              margin: 0px 0 0 10px;
              width: 500px;
              font-size: 14px;
            }
          }
        }

        .reason-for-return {
          width: 100%;
          height: 200px;
          padding: 20px 0;

          .reason-for-return-left {
            height: 76px;
            width: 134px;
            padding-top: 15px;
            float: left;

            p {
              float: right;
              font-size: 14px;
            }
          }

          .reason-for-return-right {
            width: 100px;
            float: left;
            margin: 18px 0 0 10px;

            .el-radio {
              margin-bottom: 10px;
            }
          }
        }

        .refund-amount {
          width: 100%;
          height: 50px;

          // padding:20px 0;
          .refund-amount-left {
            height: 30px;
            width: 134px;
            padding-top: 15px;
            float: left;

            p {
              float: right;
              font-size: 14px;
            }
          }

          .refund-amount-right {
            padding: 13px 0 0 10px;
            input {
              margin-left: 10px;
              border: 1px solid #ccc;
              height: 25px;
              line-height: 25px;
              padding-left: 10px;
              color: #dd2727;
            }
          }
        }

        .Refund-instructions {
          width: 100%;
          height: 150px;

          .Refund-instructions-left {
            height: 76px;
            width: 134px;
            padding-top: 15px;
            float: left;

            p {
              float: right;
              font-size: 14px;
            }
          }

          .Refund-instructions-right {
            width: 500px;
            float: left;
            padding: 15px 0 0 10px;
          }
        }
         .Picture-refund {
          width: 100%;
          height: 150px;

          .Picture-refund-left {
            height: 76px;
            width: 134px;
            padding-top: 15px;
            float: left;

            p {
              float: right;
              font-size: 14px;
            }
          }

          .Picture-refund-right {
            width: 500px;
            float: left;
            padding: 15px 0 0 10px;
            .avatar-uploader .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
              }

              .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
              }

              .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 120px;
                height: 120px;
                line-height: 120px;
                text-align: center;
              }
          }
        }
        .sub{
          p{
            height: 40px;
            line-height: 40px;
            text-align: center;
            span{
              background: #d30d0d;;
              color:#fff;
              padding:10px 20px;
              border-radius: 3px;
              cursor: pointer;
            }
          }
        }
      }
    }
  }

</style>
<style lang="scss">

</style>
