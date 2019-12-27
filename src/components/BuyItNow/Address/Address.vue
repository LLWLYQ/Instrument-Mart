<template>
  <div class="Address">
    <div class="content_container">
      <div class="top">
        <h4>收货地址</h4>
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
            <el-select v-model="province" placeholder="请选择" @focus="handleprovince()">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="city" placeholder="请选择" @focus="handleCity()">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="district" placeholder="请选择" @focus="handleDistrict()">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址:" prop="detailed_address">
            <el-input v-model="ruleForm.detailed_address"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码:" prop="Invitation_code">
            <el-input v-model="ruleForm.Invitation_code"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="danger" style="margin-left:100px;" @click="use()" class="Btn">保存</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import config from '../../../config/config'
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
        province:'',
        city:'',
        district:'',
        cityID:'',
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
        },
        options: [{}],
        options1: [{}],
        options2: [{}],
      }
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
          } else {
            // console.log('error submit!!')
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
      handleprovince(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:1,
            pid:0
          }
        }).then(res=>{
          console.log(res)
          this.options = res.data.data
          this.options.map(item=>{
            this.cityID = item.code
          })
        })
      },
      handleCity(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:2,
            pid:1
          }
        }).then(res=>{
          console.log(res)
          this.options1 = res.data.data
        })
      },
      handleDistrict(){
         this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:3,
            pid:2
          }
        }).then(res=>{
          this.options2 = res.data.data
        })
      }
  },
  components:{
     VDistpicker,
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';
  .top{
    h4{
      font-size: 16px;
      border-bottom:1px solid #222;
      padding-bottom: 10px;
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
  .Btn{
    padding: 10px 30px;
    background-color: #5584ff;
    color:#fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .Btn:hover{
    background: rgb(83, 168, 255)
  }
  .Generated{
    margin-top: 20px;
    width:1060px;
    height: 230px;
    padding: 5px;
    .el-table{
      border:1px solid #ccc;
      .el-table th.is-leaf{
        border:1px solid #ccc;
      }
    }
  }
.el-input--suffix{
  width: 50px;
}
</style>
<style lang="scss">
  .distpicker-address-wrapper{
    select{
      width: 100px;
    }
  }
  .el-select-dropdown__list{
    padding-left: 10px;
  }
</style>
