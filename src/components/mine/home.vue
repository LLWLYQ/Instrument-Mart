<template>
  <div class="content_container">

      <!-- <div class="LoginForm" v-if="LF">
        <i class="el-icon-circle-close" @click="closeLF()"></i>
        <LoginForm style="width:100%;height:100%;" v-on:closeLogin='closeLogin'></LoginForm>
      </div>
      <div class="over" v-if="LF" @click="closeLF()"></div> -->
      <!-- <div class="top">
        <div class="comment">
          <ul class="top_left">
            <router-link to="/" ><li>仪商城首页</li></router-link>
            <router-link to="/register" target="_blank" tag="a"><li>请登录</li></router-link>
            <router-link to=""><li>欢迎来到仪商城</li></router-link>
            <router-link to="/MemberRegistration" target="_blank" tag="a"><li>免费注册</li></router-link>
          </ul>
          <ul class="top_right">
            <router-link to="/"><li>我的仪商城</li></router-link>
            <a style="cursor:pointer;" @click="GoCart()"><li><i class="el-icon-shopping-cart-2" style="font-weight:bold;color:#e94c15;" ></i>购物车</li></a>
            <router-link to="/"><li>收藏夹</li></router-link>
            <router-link to="/"><li>仪商网</li></router-link>
            <router-link to="/"><li>商家支持</li></router-link>
          </ul>
        </div>
      </div> -->
      <div class="com">
        <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
        <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          <ul class="SG_ul" style="float:left">
            <li>仪器搜索</li>
            <li>仪器资讯</li>
            <li>行业动态</li>
          </ul>
        </div>
        <div class="Shopping_Cart">
          <!-- <span>{{totalQuantity}}</span> -->
          <!-- <el-button slot="append" icon="el-icon-goods" id="SC_button" @click="goCart()"><span id="SC_span">ShoppingCart</span></el-button> -->
        </div>
        <ul class="com_ul">
          <li>首页</li>
          <li>品牌供应商</li>
          <li>4S旗舰店</li>
          <li>供求信息</li>
          <li>专家交流</li>
        </ul>
      </div>
      <div class="brand">
        <div class="B_l">
          <p><img src="../../assets/imges/B_l.png" alt=""></p>
          <div class="B_l_list">
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
            </ul>
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
            </ul>
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
            </ul>
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
            </ul>
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
            </ul>
            <ul>
              <p>只能家居</p>
              <li>路由器</li>
              <li>路由器</li>
              <li>路由器</li>
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
           <router-link :to="{name:'Detail',query:{listId:List.goods_id}}" target="_blank" tag="a"><li ><img :src="baseUrl+List.files_path" alt="" class="List_li"><span>{{List.goods_name}}</span><br><span style="color:red;">￥{{List.sales_price}}</span></li></router-link>
        </ul>
      </div>
      <div class="Right" >
        <li v-for="(item,index) in wpList" :key="index"  :class="{cur:iscur===index}" @click="iscur=index,selected(item.name,index)" >{{item.name}}</li>
      </div>
      <div class="mine" >
        <h1>电力电工仪表</h1>
        <div class="m_l">
          <ul class="ml_ul">
            <a :href="mla.url" @click="M_L()" v-for="mla in M_L_li.links" :key="mla.id" class="ml_a"><li class="ml_li">{{mla.name}}</li></a>
            <a href=""><li style="color:orange;float:left;margin-top:10px;">更多分类</li></a>
            <a href="#"><li ><img src="../../../static/mine_list_imges/big_img_3.jpg" alt="" style="margin-top:20px;"></li></a>
          </ul>
        </div>
        <div class="m_r">
          <a href=""  @click="M_L()" v-for="mra in M_L_li.list_bigimg" :key="mra.id" class="mr_a">
            <img :src="mra.img_url" alt="">
            <p>{{mra.name}}</p>
            <p>{{mra.merchant}}</p>
            <p>{{mra.price}}</p>
          </a>
        </div>
        <div class="m_b">
          <a href="" @click="M_L()" v-for="mba in M_L_li.list_smallimg" :key="mba.id" class="mb_a">
            <img :src="mba.img" alt="">
            <p>{{mba.name}}</p>
            <p>{{mba.merchant}}</p>
            <p>{{mba.price}}</p>
          </a>
        </div>
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
        },
      ],
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
    // console.log(Date.parse(new Date(this.date))/1000)

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
            // id:this.brandId,
            // name:this.name,
            // price:this.price,
            // pictUrl:this.pictUrl,
            // quantity
            // DiscountPrice:this.DiscountPrice,
          };
          this.$store.commit("addToShopCar",goodsinfos);
          this.carData.forEach(item=>{
            goodsinfos.quantity = item.quantity
          })
        })
  },
  methods: {
    // GoCart(){
    //   if(!this.UserId){
    //     this.LF = true
    //   }else{
    //     this.LF = false
    //     if(this.UserId){
    //       this.$router.push({
    //           path:'/cart'
    //         })
    //     }
    //   }

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
            path:'/cart'
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
.content_container{
  position:relative;
  width: 1440px;
  margin:0 auto;
  text-align: left;
}
  // .top{
  //   height:30px;
  //   background-color:#fff;
  //   border-bottom: 2px solid #ccc;
  //   width:1440px;
  //   // position: fixed;
  //   // z-index:50;
  //   overflow: hidden;
  //   .top_left{
  //     width:500px;
  //     float: left;
  //     color:red;
  //     :nth-child(n+2){
  //         margin-left:20px;
  //       }
  //     a{
  //       float: left;
  //       color:black;
  //       padding-top:5px;
  //       font-size:14px;
  //       font-weight: bold;
  //     }
  //     a:hover{
  //       color: #e94c15;
  //     }
  //   }
  //   .top_right{
  //     width:750px;
  //     float: right;
  //     color:red;
  //     :nth-child(n+2){
  //         margin-right:30px;
  //       }
  //     a{
  //       float: right;
  //       color:black;
  //       padding-top:5px;
  //       font-size:14px;
  //       font-weight: bold;
  //     }
  //      a:hover{
  //       color: #e94c15;
  //     }
  //   }
  // }
  .com{
    height: 180px;
    padding-top:60px;
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
      margin-left:345px;
      margin-top: -2px;
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
        height: 440px;
        width:260px;
        float: left;
        margin:0;
        background-color: #F8F8FF;
        img{
          width: 100%;
        }
        .B_l_list{
          border:1px solid #fff;
          border-radius: 5%;
          background-color:#fff;
          margin: 5px 5px 8px 5px;
          padding:0 30px ;
          ul:nth-child(-n+5){
            border-bottom: 1px solid #ccc;
          }
          ul{
            height: 62px;
            li:nth-child(n+3){
              margin-left:10px;
            }
            p{
              font-weight: bold;
              font-size: 15px;
              color:#A8A8A8;
              padding-top: 10px;
            }
            li{
              float: left;
              font-size:13px;
              color: #A8A8A8;
              margin-top: 5px;
            }
          }
        }
      }
      .B_c{
        height: 440px;
        width:700px;
        background-color: black;
        float: left;
        margin:0 0 0 85px;
        position: relative;
        img{
          height: 440px;
          width: 700px;
        }
        .swiper-pagination{
          position: absolute;
          left: 250px;
          top:380px;
          span{
            width: 15px;
            height: 15px;
          }
        }
      }
      .B_r{
        height: 440px;
        width:280px;
        background-color: yellow;
        float: right;
        // margin:0 0 0 100px;
      }
  }
  .List{
    height:2100px;
    a{
      height: 350px;
      width: 320px;
      float: left;
      padding:20;
      margin:20px;
      overflow: hidden;
      li{
        height: 340px;
        width: 310px;
        span{
          color:#222;
        }
      }
    }
    a:hover{
      border:1px solid #222;
    }
      img{
        height: 300px;
        width: 318px;
    }
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
  .mine{
    height: 700px;
    .m_l{
      width: 250px;
      height: 400px;
      float: left;
      .ml_a{
        float: left;
        width: 100px;
        color:#000;
        margin-top: 10px;
        :hover{
          color:red;
        }
      }
    .ml_a:last-child{
        color:orange;
      }
    }
    .m_r{
      width: 1190px;
      height: 400px;
      float: left;
       a:nth-child(2){
          width: 280px;
          height: 410px;
        }
        a:nth-child(n+3){
          width: 220px;
          height: 200px;
          margin-left: 50px;
        }
        a:nth-child(n+4){
          margin-top: 10px;
        }
      .mr_a{
        float: left;
        img{
          text-align: center;
        }
      }

    }
     .m_b{
        float: right;
        width: 1190px;
        height: 250px;
        a{
          float: left;
          margin-top:50px;
          margin-left: 100px;
        }
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
