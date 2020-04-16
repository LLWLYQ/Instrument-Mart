<template>
  <div class="GeneralShop">
    <div class="mine">
      <div class="mine_top">
        <div class="top">
          <div class="top_img">
            <img src="../../assets/imges/logo.png" alt="">
            <div class="Search_Goods">
              <HomeSerach></HomeSerach>
            </div>
          </div>
        </div>
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
    </div>
    <div class="center">
      <div class="center_left">
        <div class="cl">

        </div>
      </div>
      <div class="center_right">
        <div class="crt">
          <p>促销热卖 hot!</p>
        </div>
        <div class="slideshow">
          <div id="galleryCR" class="swiper-container" style="margin-bottom: 10px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg"/></div>
            </div>
            <div class="swiper-button-prev swiper-button-white"></div>
            <div class="swiper-button-next swiper-button-white"></div>
          </div>
          <div id="thumbsCR" class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg"/></div>
              <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg"/></div>
            </div>
          </div>
        </div>
        <div class="baby">
          <p>宝贝推荐</p>
          <div class="babyList">
            <ul v-for="List in ListData" :key="List.id" class="List_ul">
              <!-- <router-link :to="{name:'Detail',query:{listId:List.goods_id}}" target="_blank" tag="a"> -->
                <li>
                  <img :src="baseUrl+List.files_path" alt="" class="List_li">
                  <div class="List_div">{{List.goods_name}}</div>
                  <div class="List_div1" style="color:red;">￥{{List.sales_price}}</div>
                </li>
              <!-- </router-link> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
  </div>
</template>

<script type="text/javascript">
import HomeSerach from '../home_child/home_serach'
import config from '../../config/config'
import Swiper from 'swiper';
export default {
  data() {
    return {
      ListData:''
    }
  },
  methods: {

  },
  components: {
    HomeSerach
  },
  created(){
    this.$ajax({
		  url:config.baseUrl + '/home/goods',
			method: "get",
		}).then(res => {
      this.ListData = res.data.data.items
    });
  },
  mounted() {
      var gallerySwiper = new Swiper('#gallery',{
        spaceBetween: 10,
        loop : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      })
    var gallerySwiper = new Swiper('#galleryCR',{
      spaceBetween: 10,
      loop : true,
      thumbs: {
        swiper: {
          el: '#thumbsCR',
          spaceBetween: 10,
          slidesPerView: 4,
          watchSlidesVisibility: true, /* 避免出现bug */
        },
        slideThumbActiveClass: 'swiper-slide-thumb-active',
        thumbsContainerClass: 'swiper-container-thumbs',
      },
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
.GeneralShop{
  margin-top: 30px;
}
.mine{
  margin-bottom: 10px;
  .mine_top{
    width: 100%;
    // border-bottom:3px solid #e94c15;
    // background:#e94c15;
    .top{
      height: 95px;
      position: relative;
      width: 1210px;
      margin: 0 auto;
      // line-height: 95px;
      img{
        height: 45px;
        width: 140px;
        float: left;
        margin-top: 25px;
        background: #fff;
      }
      h1{
        float: left;
        font-size: 20px;
        line-height: 95px;
      }
      .Search_Goods{
        margin-left: 615px;
        position: absolute;
        top: 28px;
        .el-button{
          background:#e94c15;
        }
      }
    }
  }
}
.center{
  width: 1210px;
  margin: 0 auto;
  .center_left{
    width: 260px;
    height: 3000px;
    background: yellow;
    float: left;
  }
  .center_right{
    .baby{
      height: 35px;
      line-height: 35px;
      background: #e94c15;
      p{
        font-size: 14px;
        color:#fff;
        padding-left: 5px;
      }
    }
    .babyList{
      .List_ul{
        float: left;
        margin-right: 15px;
        li{
          width: 300px;
          height:362px;
          img{
            width: 300px;
            height: 280px;
          }
        }
      }
    }
    .babyList ul:nth-child(3n+3){
      margin-right: 0;
    }
    .crt{
      height: 35px;
      line-height: 35px;
      border-bottom:1px solid #e94c15;
      p{
        font-size: 14px;
        color:#e94c15;
        padding-left: 5px;
      }
    }
    width: 930px;
    height: 1000px;
    margin-left: 20px;
    float: left;
    .swiper-container{
      width: 900px;
      height: 360px;
      margin:20px auto  ;
    }
    .swiper-wrapper{
      height: auto;
    }
    .swiper-slide img{
      width: 100%;
      display: block;
    }
    .swiper-container-thumbs .swiper-slide-thumb-active img{
      opacity: 1;
    }
    .swiper-container-thumbs img{
      opacity: .5;
    }
    .slideshow{
      width: 100%;
      height: 520px;
      border:none;
    }
    .swiper-button-prev{
      height: 20px;
    }
    .swiper-button-next{
      height: 20px;
    }
  }

}
.swiper-container{
      width: 1210px;
      height: 600px;
      margin:0 auto ;
    }
    .swiper-wrapper{
      height: auto;
    }
    .swiper-slide img{
      width: 100%;
      display: block;
    }
    .swiper-container-thumbs .swiper-slide-thumb-active img{
      opacity: 1;
    }
    .swiper-container-thumbs img{
      opacity: .5;
    }
    .slideshow{
      width: 100%;
      height: 610px;
      border-bottom:2px solid #e94c15;
    }
    .swiper-button-prev{
      height: 50px;
    }
    .swiper-button-next{
      height: 50px;
    }
</style>
<style lang="scss">
  #ELB:hover{
    background-color: red;
  }
  #ELB{
    border-radius:0; background-color: #e94c15;border: 2px solid #e94c15;color:#fff;
    margin-left: -7px;
  }
</style>
