<template>
  <div class="MemberRegistration">
     <div class="logo">
      <a href="">
        <img src="../../assets/imges/register_logo.png" alt="">
        <p>一站式工业仪器仪表交易平台-买卖仪器仪表就上仪商城</p>
      </a>
    </div>
    <div class="register-wrapper">
      <div class="register">
        <!-- <p class="title"><img src="../../assets/imges/B_l.png" alt="" class="Pimg"></p> -->
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="个人注册" name="second">
             <el-form
              :model="ruleForm1"
              :rules="rules1"
              ref="ruleForm1"
              label-width="0"
              class="demo-ruleForm"
              style="border:none;"
            >
              <el-form-item prop="name">
                <el-input v-model="ruleForm1.name" auto-complete="off" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="tel">
                <el-input v-model="ruleForm1.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="smscode" class="code">
                <el-input v-model="ruleForm1.smscode" placeholder="验证码" style="float:left;width:180px;"></el-input>
                <el-button type="primary" :disabled='isDisabled' @click="sendCode" style="background:#e94c15;border-color:#e94c15;height:40px;float:left;">{{buttonText}}</el-button>
              </el-form-item>
              <p style="height:30px;color: #F56C6C;" v-if="Vcerror">验证码错误,请重新输入</p>
              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm1.pass" auto-complete="off" placeholder="输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm1.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm1')" style="width:100%;background:#e94c15;border-color:#e94c15;height:40px;" v-if="checked == true">注册</el-button>
                <el-button type="primary" style="width:100%;background:#999;border-color:#e94c15;height:40px;" v-if="checked == false">注册</el-button>
                <p class="protocol"><el-checkbox v-model="checked"></el-checkbox><span>请您务必审慎阅读、充分理解协议中相关条款内容</span></p>
                <p class="login" @click="gotoLogin">已有账号？立即登录</p>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="企业注册" name="first">
            <el-form
              :model="ruleForm2"
              :rules="rules2"
              ref="ruleForm2"
              label-width="0"
              class="demo-ruleForm"
              style="border:none;"
            >
              <el-form-item prop="name">
                <el-input v-model="ruleForm2.name" auto-complete="off" placeholder="请输入用户名"></el-input>
              </el-form-item>
              <el-form-item prop="tel">
                <el-input v-model="ruleForm2.tel" auto-complete="off" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="smscode" class="code" >
                <el-input v-model="ruleForm2.smscode" placeholder="验证码" style="float:left;width:180px;"></el-input>
                <el-button type="primary" :disabled='isDisabled' @click="En_sendCode" style="background:#e94c15;border-color:#e94c15;height:40px;float:left;">{{buttonText1}}</el-button>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" auto-complete="off" placeholder="输入密码"></el-input>
              </el-form-item>
              <el-form-item prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
              </el-form-item>
              <el-form-item prop="company_name">
                <el-input v-model="ruleForm2.company_name" auto-complete="off" placeholder="请输入企业名称"></el-input>
              </el-form-item>
              <el-form-item prop="company_contacts">
                <el-input v-model="ruleForm2.company_contacts" auto-complete="off" placeholder="请输入企业联系人"></el-input>
              </el-form-item>
              <el-form-item prop="industry">
                <el-input v-model="ruleForm2.industry" auto-complete="off" placeholder="请输入所在行业"></el-input>
              </el-form-item>
               <el-form-item>
                <el-button type="primary" @click="submitForm1('ruleForm2')" style="width:100%;background:#e94c15;border-color:#e94c15;height:40px;" v-if="checked == true">注册</el-button>
                <el-button type="primary" style="width:100%;background:#999;border-color:#e94c15;height:40px;" v-if="checked == false">注册</el-button>
                <p class="protocol"><el-checkbox v-model="checked"></el-checkbox><span>请您务必审慎阅读、充分理解协议中相关条款内容</span></p>
                <p class="login" @click="gotoLogin">已有账号？立即登录</p>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
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
      if (!value) {
            callback(new Error('请输入手机号码'))
          } else {
            const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
            const isPhone = reg.test(value);
            value = Number(value); //转换为数字
            if (typeof value === "number" && !isNaN(value)) {//判断是否为数字
            value = value.toString(); //转换成字符串
              if (value.length < 0 || value.length > 12 || !isPhone) { //判断是否为11位手机号
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            } else {
              callback(new Error("请输入电话号码"));
            }
        }
      // if (value === '') {
      //   callback(new Error('请输入手机号码'))
      // } else if (!this.checkMobile(value)) {
      //   callback(new Error('手机号码不合法'))
      // } else {
      //   callback()
      // }
    }
    //  <!--验证码是否为空-->
    let checkSmscode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机验证码'))
      } else {
        callback()
      }
    };
    let checkcompany_name =( rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入企业名称'))
      }else {
        callback()
      }
    };
    let checkcompany_contacts = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入企业联系人'))
      }else {
        callback()
      }
    }
    let checkindustry = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入所在行业'))
      }else {
        callback()
      }
    }
    // <!--验证密码-->
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
      //   if (this.ruleForm1.checkPass !== "") {
      //     this.$refs.ruleForm1.validateField("checkPass");
      //   }
      //   callback()
      // }
      var reg = /^[a-zA-Z0-9]*(([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+))[a-zA-Z0-9]*$/;
        if (value) {
          if (!reg.test(value)) {
            return callback(new Error("密码必须由数字和字母组合成"));
          } else {
            callback();
          }
        }
      }
    };
      let validatePass1 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
      //   if (this.ruleForm2.checkPass !== "") {
      //     this.$refs.ruleForm2.validateField("checkPass");
      //   }
      //   callback()
      // }
        var reg = /^[a-zA-Z0-9]*(([a-zA-Z]+[0-9]+)|([0-9]+[a-zA-Z]+))[a-zA-Z0-9]*$/;
        if (value) {
          if (!reg.test(value)) {
            return callback(new Error("密码必须由数字和字母组合成"));
          } else {
            callback();
          }
        }
      }
    }
    // <!--二次验证密码-->
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm1.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
     let validatePass12 = (rule, value, callback) => {
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
      checked: false,
      activeName: 'second',
      Vcerror:false,
       ruleForm1: {
        name:"",
        pass: "",
        checkPass: "",
        tel: "",
        smscode: "",
      },
      ruleForm2: {
        name:"",
        pass: "",
        checkPass: "",
        tel: "",
        smscode: "",
        company_name:"",
        company_contacts:"",
        industry:''
      },
      rules1: {
        name:[{ validator: checkname, trigger: 'change' }],
        pass: [{ validator: validatePass, trigger: 'change' },{ min: 8, message: "密码长度不小于8个字符", trigger: "change" }],
        checkPass: [{ validator: validatePass2, trigger: 'change' }],
        tel: [{ validator: checkTel, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }],
      },
      rules2: {
        name:[{ validator: checkname, trigger: 'change' }],
        pass: [{ validator: validatePass1, trigger: 'change' }],
        checkPass: [{ validator: validatePass12, trigger: 'change' }],
        tel: [{ validator: checkTel, trigger: 'change' }],
        smscode: [{ validator: checkSmscode, trigger: 'change' }],
        company_name: [{ validator: checkcompany_name, trigger: 'change' }],
        company_contacts: [{ validator: checkcompany_contacts, trigger: 'change' }],
        industry:[{ validator: checkindustry, trigger: 'change' }],
      },
      buttonText: '发送验证码',
      buttonText1:'发送验证码',
      isDisabled: false, // 是否禁止点击发送验证码按钮
      flag: true
    }
  },
  methods: {
    // <!--发送验证码-->
    handleClick(tab, event) {
        // console.log(tab, event);
    },
    sendCode () {
      let tel = this.ruleForm1.tel
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
    En_sendCode () {
      let tel = this.ruleForm2.tel
      if(tel.length == 11 ){
        this.En_UserCode()
      }
      if (this.checkMobile(tel)) {
        // console.log(tel)
        let time = 60
        this.buttonText1 = '已发送'
        this.isDisabled = true
        if (this.flag) {
          this.flag = false;
          let timer = setInterval(() => {
            time--;
            this.buttonText1 = time + ' 秒'
            if (time === 0) {
              clearInterval(timer);
              this.buttonText1 = '重新获取'
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
                // alert('注册成功')
                this.UserReg()
            } else {
              // console.log("error submit!!")
              return false;
            }
        })
    },
     // <!--企业提交注册-->
    submitForm1(formName) {
        this.Tmpnhbr()
        this.$refs[formName].validate(valid => {
            if (valid && this.telCode == '20000') {
                // alert('注册成功')
                this.En_UserReg()
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
          mobile:this.ruleForm1.tel
        }
      }).then(res=>{
        this.telCode = res.data.code
        if(res.data.code == '60204'){
          this.$alert('手机号码已被注册请重新输入', '', {
            confirmButtonText: '确定',
            customClass:'telName',
            input:自己变小了zohiemhnaar
          });
        }
        
      })
    },
    En_Tmpnhbr(){
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
          mobile:this.ruleForm1.tel
        }
      }).then(res=>{
        
      })
    },
  En_UserCode(){
      this.$ajax({
        url:config.baseUrl + '/home/user/code',
        method:'post',
        data:{
          mobile:this.ruleForm2.tel
        }
      }).then(res=>{
        // console.log(res.data)
      })
    },
    //登录成功传参
    UserReg(){
      this.$ajax({
        url:config.baseUrl + '/home/user/reg',
        method:'post',
        data:{
          username:this.ruleForm1.name,
          mobile:this.ruleForm1.tel,
          password:this.ruleForm1.pass,
          password_two:this.ruleForm1.checkPass,
          code:this.ruleForm1.smscode
        }
      }).then(res=>{
        if(res.data.message == '验证码错误'){
          this.Vcerror = true
        }
        if(this.ruleForm1.smscode == ''){
          this.Vcerror = false
        }
        if(res.data.code == 20000){
           this.$router.push({
             path:'/register',
           })
        }
      })
    },
    En_UserReg(){
      this.$ajax({
        url:config.baseUrl + '/home/user/reg',
        method:'post',
        data:{
          username:this.ruleForm2.name,
          mobile:this.ruleForm2.tel,
          password:this.ruleForm2.pass,
          password_two:this.ruleForm2.checkPass,
          code:this.ruleForm2.smscode,
          company_name:this.ruleForm2.company_name,
          company_contacts:this.ruleForm2.company_contacts,
          company_industry:this.ruleForm2.industry
          // industry:this.ruleForm2.industry
        }
      }).then(res=>{
        if(res.data.message == '验证码错误'){
          this.Vcerror = true
        }
        if(this.ruleForm2.smscode == ''){
          this.Vcerror = false
        }
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
  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    //如果在这里加刷新页面页面将会一直刷新
    // window.location.reload();
  }
};
</script>

<style scoped lang="scss">
@import "../../style/common.css";
.el-tabs__header{
 border:none !important;
}
#tab-first{
  border:none !important;
}
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
  float: right;
  background-image:url(../../assets/imges/register_main.jpg) ;
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
  width: 100%;
  height: 800px;
  overflow: hidden;
}

.register {
  width: 423px;
  margin: 100px 0 0 1100px;
  /* margin: 60px auto; */
  /* position: absolute;
  top: 150px;
  right: 250px; */
  background: #fff;
  padding: 20px 40px;
  // border-radius: 10px;
  /* position: relative; */
  z-index: 9;
  // border:1px solid #222;
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
  // text-align: center;
  width: 340px;
  margin-bottom: 15px;
}
.login {
  margin-top: 10px;
  // margin-left: -7px;
  font-size: 12px;
  line-height: 22px;
  color: #ee7f57;
  cursor: pointer;
  text-align: left;
  text-indent: 8px;
  // width: 160px;
  float: right;
}
.login:hover {
  color: #e94c15;
}
.protocol{
  .el-checkbox{
    float: left;
  }
  span{
    margin-left: 5px;
    display: block;
    float: left;
    color:#666;
    cursor: pointer;
  }
  span:hover{
    text-decoration: underline;
  }
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
  .el-input__inner{
    padding: 0 !important;
    text-indent: 15px !important;
    border-radius: 0 !important;
  }
</style>
