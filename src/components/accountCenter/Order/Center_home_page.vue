<template>
  <div class="Center_home_page">
    <div class="Account_of_integral">
      <div class="Account">
        <div class="head_portrait">
          <div class="img">
            <img src="../../../assets/imges/timg.jpg" alt="">
          </div>
          <div class="message">
            <ul>
              <li>Max</li>
              <li>仪商值</li>
              <li>账户设置<i class="el-icon-caret-right"></i></li>
              <li>我的收货地址</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Integral">
        <div class="integral">
          <ul>
            <li><i class="el-icon-star-off" style="font-size:25px;"></i>&nbsp;&nbsp;:&nbsp;&nbsp;积分&nbsp;&nbsp;:&nbsp;&nbsp;123456</li>
            <li>我的信息&nbsp;&nbsp;:&nbsp;&nbsp;<i class="el-icon-chat-dot-round" style="font-size:25px;"></i></li>
          </ul>
        </div>
        <div class="right_image">
          <ul>
            <li>
              <img src="../../../assets/imges/timg.jpg" alt="">
            </li>
            <li>打我领星星</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indent">
      <div class="Logistics">
        <ul class="flow">
          <li><i class="el-icon-bank-card"></i><p>待付款</p></li>
          <li><i class="el-icon-message"></i><p>待收货</p></li>
          <li><i class="el-icon-chat-square"></i><p>待评价</p></li>
          <li><i class="el-icon-service"></i><p>退换\售后</p></li>
          <li><i class="el-icon-caret-right"></i><p>全部订单</p></li>
        </ul>
      </div>
      <div class="Od">
        <h1>点击上方按钮 请求对应商品接口</h1>
        <br />
        <h1>下方优惠券使用条件日期还有优惠金额可以随意修改</h1>
      </div>
    </div>
    <div class="discount_coupon">
      <ul>
        <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">10</span></li>
        <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">50</span></li>
        <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">80</span></li>
      </ul>
    </div>
    <div class="hst">
      <h3>您浏览过的商品</h3>
      <ul>
        <li><img src="../../../assets/imges/sp_1.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_2.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_3.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_4.jpg" alt=""><p>CHANEL(精致生活)</p></li>
      </ul>
    </div>
    <div class="recommend_ggods">
      <h3>给你推荐的商品</h3>
      <ul>
        <li><img src="../../../assets/imges/sp_1.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_2.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_3.jpg" alt=""><p>CHANEL(精致生活)</p></li>
        <li><img src="../../../assets/imges/sp_4.jpg" alt=""><p>CHANEL(精致生活)</p></li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Center_home_page{
  width: 1340px;
  height: 1000px;
  margin-left: 100px;
}
.Account_of_integral{
  height: 200px;
  width: 100%;
  .Account{
    height: 190px;
    width: 650px;
    border:1px solid #ccc;
    float: left;
  }
  // background-color:yellow;
  .head_portrait{
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin: 20px 0 0 50px;
      float: left;
      border:1px solid #ccc;
    }
    .message{
      float: left;
      margin-left: 40px;
      ul{
        height: 200px;
        padding: 40px 0;
        li{
          margin-bottom: 10px;
        }
      }
    }
  }
}
.Integral{
  height: 190px;
  width: 650px;
  border:1px solid #ccc;
  float: left;
  margin-left: 40px;
  .integral{
    ul{
      float: left;
      width: 300px;
      height: 200px;
      padding:40px 0 0 50px;
      li{
        height: 80px;
      }
    }
  }
  .right_image{
    float: left;
    width: 300px;
    height: 200px;
    padding:10px 0 0 50px;
    li{
      text-align: center;
      img{
        width: 130px;
        height: 130px;
      }
    }
    // li:nth-child(2){
    //   margin-left: 40px;
    // }
  }
}
.indent{
  height: 500px;
  width: 100%;
  .Logistics{
    ul{
      height: 100px;
      width: 100%;
      padding-top: 10px;
      li{
        float: left;
        width: 20%;
        text-align: center;
        cursor: pointer;

        i{
          font-size: 50px;
        }
        i:hover{
            color:#e94c15;
          }
      }
    }
  }
  .Od{
    height: 400px;
    width: 100%;
    background: yellow;
  }
}
.discount_coupon{
  width: 100%;
  margin-top: 30px;
  overflow: hidden;
  li{
    float: left;
    width: 400;
    margin-left: 15px;
    border:1px solid #ccc;
    position: relative;
    img{
      width: 400px;
      height: 200px;
      margin-left: 20px;
    }
    .Describe{
      position: absolute;
      font-size: 12px;
      top:100px;
      left: 50px;
      text-align: center;
    }
    .Cash{
      position: absolute;
      font-size: 40px;
      font-weight: bold;
      top:85px;
      right: 50px;
      text-align: center;
    }
  }
}
.hst{
  height: 300px;
  width: 100%;
  // background-color:yellow;
  margin-top: 20px;
  h3{
    margin-bottom: 20px;
  }
  ul{
    width: 100%;
    overflow: hidden;
    li{
      float: left;
      width: 320px;
      height: 300px;
      text-align: center;
      padding-top: 25px;
      border:1px solid #E6E6E6;
      margin-left: 10px;
      img{
        height: 220px;
        width: 250px;
      }
      p{
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }
}
.recommend_ggods{
  height: 300px;
  width: 100%;
  // background-color:yellow;
  margin-top: 70px;
  h3{
    margin-bottom: 20px;
  }
  ul{
    width: 100%;
    li{
      width: 320px;
      float: left;
      height: 300px;
      text-align: center;
      padding-top: 25px;
      border:1px solid #E6E6E6;
      margin-left: 10px;
      img{
        height: 220px;
        width: 250px;
      }
      p{
        margin-top: 10px;
        font-size: 18px;
      }
    }
  }
}
</style>
