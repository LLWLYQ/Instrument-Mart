<template>
  <div class="StoresRegistered">
    <div class="com">
      <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
      <div class="Search_Goods">
        <HomeSerach></HomeSerach>
      </div>
      <div class="Shopping_Cart" @mouseover="scover()" @mouseleave="scleave()">
        <router-link to="/cart" target="_blank" tag="a"><p><i class="el-icon-shopping-cart-2"><span>2</span></i><span>我的购物车</span></p></router-link>
        <transition name="overcat">
          <div class="overBox" v-show="Scboxshow">
            <overallCart></overallCart>
          </div>
        </transition>
      </div>
      <h1 v-show="successfully">申请入驻</h1>
      <h1 v-show="Zz">Waiting</h1>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm" v-show="successfully">
      <el-form-item label="店铺类型" prop="shop_type">
        <el-select v-model="ruleForm.shop_type" placeholder="请选择">
          <el-option v-for="item in selectList" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺名称" prop="shop_name">
        <el-input v-model="ruleForm.shop_name"></el-input>
      </el-form-item>
      <el-form-item label="主营品类" prop="shop_scope">
        <el-input v-model="ruleForm.shop_scope"></el-input>
      </el-form-item>
      <el-form-item label="客服QQ号" prop="kefu_qq">
        <el-input v-model="ruleForm.kefu_qq"></el-input>
      </el-form-item>
      <el-form-item label="店铺LOGO" prop="shop_logo">
        <el-upload class="avatar-uploader" action="http://shop.yishangm.com/seller/files/shopLogo" :show-file-list="false"
          :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name="shop_logo">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" style="border:1px solid #ccc;">
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border:1px solid #ccc;"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="所属城市" prop="value" >
        <el-select v-model="ruleForm.shop_province" filterable placeholder="请选择" @change="selectCity" style="margin-right:15px;">
          <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
        <el-select v-model="ruleForm.shop_city" filterable placeholder="请选择" @change="selectCity2" style="margin-right:15px;">
          <el-option v-for="item in options2" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>

        <el-select v-model="ruleForm.shop_area" filterable placeholder="请选择" @change="selectCity3" style="margin-right:15px;">
          <el-option v-for="item in options3" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>

        <el-select v-model="ruleForm.shop_street" filterable placeholder="请选择">
          <el-option v-for="item in options4" :key="item.id" :label="item.name" :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="店铺信息" prop="shop_info">
        <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="ruleForm.shop_info">
        </el-input>
      </el-form-item>
      <el-form-item label="店铺详细地址" prop="shop_address">
        <el-input type="textarea" :rows="10" placeholder="请输入内容" v-model="ruleForm.shop_address">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')" style="padding:15px 25px;">立即申请</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="diu" v-show="Zz">
      <h1>申请成功,请耐心等待审核通过</h1>
    </div>
  </div>
</template>
<script>
import HomeSerach from '../home_child/home_serach'
import overallCart from '../mine/overallCart'
import config from '../../config/config';
  // import {
  //   fetchList,
  //   fetchPv,
  //   createShop,
  //   updateArticle,
  //   getCity
  // } from './reg.js'
  export default {
    data() {
      return {
        successfully:true,
        Zz:false,
        Scboxshow: false,
        baseUrl:config.baseUrl,
        ruleForm: {
          shop_type: '',
          member_id: localStorage.getItem("userId"),
          shop_scope: '',
          kefu_qq:'',
          shop_name: '',
          shop_address: '',
          shop_info: '',
          shop_logo: '',
        },
        selectList: [{
            id: 1,
            name: '专营店'
          },
          {
            id: 2,
            name: '专卖店'
          },
          {
            id: 3,
            name: '直营店'
          },
          {
            id: 4,
            name: '形象店'
          }
        ],
        listQuery: {
          level: 1,
          pid: 0
        },

        options: [],
        options2: [],
        options3: [],
        options4: [],

        imageUrl: '',
        imageUrl2: '',
        imageUrl3: '',
        rules: {
          shop_type: [{
            required: true,
            message: '请选择店铺类型',
            trigger: 'blur'
          }],
          shop_scope: [{
              required: true,
              message: '请输入主营品类',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 150,
              message: '长度在 1 到 150 个字符',
              trigger: 'blur'
            }
          ],
          kefu_qq: [{
              required: true,
              message: '请输入客服QQ号',
              trigger: 'blur'
            },
            {
              min: 4,
              max: 12,
              message: '长度在 4 到 12 个字符',
              trigger: 'blur'
            }
          ],
          shop_name: [{
              required: true,
              message: '请输入店铺名称',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 20,
              message: '长度在 1 到 20 个字符',
              trigger: 'blur'
            }
          ],
          shop_address: [{
              required: true,
              message: '请输入店铺地址',
              trigger: 'blur'
            },
            {
              min: 1,
              max: 150,
              message: '长度在 1 到 150 个字符',
              trigger: 'blur'
            }
          ],
          shop_logo: [{
            required: true,
            message: '请上传店铺LOGO',
            trigger: 'blur'
          }],
        }
      };
    },
    created() {

      this.getCityList()
    },
    components: {
      HomeSerach,
      overallCart,
    },
    methods: {
      scover() {
        this.Scboxshow = true;
      },
      scleave() {
        this.Scboxshow = false;
      },
      selectCity(rs) {
        this.listQuery.level = 2
        this.listQuery.pid = rs
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:this.listQuery
        }).then(response => {
          this.options2 = response.data.data
        })
      },
      selectCity2(rs) {
        this.listQuery.level = 3
        this.listQuery.pid = rs
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:this.listQuery
        }).then(response => {
          this.options3 = response.data.data
        })
      },
      selectCity3(rs) {
        this.listQuery.level = 4
        this.listQuery.pid = rs
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:this.listQuery
        }).then(response => {
          this.options4 = response.data.data
        })
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {

          if (valid) {

            this.$ajax({
              url:config.baseUrl + '/seller/shop',
              method:'post',
              data:this.ruleForm
            }).then(response => {

              console.log(response.code)

              if (response.data.code == 20000) {
                this.$message.success('申请成功');
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
        // console.log(res, file)
        this.ruleForm.shop_logo = res.data.id
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
      getCityList() {
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:this.listQuery
        }).then(response => {
          this.options = response.data.data
          console.log(this.options)
        })
      }
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
