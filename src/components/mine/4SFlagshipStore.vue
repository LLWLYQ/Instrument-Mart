<template>
  <div class="FlagshipStore">
    <div class="com">
      <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
      <div class="Search_Goods">
        <HomeSerach></HomeSerach>
      </div>
      <div class="Shopping_Cart" @mouseover="scover()" @mouseleave="scleave()">
        <router-link to="/cart" target="_blank" tag="a">
          <p><i class="el-icon-shopping-cart-2"><span>{{NumData}}</span></i><span>我的购物车</span></p>
        </router-link>
        <transition name="overcat">
          <div class="overBox" v-show="Scboxshow">
            <overallCart></overallCart>
          </div>
        </transition>
      </div>
    </div>
    <Tocg></Tocg>
    <div class="centen">
      <!-- Remote Procedure Call(RPC) -->
      <div class="B_c" @mouseover="swiperover()" @mouseleave="swiperleave()">
        <!-- <p>鼠年限定-牛年限定</p> -->
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
      <div style="clear:both;"></div>
      <div class="supplier">
        <h1>推荐店铺 <router-link to="">更多>></router-link>
        </h1>
        <div class="supplier-List">
          <ul v-for="ar in shopData" :key="ar.id">
            <router-link   :to="{name:'ShopHome',query:{shopID:ar.shop_id}}" target="_blank" tag="a">
              <li v-for="(arImg,index) in ar.files" :key="index" @click="ComeIn(ar.shop_id)">
                <img :src="baseUrl+arImg.files_path" alt="">
                <p>{{ar.shop_name}}</p>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="provider">
        <h1>仪商通VIP品牌供应商推荐<router-link to="">更多>></router-link>
        </h1>
        <div class="provider-List">
          <ul v-for="ar in shopData" :key="ar.id">
            <router-link  :to="{name:'ShopHome',query:{shopID:ar.shop_id}}" target="_blank" tag="a" >
              <li v-for="(arImg,index) in ar.files" :key="index" @click="ComeIn(ar.shop_id)">
                <img :src="baseUrl+arImg.files_path" alt="">
                <p>{{ar.shop_name}}</p>
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="recommend-products">
        <h1>推荐产品<router-link to="">更多>></router-link>
        </h1>
        <div class="rp-List">
          <ul>
            <router-link to="" v-for="(sl,index) in shopList" :key="index">
              <li>
                <img :src="baseUrl + sl.files_path" alt="">
              </li>
              <p><span class="price">{{sl.sales_price}}</span><span class="name">{{sl.goods_name}}</span></p>
            </router-link>
          </ul> 
          <ul class=""></ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import HomeSerach from '../home_child/home_serach.vue'
  import overallCart from './overallCart'
  import config from '../../config/config'
  import Swiper from 'swiper';
  import Tocg from '../mine/TCOG/Tcog'
  export default {
    data() {
      return {
        Scboxshow: false,
        swiperClose: false,
        NumData: '',
        lists: [],
        picId9: '',
        picId400: '',
        picId302: '',
        Arr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        shopData: '',
        baseUrl: config.baseUrl,
        shopID: "",
        shopList: ''
      }
    },
    methods: {
      ComeIn(id){
        localStorage.setItem("ShopId",id)
      },
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
      Tocg
    },
    created() {
      this.$ajax({
        url:config.baseUrl + '/home/shop',
        method:'get',
        params:{
          member_id:localStorage.getItem('usreId'),
          shop_id:8,
        }
      }).then(res=>{
        console.log(res)
      }),
      this.$ajax({
        url: config.baseUrl + '/home/shop',
        method: 'get',
        params: {
          recommend: 1,
        }
      }).then(res => {
        this.shopData = res.data.data.items.data
        this.shopData.map(item => {
          this.shopID = item.shop_id
        })
        this.$ajax({
          url: config.baseUrl + '/home/goods',
          method: 'get',
          params: {
            shopid: localStorage.getItem('ShopId')
          }
        }).then(res => {  
          this.shopList = res.data.data.item
          // console.log(this.shopList)
        })
        // console.log(this.shopID )
      })
      this.$ajax({
        url: config.baseUrl + '/home/cart',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        this.carData = res.data.data.items
        // console.log(res.data.data.items)
        let GList = {}
        res.data.data.items.map((item, index) => {
          GList = {}
          GList.cart_id = item.cart_id
          GList.shop_id = item.shop_id
          GList.shop_name = item.shop_name
          GList.carts_list = item.carts_list
          GList.shop_all_weight = item.shop_all_weight
          this.lists.push(GList)
          // this.NumData = this.lists.length
        })
        let www = []
        this.lists.map(item => {
          item.carts_list.map(citem => {
            www.push(citem)
          })
        })
        this.NumData = www.length
      })
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

  .FlagshipStore {
    min-height: 1830px;
    width: 100%;
    margin: 0 auto;
  }

  .centen {
    position: relative;
    height: 160px;
    width: 1210px;
    margin: 0 auto;
  }

  .com {
    position: relative;
    height: 160px;
    padding-top: 60px;
    width: 1210px;
    margin: 0 auto;
    // border-bottom: 5px solid #e94c15;

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
      width: 600px;
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

  .supplier {
    margin-top: 10px;
    overflow: hidden;

    h1 {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-bottom: 5px solid #ccc;
      margin-bottom: 10px;

      a {
        float: right;
        color: #222;
      }

      a:hover {
        color: #e94c15;
        text-decoration: underline;
      }
    }

    .supplier-List {
      a {
        width: 234px;
        height: 150px;
        float: left;
        margin: 0 10px 10px 0px;
        border: 1px solid #ccc;
        box-shadow: 0 1px 6px #999;

        li {
          width: 234px;
          height: 150px;
          padding:30px 27px;
          margin: 0 auto;
          // margin-top: 40px;

          img {
            width: 100%;
            height: 55PX;
          }
        }

        p {
          color: #222;
          margin-top: 20px;
          width: 180px;
          margin: 10px auto 0 auto;
          text-align: center;
        }
      }
    }

    .supplier-List a:nth-child(5n+5) {
      margin: 0 0 10px 0;
    }
  }

  .provider {
    overflow: hidden;
    margin-top: 15px;

    h1 {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-bottom: 5px solid #ccc;
      margin-bottom: 10px;

      a {
        float: right;
        color: #222;
      }

      a:hover {
        color: #e94c15;
        text-decoration: underline;
      }
    }

    .provider-List {
      a {
        width: 234px;
        height: 150px;
        float: left;
        margin: 0 10px 10px 0px;
        border: 1px solid #ccc;
        box-shadow: 0 1px 6px #999;

        li {
          width: 180px;
          height: 55px;
          margin: 0 auto;
          margin-top: 40px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        p {
          color: #222;
          margin-top: 20px;
          width: 180px;
          margin: 10px auto 0 auto;
          text-align: center;
        }
      }
    }

    .provider-List a:nth-child(5n+5) {
      margin: 0 0 10px 0;
    }
  }

  .recommend-products {
    margin-top: 15px;

    h1 {
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      border-bottom: 5px solid #ccc;
      margin-bottom: 10px;

      a {
        float: right;
        color: #222;
      }

      a:hover {
        color: #e94c15;
        text-decoration: underline;
      }
    }

    .rp-List {
      a {
        width: 234px;
        height: 150px;
        float: left;
        margin: 0 10px 10px 0px;
        border: 1px solid #ccc;
        box-shadow: 0 1px 6px #999;
        background: #f5f5f5;

        li {
          width: 130px;
          height: 100px;
          margin: 0 auto;
          margin-top: 10px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        p {
          margin-top: 10px;
          color: #222;
          text-align: center;

          .price {
            color: #FF0036;
            float: left;
            margin-left: 40px;
          }

          .name {
            display: block;
            width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
            margin-left: 10px;
          }
        }
      }
    }

    .rp-List a:nth-child(5n+5) {
      margin: 0 0 10px 0;
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
