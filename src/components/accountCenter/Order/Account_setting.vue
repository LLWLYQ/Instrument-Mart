<template>
  <div class="Account_setting">
    <div class="content_container">
      <div class="top">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="基础信息" name="second">
            <div class="personage">
              <div class="personal_information">
                <el-form :model="ruleFormOne" status-icon  ref="ruleForm" label-width="100px"
                  class="demo-ruleForm">
                  <el-form-item label="账号名称" prop="account" style="width:316px;">
                    <el-input type="text" v-model="ruleFormOne.account" autocomplete="off" readonly="readonly"></el-input>
                  </el-form-item>
                  <el-form-item label="当前头像" prop="photo">
                    <img :src="baseUrl + dataList.avatar_url" alt="" style="width:178px;height:178px;">
                  </el-form-item>
                  <el-form-item label="会员姓名" prop="name" :rows="10" style="width:316px;">
                    <el-input type="text" v-model="dataList.contacts" autocomplete="off" placeholder="请输入姓名" readonly="readonly"></el-input>
                  </el-form-item>
                  <el-form-item label="会员年龄" prop="age">
                    <el-select v-model="dataList.age" placeholder="请选择" disabled >
                      <el-option v-for="item in ageData" :key="item" :label="item" :value="item" >
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="会员性别" prop="gender" style="width:316px;">
                    <el-input type="text" value="男" autocomplete="off" placeholder="请输入姓名" readonly="readonly" v-if="dataList.sex == 1"></el-input>
                    <el-input type="text" value="女" autocomplete="off" placeholder="请输入姓名" readonly="readonly" v-if="dataList.sex == 0"></el-input>
                  </el-form-item>
                  <el-form-item label="所在行业" prop="Industry" style="width:400px;">
                    <el-input type="text" v-model="dataList.industry" autocomplete="off" placeholder="请输入所在行业" readonly="readonly">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="从事职业" prop="profession" style="width:400px;">
                    <el-input type="text" v-model="dataList.job" autocomplete="off" placeholder="请输入职业" readonly="readonly">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="所在地区" prop="accregionount" style="width:400px;">
                    <el-input type="text" v-model="dataList.area" autocomplete="off" placeholder="请输入所在地区" readonly="readonly">
                    </el-input>
                  </el-form-item>
                  
                  <!-- <router-link to="/Enterprise_real_name" target="_blank" tag="a" style="width:200px;"><p class="change_password" style="margin-left:100px;color:#e94c15;font-size:14px;width:200px;">企业未实名，是否前往实名？</p></router-link> -->
                  <!-- <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" style="padding:15px 20px;margin-top:15px;border-radius: 3px;">保存修改</el-button>
                    <el-button @click="resetForm('ruleForm')" style="border:1px solid #ccc;padding:15px 25px;border-radius: 3px;">重置</el-button>
                  </el-form-item> -->
                </el-form>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="安全设置" name="first">
            <div class="cor_member">
              <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                class="demo-ruleForm">
                <el-form-item label="账号名称" prop="account" style="width:316px;">
                  <el-input type="text" v-model="ruleForm.account" autocomplete="off" readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="当前头像" prop="avatar">
                  <el-upload class="avatar-uploader" action="http://shop.yishangm.com/home/files/memberhead"
                    :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                    name="avatar">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" style="border:1px solid #ccc;">
                    <i v-else class="el-icon-plus avatar-uploader-icon" style="border:1px solid #ccc;"></i>
                  </el-upload>
                </el-form-item>
                <el-form-item label="会员姓名" prop="name" :rows="10" style="width:316px;">
                  <el-input type="text" v-model="ruleForm.name" autocomplete="off" placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item label="会员年龄" prop="age">
                  <el-select v-model="ruleForm.age" placeholder="请选择">
                    <el-option v-for="item in ageData" :key="item" :label="item" :value="item">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="会员性别" prop="gender">
                  <el-radio v-model="ruleForm.gender" label="0">女</el-radio>
                  <el-radio v-model="ruleForm.gender" label="1">男</el-radio>
                </el-form-item>
                <el-form-item label="所在行业" prop="Industry" style="width:400px;">
                  <el-input type="text" v-model="ruleForm.Industry" autocomplete="off" placeholder="请输入所在行业"></el-input>
                </el-form-item>
                <el-form-item label="从事职业" prop="profession" style="width:400px;">
                  <el-input type="text" v-model="ruleForm.profession" autocomplete="off" placeholder="请输入职业"></el-input>
                </el-form-item>
                <el-form-item label="所在地区" prop="region" style="width:400px;">
                  <el-input type="text" v-model="ruleForm.region" autocomplete="off" placeholder="请输入所在地区">
                  </el-input>
                </el-form-item>
                <router-link to="/Enterprise_real_name" target="_blank" tag="a" style="width:200px;"><p class="change_password" style="margin-left:100px;color:#e94c15;font-size:14px;width:200px;">企业未实名，是否前往实名？</p></router-link>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')" style="padding:15px 20px;margin-top:15px;border-radius: 3px;">保存修改</el-button>
                  <el-button @click="resetForm('ruleForm')" style="border:1px solid #ccc;padding:15px 25px;border-radius: 3px;">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../config/config'
  export default {
    data() {
      return {
        // userName:localStorage.getItem('userName'),
        activeName: 'second',
        // radio: '男',
        ageData: [],
        // value: '20',
        imageUrl:'',
        dataList:'',
        ruleFormOne:{
          account: localStorage.getItem('userName'),
          photo: '',
          name: '',
          age: '20',
          gender: '0',
          Industry: '',
          profession: '',
          region: '',
        },
        ruleForm: {
          account: localStorage.getItem('userName'),
          avatar: '',
          name: '',
          age: '20',
          gender: '0',
          Industry: '',
          profession: '',
          region: '',
        },
        rules: {
          account: [{
            required: true,
            message: '账户名称不能为空',
            trigger: 'blur'
          }],
          avatar: [{
            required: true,
            message: '请上传照片',
            trigger: 'blur'
          }],
          name: [{
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
          }],
          // age: [{
          //   required: true,
          //   message: '请选择年龄',
          //   trigger: 'blur'
          // }],
          // gender: [{
          //   required: true,
          //   message: '请选择性别',
          //   trigger: 'blur'
          // }],
          Industry: [{
            required: true,
            message: '请输入企业名称',
            trigger: 'blur'
          }],
          profession: [{
            required: true,
            message: '请输入企业联系人',
            trigger: 'blur'
          }],
          accregionount: [{
            required: true,
            message: '请输入所在行业',
            trigger: 'blur'
          }],
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        // console.log(res, file)
        this.ruleForm.avatar = res.data.id
        this.imageUrl = URL.createObjectURL(file.raw);
        // console.log(this.imageUrl)
      },
      beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        let arr = ['image/jpeg', 'image/png', 'image/bmp'];
        var rs = arr.find(function (value) {
          if (value === file.type) {
            //则包含该元素
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // console.log(this.ruleForm)
            this.$ajax({
              url:config.baseUrl + '/home/user/infoupdate',
              method:"post",
              data:{
                username:localStorage.getItem("userName"),
                member_id:localStorage.getItem("userId"),
                member_type:"1",
                age:this.ruleForm.age,
                avatar:this.ruleForm.avatar,
                sex:this.ruleForm.gender,
                industry:this.ruleForm.Industry,
                job:this.ruleForm.profession,
                area:this.ruleForm.region,
                company_industry:'dsa',
                company_product:"dsadas",
                company_management_model:"dsadas",
                company_url:"www",
                company_area:"dsadas"
              }
            }).then(res=>{
              if(res.data.message == '修改成功'){
                this.$alert('资料修改成功', '', {
                  confirmButtonText: '确定',
                  callback: action => {
                    // this.$message({
                    //   type: 'info',
                    //   message: `action: ${ action }`
                    // });
                  }
                });
              }
            })
            // alert('submit!');
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    created() {
      this.$ajax({
        url:config.baseUrl + '/home/user/info',
        method:'post',
        data:{
          member_id:localStorage.getItem("userId")
        }
      }).then(res=>{
        this.dataList = res.data.data
        console.log(this.dataList)
        this.ruleFormOne.gender = this.dataList.sex
      })
      let i = 1
      let DataList = []
      for (i; i < 101; i++) {
        this.ageData.push(i)
      }
      this.$ajax({
        url:config.baseUrl +'/home/user/info',
        method:"post",
        data:{
          member_id:localStorage.getItem("userId")
        }
      }).then(res=>{
        let regData = res.data.data
        // if(regData.sex == 1){
        //   this.radio = "男"
        // }
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/common';

  .Account_setting {

    width: 990px;
    margin-left: 100px;
  }

  .el-form-item {
    margin: 0 0 30px 0 !important;
  }

  .el-select-dropdown__item {
    padding: 0 15px !important;
  }

  .el-input__inner {
    padding: 0 !important;
    text-indent: 15px !important;
    border-radius: 0 !important;
  }

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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
