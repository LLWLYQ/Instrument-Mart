<template>
  <div class="Invoice">
    <div class="content_container">
      <div class="center">
        <p>设置开票信息</p>
        <div class="mine">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="公司名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="识别码" prop="heading_code">
              <el-input v-model="ruleForm.heading_code"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      ruleForm: {
          name:'',
          heading_code:'',
        },
      rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          heading_code: [
            { required: true, message: '请输入识别码', trigger: 'blur' },
            { min: 5, max: 30, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
      }
    }
  },
  methods: {
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            console.log('mangguodetianjingtoudejiaoluoningwangnichengshidelunkuo')
            return false;
          }
        });
     }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
  .center{
    margin-left: 100px;
    p{
      font-size: 25px;
      padding:0px 0 10px 0 ;
      border-bottom: 1px solid #ccc;
    }
    .mine{
      width:700px;
      margin:40px 0 0 10px;
      .el-form{
        height: 200px;
        width: 400px;
        float: left;
        .el-form-item{
          margin-bottom: 30px;
          .el-button{
            padding:10px 20px;
            background-color: #e94c15;
          }
          .el-button:hover{
             background-color: #e94c;
          }
        }
      }
    }
  }
</style>
