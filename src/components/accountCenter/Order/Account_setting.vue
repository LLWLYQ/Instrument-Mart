<template>
  <div class="Account_setting">
    <div class="content_container">
      <div class="top">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="个人会员" name="second">
            <div class="personage">
              <!-- <p>会员账号、头像、姓名、年龄、性别、所在行业、职业、所在地区/安全设置：密码更改、手机绑定、邮箱绑定</p> -->
              <div class="personal_information">
                <!-- <p>亲爱的用户,填写真实的资料，有助于好友找到你哦。</p> -->
                <label> 会员账号：</label><p>V&nbsp;15277748256</p>
                <label> 当前头像：</label><p style="height:180px;"><img src="../../../assets/imges/timg.jpg" alt=""></p>
                <label> 姓名：</label><p><input type="text" v-model="name"></p>
                <label> 年龄：</label><p><input type="text" v-model="age"></p>
                <label> 性别：</label><p><el-radio v-model="radio" label="1">男</el-radio><el-radio v-model="radio" label="2">女</el-radio></p>
                <label> 所在行业：</label><p><input type="text" v-model="industry"></p>
                <label> 职业：</label><p><input type="text" v-model="occupation"></p>
                <label> 所在地区：</label><p><input type="text" v-model="address"></p>
                <router-link to="/Security_settings" target="_blank" tag="a"><p class="change_password">修改登录密码?</p></router-link>
                <p class="save"><span>保存</span></p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="企业会员" name="first">
            <div class="cor_member">
              <!-- <p>亲爱的企业用户，填写真实的资料，有助于好友找到你哦</p> -->
              <label> 会员账号：</label><p>V&nbsp;15277748256</p>
              <label> 公司名称：</label><p>&nbsp;广州德禄信息科技有限公司</p>
              <label> 公司Logo：</label><p class="Logo"><img src="../../../assets/imges/timg.jpg" alt=""></p>
              <label> 所在行业：</label><p><input type="text" v-model="En_Industry"></p>
              <label> 所在地区：</label><p><input type="text" v-model="En_address"></p>
              <label> 主营产品：</label><p><input type="text" v-model="En_main_product"></p>
              <label> 经营模式：</label><p><input type="text" v-model="En_business_model"></p>
              <label> 公司网址：</label><p><input type="text" v-model="En_company_URL"></p>
              <router-link to="/Security_settings" target="_blank" tag="a"><p class="change_password">修改登录密码?</p></router-link>
              <router-link to="/Enterprise_real_name" target="_blank" tag="a"><p class="change_password">企业未实名，是否前往实名？</p></router-link>
              <p class="save"><span>保存</span></p>
            </div>
            <div></div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      activeName: 'second',
      tel:'',
      name:'',
      age:'',
      gender:'',
      industry:'',
      occupation:'',
      address:'',
      radio: '1',
      En_Industry:'',
      En_address:'',
      En_main_product:'',
      En_business_model:'',
      En_company_URL:''
    }
  },
  methods: {
    handleClick(tab, event) {
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Account_setting{
  width: 1340px;
  margin-left: 130px;
  margin-top: -10px;
}
  .personal_information{
    .change_password{
      line-height: 50px;
      font-size: 14px;
      color:#e94c15;
    }
    margin-left: 0px;
    label{
      margin-top: 20px;
    }
    p{
      padding-left: 100px;
      margin-top: -17px;
      height: 50px;
      input{
        border:1px solid #ccc;
        height: 30px;
        text-indent:10px;
      }
    }
    .save{
      margin-top: 10px;
      span{
        background: #e94c15;
        color:#fff;
        padding: 5px 20px;
        border-radius: 3px;
        cursor: pointer;
      }
      span:hover{
          background: #e94c;
        }
    }
    p:nth-child(4){
      img{
        width: 150px;
        height: 150px;
      }
    }
    .el-radio{
      margin-top: 0;
    }
  }
  .cor_member{
    width: 500px;
    height: 1000px;
    .change_password{
      line-height: 50px;
      font-size: 14px;
      color:#e94c15;
    }
    p{
      padding-left: 100px;
      margin-top: -17px;
      height: 50px;
      input{
        border:1px solid #ccc;
        height: 30px;
        text-indent:10px;
      }
    }
    .Logo{
      height: 200px;
      img{
        width: 150px;
        height: 150px;
      }
    }
    .save{
      margin-top: 10px;
      span{
        background: #e94c15;
        color:#fff;
        padding: 5px 20px;
        border-radius: 3px;
        cursor: pointer;
      }
      span:hover{
          background: #e94c;
        }
    }
  }
</style>
// <style lang="scss">
//    .personal_information label[data-v-64fc71f0]{
//       margin-top: 0;
//     }
// </style>
