<template>
  <div class="Marketing">
    <div class="top_SW">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="../../assets/imges/sp_1.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imges/sp_2.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imges/sp_3.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imges/sp_4.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imges/sp_5.jpg" /></div>
          <div class="swiper-slide"><img src="../../assets/imges/sp_6.jpg" /></div>
        </div>
      </div>
    </div>
    <div class="content_container">
    </div>
    <div class="mine">
    </div>
  </div>
</template>
<script type="text/javascript">
import Swiper from 'swiper';
import {Lottery,Discounts,Hot_word,Promotion,Sign_in} from '../Marketing'
export default {
  data() {
    return {
      save(){
        this.$ajax({
          url:www.baidu.com,
          method:'get',
          params:{
            
          }
        }).then(res=>{
          console.log(res)
        })
      }
    }
  },
  methods: {
    save(){
    }
  },
  components: {
    'Lottery':Lottery
  },
  created(){
    // this.$emit('public_header', false);
    this.$emit('public_footer', false);
  },
  mounted(){
   var mySwiper = new Swiper('.swiper-container',{
        effect : 'coverflow',
        slidesPerView: 2,
        // freeMode: true,
        initialSlide: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 50,
          depth: 460,
          modifier: 1,
          slideShadows : true,
        },
      })
  }
}
</script>
<style lang="scss" scoped>
@import '../../style/common';
  .top_SW{
    // background-image: url(../../assets/imges/sp_1.jpg) ;
    margin-top: 30px;
    .swiper-container{
      width: 1440px;
      margin: 0 auto;
      img{
        width: 700px;
        height: 100%;
      }
    }
  }
</style>
