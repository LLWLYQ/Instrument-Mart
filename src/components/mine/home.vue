<template>
  <div class="content_container">


      <div class="com">
        <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
        <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          <!-- <ul class="SG_ul" style="float:left">
            <li>仪器搜索</li>
            <li>仪器资讯</li>
            <li>行业动态</li>
          </ul> -->
        </div>
        <div class="Shopping_Cart">
          <!-- <span>{{totalQuantity}}</span> -->
          <!-- <el-button slot="append" icon="el-icon-goods" id="SC_button" @click="goCart()"><span id="SC_span">ShoppingCart</span></el-button> -->
        </div>
        <ul class="com_ul">
          <li><i class="el-icon-s-home"></i> 首页</li>
          <li><i class="el-icon-s-platform"></i> 品牌供应商</li>
          <li><i class="el-icon-s-flag"></i> 4S旗舰店</li>
          <li><i class="el-icon-s-promotion"></i> 供求信息</li>
          <li><i class="el-icon-s-custom"></i> 专家交流</li>
        </ul>
      </div>
      <div class="brand">
        <div class="B_l">
          <p><i class="el-icon-s-grid"></i> 商品分类</p>
          <div class="B_l_list">
            <ul>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
              <li>路由器/电脑</li>
            </ul>
          </div>
        </div>
        <div class="B_c">
          <div class="swiper-container">
              <div class="swiper-wrapper">
                  <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg" alt=""></div>
                  <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg" alt=""></div>
              </div>
              <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="B_r"></div>
      </div>
      <!-- 商品列表 -->
      <div class="List">
        <ul v-for="List in data_list" :key="List.id" class="List_ul">
          <!-- <li ><router-link :to="{name:'List',query:{listId:List_img.categoryId}}" target="_blank" tag="a"><img src="../../assets/imges/sp_5.jpg" alt="" class="List_li"><span>{{List.goods_name}}</span><span></span></router-link></li> -->
           <router-link :to="{name:'Detail',query:{listId:List.goods_id}}" target="_blank" tag="a"><li ><img :src="baseUrl+List.files_path" alt="" class="List_li"><div class="List_div">{{List.goods_name}}</div><div class="List_div1" style="color:red;">￥{{List.sales_price}}</div></li></router-link>
        </ul>
      </div>
      <div class="Right" >
        <li v-for="(item,index) in wpList" :key="index"  :class="{cur:iscur===index}" @click="iscur=index,selected(item.name,index)" >{{item.name}}</li>
      </div>
  </div>
</template>
<script>
import HomeSerach from '../home_child/home_serach.vue'
import $ from 'jquery'
import Swiper from 'swiper';
import config from '../../config/config'
import {mapGetters, mapState} from 'vuex'
import LoginForm from '../../components/LoginForm/LoginForm'
export default {
  data () {
    return {
      date: new Date(),
      iscur:0,
      LF:false,
      baseUrl:'http://shop.yishangm.com',
      wpList: [
        {
        name: '电子测量仪器'
        },
        {
        name: '电力电工仪表'
        },
        {
        name: '工业自动化仪表与控制系统'
        },
        {
        name: ' 传感器与仪器仪表器件及材料'
        },
        {
        name: '顶部'
        }],
      active:'',
      selectVal:'',
      orgList:'',
      data_list:'',
      isTop: true,
      osTop:'',
      SLT:'',
      M_L_li:'',
      num:'',
      carData:'',
      UserId:localStorage.getItem('userId'),
    }
  },
    mounted() {
        var that = this;
        this.timer = setInterval(() => {
          that.date = new Date(); //修改数据date
        }, 1000);
      },
    beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
        }
      },
  created(){
    // this.JiaSuo()
    this.keywords()
    this.M_L()
     this.$ajax({
          url:config.baseUrl+'/home/cart',
          method:'get',
          params:{
            member_id:localStorage.getItem('userId')
          }
        }).then(res=>{
          this.carData= res.data.data.items.data
          var goodsinfos = {
          };
          this.$store.commit("addToShopCar",goodsinfos);
          this.carData.forEach(item=>{
            goodsinfos.quantity = item.quantity
          })
        })
  },
  methods: {
    // JiaSuo(){
    //   this.$ajax({
    //     url:config.baseUrl + 'home/page',
    //     method:'post',
    //     data:{
    //       id:localStorage.setItem('userId')
    //     }
    //   }).then(res=>{
    //     console.log(res)
    //   })
    // },
    closeLF(){
      this.LF = false
    },
    closeLogin(closeLogin){
      this.LF = closeLogin
    },
    goCart(){
      this.$ajax({
        url:config.baseUrl+'/home/cart',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId')
        }
      }).then(res=>{
        if(res.data.code == 20000){
          this.$router.push({
            path:'/cart',
            param
          })
        }
      })
    },
    selected(name,index){
      this.iscur = index
      this.active = index;
      let WS = $(window).scrollTop();
      if(this.active == 0){
        $("body,html").animate({scrollTop:$('.List').offset().top-30},100)
      }else if(this.active == 1){
        $("body,html").animate({scrollTop:$('.mine').offset().top-30},100)
      }
      else if(this.active == 2){
        $("body,html").animate({scrollTop:2000},100)
      }
      else if(this.active == 3){
        $("body,html").animate({scrollTop:2000},100)
      }
      else if(this.active == 4){
        $("body,html").animate({scrollTop:0},100)
        // $("body,html").animate({scrollTop:0},200)
      }
    },
    keywords(){
      this.$ajax({
					url:config.baseUrl + '/home/goods',
					method: "get",
				}).then(res => {
            this.data_list = res.data.data.items
        });
    },
    M_L(){
      this.$ajax({
        url:"../../../static/data.json",
        method:"get"
      }).then(res=>{
        console.log('cuibachengcjam[')
        this.M_L_li = res.data
      })
    }
  },
  components:{
    HomeSerach,
    LoginForm
  },
  computed:{
    ...mapGetters(['totalQuantity'])
  },
   mounted(){
        var mySwiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            clickable :true
          },
          speed:1000,
          autoplay:{
            disableOnInteraction: false,  // 用户操作swiper之后，是否禁止autoplay
            delay: 3000, // 自动切换的时间间隔（单位ms），
          },
          loop:true,
        })
    },
}
</script>
//局部样式
<style lang="scss" scoped>
@import "../../style/base";
.LoginForm {
      position: fixed;
      font-size: 24px;
      height: 430px;
      width: 350px;
      background-color: #fff;
      border-radius: 0.25rem;
      left: 50%;
      top: 20%;
      transform: translate(-50%, -20%);
      cursor: pointer;
      z-index: 1000;
      padding: 10px 0 0 30px;
       .el-icon-circle-close{
            font-size: 20px;
            float: right;
            margin: 0px 10px 0 0;
            cursor: pointer;
          }
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
  .com{
    height: 180px;
    padding-top:60px;
    .logo_img{
      width: 200px;
      img{
        width: 100%;
      }
    }
    .Search_Goods{
      position: absolute;
      left:345px;
      top:70px;
      overflow: hidden;
      width: 615px;
    }
    .Shopping_Cart{
      position: absolute;
      overflow: hidden;
      right:50px;
      top:70px;
    }
    .SG_ul{
      :nth-child(n+2){
        padding-left: 10px;
      }
      li{
        float: left;
        font-size:14px;
        padding:5px 0 0 0;
        color:#A8A8A8;
      }
    }
    .com_ul{
      height: 20px;
      width: 600px;
      float: left;
      margin-left:225px;
      margin-top: 15px;
      font-weight: bold;
      font-size:16px;
      :hover{
        color:red;
        cursor: pointer;
      }
      :nth-child(n+2){
        margin-left: 40px;
      }
      li{
        float: left;
      }
    }
  }
  .brand{
      height:460px;
      .B_l{
          background-color: #fff;
          width: 200px;
          z-index: 11;
          float: left;
          p{
            background-color: #000;
            height: 36px;
            line-height: 40px;
            padding-left: 14px;
            font-size: 14px;
            color: #FFF;
            margin-top: -36px;
          }
        .B_l_list{
          // border:1px solid #fff;
          border-radius: 5%;
          // background-color:#fff;
          ul:nth-child(-n+5){
            border-bottom: 1px solid #ccc;
          }
          ul{
            // background-color: rgba(0,0,0,.55);
            background-color: #333;
            width: 200px;
            height: 441px;
            position: relative;
            z-index: 11;
            li{
              padding-left: 14px;
              width: 200px;
              position: relative;
              height: 32px;
              line-height: 32px;
              color: #fff;
              font-size: 14px;
              cursor: pointer;
            }
            li:hover{
              background: #fff;
              position: relative;
              color: #000;
              font-size: 12px;
            }
          }
        }
      }
      .B_c{
        height: 440px;
        width:800px;
        background-color: black;
        float: left;
        position: relative;
        img{
          height: 440px;
          width: 800px;
        }
        .swiper-pagination{
          position: absolute;
          left: 0px;
          bottom: 30px;
          span{
            width: 50px;
            height: 15px;
          }
        }
      }
      .B_r{
        height: 440px;
        width:230px;
        background-color: yellow;
        float: right;
        // margin:0 0 0 100px;
      }
  }
  .List{
    height:2100px;
    .List_div{
      width: 135px;
      height: 40px;
      font-size: 14px;
      color: #333;
      line-height: 20px;
      overflow: hidden;
      margin: 8px auto;
    }
    .List_div1{
      font-size: 18px;
      color: #FF0036;
      line-height: 18px;
      margin: 10px auto;
    }
    .List_ul{
      height: 300px;
      width: 234px;
      float: left;
      overflow: hidden;
      margin: 0 auto;
      border:1px solid #666;
    }
      li{
        span{
          color:#222;
        }
    }
    a:hover{
      border:1px solid #222;
    }
      img{
        height: 185px;
        width: 185px;
    }
  }
  .List_ul:nth-child(10n+10){
      float: left;
      position: relative;
      width: 235px;
      height: 618px;
    }
  .List_ul:nth-child(-n+10){
      margin-left: 13px;
      padding:25px;
    }
  .List_ul:nth-child(1){
      float: left;
      position: relative;
      width: 235px;
      height: 618px;
      font-size: 0;
      margin: 0;
      padding: 0;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .List_ul:nth-child(n+6){
      margin-top: 18px;
    }
  .Right{
    position:fixed;
    right:0;
    top:30%;
    cursor: pointer;
    li{
      border:1px solid #ccc;
      font-size: 12px;
      width: 80px;
      height: 80px;
      text-align: left;
      padding: 5px;
       :hover{
      background-color:#c81623;
      color:#fff;
    }
    }
    .cur{
       background-color:#c81623;
        color:#fff;
    }
  }
</style>
//全局样式
<style lang="scss">
  #SC_button{
    height: 60px;
    font-size: 40px;
    background-color:#e94c15;
    color:#fff;
    padding:10px;
  }
  #SC_span{
    font-size:16px;
    float: right;
    padding-top: 12px;
}
#ELB:hover{
  background-color: red;
  border: 2px solid red;
}
#ELB{
  border-radius:0; background-color: #e94c15;border: 2px solid #e94c15;color:#fff;
}
</style>
