<template>
  <div class="application_approved">
    <div id="gallery" class="swiper-container" style="margin-bottom: 10px;">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg"/></div>
    </div>

  </div>
  <div id="thumbs" class="swiper-container">
    <div class="swiper-wrapper">
     <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg"/></div>
      <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg"/></div>
    </div>
    <div class="swiper-button-prev swiper-button-white" style="background-color:red;"></div>
    <div class="swiper-button-next swiper-button-white" style="background-color:red;"></div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  mounted(){
    var gallerySwiper = new Swiper('#gallery',{
      spaceBetween: 10,
      thumbs: {
        swiper: {
          el: '#thumbs',
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

<style scoped lang="scss">
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
      opacity: .5;
    }
</style>
