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
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          <el-upload
            :class="{disabled:uploadDisabled}"
            :on-change="handleLimit"
            action="#"
            :limit = 3
            list-type="picture-card"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus" ></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </p>
        <p>
          <label>法人身份证正反面:</label>
          <!-- <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload> -->
          <el-upload
            :class="{disabled:UploadDisabled}"
            :on-change="HandleLimit"
            :limit = 2
            action="#"
            list-type="picture-card"
            :auto-upload="false">
              <i slot="default" class="el-icon-plus"></i>
              <div slot="file" slot-scope="{file}">
                <img
                  class="el-upload-list__item-thumbnail"
                  :src="file.url" alt=""
                >
                <span class="el-upload-list__item-actions">
                  <span
                    class="el-upload-list__item-preview"
                    @click="handlePictureCardPreview(file)"
                  >
                    <i class="el-icon-zoom-in"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleDownload(file)"
                  >
                    <i class="el-icon-download"></i>
                  </span>
                  <span
                    v-if="!disabled"
                    class="el-upload-list__item-delete"
                    @click="handleRemove(file)"
                  >
                    <i class="el-icon-delete"></i>
                  </span>
                </span>
              </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </p>
        <p><label>开户行: </label><input type="text" v-model="open"></p>
        <p><label>银行账号: </label><input type="text" v-model="bank"></p>
        <p><label>联系人姓名: </label><input type="text" v-model="name"></p>
        <p><label>联系方式: </label><input type="text" v-model="tel"></p>
        <p class="save"><span>立即申请</span></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      // imageUrl: '',
      dialogImageUrl: '',
      uploadDisabled:false,
      UploadDisabled:false,
      dialogVisible: false,
      disabled: false,
      name:'',
      tel:'',
      open:'',
      bank:''
    }
  },
  methods: {
    //  handleAvatarSuccess(res, file) {
    //     this.imageUrl = URL.createObjectURL(file.raw);
    //   },
    //   beforeAvatarUpload(file) {
    //     const isJPG = file.type === 'image/jpeg';
    //     const isLt2M = file.size / 1024 / 1024 < 2;

    //     if (!isJPG) {
    //       this.$message.error('上传头像图片只能是 JPG 格式!');
    //     }
    //     if (!isLt2M) {
    //       this.$message.error('上传头像图片大小不能超过 2MB!');
    //     }
    //     return isJPG && isLt2M;
    //   }
    handleLimit(file,fileList){
      if(fileList.length>=3){
        this.uploadDisabled = true;
      }
    },
    HandleLimit(file,fileList){
      if(fileList.length>=2){
        this.UploadDisabled = true;
      }
    },
    handleRemove(file) {
        console.log(file);
      },
    handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
    handleDownload(file) {
        console.log(file);
      }
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
        padding:5px 60px;
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
        margin-right: 103px;
      }
    }
     p:nth-child(4){
      label{
        margin-right: 87px;
      }
    }
     p:nth-child(5){
      label{
        margin-right: 70px;
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
