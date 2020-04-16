<template>
  <div class="FlagshipShopList">
    <div class="center">
      <div class="top">
        <div class="top_img">
          <img src="../../assets/imges/logo.png" alt="">
          <!-- <h1>仪商通VIP品牌供应商</h1> -->
          <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          </div>
        </div>
      </div>
      <div class="header">
        <ul>
          <li><router-link to='/'>首页</router-link></li>
          <li><router-link to='/'>品牌供应商</router-link></li>
          <li><router-link to='/'>4S旗舰店</router-link></li>
          <li><router-link to='/'>供求与招标</router-link></li>
          <li><router-link to='/'>行业资讯</router-link></li>
          <li><router-link to='/'>专家咨询</router-link></li>
          <li><router-link to='/'>客服中心</router-link></li>
        </ul>
      </div>
      <div class="slideshow">
        <div id="gallery" class="swiper-container" style="margin-bottom: 10px;">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg"/></div>
            <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg"/></div>
            <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg"/></div>
            <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg"/></div>
            <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg"/></div>
          </div>
          <div class="swiper-button-prev swiper-button-white" ></div>
          <div class="swiper-button-next swiper-button-white" ></div>
        </div>
      </div>
      <div class="fs-mine">
        <div class="fs-left">
          <div class="fl-Sotd">
            <div class="fls-header">
              <i class="el-icon-s-shop"></i>推荐店铺
            </div>
          </div>
          <div class="fl-rep">
            <div class="flr-header">
              <i class="el-icon-s-promotion"></i>推荐产品
            </div>
          </div>
        </div>
        <!-- <div class="fs-right">

        </div> -->
      </div>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Swiper from 'swiper';
import HomeSerach from '../home_child/home_serach'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    HomeSerach
  },
  mounted(){
    var gallerySwiper = new Swiper('#gallery',{
        spaceBetween: 10,
        loop : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
  }
}
</script>
<style lang="scss" scoped>
  @import '../../style/common';
  .FlagshipShopList{
    width: 100%;
    background: #f5f5f5;
    .center{
      width: 1230px;
      margin: 30px auto ;
      .header{
        width: 100%;
        height: 70px;
        ul{
          line-height: 80px;
          height: 50px;
          width: 100%;
          background: #ce201e;
          font-weight: 800;
          li{
            float: left;
            height: 50px;
            line-height: 50px;
            width: 100px;
            text-align: center;
            font-size: 14px;
            cursor: pointer;
            a{
              color:#fff;
            }
          }
        }
        ul li:nth-child(3){
          a{
            color:yellow;
          }
        }
      }
    }
    .top{
      margin-top: 30px;
      height: 95px;
      position: relative;
      // line-height: 95px;
      img{
        height: 50px;
        width: 140px;
        float: left;
        margin-top: 25px;
      }
      h1{
        float: left;
        font-size: 20px;
        line-height: 95px;
      }
      .Search_Goods{
        margin-left: 630px;
        position: absolute;
        top: 28px;
      }
    }
    #gallery{
      width: 100%;
      height: 350px;
      .swiper-slide{
        width: 100%;
        height: 350px;
        img{
          width: 100%;
          // height: 100%;
        }
      }
    }
    .swiper-button-prev{
      height: 50px;
      margin-top: -10px;
    }
    .swiper-button-next{
      height: 50px;
      margin-top: -10px;
    }
    .fs-mine{
      // zoom:1;
      .fs-left{
        width: 1230px;
        height: 800px;
        float: left;
        .fl-Sotd{
          background: #fff;
          padding: 20px;
          margin-bottom: 20px;
          width: 100%;
          height: 365px;
          background: pink;
          .fls-header{
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 800;
            border-bottom: 2px solid #222;
            i{
              font-size: 20px;
              margin-right: 5px;
            }
          }
        }
        .fl-rep{
          background: #fff;
          padding: 20px;
          margin-bottom: 20px;
          width: 100%;
          height: 340px;
          background: greenyellow;
          .flr-header{
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 800;
            border-bottom: 2px solid #222;
            i{
              font-size: 20px;
              margin-right: 5px;
            }
          }
        }
      }
      // .fs-right{
      //   width: 230px;
      //   height: 500px;
      //   float: left;
      //   margin-left: 20px;
      //   background: greenyellow;
      // }
    }
  // .fs-mine:after{display:block;clear:both;content:"";visibility:hidden;height:0}
  }
</style>
<style lang="scss">
   #ELB:hover{
    //  opacity: 0.5;
    background-color: red;
    border: 2px solid red;
  }
  #ELB{
    border-radius:0; background-color: #e94c15;border: 2px solid #e94c15;color:#fff;
  }
</style>
