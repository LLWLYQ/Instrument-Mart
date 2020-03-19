<template>
  <div>
      <!-- <div class="logo">
        <a href="">
          <img src="../../assets/imges/register_logo.png" alt="">
          <p>一站式工业仪器仪表交易平台-买卖仪器仪表就上仪商城</p>
        </a>
      </div> -->
      <div class="main">
        <div class="con">
          <div class="main_register">
            <div class="mine">
              <div class="i-icon">
                <img src="../../assets/imges/logo.png" alt="" style="height:30px;">
              </div>
              <h2>登录账户</h2>
              <input type="text" v-model="username" placeholder="用户名"/>
              <input type="password" v-model="password" placeholder="密码"/>
              <button @click="login()" @mouseover="add()" @mouseout="del()" ref="btn">登录</button>
              <router-link to="/MemberRegistration"  target="_blank" tag="a">立即注册</router-link>
            </div>
            <div class="button">
              <!-- <h4>—————  其他登录方式  —————</h4>
              <a ><li><img src="../../assets/imges/zhi.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/wx.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/weibo.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/weibo.png" alt=""></li></a> -->
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Qs from 'qs';
import { mapMutations } from 'vuex';
import config from '../../config/config'
export default {
 data () {
    return {
        username: '',
        password: '',
        LF:false,
    };
  },
  created() {
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.login();// 登录方法名
         return false;
      }
    };
  },
  methods: {
    add(){
      this.$refs.btn.style.background = '#ddd'
      this.$refs.btn.style.color = '#000'
    },
    del(){
      this.$refs.btn.style.background = '#000'
      this.$refs.btn.style.color = '#fff'
            // this.$refs.btn.style.overflow = 'hidde'
      this.isRouterAlive = true
    },
    // ...mapMutations(['changeLogin']),
    login () {
          this.$ajax({
            url:config.baseUrl + '/home/user/login',
            method: 'post',
            data: {
              username:this.username,
              password:this.password,
            },

          }).then(res => {
            // console.log(res)
            localStorage.setItem("userId",res.data.data.member_id)
            localStorage.setItem("userName",res.data.data.account)
            localStorage.setItem("userToken",res.data.data.member_token)
            localStorage.setItem("userTime",res.data.data.expire_time)
            if(res.data.status == 'success'){
               this.$emit('closeLogin',this.LF)
               window.location.reload();
               console.log('kendingshixianfangpailiezaifidaqi a')
              //  const h = this.$createElement;
              //  this.$notify({
              //     title: '加入购物车成功',
              //     message: '商品已成功加入购物侧，欢迎选购其他商品',
              //     type: 'success',
              //     customClass:'Notification'
              //   });
              }
            })
      }
  }

}
</script>
<style lang="scss" scope>
@import "../../style/base.css";
  .logo{
    width: 1440px;
    margin: 0 auto;
    height: 36px;
    padding: 20px 0 70px;
    img{
      width: 150px;
      height: 50px;
      float: left;
    }
    p{
      float: left;
      line-height: 72px;
      margin-left: 10px;
      color:#000;
      font-size: 25px;
      font-family:"KaiTi",Georgia,Serif;
    }
  }
  .main{

    // background: url(../../assets/imges/register_main.jpg) center 0px / 1920px 802px no-repeat;
    width: 100%;
    height: 800px;
    overflow: hidden;
    margin: 0 auto;
    .con{
      width: 1440px;
      margin: 0 auto;
      .main_register{
        border:1px solid #ccc;
        width: 350px;
        height: 430px;
        background: #fff;
        float: right;
        // margin: 100px 200px 0 0;
        // position: relative;
        // left: -25%;
        .mine{
          position: absolute;
          top:20px;
          left: 25px;
          :nth-child(n+2){
            margin-top: 20px;
          }
          h2{
            font-family:"KaiTi",Georgia,Serif;
            font-size: 25px;
          }
          .el-icon-circle-close{
            font-size: 20px;
            float: right;
            margin: -10px 10px 0 0;
            cursor: pointer;
          }
          input{
          width: 300px;
          height: 45px;
          margin: 0 auto;
          text-indent:10px;
          border:1px solid #222;
          }
          button{
            display: block;
            width: 300px;
            height: 45px;
            background-color: #000;
            color:#fff;
            cursor: pointer;
            font-size:17px;
            // position:absolute;
            // top:50%;
            // left:50%;
            // transform:translate(-50% -50%);
            // font-family:"KaiTi",Georgia,Serif;
            // overflow:hidden;
          }
          a{
            color:red;
            float: right;
            font-size:16px;
            margin-right: 25px;
            line-height: 50px;
            z-index: 10000;
          }
        }
        .button{
          position: absolute;
          bottom: 30px;
          left:35px;
          font-size:16px;
          h4{
            text-align: center;
          }
          a{
            float: left;
            margin-top: 30px;
          }
          :nth-child(n+2){
                margin-right: 0;
                margin-left:25px;
            }
          .diudiu{
            position: absolute0;
            top:5%;
            left:5%;
          }
        }
      }
    }
  }
</style>
