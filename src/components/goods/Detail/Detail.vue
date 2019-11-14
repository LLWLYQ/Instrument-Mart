<template>
  <div id="Detail">
    <div class="content_container">
      <div class="Shinetop">
        <div class="big_shinetop">
          <ul class="tabImages">
            <li v-for="(TI,index) in tebImg" :key="index" @click="tabclick(index)">
              <img :src="TI.bigImgUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="small_shinetop">
          <ul>
            <li
              v-for="(TI,index) in tebImg" :key="index"
              :class="{cur:iscur===index}"
              @mouseover="iscur=index,tabChange('TI.bigImgUrl'+(index))"
            >
              <img :src="TI.smallImgUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="small_shinetop"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailID:this.$route.query.DetailID,
      tebImg:'',
      iscur: 0,
      diu:''
    }
  },
  methods: {
    tabChange(index){
    },
    tabclick(index){
      console.log(index)
    }
  },
  created(){
    this.tabclick()
    this.$ajax({
      url:'http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000005896&productId='+this.detailID+'&userId=2086208699900088233&platform_code=H5&timestamp=1542097790966&summary=00026e677f9f99ea3afca8566878e32f',
      methods:'get',
      params:{
      }
    }).then(res=>{
      this.tebImg = res.data.infos.images
      console.log(this.tebImg)
    })
  }
}
</script>

<style scope lang="scss">
@import "../../../style/common.css";
  .Shinetop{
    width: 500px;
    height: 700px;
    position: relative;
    .big_shinetop{
      ul{
        li{
          position: absolute;
          height: 500px;
          width: 500px;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .small_shinetop{
      position: absolute;
      bottom: 20px;
      left: 0;
      li{
        width: 100px;
        height: 100px;
        float: left;
        margin: 0 10px;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
