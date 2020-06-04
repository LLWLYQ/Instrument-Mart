<template>
  <div class="Header">
      <div class="LoginForm" v-if="LF">
        <i class="el-icon-circle-close" @click="closeLF()"></i>
        <LoginForm style="width:100%;height:100%;" v-on:closeLogin='closeLogin'></LoginForm>
      </div>
      <div class="over" v-if="LF" @click="closeLF()"></div>
     <div class="TT">
      <div class="top">
          <div class="comment">
            <ul class="top_left">
              <router-link to="" ><li>网站导航</li></router-link>
              <router-link to="/register"  v-if="!UserName"><li>请登录</li></router-link>
              <router-link to="" ><li>服务中心</li></router-link>
              <router-link to="" v-if="UserName"><li>Hi,{{UserName}}</li></router-link>
              <!-- <router-link to=""><li>商家中心</li></router-link> -->
              <router-link to="/Center_home_page" target="_blank" tag="a"><li>商家中心</li></router-link>
              <router-link to="" v-if="UserId"><li @click="DelUser()">退出</li></router-link>
              <router-link to="/MemberRegistration" target="_blank" tag="a" v-if="!UserId"><li>免费注册</li></router-link>
              <router-link to="/StoresRegistered" target="_blank" tag="a" v-if="Cs"><li>申请入驻</li></router-link>
            </ul>
            <ul class="top_right">
              <router-link to=""><li>手机仪商</li></router-link>
              <a style="cursor:pointer;" @click="GoCart()"><li><i class="el-icon-shopping-cart-2" style="font-weight:bold;color:#e94c15;" ></i>购物车</li></a>
              <router-link to="/Favorite" target="_blank"><li><i class="el-icon-star-on" style="font-size:12px;margin-top:px;"></i>收藏夹</li></router-link>
              <router-link to=""><li>我的仪商</li></router-link>
              <router-link to=""><li>我的订单</li></router-link>
            </ul>
          </div>
        </div>
      </div>
      <div class="clearfloat" ></div>
  </div>
</template>
<script>
import LoginForm from '../../components/LoginForm/LoginForm'
import config from '../../config/config';
export default {
  data () {
    return {
      UserId:localStorage.getItem('userId'),
      LF:false,
      UserName:localStorage.getItem('userName'),
      IfUserName:'',
      Cs:''
    }
  },
  methods: {
    DelUser(){
      localStorage.clear();
      setTimeout(()=>{
        this.$router.push('/register')
      },500)
    },
     closeLF(){
       this.LF = false
     },
     GoCart(){
      if(!this.UserId){
        this.LF = true
      }else{
        this.LF = false
        if(this.UserId){
          this.$router.push({
              path:'/cart'
            })
        }
      }

    },
    closeLogin(closeLogin){
      this.LF = closeLogin
    },
  },
  components:{
    LoginForm
  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/user/info',
      method:'post',
      data:{
        member_id:localStorage.getItem("userId")
      }
    }).then(res=>{
      this.Cs = res.data.data.company_status
    })
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
.TT{
  background: #e3e4e5;
  width: 100%;
  height: 30px;
  position:absolute;
  z-index:50;
  top: 0px;
  // background-color:#fff
}
.top{
    margin:0 auto;
    height:30px;
    background-color:#e3e4e5;
    border-bottom: 1px solid #ddd;
    width:1230px;
    .top_left{
      width:500px;
      float: left;
      color:red;
      :nth-child(n+2){
          margin-left:20px;
        }
      a{
        float: left;
        color:black;
        padding-top:5px;
        font-size:14px;
        font-weight: bold;
      }
      a:hover{
        color: #e94c15;
      }
    }
    .top_right{
      width:700px;
      float: right;
      color:red;
      :nth-child(n+2){
          margin-right:30px;
        }
      a{
        float: right;
        color:black;
        padding-top:5px;
        font-size:14px;
        font-weight: bold;
      }
       a:hover{
        color: #e94c15;
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
</style>
