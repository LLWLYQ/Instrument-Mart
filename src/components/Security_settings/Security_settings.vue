<template>
  <div class="Security_settings">
    <div class="YSC_top">
      <div class="YSC_mine">
        <img src="../../assets/imges/logo.png" alt="">
        <p>账户安全</p>
      </div>
    </div>
    <div class="content_container">
      <div class="settings_top">
        <ul>
          <li>
            <p>
              <i class="el-icon-setting"></i>
              <span>安全设置</span>
              <span>密码更改</span>
              <span>手机绑定</span>
              <span>邮箱绑定</span>
            </p>
          </li>
        </ul>
      </div>
      <div class="mine">
        <ul>
          <li>
            <p><i class="el-icon-document-checked"></i></p>
            <p class="One_C">登录密码<br><span>定期更换密码有助于账号安全</span></p>
            <p class="but"><span>修改登录密码</span></p>
          </li>
          <li>
            <p><i class="el-icon-mobile-phone"></i></p>
            <p class="One_C">手机号<br><span>15277748256</span></p>
            <p class="but"><span>修改手机号码</span></p>
          </li>
          <li>
            <p><i class="el-icon-message"></i></p>
            <p class="One_C">邮箱<br><span>设置邮箱有助于您的账号易用</span></p>
            <p class="but"><span>修改绑定邮箱</span></p>
          </li>
        </ul>
      </div>
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
@import '../../style/common';
.YSC_top{
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  margin-top: -20px;
  background: #fff;
  .YSC_mine{
    width: 1440px;
    margin: 0 auto;
    height: 120px;
    img{
      margin-top: 20px;
      float: left;
    }
    p{
      float: left;
      font-size: 35px;
      margin: 35px 0 0 20px;
    }
  }
}
.Security_settings{
  background: #e6e6e6;
  height: 800px;
  // margin-top: 50px;
  padding-top:50px;
  .settings_top{
    height: 150px;
    width: 100%;
    background: #fff;
    ul{
      li{
        p{
          // margin-left: 20px;
          padding:35px 0 0 50px;
          i{
            font-size: 80px;
            float: left;
            overflow: hidden;
            cursor: pointer;
          }
          span{
            font-size: 30px;
            margin-top: 20px;
            // font-weight: bold;
            // position: absolute;
            // left: 150px;
            // top:50px;
            overflow: hidden;
            cursor: pointer;

          }
          span:hover{
              color:#e94c15;
            }
        }
        p span:nth-child(n+3){
          float: right;
          width: 300px;
        }
        p span:nth-child(2){
          float: left;
          margin-left: 20px;
        }
      }
    }
  }
}
.mine{
  margin-top: 20px;
  height: 300px;
  // background:#e6e6e6;
  ul{
    li{
      background: #fff;
      height: 350px;
      width: 450px;
      float: left;
      text-align: center;
      p{
        margin-top: 30px;
        i{
          font-size: 80px;
        }
      }
      .One_C{
        font-size:24px;
        span{
          font-size: 16px;
        }
      }
      .but{
        font-size: 20px;
        span{
          border:1px solid #999;
          padding:5px 20px;
          cursor: pointer;
        }
        span:hover{
          color:#e94c15;
          border-color: #e94c15;
        }
      }
    }
    li:nth-child(n+2){
      margin-left: 45px;
    }
  }
}
</style>
