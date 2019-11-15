<template>
  <div id="Detail">
    <div class="content_container">
      <div class="Shinetop">
        <div class="big_shinetop">
          <ul class="tabImages">
            <li
            v-show="iscur==index"
            v-for="(TI,index) in tebImg" :key="index"
            @mouseover="tabChange(index)"
            >
            <!-- :class="{cur:iscur===index}" -->
              <img :src="TI.bigImgUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="small_shinetop">
          <ul>
            <li
              v-for="(TI,index) in tebImg" :key="index"
              :class="{cur:iscur===index}"
              @mouseover="iscur=index,tabChange(index)"
              ref="cur"
            >
              <img :src="TI.smallImgUrl" alt="">
            </li>
          </ul>
        </div>
        <div class="small_shinetop"></div>
      </div>
      <div class="SKU">
        <div class="introduce" >
          <div class="brand">
            <p>
              <span>{{Infos.brand}}</span><span>{{Infos.name}}</span>
            </p>
          </div>
          <div class="price">
            <dl >
              <del><dt><span>促销价</span><b>￥</b>{{Infos.marketPrice}}</dt></del>
            </dl>
            <dl>
              <dt><span>价格</span><p><b>￥</b>{{Infos.price}}</p></dt>
              <dd>cihuibushi</dd>
            </dl>
          </div>
        </div>
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
      iscur:0,
      Infos:''
    }
  },
  methods: {
    tabChange(index,event){
      this.iscur = index
    }
  },
  created(){
    // this.tabChange()
    this.$ajax({
      url:'http://www.mei.com/appapi/product/detail/v3?categoryId=2040204090000005896&productId='+this.detailID+'&userId=2086208699900088233&platform_code=H5&timestamp=1542097790966&summary=00026e677f9f99ea3afca8566878e32f',
      methods:'get',
      params:{
      }
    }).then(res=>{
      this.tebImg = res.data.infos.images
      this.Infos = res.data.infos
      console.log(this.Infos)
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
    float: left;
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
      .cur{
        border:2px solid black;
      }
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
  .SKU{
    float: left;
    width: 700px;
    height: 700px;
    margin-left: 50px;
    .brand{
      p{
        font-size: 20px;
        font-weight: 600;
      }
      p span:nth-child(1){
          margin-right: 20px;
        }
    }
    .price{
        height: 110px;
        background-color: #e9e9e9;
        dl{
          margin:0;
        }
        dt{
          font-size: 14px;
          height: 50px;
          line-height: 50px;
          span{
            float: left;
            margin-left: 10px;
          }
          b{
            margin-left: 50px;
          }
          p{
            float: left;
            color:#FF0036;
            font-size: 30px;
            b{
              font-size: 22px;
              font-weight: 400;
            }
          }
        }
      }
  }
</style>
