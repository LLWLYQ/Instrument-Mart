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
              <li>{{userName}}</li>
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
          <el-tabs v-model="activeName" @tab-click="handleClick"  :stretch='true' >
            <el-tab-pane label="代付款" name="first" style="width:272.5px;">
              <div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="second" style="width:272.5px;">
              <div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="third" style="width:272.5px;">
              <div>

              </div>
            </el-tab-pane>
            <el-tab-pane label="全部订单" name="five" style="width:272.5px;">
              <div>

              </div>
            </el-tab-pane>
          </el-tabs>
        </ul>
      </div>
      <div class="Od">
      </div>
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
import config from '../../../config/config'
export default {
  data() {
    return {
       activeName: 'second',
       userName:localStorage.getItem('userName')
    }
  },
  methods: {
      handleClick(tab, event) {
      }
  },
  components: {

  },
  created(){
    this.$emit('public_footer', true);
    this.$ajax({
      url:config.baseUrl + '/home/order',
      method:'get',
      params:{
        member_id:localStorage.getItem("userId")
      }
    }).then(res=>{
    })
    this.$ajax({
      url:config.baseUrl + '/home/score',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId')
      }
    }).then(res=>{
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
// .el-tabs__item {
//   width: 272px;
// }
.Center_home_page{
  width: 1090px;
  margin-left: 100px;
}
.Account_of_integral{
  height: 200px;
  width: 180;
  .Account{
    height: 190px;
    width: 520px;
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
  width: 520px;
  border:1px solid #ccc;
  float: left;
  margin-left: 50px;
  .integral{
    ul{
      float: left;
      width: 180px;
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
    // border-bottom: 1px solid #ccc;
    ul{
      height: 70px;
      width: 100%;
      padding-top: 10px;
      li{
        float: left;
        width: 20%;
        text-align: center;
        cursor: pointer;

        i{
          font-size: 40px;
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
    // background: yellow;
  }
}
.hst{
  height: 300px;
  width: 100%;
  // background-color:yellow;
  margin-top: 20px;
  h3{
    margin-bottom: 20px;
    font-size: 18px;
  }
  ul{
    width: 100%;
    overflow: hidden;
    li{
      float: left;
      width: 250px;
      height: 280px;
      text-align: center;
      padding-top: 25px;
      border:1px solid #E6E6E6;
      img{
        height: 200px;
        width: 248px;
      }
      p{
        margin-top: 10px;
        font-size: 18px;
      }
    }
    li:nth-child(n+2){
      margin-left:30px;
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
    font-size: 18px;
  }
  ul{
    width: 100%;
    li{
      width: 250px;
      height: 280px;
      text-align: center;
      padding-top: 25px;
      border:1px solid #E6E6E6;
      float: left;
      img{
        height: 200px;
        width: 248px;
      }
      p{
        margin-top: 10px;
        font-size: 18px;
      }
    }
    li:nth-child(n+2){
      margin-left:30px;
    }
  }
}
</style>
