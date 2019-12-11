<template>
  <div class="content_container">
      <div class="top">
        <div class="comment">
          <ul class="top_left">
            <li>网站导航</li>
            <li>网站导航</li>
            <li>网站导航</li>
          </ul>
          <ul class="top_right">
            <li>网站导航</li>
            <li>网站导航</li>
            <li>网站导航</li>
            <li>网站导航</li>
            <li>网站导航</li>
          </ul>
        </div>
      </div>
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
          <el-button slot="append" icon="el-icon-goods" id="SC_button"><router-link to="/cart"><span id="SC_span">ShoppingCart</span></router-link></el-button>
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
      </div>.
      <!-- 商品列表 -->
      <div class="List">
        <ul v-for="List in data_list" :key="List.id" class="List_ul">
          <li v-for="List_img in List.events" :key="List_img.id"><router-link :to="{name:'List',query:{listId:List_img.categoryId}}" target="_blank" tag="a"><img :src="List_img.imageUrl" alt="" class="List_li"><span>{{List_img.chineseName}}</span><span>{{List_img.englishName}}</span></router-link></li>
        </ul>
      </div>
      <div class="Right" >
        <li v-for="item in wpList" :key="item.name" :class="{active : active == item.name}" @click="selected(item.name)">{{item.name}}</li>
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
export default {
  data () {
    return {
      wpList: [
        {
        name: '食品饮料'
        },
        {
        name: '鲜花'
        },
        {
        name: '蛋糕'
        },
        {
        name: '水果生鲜'
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
    }
  },
  created(){
    this.keywords()
    this.M_L()
  },
  methods: {
    selected(name){
      this.active = name;
      let WS = $(window).scrollTop();
      if(this.active == '鲜花'){
        $("body,html").animate({scrollTop:$('.List').offset().top-30},100)
      }else if(this.active == '食品饮料'){
        $("body,html").animate({scrollTop:$('.mine').offset().top-30},100)
      }
      else if(this.active == '食品饮料'){
        $("body,html").animate({scrollTop:2000},100)
      }
      else if(this.active == '食品饮料'){
        $("body,html").animate({scrollTop:2000},100)
      }
      else if(this.active == '顶部'){
        $("body,html").animate({scrollTop:0},100)
      }
    },
    keywords(){
      for(let i=0;i<this.wpList.length;i++){
        // let list_li = i
        // console.log(list_li[i])
        $('.Right:eq("+i+") li:first').css('background','red')

      }
      // if($(window).scrollTop()>$('.List').offset().top-30 && $(window).scrollTop()<$('.mine').offset().top-30){

      // }
      this.$ajax({
					url:"http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1541912900086&summary=445aed26c2403f4500c76f14e6146ad2&platform_code=H5",
					method: "get",
					params: {
            id:155
					}
				}).then(res => {
            var ChineseName
            var list
            this.data_list = res.data.lists
            res.data.lists.map(val=>{
              ChineseName = val
            })
            ChineseName.events.map(Chinese=>{
              this.orgList = Chinese.chineseName
            })
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
.content_container{
  position:relative;
  width: 1440px;
  margin:0 auto;
  text-align: left;
}
  .top{
    height:30px;
    background-color:#fff;
    border-bottom: 2px solid #ccc;
    width:1440px;
    position: fixed;
    z-index:1111;
    overflow: hidden;
    .top_left{
      width:500px;
      float: left;
      color:red;
      :nth-child(n+2){
          margin-left:20px;
        }
      li{
      float: left;
      color:black;
      padding-top:5px;
      font-size:14px;
      font-weight: bold;
    }
    }
    .top_right{
      width:750px;
      float: right;
      color:red;
      :nth-child(n+2){
          margin-right:30px;
        }
      li{
        float: right;
        color:black;
        padding-top:5px;
        font-size:14px;
        font-weight: bold;
      }
    }
  }
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
        float: left;
        margin:0 0 0 100px;
      }
  }
  .List{
    height:2100px;
    li{
      height: 230px;
      width: 320px;
      float: left;
      margin:25px 0 0 25px;
    }
      img{
        height: 192px;
        width: 320px;
    }
  }

  .Right{
    position:fixed;
    right:0;
    top:50%;
    cursor: pointer;
    li{
      border:1px solid #ccc;
      width: 60px;
      height: 60px;
       :hover{
      background-color:#c81623;
      color:#fff;
    }
    }
    .active{
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
