<template>
  <div>
    <div class="logo">
        <a href="">
          <img src="../../assets/imges/register_logo.png" alt="">
          <p>一站式工业仪器仪表交易平台-买卖仪器仪表就上仪商城</p>
        </a>
      </div>
      <div class="main">
        <div class="con">
          <div class="main_register">
            <div class="mine">
              <h2>登录账户</h2>
              <p v-show="error"><i class="el-icon-s-opportunity"></i>登录名或登录密码不正确</p>
              <input type="text" v-model="username" placeholder="用户名"/>
              <input type="password" v-model="password" placeholder="密码"/>
              <button @click="login()" @mouseover="add()" @mouseout="del()" ref="btn">登录</button>
              <router-link to="/MemberRegistration">立即注册</router-link>
            </div>
            <div class="button">
              <h4>—————  其他登录方式  —————</h4>
              <a ><li><img src="../../assets/imges/zhi.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/wx.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/weibo.png" alt=""></li></a>
              <a ><li><img src="../../assets/imges/weibo.png" alt=""></li></a>
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
import store from '../../store'
export default {
 data () {
    return {
        username: '',
        password: '',
        error:false
    };
  },
  created() {
    
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      // var thisdkeyvalue = document.temt ? $ever.keyCode.d : e.wathck
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
    },
    // ...mapMutations(['changeLogin']),
    login () {
    //   let _this = this;
    //   if (this.loginForm.username === '' || this.loginForm.password === '') {
    //     alert('账号或密码不能为空');
    //   } else {
          this.$ajax({
          // headers: {
          //   'Content-Type':'application/json'
          // },
            url:config.baseUrl + '/home/user/login',
            method: 'post',
            data: {
              username:this.username,
              password:this.password
            },

          }).then(res => {
            if(res.data.code ==20000){
              localStorage.setItem("userId",res.data.data.member_id)
              localStorage.setItem("userName",res.data.data.account)
              localStorage.setItem("userToken",res.data.data.member_token)
              localStorage.setItem("userTime",res.data.data.expire_time)
              store.state.bAuth = true
            }else{
              this.error = true
            }
            if(res.data.status == 'success'){
                
                localStorage.setItem("lastTime",new Date().getTime());
                this.$router.go(-1)
              }
            })
        // .catch(error => {
        //   alert('账号或密码错误');
        //   console.log(error);
        // });
      // }
    }
  },
  mounted(){
    store.state.bAuth = false
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/base.css";
// color: #D64848;
  .logo{
    width: 1440px;
    margin: 0px auto ;
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
    background: url(../../assets/imges/register_main.jpg) center 0px / 1920px 802px no-repeat;
    width: 100%;
    height: 800px;
    overflow: hidden;
    margin: 0 auto;
    .con{
      width: 1440px;
      margin: 0 auto;
      .main_register{
        width: 350px;
        height: 430px;
        background: #fff;
        float: right;
        margin: 100px 200px 0 0;
        position: relative;
        .mine{
          position: absolute;
          top:20px;
          left: 25px;
          :nth-child(n+2){
            margin-top: 17px;
          }
          h2{
            font-size: 16px;
          }
          p{
            width: 300px;
            height: 30px;
            line-height: 30px;
            background-color: #fef2f2;
            border-color: #ffb4a8;
            border: 1px solid #ff934c;
            i{
              color:#ce201e;
              margin-left: 5px;
            }
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
            font-size:12px;
            margin-right: 25px;
          }
        }
        .button{
          position: absolute;
          bottom: 30px;
          left:62.5px;
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
            position: absolute;
            top:5%;
            left:5%;
          }
        }
      }
    }
  }
</style>
