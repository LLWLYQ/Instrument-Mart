<template>
  <div class="PublicSearchBar">
    <div class="com">
      <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
      <div class="Search_Goods">
        <HomeSerach></HomeSerach>
      </div>
      <div class="Shopping_Cart" @mouseover="scover()" @mouseleave="scleave()">
        <p><i class="el-icon-shopping-cart-2"><span>2</span></i><span>我的购物车</span></p>
        <transition name="overcat">
          <div class="overBox" v-show="Scboxshow">
            <overallCart></overallCart>
          </div>
        </transition>
      </div>
      <!-- <div
          style="float:left;height:38px;line-height:38px;background:#333;width:200px;color:#fff;margin:10px 0 0 0;padding:0 0 0 10px;">
          <p style="font-size:16px;"><i style="font-size:18px;" class="el-icon-s-grid"></i> 商品分类</p>
        </div> -->
      <ul class="com_ul">
        <li><i class="el-icon-s-home"></i> 首页</li>
        <li>
          <router-link to='/PublicSearchBar'><i class="el-icon-s-platform"></i> 品牌供应商</router-link>
        </li>
        <li>
          <router-link to='/FlagshipStore'><i class="el-icon-s-flag"></i> 4S旗舰店</router-link>
        </li>
        <li><i class="el-icon-s-promotion"></i> 供求与招标</li>
        <li><i class="el-icon-phone"></i> 行业资讯</li>
        <li><i class="el-icon-s-custom"></i> 专家交流</li>
      </ul>
    </div>
    <div class="B_c" @mouseover="swiperover()" @mouseleave="swiperleave()">
      <!-- position_id (9) -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="pd in picId9" :key="pd.id">
            <router-link to=""><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev swiper-button-black" v-show="swiperClose"><i class="el-icon-arrow-left"></i>
        </div>
        <div class="swiper-button-next swiper-button-black" v-show="swiperClose"><i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="QVL">
      <div class="QVL-left">
        <h1>仪商通VIP品牌供应商</h1>
      </div>
      <div class="QVL-right">
        <h1>行业分类</h1>
      </div>
    </div>
    <div style="clear:both;"></div>
    <div class="advList">
      <ul>
        <!-- position_id (400,302 ) -->
        <li v-for="pd in picId400" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
        <li v-for="pd in picId302" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
      </ul>
    </div>
    <div class="recommend-commodities">
      <h1><i class="el-icon-s-flag"></i> 仪商通VIP品牌产品推荐</h1>
    </div>
    <div class="advList">
      <ul>
        <!-- position_id (400,302 ) -->
        <li v-for="pd in picId400" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
        <li v-for="pd in picId302" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
      </ul>
    </div>
    <div class="recommend-commodities">
      <h1><i class="el-icon-s-custom"></i> 仪商通VIP品牌供应商推荐</h1>
    </div>
    <div class="advList">
      <ul>
        <!-- position_id (400,302 ) -->
        <li v-for="pd in picId400" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
        <li v-for="pd in picId302" :key="pd.id">
          <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  import HomeSerach from '../home_child/home_serach.vue'
  import overallCart from './overallCart'
  import config from '../../config/config'
  import Swiper from 'swiper';
  export default {
    data() {
      return {
        Scboxshow: false,
        swiperClose: false,
        picId9: '',
        picId400: '',
        picId302: '',
      }
    },
    methods: {
      scover() {
        this.Scboxshow = true;
      },
      scleave() {
        this.Scboxshow = false;
      },
      swiperover() {
        this.swiperClose = true
      },
      swiperleave() {
        this.swiperClose = false
      }
    },
    components: {
      HomeSerach,
      overallCart,
    },
    created() {
      let that = this
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 9
        }
      }).then(res => {
        that.picId9 = res.data.data
      })
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 400
        }
      }).then(res => {
        that.picId400 = res.data.data
      })
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 302
        }
      }).then(res => {
        that.picId302 = res.data.data
      })
    },
    mounted() {
      setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          speed: 1000,
          autoplay: true,
          loop: true,
          observer: true,
          observeParents: true,
          autoplay: {
            disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
            delay: 2000, // 自动切换的时间间隔（单位ms），
          },
        })
      }, 300)
      // var that = this;
      // this.timer = setInterval(() => {
      //   that.date = new Date(); //修改数据date
      // }, 1000);
      // //监听滚动事件
      // window.addEventListener('scroll', this.handleScroll)
    },
  }

</script>

<style lang="scss" scoped>
  @import '../../style/common';

  .PublicSearchBar {
    min-height: 1000px;
    width: 1230px;
    margin: 0 auto;
  }

  .com {
    position: relative;
    height: 180px;
    padding-top: 60px;
    width: 1230px;
    margin: 0 auto;
    border-bottom: 5px solid #e94c15;

    .logo_img {
      width: 200px;

      img {
        width: 100%;
      }
    }

    .Search_Goods {
      position: absolute;
      left: 345px;
      top: 70px;
      overflow: hidden;
      width: 615px;
    }

    .Shopping_Cart {
      position: absolute;
      height: auto;
      right: 0px;
      top: 70px;
      cursor: pointer;
      width: 200px;

      .overBox {
        position: absolute;
        right: 0px;
        top: 41px;
        z-index: 3000000;
        width: auto;
        height: 300px;
        overflow: hidden;
        ;
      }

      .overcat-leave-active,
      .overcat-enter-active {
        transition: all 0.5s ease;
      }

      .overcat-leave-active,
      .overcat-enter {
        height: 0px !important;
      }

      .overcat-leave,
      .overcat-enter-active {
        max-height: 320px;
      }

      p {
        width: 130px;
        float: right;
        border: 2px solid #e94c15;
        padding: 8px 18px;
        background: #e94c15;

        i {
          font-size: 20px;
          font-weight: bold;
          color: #fff;
          margin-right: 5px;

          span {
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            top: 0px;
            left: 95px;
            line-height: 15px;
            text-align: center;
            background: #db2726;
            color: #fff;
            border-radius: 50%;
          }
        }

        span {
          color: #fff;
          font-weight: bold;
        }
      }
    }


    .SG_ul {
      :nth-child(n+2) {
        padding-left: 10px;
      }

      li {
        float: left;
        font-size: 14px;
        padding: 5px 0 0 0;
        color: #A8A8A8;
      }
    }

    .com_ul {
      height: 20px;
      width: 800px;
      float: left;
      margin-left: 20px;
      margin-top: 15px;
      font-weight: bold;
      font-size: 16px;

      :hover {
        color: red;
        cursor: pointer;
      }

      :nth-child(n+2) {
        margin-left: 40px;
      }

      li {
        float: left;
        font-size: 16px;

        a {
          font-size: 16px;
          color: #222;
        }

        i {
          font-size: 16px;
        }
      }
    }
  }

  .B_c {
    height: 350px;
    width: 100%;
    // background-color: black;
    float: left;
    position: relative;
    margin: 15px 0;

    img {
      height: 350px;
      width: 100%;
      cursor: pointer;
    }

    .swiper-pagination {
      position: absolute;
      left: 0px;
      bottom: 30px;

      span {
        width: 50px;
        height: 15px;
      }
    }

    .swiper-button-prev {
      height: 80px;
      width: 45px;
      // padding: 15px 10px;
      background: #222;
      opacity: .3;
      margin-top: -40px;
      margin-left: -9px;

      i {
        color: #fff;
        opacity: 1;
        font-size: 50px;
        margin-top: 15px;
      }
    }

    .swiper-button-next {
      height: 80px;
      width: 45px;
      // padding: 15px 10px;
      background: #222;
      // color:#fff;
      opacity: .3;
      margin-top: -40px;
      margin-right: -9px;

      i {
        color: #fff;
        opacity: 1;
        font-size: 50px;
        margin-top: 15px;
      }
    }
  }

  .QVL {

    // height: auto;
    // margin-bottom: 20px;
    .QVL-left {
      width: 800px;
      height: 720px;
      float: left;
      border: 2px solid #F15453;
      border-radius: 5px;
      h1 {
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        background: #F15453;
        color: #fff;
        padding-left: 5px;
      }
    }

    .QVL-right {
      width: 410px;
      height: 720px;
      margin-left: 20px;
      float: left;
      border: 2px solid #F15453;
      border-radius: 5px;

      h1 {
        height: 35px;
        line-height: 35px;
        font-size: 16px;
        background: #F15453;
        color: #fff;
        padding-left: 5px;
      }
    }
  }

  .advList {
    height: 120px;
    line-height: 120px;
    margin: 15px 0;
    background: pink;

    ul {
      li {
        width: 610px;
        height: 100px;
        background: pink;
        float: left;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }

    ul li:nth-child(2) {
      margin-left: 10px;
    }
  }

  .recommend-commodities {
    width: 100%;
    height: 470px;
    background: yellow;
    margin-bottom: 15px;
    h1 {
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      background: #F15453;
      color: #fff;
      padding-left: 5px;
      i{
        font-size: 20px;
      }
    }
  }

</style>
<style lang="scss">
  #ELB:hover {
    background-color: red;
    border: 2px solid red;
  }

  #ELB {
    border-radius: 0;
    background-color: #e94c15;
    border: 2px solid #e94c15;
    color: #fff;
  }

</style>
