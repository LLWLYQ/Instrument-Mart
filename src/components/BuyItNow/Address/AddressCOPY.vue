<template>
  <div class="Address_COPYY" >
    <div class="content_container">
      <div class="mine" v-show="pop">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm" label-position="left" >
          <el-form-item label="收货人" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobileNumber">
            <el-input v-model="ruleForm.mobileNumber" />
          </el-form-item>
          <el-form-item label="地区"  prop="Address" >
            <el-select v-model="provinceq" placeholder="请选择" @focus="handleprovince()" style="width:100px;" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="cityq" placeholder="请选择" @focus="handleCity()" style="width:100px;">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="districtq" placeholder="请选择" @focus="handleDistrict()" style="width:100px;">
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
        <el-button type="danger" style="margin-left:100px;" @click="Save('ruleForm1')" class="Btn">保存</el-button>
      </div>
      <div>
      <div class="modification_address" v-show="popup1">
          <div class="login">
             <div class="mine">
                  <el-form :model="ruleFormFic" :rules="rulesFic" ref="ruleForm2" label-width="100px" class="demo-ruleForm" label-position="left" >
                    <el-form-item label="收货人" prop="nameFic">
                      <el-input v-model="ruleFormFic.nameFic"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="mobileNumberFic">
                      <el-input v-model="ruleFormFic.mobileNumberFic" />
                    </el-form-item>
                    <el-form-item label="地区"  prop="AddressFicqq" >
                      <el-select v-model="provinceFicNameqq" placeholder="请选择" @focus="handleprovinceFicqq()" style="width:100px;" >
                        <el-option
                          v-for="item in optionsFicqq"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="cityFicNameqq" placeholder="请选择" @focus="handleCityFicqq()" style="width:100px;">
                        <el-option
                          v-for="item in optionsFicqq1"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="districtFicNameqq" placeholder="请选择" @focus="handleDistrictFicqq()" style="width:100px;">
                        <el-option
                          v-for="item in optionsFicqq2"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                    </el-form-item>
                    <el-form-item label="详细地址:" prop="detailed_addressFic">
                      <el-input v-model="ruleFormFic.detailed_addressFic"></el-input>
                    </el-form-item>
                    <el-form-item label="邮政编码:" prop="Invitation_codeFic">
                      <el-input v-model="ruleFormFic.Invitation_codeFic"></el-input>
                    </el-form-item>
                  </el-form>
                  <el-button type="danger" style="margin-left:100px;cursor: pointer;" @click="ModifSave('ruleForm2')" class="Btn">确认修改</el-button>
                  <el-button type="danger" style="margin-left:30px;cursor: pointer;" @click="CancelModi()" class="CloBtn">取消</el-button>
                </div>
            </div>
            <div class="over"></div>
          </div>
        <el-table
          :border="true"
          :data="address"
          style="width: 85%;border:1px solid #ccc;margin:50px 0 0 20px;">
          <el-table-column
            label="收货人"
            width="180">
            <template slot-scope="scope">
              <!-- <i class="el-icon-time"></i> -->
              <span >{{ scope.row.receiver}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="所在地区"
            width="180">
            <template slot-scope="scope">
              <!-- <i class="el-icon-time"></i> -->
              <span >{{ scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="详细地址"
            width="180">
            <template slot-scope="scope">
              <!-- <i class="el-icon-time"></i> -->
              <span >{{ scope.row.address}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="邮编"
            width="180">
            <template slot-scope="scope">
              <!-- <i class="el-icon-time"></i> -->
              <span >{{ scope.row.zip_code}}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="电话/手机"
            width="180">
            <template slot-scope="scope">
              <!-- <i class="el-icon-time"></i> -->
              <span >{{ scope.row.tel}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button
                style="padding:10px;border:1px solid #666;"
                size="mini"
                @click="Modificationqq(scope.$index,scope.row)">修改</el-button>
              <el-button
                style="padding:10px;border:1px solid red;background:red;margin:0px 10px 0 0;float:left;"
                size="mini"
                type="danger"
                @click="delAddress(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
          <!-- <el-table-column
            label=""
            width="180"
            > -->
            <!-- <template slot-scope="scope">
              <el-button
                style="padding:10px;border:1px solid #666;"
                size="mini"
                @click="Default_address(scope.$index,scope.row)">设为默认
              </el-button>
            </template> -->
          <!-- </el-table-column> -->
        </el-table>
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
                callback(new Error("请输入正确的手机号"));
              } else {
                callback();
              }
            } else {
              callback(new Error("请输入电话号码"));
            }
        }
      };
      return {
        pop:1,
        popup1: 0,
        popup: 1,
        iscur:0,
        provinceq:'',
        districtq:'',
        cityq:'',
        // provinceFic:'',
        // cityFic:'',
        // districtFic:'',
        provinceFicNameqq:'',
        cityFicNameqq:'',
        districtFicNameqq:'',
        address:[],
        panduan:true,
        cityID:0,
        ruleForm: {
            name1: '',
            mobileNumber:'',
            detailed_address:'',
            Invitation_code:'',
          },
        ruleFormFic: {
            nameFic: '',
            mobileNumberFic:'',
            detailed_addressFic:'',
            Invitation_codeFic:'',
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
          // Address: [
          //   { required: true, message: '请输入地址', trigger: 'blur' },
          // ],
          detailed_address: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          Invitation_code:[
            { required: true, message: '请输入邮政编码', trigger: 'blur' },
          ]
        },
        rulesFic: {
           nameFic: [
            { required: true, message: '请输入收货人姓名', trigger: 'blur' },
            { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
          ],
          mobileNumberFic: [
            { required: true, message: "请输入手机号码", trigger: "blur" },
            { validator: isMobileNumber, trigger: "blur" }
          ],
          // AddressFic: [
          //   { required: true, message: '请输入地址', trigger: 'blur' },
          // ],
          detailed_addressFic: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
            { min: 0, max: 20, message: '长度在 1 到 50 个字符', trigger: 'blur' }
          ],
          Invitation_codeFic:[
            { required: true, message: '请输入邮政编码', trigger: 'blur' },
          ]
        },
        options: [],
        options1: [],
        options2: [],
        optionsFicqq: [],
        optionsFicqq1: [],
        optionsFicqq2: [],
        MfId:'',
        StatusData:0
      }
  },
  methods: {
    //设为默认地址
    // Default_address(index,row){
    //   console.log(row)
    //   this.$ajax({
    //     url:config.baseUrl + '/home/address/' + row.id,
    //     method:'put',
    //     data:{
    //       member_id:localStorage.getItem('userId'),
    //       status:0,
    //       receiver:row.receiver,
    //       province_id:row.province_id,
    //       city_id:row.city_id,
    //       area_id:row.area_id,
    //       street_id:row.street_id,
    //       zip_code:row.zip_code,
    //       tel:row.tel,
    //       address:row.address,
    //     }
    //   }).then(res=>{
    //     console.log(res)
    //   })
    // },
    ModifSave(formName){
       this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$ajax({
                  url:config.baseUrl + '/home/address/'+ this.MfId,
                  method:'put',
                  data:{
                    member_id:localStorage.getItem('userId'),
                    status:this.StatusData,
                    receiver:this.ruleFormFic.nameFic,
                    province_id:this.provinceFicNameqq,
                    city_id:this.cityFicNameqq,
                    area_id:this.districtFicNameqq,
                    street_id:55,
                    zip_code:this.ruleFormFic.Invitation_codeFic,
                    tel:this.ruleFormFic.mobileNumberFic,
                    address:this.ruleFormFic.detailed_addressFic,
                  }
                }).then(res=>{
                  if(res.data.code == 20000){
                    this.popup1 = 0
                    this.pop = 1
                    this.addA()
                  }
                })
       } else {
          return false;
        }
      });
    },
    //修改收货地址
    Modificationqq(index,row){
        this.MfId = row.id
      this.popup1 = 1;
      this.pop = 0;
      //地址查看接口
      this.$ajax({
        url:config.baseUrl + '/home/address/'+ row.id,
        method:'get',
      }).then(res=>{
        let resData = res.data.data
        console.log(resData)
        this.provinceFicNameqq = resData.province_id
        this.cityFicNameqq = resData.city_id
        this.districtFicNameqq = resData.area_id
        this.ruleFormFic.mobileNumberFic = resData.tel
        this.ruleFormFic.nameFic = resData.receiver
        this.ruleFormFic.detailed_addressFic = resData.address
        this.ruleFormFic.Invitation_codeFic =  resData.zip_code
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:1,
            pid:0
          }
        }).then(res=>{
          this.optionsFicqq = res.data.data
        })
          this.$ajax({
                url:config.baseUrl + '/home/regions/index',
                method:'post',
                data:{
                  level:2,
                  pid:this.provinceFicNameqq
                }
              }).then(res=>{
                this.optionsFicqq1 = res.data.data
              })
          this.$ajax({
                url:config.baseUrl + '/home/regions/index',
                method:'post',
                data:{
                  level:3,
                  pid:this.cityFicNameqq
                }
              }).then(res=>{
                console.log(res)
          this.optionsFicqq2 = res.data.data
        })
      })
    },
    //关闭地址弹窗
    Cancel(){
      this.popup = 0;
    },
    CancelModi(){
      this.popup1 = 0;
      this.pop = 1;
    },
    //打开地址弹窗
    showpopup() {
      this.popup = 1;
    },
    //删除地址
    delAddress(index, row){
      this.$ajax({
        url:config.baseUrl + '/home/address/'+ row.id,
        method:'delete',
      }).then(res=>{
        this.addA();
        if(res.data.code == 20000){
          if(this.address = []){
            this.panduan = true
          }
        }
      })
    },
     Save(formName){
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  this.$ajax({
                    url:config.baseUrl + '/home/address',
                    method:'post',
                    data:{
                      member_id:localStorage.getItem('userId'),//会员ID
                      receiver:this.ruleForm.name1,//接受者姓名
                      tel:this.ruleForm.mobileNumber,//电话
                      province_id:this.provinceq,//省ID
                      city_id:this.cityq,//市ID
                      area_id:this.districtq,//区ID
                      street_id:4,//街ID
                      address:this.ruleForm.detailed_address,//详细地址
                      zip_code:this.ruleForm.Invitation_code,//邮编
                      status:this.StatusData,//是否设置为默认地址
                    }
                  }).then(res=>{
                    if(res.data.code == 20000){
                        // this.panduan = false
                        this.addA();
                        const h = this.$createElement;
                        this.$notify({
                            title: '保存地址成功',
                            // message: '商品已成功加入购物侧，欢迎选购其他商品',
                            type: 'success',
                            customClass:'Dotification',
                          });
                        // this.popup = 0 ;
                        }
                  })
                } else {
                  return false;
                }
         });
     },
     addA(){
         this.$ajax({
              url:config.baseUrl + '/home/address',
              method:'get',
              params:{
                member_id:localStorage.getItem('userId'),
              }
            }).then(res=>{
              this.address = res.data.data.items
              if(res.data.data.items != ''){
                this.panduan  = false
              }
              let cityID = res.data.data.items
              cityID.map(item=>{
                this.province_id = item.province_id
                this.city = item.city_id
              })
          })
     },
     //省
      handleprovince(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:1,
            pid:0
          }
        }).then(res=>{
          this.options = res.data.data
          // console.log(this.options)
        })
      },
      //市
      handleCity(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:2,
            pid:this.provinceq,
          }
        }).then(res=>{
          this.options1 = res.data.data
          console.log(this.options1)
        })
      },
      //区
      handleDistrict(){
         this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:3,
            pid:this.cityq
          }
        }).then(res=>{
          this.options2 = res.data.data
        })
      },
      //修改省
      handleprovinceFicqq(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:1,
            pid:0
          }
        }).then(res=>{
          this.optionsFicqq = res.data.data
        })
      },
      //修改市
      handleCityFicqq(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:2,
            pid:this.provinceFicNameqq,
          }
        }).then(res=>{
          this.optionsFicqq1 = res.data.data
        })
      },
      //修改区
      handleDistrictFicqq(){
         this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:3,
            pid:this.cityFicNameqq
          }
        }).then(res=>{
          console.log(res)
          this.optionsFicqq2 = res.data.data
        })
      }
  },
  components:{
     VDistpicker,
  },
  created(){
    // this.options1 = {}
    // this.options = {}
    // this.options2 = {}
    this.addA()
  }
}
</script>
<style scoped lang="scss">
@import '../../../style/common';
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
    padding: 10px 20px;
    background-color: #5584ff;
    color:#fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .Btn:hover{
    background: rgb(83, 168, 255)
  }
  .CloBtn{
    padding: 10px 20px;
    background-color: #ccc;
    color:#fff;
    border-radius: 3px;
    cursor: pointer;
  }
  .CloBtn:hover{
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
ul{
      float: left;
      margin: 15px 20px 10px 20px;
      width: 238px;
      height: 107px;
      padding: 15px 40px 15px 20px;
      cursor: pointer;
      position: relative;
      background: url(//img.alicdn.com/tps/i2/T1VPiBXvpeXXbjLKQ7-237-106.png) no-repeat;
      .el-icon-delete{
        position: absolute;
        right: 20px;
        bottom: 20px;
        font-size: 20px;
      }
      .el-icon-delete:hover{
        color:#e94c15;
      }
      .el-icon-edit{
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 20px;
      }
      .el-icon-edit:hover{
        color:#e94c15;
      }
    }
     .NewAddress{
       border:1px solid #222;
       text-align: center;
       width: 120px;
       height: 40px;
       line-height: 40px;
      //  margin:25px 0 0 -20px;
       font-size: 14px;
       border-radius: 3px;
      //  position: absolute;
      //  top:140px;
      //  left: 20px;
     }
     .NewAddress:hover{
         background-color: #f2f3f7;
       }
    .cur{
      background-image: url(//img.alicdn.com/tfs/TB1OVRCRpXXXXaMXFXXXXXXXXXX-237-106.png)
    }
    .login {
      // position: fixed;
      font-size: 24px;
      height: 450px;
      width: 500px;
      background-color: #fff;
      border-radius: 0.25rem;
      // left: 50%;
      // top: 20%;
      // transform: translate(-50%, -20%);
      // z-index: 1000;
      padding: 10px 0 0 30px;
    }
      // .over {
      //   position: fixed;
      //   width: 100%;
      //   height: 100%;
      //   opacity: 0.7;//透明度为70%
      //   filter: alpha(opacity=70);
      //   top: 0;
      //   left: 0;
      //   z-index: 999;
      //   background-color: #111111;
      // }
     
.el-input__inner{
    padding: 0 !important;
    text-indent: 15px !important;
    border-radius: 0 !important;
  }
  .el-form-item__content{
      position: static !important;
    }
.el-form-item__error{
    position: static !important;
  }
.Dotification{
      position: absolute !important;
      left:45% !important;
      margin-top: 200px !important;
    }
  .distpicker-address-wrapper{
    select{
      width: 100px !important;
    }
  }
  .el-select-dropdown__list{
    padding-left: 10px !important;
  }
  .el-table__body-wrapper{
    .el-table__row{
      border:1px solid #ccc !important;
    }
      border:1px solid #ccc !important;
  }
  .el-select-dropdown__item{
    padding:0 15px !important;
  }
</style>
<style lang="scss">
 .el-form-item__content::after, .el-form-item__content::before{
        content:none !important;
      }
</style>
