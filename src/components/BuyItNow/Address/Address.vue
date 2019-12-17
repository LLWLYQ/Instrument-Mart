<template>
  <div class="Address">
    <div class="content_container">
      <div class="top">
        <p>收货地址</p>
      </div>
      <div class="mine" v-if="ruleForm!=''">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left">
          <el-form-item label="收货人" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobileNumber">
            <el-input v-model="ruleForm.mobileNumber" />
          </el-form-item>
          <el-form-item label="地区"  prop="Address">
            <v-distpicker province="" city="" area="" @selected="onSelected"></v-distpicker>
          </el-form-item>
          <el-form-item label="详细地址:" prop="detailed_address">
            <el-input v-model="ruleForm.detailed_address"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码:" prop="Invitation_code">
            <el-input v-model="ruleForm.Invitation_code"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="danger" style="margin-left:100px;" @click="use()">使用该地址</el-button>
      </div>
      <div class="Generated">
        <Generated>
        </Generated>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import Generated from './Generated'
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
      return {
        ruleForm: {
            name1: '',
            mobileNumber:'',
            detailed_address:'',
            Invitation_code:'',
            province:'',
            city:'',
            area:''
          },
        rules: {
           name1: [
            { required: true, message: '请输入收货人姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          mobileNumber: [
            { required: true, message: "请输入手机号码", trigger: "blur" },
            { validator: isMobileNumber, trigger: "blur" }
          ],
          Address: [
            { required: true, message: '请输入地址', trigger: 'blur' },
          ],
          detailed_address: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          Invitation_code:[
            { required: true, message: '请输入邮政编码（可选）', trigger: 'blur' },
          ]
        }
      };
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
        this.NumberBctih = this.ContDisbel
      },
      handleDownload(file) {
        console.log(file);
      },
      use(){
        // if(this.ruleForm.name1!=''&&this.ruleForm.mobileNumber!=''&&this.ruleForm.detailed_address!=''&&this.ruleForm.Invitation_code!=''&&this.ruleForm.province!=''&&this.ruleForm.city!=''&& this.ruleForm.area!=''){
          this.$router.push({
            name:'Generated',
            params:{
              name:this.ruleForm.name1,
              mobileNumber:this.ruleForm.mobileNumber,
              detailed_address:this.ruleForm.detailed_address,
              Invitation_code:this.ruleForm.Invitation_code,
              province:this.ruleForm.province,
              city:this.ruleForm.city,
              area:this.ruleForm.area,
            }
          })
        // }
      },
      onSelected(data){
        this.ruleForm.province = data.province.value
        this.ruleForm.city = data.city.value
        this.ruleForm.area = data.area.value
      }
  },
  components:{
     VDistpicker,
     Generated
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';
  .top{
    p{
      font-size: 16px;
      border-bottom:1px solid #222;
    }
  }
  .mine{
    height: 400px;
    padding:20px 0px;
    .el-form-item {
      height: 70px;
      width: 410px;
    }
  }
  .mine .el-form-item:nth-child(3){
    width: 750px;
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
<style lang="scss">
  .distpicker-address-wrapper{
    select{
      width: 100px;
    }
  }
</style>
