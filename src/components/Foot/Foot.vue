<template>
  <div class="foot">
    <div class="content">
      <div class="mine">
        <div class="foot_top">
          <div class="FootTitle">
            <ul>
              <li v-for="(ft,index) in FootTitle" :key="index">
                <p><i :class="ft.icon"></i><span>{{ft.cate_name}}</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div class="cut-off_rule">
          <ul class="ShoppingGuide">
            <li v-for="(sg,index) in ShoppingGuide" :key="index">
              <router-link :to="{name:'BottomNavigationBar',query:{AcId:sg.ac_id}}" target="_blank" tag="a">{{sg.article_title}}</router-link>
            </li>
          </ul>
          <ul class="HelpCenter">
            <li v-for="(hc,index) in HelpCenter" :key="index">
              <router-link :to="{name:'BottomNavigationBar',query:{AcId:hc.ac_id}}" target="_blank" tag="a">{{hc.article_title}}</router-link>
            </li>
          </ul>
          <ul class="Distribution">
            <li v-for="(db,index) in Distribution" :key="index">
              <router-link :to="{name:'BottomNavigationBar',query:{AcId:db.ac_id}}" target="_blank" tag="a">{{db.article_title}}</router-link>
            </li>
          </ul>
          <ul class="service">
            <li v-for="(sv,index) in service" :key="index">
              <router-link :to="{name:'BottomNavigationBar',query:{AcId:sv.ac_id}}" target="_blank" tag="a">{{sv.article_title}}</router-link>
            </li>
          </ul>
          <ul class="helpInformation">
            <li v-for="(hf,index) in helpInformation" :key="index">
              <router-link :to="{name:'BottomNavigationBar',query:{AcId:hf.ac_id}}" target="_blank" tag="a">{{hf.article_title}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../config/config'
export default {
  data () {
    return {
      FootTitle:'',
      ShoppingGuide:'',//购物指南
      HelpCenter:'',//支付帮助
      Distribution:'',//配送帮助
      service:'',//售后服务
      helpInformation:''//帮助信息
    }
  },
  methods: {
    Article0(){
      this.$ajax({
        url:config.baseUrl + '/home/article',
        method:'get',
        params:{
          pid:1
        }
      }).then(res=>{
        this.ShoppingGuide = res.data.data.items.data
        // let service = 'why buhaodeshiqing come one after another'
      }) 
    },
    Article1(){
      this.$ajax({
        url:config.baseUrl + '/home/article',
        method:'get',
        params:{
          pid:2
        }
      }).then(res=>{
        this.HelpCenter = res.data.data.items.data
      }) 
    },
    Article2(){
      this.$ajax({
        url:config.baseUrl + '/home/article',
        method:'get',
        params:{
          pid:4
        }
      }).then(res=>{
        this.Distribution = res.data.data.items.data
      }) 
    },
    Article3(){
      this.$ajax({
        url:config.baseUrl + '/home/article',
        method:'get',
        params:{
          pid:5
        }
      }).then(res=>{
        this.service = res.data.data.items.data
      }) 
    },
    Article4(){
      this.$ajax({
        url:config.baseUrl + '/home/article',
        method:'get',
        params:{
          pid:6
        }
      }).then(res=>{
        this.helpInformation = res.data.data.items.data
      }) 
    }
  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/articleClassify',
      method:'get',
    }).then(res=>{
      this.FootTitle = res.data.data
      // console.log(this.FootTitle)
    }) 
    this.Article0()
    this.Article1()
    this.Article2()
    this.Article3()
    this.Article4()
  }
}
</script>

<style scoped lang="scss">
@import '../../../src/style/common';
  .foot{
    // margin-top:30px;
    background-color: #000;
    height: 250px;
    width: 100%;
    position:absolute;
    .content{
      width: 1230px;
      margin: 0 auto;
      padding:20px 100px;
    }
    .foot_top{
      .FootTitle{
        ul{
          li{
            color:#fff;
            float: left;
            p{
              width: 206px;
              text-align: center;
              height: 50px;
              line-height: 40px;
              span{
                font-size: 16px;
                font-weight: 800;
                height: 50px;
                line-height: 40px;
              }
            }
          }
        }
      }
    }
    .cut-off_rule{
      ul{
        float: left;
        width: 206px;
        li{
          a{
            width: 100%;
            color:#fff;
            float: left;
            text-align: center;
            cursor: pointer;
          }
        }
        li a:hover{
          text-decoration: underline;
        }
      }
    }
  }
</style>
