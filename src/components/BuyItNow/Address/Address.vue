<template>
  <div class="Address" >
    <div @click="addA()">
      <div class="mine" v-if="panduan" >
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm1" label-width="100px" class="demo-ruleForm" label-position="left" >
          <el-form-item label="收货人" prop="name1">
            <el-input v-model="ruleForm.name1"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="mobileNumber">
            <el-input v-model="ruleForm.mobileNumber" />
          </el-form-item>
          <el-form-item label="地区"  prop="Address" >
            <el-select v-model="province" placeholder="请选择" @focus="handleprovince()" style="width:100px;" >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="city" placeholder="请选择" @focus="handleCity()" style="width:100px;">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.name"
                :value="item.id"
              >
              </el-option>
            </el-select>
            <el-select v-model="district" placeholder="请选择" @focus="handleDistrict()" style="width:100px;">
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
        <el-button type="danger" style="margin-left:100px;" @click="Save('ruleForm1')" class="Btn">使用此收货地址</el-button>
      </div>
      <div>
        <div v-for="(adr,index) in address" :key="index">
          <ul  :class="{cur:iscur===index}" @click="iscur=index,tabChange(index,adr)"  >
            <li>
              <h5 style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">({{adr.receiver}}收)</h5>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">{{adr.address}}</p>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">{{adr.tel}}</p>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;" v-if="iscur != index">{{adr.zip_code}}</p>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;" v-if="iscur == index">{{adr.zip_code}}<span style="color:red;float:right;font-size:10px;margin-bottom:5px;">默认地址</span></p>
              <i class="el-icon-edit" @click="Modification(adr,index)" ></i>
              <i class="el-icon-delete" @click="delAddress(adr,index)"></i>
            </li>
          </ul>
          <!-- <ul  :class="{cur:iscur===index}" @click="iscur=index,tabChange(index,adr)" v-if="adr.status == 1" >
            <li>
              <h5 style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">({{adr.receiver}}收)</h5>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">{{adr.address}}</p>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">{{adr.tel}}</p>
              <p style="font-size:14px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:170px;">{{adr.zip_code}}<span style="color:red;float:right;font-size:10px;margin-bottom:5px;">默认地址</span></p>
              <i class="el-icon-edit" @click="Modification(adr,index)" ></i>
              <i class="el-icon-delete" @click="delAddress(adr,index)"></i>
            </li>
          </ul> -->
        </div>
        <router-link to="/Shipping_address" target="_blank" tag="a" ><p style="float:left;margin-top:100px;" v-if="Newaddress">管理收货地址</p></router-link>
        <div style="width:100%;overflow:hidden;margin: 10px 0 0 10px;">
          <p class="NewAddress" @click="showpopup"  v-if="!panduan">使用新地址</p>
        </div>
      </div>
    </div>
    <div v-show="popup" >
              <!--这里是要展示的内容层-->
              <div class="login">
                <div class="mine">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" label-position="left" >
                    <el-form-item label="收货人" prop="name1">
                      <el-input v-model="ruleForm.name1"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码" prop="mobileNumber">
                      <el-input v-model="ruleForm.mobileNumber" />
                    </el-form-item>
                    <el-form-item label="地区"  prop="Address" >
                      <el-select v-model="province" placeholder="请选择" @focus="handleprovince()" style="width:100px;" >
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="city" placeholder="请选择" @focus="handleCity()" style="width:100px;">
                        <el-option
                          v-for="item in options1"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="district" placeholder="请选择" @focus="handleDistrict()" style="width:100px;">
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
                  <el-button type="danger" style="margin-left:100px;" @click="SaveTwo('ruleForm')" class="Btn">保存</el-button>
                  <el-button type="danger" style="margin-left:30px;" @click="Cancel()" class="CloBtn">取消</el-button>
                </div>
              </div>
              <!--这里是半透明背景层-->
              <div class="over"></div>
      </div>
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
                    <el-form-item label="地区"  prop="AddressFic" >
                      <el-select v-model="provinceFicName" placeholder="请选择" @focus="handleprovinceFic()" style="width:100px;" >
                        <el-option
                          v-for="item in optionsFic"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="cityFicName" placeholder="请选择" @focus="handleCityFic()" style="width:100px;">
                        <el-option
                          v-for="item in optionsFic1"
                          :key="item.value"
                          :label="item.name"
                          :value="item.id"
                        >
                        </el-option>
                      </el-select>
                      <el-select v-model="districtFicName" placeholder="请选择" @focus="handleDistrictFic()" style="width:100px;">
                        <el-option
                          v-for="item in optionsFic2"
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
                  <el-button type="danger" style="margin-left:100px;" @click="ModifSave('ruleForm2')" class="Btn">保存</el-button>
                  <el-button type="danger" style="margin-left:30px;" @click="CancelModi()" class="CloBtn">取消</el-button>
                </div>
            </div>
            <div class="over"></div>
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
              }else {
                callback();
              }
            } else {
              callback(new Error("请输入电话号码"));
            }
        }
      };
      return {
        Newaddress:true,
        popup1: 0,
        popup: 0,
        iscur:'',
        province:'',
        city:'',
        provinceFic:'',
        cityFic:'',
        districtFic:'',
        provinceFicName:'',
        cityFicName:'',
        districtFicName:'',
        address:'',
        panduan:true,
        district:'',
        cityID:0,
        ruleForm: {
            name1: '',
            mobileNumber:'',
            detailed_address:'',
            Invitation_code:'',
            // province:'',
            // city:'',
            // area:'',
          },
        ruleFormFic: {
            nameFic: '',
            mobileNumberFic:'',
            detailed_addressFic:'',
            Invitation_codeFic:'',
            // province:'',
            // city:'',
            // area:'',
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
            { required: true, message: '请输入邮政编码（可选）', trigger: 'blur' },
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
            { required: true, message: '请输入邮政编码（可选）', trigger: 'blur' },
          ]
        },
        options: [{}],
        options1: [{}],
        options2: [{}],
        optionsFic: [{}],
        optionsFic1: [{}],
        optionsFic2: [{}],
        MfId:'',
      }
  },
  methods: {
    //会员地址编辑 = 修改收货地址
    ModifSave(formName){
       this.$refs[formName].validate((valid) => {
              if (valid) {
                this.$ajax({
                  url:config.baseUrl + '/home/address/'+ this.MfId,
                  method:'put',
                  data:{
                    member_id:localStorage.getItem('userId'),
                    status:0,
                    receiver:this.ruleFormFic.nameFic,
                    province_id:this.provinceFicName,
                    city_id:this.cityFicName,
                    area_id:this.districtFicName,
                    street_id:55,
                    zip_code:this.ruleFormFic.Invitation_codeFic,
                    tel:this.ruleFormFic.mobileNumberFic,
                    address:this.ruleFormFic.detailed_addressFic,
                  }
                }).then(res=>{
                  // console.log(res)
                  if(res.data.code == 20000){
                    this.popup1 = 0
                    this.addA()
                  }
                })
       } else {
          return false;
        }
      });
    },
    //修改收货地址
    Modification(adr,index){
      
      this.MfId = adr.id
      this.popup1 = 1;
      //地址查看接口
      this.$ajax({
        url:config.baseUrl + '/home/address/'+ adr.id,
        method:'get',
      }).then(res=>{
        let resData = res.data.data
        this.provinceFicName = resData.province_id
        this.cityFicName = resData.city_id
        this.districtFicName = resData.area_id
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
          this.optionsFic = res.data.data
        })
          this.$ajax({
                url:config.baseUrl + '/home/regions/index',
                method:'post',
                data:{
                  level:2,
                  pid:this.provinceFicName
                }
              }).then(res=>{
                this.optionsFic1 = res.data.data
              })
          this.$ajax({
                url:config.baseUrl + '/home/regions/index',
                method:'post',
                data:{
                  level:3,
                  pid:this.cityFicName
                }
              }).then(res=>{
          this.optionsFic2 = res.data.data
        })
      })
    },
    //关闭地址弹窗
    Cancel(){
      this.popup = 0;
    },
    CancelModi(){
      this.popup1 = 0;
    },
    //打开地址弹窗`
    showpopup() {
      this.popup = 1;
    },
    //删除地址
    delAddress(adr,index){
      this.$ajax({
        url:config.baseUrl + '/home/address/'+ adr.id,
        method:'delete',
      }).then(res=>{
        this.addA();
        if(res.data.code == 20000){
          if(this.address = []){
            this.panduan = true
            location.reload()
          }
        }
      })
    },
    tabChange(index,adr){
      console.log(adr)
      this.$emit('addressData',adr)
      this.iscur = index
      this.adrID = adr.id
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
                      province_id:this.province,//省ID
                      city_id:this.city,//市ID
                      area_id:this.district,//区ID
                      street_id:4,//街ID
                      address:this.ruleForm.detailed_address,//详细地址
                      zip_code:this.ruleForm.Invitation_code,//邮编
                      status:0,//是否设置为默认地址
                    }
                  }).then(res=>{
                    if(res.data.code == 20000){
                        this.panduan = false
                        this.addA();
                        this.popup = 0;
                        this.Newaddress = true
                      }
                  })
                } else {
                  return false;
                }
         });
     },
     SaveTwo(formName){
       this.$refs[formName].validate((valid) => {
              if (valid) {
                  this.$ajax({
                    url:config.baseUrl + '/home/address',
                    method:'post',
                    data:{
                      member_id:localStorage.getItem('userId'),//会员ID
                      receiver:this.ruleForm.name1,//接受者姓名
                      tel:this.ruleForm.mobileNumber,//电话
                      province_id:this.province,//省ID
                      city_id:this.city,//市ID
                      area_id:this.district,//区ID
                      street_id:4,//街ID
                      address:this.ruleForm.detailed_address,//详细地址
                      zip_code:this.ruleForm.Invitation_code,//邮编
                      status:0,//是否设置为默认地址
                    }
                  }).then(res=>{
                    if(res.data.code == 20000){
                        this.panduan = false
                        this.addA();
                        this.popup = 0 ;        }
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
              // console.log(res.data.data.items)
              // if(res.data.data.items.status == 1){
                // this.$refs.curNum.style.display = 'none'
              // }
              this.address = res.data.data.items
              if(res.data.data.items != ''){
                this.panduan  = false
              }else{
                this.Newaddress = false
              }
              let cityID = res.data.data.items
              cityID.map(item=>{
                this.province_id = item.province_id
                this.city = item.city_id
                this.area = item.area_id
              })
          })
     },
     submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
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
      },
      handleDownload(file) {
      },
      //省级接口
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
        })
      },
      //市级接口
      handleCity(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:2,
            pid:this.province
          }
        }).then(res=>{
          this.options1 = res.data.data
        })
      },
      //区级接口
      handleDistrict(){
         this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:3,
            pid:this.city
          }
        }).then(res=>{
          this.options2 = res.data.data
        })
      },
     //修改地址调用省市区 接口
      handleprovinceFic(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:1,
            pid:0
          }
        }).then(res=>{
          this.optionsFic = res.data.data
        })
      },
      //市级接口
      handleCityFic(){
        this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:2,
            pid:this.provinceFicName
          }
        }).then(res=>{
          this.optionsFic1 = res.data.data
        })
      },
      //区级接口
      handleDistrictFic(){
         this.$ajax({
          url:config.baseUrl + '/home/regions/index',
          method:'post',
          data:{
            level:3,
            pid:this.cityFicName
          }
        }).then(res=>{
          this.optionsFic2 = res.data.data
        })
      }
  },
  components:{
     VDistpicker,
  },
  created(){
    this.addA()
    // this.tabChange()
  },
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
      margin: 15px 20px 10px 10px;
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
      //  padding:5px 10px ;
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
      position: fixed;
      font-size: 24px;
      height: 450px;
      width: 500px;
      background-color: #fff;
      border-radius: 0.25rem;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -20%);
      z-index: 1000;
      padding: 10px 0 0 30px;
    }
      .over {
        position: fixed;
        width: 100%;
        height: 100%;
        opacity: 0.7;//透明度为70%
        filter: alpha(opacity=70);
        top: 0;
        left: 0;
        z-index: 999;
        background-color: #111111;
      }
      .el-input__inner{
      padding: 0 !important;
      text-indent: 15px !important;
      border-radius: 0 !important;
    }
    .el-select-dropdown__item{
    padding:0 15px !important;
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
