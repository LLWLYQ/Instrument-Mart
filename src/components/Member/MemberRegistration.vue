<template>
  <div class="MemberRegistration">
    <div class="content_container">
      <div class="mine">
        <div class="content">
          <div class="register">
            <div class="user">
              <span >用&nbsp;&nbsp;户&nbsp;&nbsp;名:</span>
              <input type="text" v-model="user" @change="User(user)">
              <p v-if="!Userp">请输入用户名</p>
            </div>
            <div class="passw">
              <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
              <input type="password" v-model="password">
              <p>请输入密码</p>
            </div>
            <div class="passw1">
              <span>确认密码:</span>
              <input type="password1" v-model="password1">
              <p>请确认两次密码是否一致</p>
            </div>
            <div class="phone">
              <span >手机号码:</span>
              <input type="text" v-model="phone">
              <p>请输入正确的手机号码</p>
            </div>
            <div class="verification">
              <input type="text" v-model="verification">
              <span >获取验证码</span>
              <p>验证码错误</p>
            </div>
            <div class="consent">
              <span>注&nbsp;&nbsp;册</span>
            </div>
            <div class="clause">
              <el-checkbox v-model="checked">我已阅读并同意《仪商城服务条款》</el-checkbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true,
      user:'',
      password:'',
      password1:'',
      phone:'',
      verification:'',
      Userp:true
      // consent:'',
      // clause:''
    }
  },
  methods: {
    User(user){
      if(user==''){
        this.Userp = false
      }else{
        this.Userp = true
      }
    }
  },
  watch:{
    'user':function(newUser,oldUser){
      // console.log(newUser)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .mine{
    height: 500px;
    width: 800px;
    margin:50px auto;
    padding-top: 30px;
    padding-left: 200px;
    background-color: yellow;
    .content{
      height: 400px;
      width: 700px;
      margin: auto;
    }
  }
  .register{
    div{
      width: 290px;
      height: 70px;
      line-height: 50px;
    }
    input{
      height: 30px;
      width: 200px;
      border:1px solid #222;
      margin-top: 12px;
      text-indent:10px;
      font-size: 14px;
      border-radius: 3px;
      float: right;
    }
    span{
      width: 100px;
    }
    .verification{
      input{
        height: 30px;
        width: 100px;
        border:1px solid #222;
        text-indent:10px;
        font-size: 14px;
        border-radius: 3px;
        margin-right: 100px;
      }
    }
    .consent{
      margin-top: 10px;
      margin-left: 90px;
      span{
        width: 150px;
        height: 40px;
        padding:10px 80px 10px 80px;
        background-color: #db2726;
        color:#fff;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
      }
    }
    .clause{
      height: 20px;
      margin-top: -20px;
    }
    .user{
      position: relative;
      p{
        position: absolute;
        top:30px;
        font-size: 12px;
        left: 92px;
        color:#db2726;
      }
    }
     .passw{
      position: relative;
      p{
        position: absolute;
        top:30px;
        font-size: 12px;
        left: 92px;
        color:#db2726;
      }
    }
     .passw1{
      position: relative;
      p{
        position: absolute;
        top:30px;
        font-size: 12px;
        left: 92px;
        color:#db2726;
      }
    }
     .phone{
      position: relative;
      p{
        position: absolute;
        top:30px;
        font-size: 12px;
        left: 92px;
        color:#db2726;
      }
    }
    .verification{
      position: relative;
      p{
        position: absolute;
        top:30px;
        font-size: 12px;
        left: 92px;
        color:#db2726;
      }
    }
  }
</style>
