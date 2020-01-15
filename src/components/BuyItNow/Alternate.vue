<template>
  <div class="Alternate">
    <div class="content_container">
      <div class="righttop">
        <a class="rule"  @click="showpopup"></a>
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
                  <el-button type="danger" style="margin-left:100px;" @click="Save()" class="Btn">保存</el-button>
                </div>
              </div>
              <!--这里是半透明背景层-->
              <div class="over"></div>
        </div>
    </div>
  </div>
</template>
<script>
import config from '../../config/config'
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
      popup: 0,
      province:'',
      city:'',
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
        options: [{
        }],
        options1: [{}],
        options2: [{}],
    }
  },
  methods: {
    //打开活动规则页面
    showpopup() {
      this.popup = 1;
    },
    //关闭活动规则页面
    // closepopup() {
    //   this.popup = 0;
    // },
    Save(){
       if(this.address = []){
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
           status:1,//是否设置为默认地址
         }
       }).then(res=>{
         if(res.data.code == 20000){
             this.panduan = false
             this.addA()
             this.popup = 0;
         }
       })
      }
     },
     handleprovince(){
        console.log(this.province)
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
          this.options.map(item=>{
          })
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
      addA(){
       this.$ajax({
              url:config.baseUrl + '/home/address',
              method:'get',
              params:{
                member_id:localStorage.getItem('userId'),
              }
            }).then(res=>{
              this.address = res.data.data.items
              // console.log(this.address)
              if(res.data.data.items != ''){
                this.panduan  = false
              }
              let cityID = res.data.data.items
              cityID.map(item=>{
                this.province_id = item.province_id
                this.city = item.city_id
                this.area = item.area_id
              })
              // if(res.data.data.items != ''){
              //   this.AddressList = false
              // }
          })
     },
  },
  created(){
    this.addA()
  }
}
</script>
<style scoped lang="scss">
@import '../../style/common';
.rule {
  position: absolute;
  width: 0.82rem;
  height: 0.36rem;
  top: 0.08rem;
  right: 0rem;
  background: #111111;
}
.login {
  position: fixed;
  font-size: 24px;
  height: 360px;
  width: 240px;
  background-color: gold;
  border-radius: 0.25rem;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
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
</style>
