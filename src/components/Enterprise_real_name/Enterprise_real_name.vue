<template>
  <div class="Enterprise_real_name">
    <div class="com">
      <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
      <div class="Search_Goods">
        <HomeSerach></HomeSerach>
      </div>
      <div class="Shopping_Cart" @mouseover="scover()" @mouseleave="scleave()">
        <router-link to="/cart" target="_blank" tag="a"><p><i class="el-icon-shopping-cart-2"><span>{{NumData}}</span></i><span>我的购物车</span></p></router-link>
        <transition name="overcat">
          <div class="overBox" v-show="Scboxshow">
            <overallCart></overallCart>
          </div>
        </transition>
      </div>
      <h1 v-show="successfully">企业实名</h1>
      <h1 v-show="Zz">Waiting</h1>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm" v-show="successfully">
      <el-form-item label="上传营业执照" prop="company_license">
        <el-upload class="avatar-uploader" action="http://shop.yishangm.com/home/files/licensePic" :show-file-list="true" list-type="picture-card"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"  
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"  name="licensePic" >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" v-if="imageUrl" :src="imageUrl" class="avatar" style="border:1px solid #ccc;">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border:1px solid #ccc;"></i>
        </el-dialog>
      </el-form-item>
      <el-form-item label="法人身份证正反面" prop="company_card">
        <el-upload class="avatar-uploader" action="http://shop.yishangm.com/home/files/cardPic" :show-file-list="true" list-type="picture-card"
          :on-success="handleAvatarSuccess1" :before-upload="beforeAvatarUpload1"  
          :on-preview="handlePictureCardPreview1"
          :on-remove="handleRemove1"  name="cardPic" >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible1">
          <img width="100%" v-if="imageUrl1" :src="imageUrl1" class="avatar" style="border:1px solid #ccc;">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border:1px solid #ccc;"></i>
        </el-dialog>
      </el-form-item>
      <el-form-item label="开户行" prop="bank_name">
        <el-input v-model="ruleForm.bank_name"></el-input>
      </el-form-item>
      <el-form-item label="银行账号" prop="bank_num">
        <el-input v-model="ruleForm.bank_num"></el-input>
      </el-form-item>
      <el-form-item label="联系人姓名" prop="contacts">
        <el-input v-model="ruleForm.contacts"></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="contact_number">
        <el-input v-model="ruleForm.contact_number"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" style="padding:15px 25px;">立即实名</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="diu" v-show="Zz">
      <h1>实名提交成功,请耐心等待审核通过</h1>
    </div>
  </div>
</template>
<script>
import HomeSerach from '../home_child/home_serach'
import overallCart from '../mine/overallCart'
import config from '../../config/config';
  export default {
    data() {
      return {
        dialogVisible: false,
        NumData:'',
        lists:[],
        dialogVisible1: false,
        successfully:true,
        Zz:false,
        Scboxshow: false,
        baseUrl:config.baseUrl,
        ruleForm: {
          company_member_id: localStorage.getItem("userId"),
          company_license:[],
          company_card:[],
          bank_name:'',
          bank_num:'',
          contacts:'',
          contact_number:''
        },
        imageUrl: '',
        imageUrl1: '',
        // imageUrl3: '',
        rules: {
          company_license: [{
            required: true,
            message: '请上传上传营业执照',
            trigger: 'blur'
          }],
          company_card: [{
            required: true,
            message: '请上传法人身份证正反面照',
            trigger: 'blur'
          }],
          bank_name: [{
              required: true,
              message: '请输入开户行号',
              trigger: 'blur'
            },
            {
              min: 10,
              max: 25,
              message: '长度在 10 到 25 个字符',
              trigger: 'blur'
            }
          ],
          bank_num: [{
              required: true,
              message: '请输入银行账号',
              trigger: 'blur'
            },
            {
              min: 10,
              max: 30,
              message: '长度在 10 到 30 个字符',
              trigger: 'blur'
            }
          ],
          contacts: [{
              required: true,
              message: '请输入联系人姓名',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 10,
              message: '长度在 1 到 10 个字符',
              trigger: 'blur'
            }
          ],
          contact_number: [{
              required: true,
              message: '请输入联系电话',
              trigger: 'blur'
            },
            {
              min: 6,
              max: 20,
              message: '长度在 6 到 20 个字符',
              trigger: 'blur'
            }],
        }
      };
    },
    created() {
       this.$ajax({
        url: config.baseUrl + '/home/cart',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        this.carData = res.data.data.items
        // console.log(res.data.data.items)
        let GList = {}
        res.data.data.items.map((item, index) => {
            GList = {}
            GList.cart_id = item.cart_id
            GList.shop_id = item.shop_id
            GList.shop_name = item.shop_name
            GList.carts_list = item.carts_list
            GList.shop_all_weight = item.shop_all_weight
            this.lists.push(GList)
            // this.NumData = this.lists.length
          })
          let www =  []
          this.lists.map(item=>{
            item.carts_list.map(citem=>{
              www.push(citem)
            })
          })
          this.NumData = www.length
      })
    },
    components: {
      HomeSerach,
      overallCart,
    },
    methods: {
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
       handleRemove1(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.imageUrl = file.url;
        this.dialogVisible = true;
      },
      handlePictureCardPreview1(file) {
        this.imageUrl1 = file.url;
        this.dialogVisible1 = true;
      },
      scover() {
        this.Scboxshow = true;
      },
      scleave() {
        this.Scboxshow = false;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$ajax({
              url:config.baseUrl + '/home/user/license',
              method:'post',
              data:this.ruleForm
            }).then(response => {

              console.log(response.code)

              if (response.data.code == 20000) {
                this.$message.success('实名成功');
                this.successfully = false
                this.Zz = true
              } else {
                this.$message.error('申请失败');
              }
            })
            //alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      handleAvatarSuccess(res, file) {
        console.log(res.data.id)
        this.ruleForm.company_license.push(res.data.id) 
        this.imageUrl = URL.createObjectURL(file.raw);
        // console.log(this.imageUrl)
      },
      handleAvatarSuccess1(res, file) {
        // console.log(res, file)
        this.ruleForm.company_card.push(res.data.id)
        this.imageUrl1 = URL.createObjectURL(file.raw);
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
      beforeAvatarUpload1(file) {
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
      // getCityList() {
      //   this.$ajax({
      //     url:config.baseUrl + '/home/regions/index',
      //     method:'post',
      //     data:this.listQuery
      //   }).then(response => {
      //     this.options = response.data.data
      //     console.log(this.options)
      //   })
      // }
    }
  }

</script>
<style>
 
  #ELB:hover {
    background-color: red;
    border: 2px solid red;
  }

  #ELB {
    border-radius: 0;
    background-color: #e94c15;
    border: 2px solid #e94c15;
    color: #fff;
  }
  
</style>
<style lang="scss" scoped  >
@import '../../style/common';
 .demo-ruleForm {
    width: 1230px;
    margin:30px auto ;
  }
  .el-form-item{
    margin: 0 0 25px 0 !important;
  } 
  .el-select-dropdown__item{
    padding:0 15px !important;
  }
  .el-input__inner{
    padding: 0 !important;
    text-indent: 15px !important;
    border-radius: 0 !important;
  }
  .diu{
    width: 1210px;
    min-height: 600px;
    margin:30px auto;
    h1{
      font-size: 20px;
      color:#228B22;
    }
  }
  .com {
    position: relative;
    height: 190px;
    padding-top: 60px;
    width: 1210px;
    margin: 0 auto;
    border-bottom: 5px solid #e94c15;
    h1{
      font-size: 20px;
      margin: 15px 0;
    }
    .logo_img {
      width: 200px;

      img {
        width: 100%;
      }
    }

    .Search_Goods {
      position: absolute;
      left: 345px;
      top: 70px;
      overflow: hidden;
      width: 615px;
    }

    .Shopping_Cart {
      position: absolute;
      height: auto;
      right: 0px;
      top: 70px;
      cursor: pointer;
      width: 200px;

      .overBox {
        position: absolute;
        right: 0px;
        top: 41px;
        z-index: 3000000;
        width: auto;
        height: 300px;
        overflow: hidden;
        ;
      }

      .overcat-leave-active,
      .overcat-enter-active {
        transition: all 0.5s ease;
      }

      .overcat-leave-active,
      .overcat-enter {
        height: 0px !important;
      }

      .overcat-leave,
      .overcat-enter-active {
        max-height: 320px;
      }

      p {
        width: 130px;
        float: right;
        border: 2px solid #e94c15;
        padding: 8px 18px;
        background: #e94c15;

        i {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          margin-right: 5px;

          span {
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            top: 0px;
            left: 95px;
            line-height: 15px;
            text-align: center;
            background: #db2726;
            color: #fff;
            border-radius: 50%;
          }
        }

        span {
          color: #fff;
          font-weight: bold;
        }
      }
    }


    .SG_ul {
      :nth-child(n+2) {
        padding-left: 10px;
      }

      li {
        float: left;
        font-size: 14px;
        padding: 5px 0 0 0;
        color: #A8A8A8;
      }
    }

    .com_ul {
      height: 20px;
      width: 600px;
      float: left;
      margin-left: 20px;
      margin-top: 15px;
      font-weight: bold;
      font-size: 16px;

      :hover {
        color: red;
        cursor: pointer;
      }

      :nth-child(n+2) {
        margin-left: 40px;
      }

      li {
        float: left;
        font-size: 16px;

        a {
          font-size: 16px;
          color: #222;
        }

        i {
          font-size: 16px;
        }
      }
    }
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
