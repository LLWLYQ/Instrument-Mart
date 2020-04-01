<template>
  <div class="ApplicationIn">
    <div class="content_container">
      <div class="top">
        <p>申请入驻</p>
      </div>
      <div class="mine">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="200px" class="demo-ruleForm" label-position="left">
          <el-form-item label="店铺名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="真实姓名" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="商户logo" prop="logo">
           <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="商户营业执照" prop="license">
           <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="法人身份证正面照" prop="front">
           <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
           <el-form-item label="法人身份证反面照" prop="verso">
           <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="	医疗器械经营企业许可证" prop="medical_treatment">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobileNumber">
            <el-input v-model="ruleForm.mobileNumber" />
          </el-form-item>
          <el-form-item label="座机号" prop="telPhone">
            <el-input v-model="ruleForm.telPhone" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email" />
          </el-form-item>
          <el-form-item label="地区"  prop="Address">
            <v-distpicker province="" city="" area=""></v-distpicker>
          </el-form-item>
          <el-form-item label="详细地址:" prop="detailed_address">
            <el-input v-model="ruleForm.detailed_address"></el-input>
          </el-form-item>
          <el-form-item label="企业官网:" prop="official_website">
            <el-input v-model="ruleForm.official_website"></el-input>
          </el-form-item>
          <el-form-item label="邀请码:" prop="Invitation_code">
            <el-input v-model="ruleForm.Invitation_code"></el-input>
          </el-form-item>
          <el-form-item>
            <router-link to="/application_approved"><el-button type="primary" @click="submitForm('ruleForm')">申请入驻</el-button></router-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import CenterOrderFrom from '../BuyItNow/OrderForm'
export default {
  data () {
    var isMobileNumber= (rule, value, callback) => {
      if (!value) {
            return new Error("请输入电话号码");
          } else {
            const reg = /^1[3|4|5|6|7|8][0-9]\d{8}$/;
            const isPhone = reg.test(value);
            value = Number(value); //转换为数字
            if (typeof value === "number" && !isNaN(value)) {//判断是否为数字
            value = value.toString(); //转换成字符串
              if (value.length < 0 || value.length > 12 || !isPhone) { //判断是否为11位手机号
                callback(new Error("手机号码格式如:138xxxx8754"));
              } else {
                callback();
              }
            } else {
              callback(new Error("请输入电话号码"));
            }
      }
    };
    var isTelOrFax = (rule, value, callback) => {
          if (!value) {
            callback();
          } else {
            const reg = /^(\d{3,4}-)?\d{7,8}$/;
            const isTel = reg.test(value);
            if (value.length < 10 || value.length > 13 || !isTel ) {//判断传真字符范围是在10到13
              callback(new Error("座机或传真格式如:0376-1234567"));
            } else {
              callback();
            }
          }
    };

    var isEmail = (rule, value, callback) => {
      if (!value) {
        callback();
            } else {
              const reg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
              const email = reg.test(value);
              if (!email) {
                callback(new Error("邮箱格式如:admin@163.com"));
              } else {
                callback();
              }
            }
      }
      return {
      ruleForm: {
          name: '',
          name1: '',
          mobileNumber:'',
          telPhone:'',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          detailed_address:'',
          official_website:'',
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
          musice:'xiangguoliKIaYizheZHongFangShiCUnZai'
        },
        rules: {
          name: [
            { required: true, message: '请输入店铺名称', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
           name1: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
           logo: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          license: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          front: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          verso: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          medical_treatment: [
            { required: true, message: '请上传图片', trigger: 'blur' },
          ],
          mobileNumber: [
            { required: true, message: "请输入手机号码", trigger: "blur" },
            { validator: isMobileNumber, trigger: "blur" }
          ],
          telPhone: [
            { required: true, message: "请输入座机号", trigger: "blur" },
            { validator: isTelOrFax, trigger: "blur" }
          ],
          email: [
            { required: true, message: "请输入邮箱", trigger: "blur" },
            { validator: isEmail, trigger: "blur" }
          ],
          // Address: [
          //   { required: true, message: '请输入地址', trigger: 'blur' },
          // ],
          detailed_address: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          official_website:[
            { required: true, message: '输入的企业官网网址格式要类似于：www.yishangm.com', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 100 个字符', trigger: 'blur' }
          ],
          Invitation_code:[
            { required: true, message: '请输入邀请码（可选）', trigger: 'blur' },
          ]
        }
      };
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
          } else {
            return false;
          }
        });
      },
      handleRemove(file) {
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        this.NumberBctih = this.ContDisbel
      },
      handleDownload(file) {
      }
  },
  components:{
     VDistpicker,
    'Order-from':CenterOrderFrom,
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  .top{
    p{
      font-size: 30px;
    }
  }
  .mine{
    height: 1700px;
    border:1px solid #ccc;
    padding:20px 300px;
    .el-form-item {
      height: 80px;
      width: 750px;
    }
  }
  .mine .el-form-item:nth-child(n+3):nth-child(-n+7){
    height: 180px;
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
    width: 150px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    border:1px solid #ccc;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-button{
    padding: 15px 50px;
    background-color: #e1360f;
    color:#fff;
    border-radius: 3px;
  }
</style>

