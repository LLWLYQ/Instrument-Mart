<template>
  <div>
    <div class="register-wrapper">
      <div id="register">
        <p class="title"><img src="../../assets/imges/B_l.png" alt="" class="Pimg"></p>
        <el-form
          :model="ruleForm2"
          :rules="rules2"
          ref="ruleForm2"
          label-width="0"
          class="demo-ruleForm"
        >
          <el-form-item prop="name">
            <el-input v-model="ruleForm2.name" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="tel">
            <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="smscode" class="code">
            <el-input v-model="ruleForm2.smscode" placeholder="验证码"></el-input>
            <el-button type="primary" :disabled='isDisabled' @click="sendCode" style="background:#e94c15;border-color:#e94c15;">{{buttonText}}</el-button>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')" style="width:100%;background:#e94c15;border-color:#e94c15;">注册</el-button>
            <p class="login" @click="gotoLogin">已有账号？立即登录</p>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../config/config'
export default {
  data() {
    let checkname = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      }else {
        callback()
      }
    }
    // <!--验证手机号是否合法-->
    let checkTel = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!this.checkMobile(value)) {
        callback(new Error('手机号码不合法'))
      } else {
        callback()
      }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback()
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      telCode:'',
      ruleForm2: {
        name:"",
        pass: "",
        checkPass: "",
        tel: "",
        smscode: ""
      },
      rules2: {
        name:[{ validator: checkname, trigger: 'change' }],
        pass: [{ validator: validatePass, trigger: 'change' }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        tel: [{ validator: checkTel, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }],
      },
      buttonText: '发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  },
  methods: {
    // <!--发送验证码-->
    sendCode () {
      let tel = this.ruleForm2.tel
      if(tel.length == 11 ){
        this.UserCode()
      }
      if (this.checkMobile(tel)) {
        // console.log(tel)
        let time = 60
        this.buttonText = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText = time + ' 秒'
            if (time === 0) {
              clearInterval(timer);
              this.buttonText = '重新获取'
              this.isDisabled = false
              this.flag = true;
            }
          }, 1000)
        }
      }
    },
    // <!--提交注册-->
    submitForm(formName) {
        this.Tmpnhbr()
        this.$refs[formName].validate(valid => {
            if (valid && this.telCode == '20000') {
              setTimeout(() => {
                // alert('注册成功')
                this.UserReg()
              },200);
            } else {
              // console.log("error submit!!")
              return false;
            }
        })
    },
    // <!--进入登录页-->
    gotoLogin() {
      this.$router.push({
        path: "/register"
      });
    },
    // 验证手机号
    checkMobile(str) {
      let re = /^1\d{10}$/
      if (re.test(str)) {
        return true;
      } else {
        return false;
      }
    },
    //判断手机号码是否被注册
    Tmpnhbr(){
      this.$ajax({
        url:config.baseUrl + '/home/user/find_mobile',
        method:'post',
        data:{
          mobile:this.ruleForm2.tel
        }
      }).then(res=>{
        this.telCode = res.data.code
        if(res.data.code == '60204'){
          this.$alert('手机号码已被注册请重新输入', '', {
            confirmButtonText: '确定',
            customClass:'telName'
          });
        }
      })
    },
    //验证码判断
    UserCode(){
      this.$ajax({
        url:config.baseUrl + '/home/user/code',
        method:'post',
        data:{
          mobile:this.ruleForm2.tel
        }
      }).then(res=>{
        console.log(res.data)
      })
    },
    //登录成功传参
    UserReg(){
      this.$ajax({
        url:config.baseUrl + '/home/user/reg',
        method:'post',
        data:{
          username:this.ruleForm2.name,
          mobile:this.ruleForm2.tel,
          password:this.ruleForm2.pass,
          password_two:this.ruleForm2.checkPass,
          code:this.ruleForm2.smscode
        }
      }).then(res=>{
        if(res.data.code == 20000){
           this.$alert(res.data.message +'请前往登录页登录', '',{
              confirmButtonText:'确定',
              customClass:'GoLoginName',
              callback: action => {
                // this.$message({
                //   type: 'info',
                //   // message: `action: ${ action }`
                // });
              }
            });
        }
      })
    }
  }
};
</script>

<style scoped >
.loading-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: #aedff8;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register-wrapper img {
  position: absolute;
  z-index: 1;
}
.register-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-image:url(../../assets/imges/sp_1.jpg) ;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}
#register {
  width: 340px;
  margin: 60px auto;
  background: #fff;
  padding: 20px 40px;
  border-radius: 10px;
  position: relative;
  z-index: 9;
  border:1px solid #222;
}
.title {
  font-size: 26px;
  line-height: 50px;
  height: 50px;
}
.Pimg{
  width: 340px;
  height: 50px;
}
.el-form-item {
  text-align: center;
  width: 340px;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #ee7f57;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  width: 160px;
}
.login:hover {
  color: #e94c15;
}
.code >>> .el-form-item__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.code button {
  margin-left: 20px;
  width: 140px;
  text-align: center;
}
.el-button--primary:focus {
  background: #409EFF;
  border-color: #409EFF;
  color: #fff;
}
</style>
<style lang="scss">
  .telName{
    position: absolute;
    top:30%;
    left: 40%;
  }
  .GoLoginName{
    position: absolute;
    top:30%;
    left: 40%;
  }
</style>
