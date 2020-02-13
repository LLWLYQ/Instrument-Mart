<template>
  <div class="Account_setting">
    <div class="content_container">
      <div class="top">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="个人会员" name="second">
            <div class="personage">
              <!-- <p>会员账号、头像、姓名、年龄、性别、所在行业、职业、所在地区/安全设置：密码更改、手机绑定、邮箱绑定</p> -->
              <div class="personal_information">
                <p>亲爱的用户,填写真实的资料，有助于好友找到你哦。</p>
                <label> 会员账号：</label><p>V&nbsp;15277748256</p>
                <label> 当前头像：</label><p style="height:180px;"><img src="../../../assets/imges/timg.jpg" alt=""></p>
                <label> 姓名：</label><p><input type="text" v-model="name"></p>
                <label> 年龄：</label><p><input type="text" v-model="age"></p>
                <label> 性别：</label><p><el-radio v-model="radio" label="1">男</el-radio><el-radio v-model="radio" label="2">女</el-radio></p>
                <label> 所在行业：</label><p><input type="text" v-model="industry"></p>
                <label> 职业：</label><p><input type="text" v-model="occupation"></p>
                <label> 所在地区：</label><p><input type="text" v-model="address"></p>
                <p class="save"><span>保存</span></p>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="企业会员" name="first">

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
      radio: '1'
    }
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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
  margin-left: 100px;
  margin-top: -10px;
}
  .personal_information{
    margin-left: 50px;
    label{
      margin-top: 20px;
    }
    p{
      padding-left: 100px;
      margin-top: -20px;
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
    p:nth-child(5){
      img{
        width: 150px;
        height: 150px;
      }
    }
    .el-radio{
      margin-top: 0;
    }
  }
</style>
// <style lang="scss">
//    .personal_information label[data-v-64fc71f0]{
//       margin-top: 0;
//     }
// </style>
