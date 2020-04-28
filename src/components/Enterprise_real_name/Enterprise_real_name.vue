<template>
  <div class="Enterprise_real_name">
     <div class="YSC_top">
      <div class="YSC_mine">
        <img src="../../assets/imges/logo.png" alt="">
        <p>企业实名</p>
      </div>
    </div>
    <div class="content_container">
      <div class="Enrn">
        <p>
          <label>上传营销执照:</label>
          <el-upload
            action=""
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </p>
        <p>
          <label>法人身份证正反面:</label>
        </p>
        <p><label>开户行:</label><input type="text" v-model="open"></p>
        <p><label>银行账号: </label><input type="text" v-model="bank"></p>
        <p><label>联系人姓名: </label><input type="text" v-model="name"></p>
        <p><label>联系方式: </label><input type="text" v-model="tel"></p>
        <p class="save"><span @click="save()">立即申请</span></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Qs from 'qs'
import config from '../../config/config'
export default {
  data() {
    return {
      name:'',
      tel:'',
      open:'',
      bank:'',
    }
  },
  methods: {
    save(){
       this.$ajax({
					url:config.baseUrl + '/home/user/license',
          method: "post",
          data:{
            company_member_id:localStorage.getItem("userId"),
            company_license:this.licensePic,
            company_card:this.cardPic,
            contacts:this.name,
            contact_number:this.tel,
            bank_name:this.open,
            bank_num:this.bank,
          }
				}).then(res => {
        });
    },
  },
  components: {

  }
}
</script>
<style lang="scss" scoped>
@import '../../style/common';
.YSC_top{
  width: 100%;
  height: 120px;
  margin-bottom: 20px;
  margin-top: -20px;
  background: #fff;
  .YSC_mine{
    width: 1440px;
    margin: 0 auto;
    height: 120px;
    img{
      margin-top: 20px;
      float: left;
    }
    p{
      float: left;
      font-size: 35px;
      margin: 35px 0 0 20px;
    }
  }
}
.Enterprise_real_name{
  background: #e6e6e6;
  height: 1200px;
  margin-top: 50px;
  .Enrn{
    padding:50px 310px;
    height: 1200px;
    width: 100%;
    background: #fff;
    .save{
      padding:10px 0 0 170px;
      span{
        padding:10px 20px;
        // border:1px solid #ccc;
        background: #e94c15;
        cursor: pointer;
        border-radius: 3px;
        color:#fff;
      }
      span:hover{
          background: #e94c;
        }
    }
    p{
      height: 80px;
      font-size: 18px;
      // label{
      //   float: left;
      //   margin-right: 20px;
      // }
      input{
        height: 35px;
        width: 200px;
        border:1px solid #999;
        border-radius: 3px;
        text-indent:10px;
      }
    }
    p:nth-child(1){
      height: 220px;
      label{
        float: left;
        margin-right: 55px;
      }
    }
    p:nth-child(2){
      height: 220px;
      label{
        float: left;
        margin-right: 20px;
      }
    }
    p:nth-child(3){
      label{
        margin-right: 110px;
      }
    }
     p:nth-child(4){
      label{
        margin-right: 87px;
      }
    }
     p:nth-child(5){
      label{
        margin-right: 69px;
      }
    }
     p:nth-child(6){
      label{
        margin-right: 87px;
      }
    }
  }
}
</style>
<style lang="scss">
  .disabled .el-upload--picture-card {
      display: none!important;
  }
  .avatar-uploader{
    float: left;
  }
  .avatar-uploader .el-upload {
    border: 1px solid #d9d9d9;
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
