<template>
  <div>
   <div id="gallery" class="swiper-container" style="margin-bottom: 10px;">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(diu,index) in tebImg" :key="index"><img :src="diu.bigImgUrl"/></div>
    </div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>

  <div id="thumbs" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(diu,index) in tebImg" :key="index"><img :src="diu.smallImgUrl"/></div>
    </div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  data () {
    return {
      tebImg:''
    }
  },
  methods: {

  },
  created(){
    // this.tabChange()
    this.$ajax({
      url:'http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000005896&productId=2016201699000067837&userId=2086208699900088233&platform_code=H5&timestamp=1542097790966&summary=00026e677f9f99ea3afca8566878e32f',
      methods:'get',
      params:{
      }
    }).then(res=>{
      this.tebImg = res.data.infos.images
    })
  },
  updated(){
      var gallerySwiper = new Swiper('#gallery',{
      spaceBetween: 10,
      thumbs: {
        swiper: {
          el: '#thumbs',
          spaceBetween: 10,
          slidesPerView: 4,
          watchSlidesVisibility: true,
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

<style scope lang="scss">
.swiper-container{
      width: 500px;
      height: 213px;
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
      opacity: 1;
    }
</style>
