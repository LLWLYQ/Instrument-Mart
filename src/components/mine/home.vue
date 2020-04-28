<template>
  <div class="home">
    <div class="home_top">
      <div class="Box">
        <transition name="mybox">
          <div class="box" v-show="boxshow">
            <div class="box_center">
              <h1>InstrumentMall&nbsp;&nbsp;仪商城</h1>
              <HomeSerachCOPY style="margin:5px 0px 0 400px;"></HomeSerachCOPY>
            </div>
          </div>
        </transition>
      </div>
      <div class="com">
        <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
        <div class="Search_Goods">
          <HomeSerach></HomeSerach>
        </div>
        <div class="Shopping_Cart">
        </div>
        <div
          style="float:left;height:38px;line-height:38px;background:#333;width:200px;color:#fff;margin:10px 0 0 0;padding:0 0 0 10px;">
          <p style="font-size:16px;"><i style="font-size:18px;" class="el-icon-s-grid"></i> 商品分类</p>
        </div>
        <ul class="com_ul">
          <li><i class="el-icon-s-home"></i> 首页</li>
          <li>
            <router-link to='/USShopHome'><i class="el-icon-s-platform"></i> 品牌供应商</router-link>
          </li>
          <li>
            <router-link to='/ShopHome'><i class="el-icon-s-flag"></i> 4S旗舰店</router-link>
          </li>
          <li><i class="el-icon-s-promotion"></i> 供求信息</li>
          <li><i class="el-icon-s-custom"></i> 专家交流</li>
        </ul>
      </div>
    </div>
    <div class="home_two">
      <div class="brand" @mouseleave="catMouseleave()">
        <div class="B_l">
          <div class="B_l_list">
            <ul class="cat_ul">
              <li v-for="cat in Category" :key="cat.id" class="cat" @mouseover="catMouseover(cat.cc)">{{cat.cate_name}}
              </li>
              <div class="catList" v-if="catlUL">
                <ul @mouseleave="catMouseleave()">
                  <li v-for="ctu in catmouList" :key="ctu.id">
                    <span>
                      <router-link :to="{name:'ProductCategoryListPage',query:{ListClaId:ctu.id}}" target="_blank"
                        tag="a">{{ctu.cate_name}}</router-link>
                    </span>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
        <div class="B_c">
          <!-- position_id (9) -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="pd in picId9" :key="pd.id">
                <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="B_r">
          <div class="check">
            <div class="LoginForm" v-if="LF">
              <i class="el-icon-circle-close" @click="closeLF()"></i>
              <LoginForm style="width:100%;height:100%;" @:closeLogin='closeLogin'></LoginForm>
            </div>
            <div class="over" v-if="LF" @click="closeLF()"></div>
            <div class="sin">
              <i class="el-icon-date" @click="Sin()"></i>
              <span class="sinInTotal" v-if="!sinIn">签到天数：{{sinInTotal}}&nbsp;天</span>
              <span class="sinInCount" v-if="!sinIn">连续签到：{{sinInCount}}&nbsp;天</span>
              <span v-if="sinIn">今日签到</span>
              <span v-if="!sinIn">今日已签到</span>
            </div>
          </div>
          <p class="notice">平台公告</p>
          <NoticeListHome></NoticeListHome>
        </div>
      </div>
    </div>
    <div class="content_container">
      <!-- 商品列表 -->
      <div class="BrandList">
        <ul v-for="BrL in Brand_List" :key="BrL.id">
          <!-- {{Brl}} -->
          <li>
            <div class="brand-img" v-for="brlf in BrL.files" :key="brlf.id">
              <img :src="baseUrl + brlf.files_path">
            </div>
            <a class="brand-mask">
              <div class="coupon">
                <span>{{BrL.name}}</span>
              </div>
            </a>
          </li>
        </ul>
        <div style="clear:both;"></div>
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
      <div class="List-title">
        <h1>仪商城InstrumentMall-SLHC</h1>
      </div>
      <div class="List">
        <ul v-for="List in data_list" :key="List.id" class="List_ul">
          <router-link :to="{name:'Detail',query:{listId:List.goods_id}}" target="_blank" tag="a">
            <li>
              <img :src="baseUrl+List.files_path" alt="" class="List_li">
              <div class="List_div">{{List.goods_name}}</div>
              <div class="List_div1" style="color:red;">￥{{List.sales_price}}</div>
            </li>
          </router-link>
        </ul>
      </div>
      <div class="advList">
        <ul>
          <!-- position_id (300,303) -->
          <li v-for="pd in picId300" :key="pd.id">
            <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
          </li>
          <li v-for="pd in picId303" :key="pd.id">
            <router-link to="/"><img :src="baseUrl + pd.get_files.files_path" alt=""></router-link>
          </li>
        </ul>
      </div>
      <h1 class="bom-title"><span>—— <i class="iconfont icon-aixin"></i>猜你喜欢 ——</span></h1>
      <div class="Right" v-if="sele">
        <li v-for="(item,index) in wpList" :key="index" :class="{cur:iscur===index}"
          @click="iscur=index,selected(item.name,index)">{{item.name}}</li>
      </div>
    </div>
  </div>
</template>
<script>
  import HomeSerach from '../home_child/home_serach.vue'
  import HomeSerachCOPY from '../home_child/home_serachCOPY.vue'
  import Have_to_buy_goods from '../accountCenter/Order/Have_to_buy_goods'
  import NoticeListHome from '../Announcement/notice_list_home'
  import $ from 'jquery'
  import Swiper from 'swiper';
  import config from '../../config/config'
  import {
    mapGetters,
    mapState
  } from 'vuex'
  import LoginForm from '../../components/LoginForm/LoginForm'
  export default {
    data() {
      return {
        sinIn: true,
        sele: false,
        date: new Date(),
        iscur: 0,
        LF: false,
        baseUrl: 'http://shop.yishangm.com',
        wpList: [{
            name: '电子测量仪器'
          },
          {
            name: '电力电工仪表'
          },
          {
            name: '工业自动化仪表与控制系统'
          },
          {
            name: ' 传感器与仪器仪表器件及材料'
          },
          {
            name: '顶部'
          }
        ],
        active: '',
        selectVal: '',
        orgList: '',
        data_list: '',
        isTop: true,
        osTop: '',
        SLT: '',
        M_L_li: '',
        num: '',
        carData: '',
        UserId: localStorage.getItem('userId'),
        Brand_List: '',
        boxshow: false,
        sinInTotal: 0,
        sinInCount: 0,
        sinIntime: '',
        baseUrl: config.baseUrl,
        Category: '',
        catmouList: '',
        catlUL: false,
        ListClaId: '',
        advertising: '',
        picId9: '',
        picId400: '',
        picId302: '',
        picId300: '',
        picId303: ''
      }
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.timer); //在Vue实例销毁前，清除我们的定时器
      }
      window.removeEventListener('scroll', this.handleScroll)
    },
    created() {
      //广告位列表
      //id=9
      let that = this
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 9
        }
      }).then(res => {
        that.picId9 = res.data.data
        // console.log(this.picId9)
      })
      //id=400
      // let that = this
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 400
        }
      }).then(res => {
        that.picId400 = res.data.data
        // console.log(this.picId400)
      })

      //id=302
      // let that = this
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 302
        }
      }).then(res => {
        that.picId302 = res.data.data
        // console.log(this.picId9)
      })

      //id=300
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 300
        }
      }).then(res => {
        that.picId300 = res.data.data
        // console.log(this.picId9)
      })

      //id=303
      this.$ajax({
        url: config.baseUrl + '/home/ad',
        method: 'get',
        params: {
          pid: 303
        }
      }).then(res => {
        that.picId303 = res.data.data
        // console.log(this.picId9)
      })
      //产品分类列表
      this.$ajax({
        url: config.baseUrl + '/home/goodsCategory',
        method: 'get',
      }).then(res => {
        this.Category = res.data.data
        // console.log(this.Category)
      })
      //签到状态查看
      this.$ajax({
        url: config.baseUrl + '/home/sign/' + localStorage.getItem('userId'),
        method: 'get'
      }).then(res => {
        // console.log(res.data.data)
        this.sinInTotal = res.data.data.sign_total
        this.sinInCount = res.data.data.sign_count
        this.sinIntime = res.data.data.sign_last
        // console.log(this.sinInCount)
        if (res.data.data.sign_last == this.getDay(0) || !localStorage.getItem('userId')) {
          this.sinIn = false
        } else {
          this.sinIn = true
        }
      })
      // console.log(this.getDay(0))
      let _this = this
      this.keywords()
      this.M_L()
      this.$ajax({
        url: config.baseUrl + '/home/cart',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        this.carData = res.data.data.items.data
        var goodsinfos = {}
        // goodsinfos.push(addToShopCar)
        this.$store.commit("addToShopCar", goodsinfos);
        this.carData.forEach(item => {
          goodsinfos.quantity = item.quantity
        })
      })
      //品牌列表
      _this.$ajax({
        url: config.baseUrl + '/home/brand',
        method: 'get',
        params: {}
      }).then(res => {
        _this.Brand_List = res.data.data.items
        // console.log(_this.Brand_Lisst)
        // let arr = []
        // arr.push(_this.Brand_List)
        // this.arr_xiangzhansh = lvjuren 
        // console,log()
        // console.log(_this.Brand_List)
      })
    },
    methods: {
      advClick(adv) {
        console.log(adv)
      },
      // ctuClick(ctu){
      //   // console.log(ctu.id)
      //   this.ListClaId = ctu.id
      // },
      catMouseover(item) {
        // console.log(item)
        this.catmouList = item
        this.catlUL = true
      },
      catMouseleave() {
        this.catlUL = false
      },
      getDay(day) {
        var today = new Date();
        var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
        today.setTime(targetday_milliseconds); //注意，这行是关键代码
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear + "-" + tMonth + "-" + tDate;
      },
      doHandleMonth(month) {
        var m = month;
        if (month.toString().length == 1) {
          m = "0" + month;
        }
        return m;
      },
      Sin() {
        if (!localStorage.getItem('userId')) {
          this.LF = true
        }
        setTimeout(() => {
          this.$ajax({
            url: config.baseUrl + '/home/sign',
            method: 'post',
            data: {
              member_id: localStorage.getItem('userId')
            }
          }).then(res => {

          })
          this.sinIn = false
        }, 200)
      },
      handleScroll() {
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        // var offsetTop = document.querySelector('.List').offsetTop
        if (scrollTop > 800) {
          this.sele = true
          this.boxshow = true;
        } else {
          this.sele = false
          this.boxshow = false;
        }
      },
      closeLF() {
        this.LF = false
      },
      closeLogin(closeLogin) {
        this.LF = closeLogin
      },
      goCart() {
        this.$ajax({
          url: config.baseUrl + '/home/cart',
          method: 'get',
          params: {
            member_id: localStorage.getItem('userId'),
          }
        }).then(res => {
          if (res.data.code == 20000) {
            this.$router.push({
              path: '/cart',
              param
            })
          }
        })
      },
      selected(name, index) {
        this.iscur = index
        this.active = index;
        let WS = $(window).scrollTop();
        if (this.active == 0) {
          $("body,html").animate({
            scrollTop: $('.List').offset().top - 30
          }, 100)
        } else if (this.active == 1) {
          $("body,html").animate({
            scrollTop: $('.mine').offset().top - 30
          }, 100)
        } else if (this.active == 2) {
          $("body,html").animate({
            scrollTop: 2000
          }, 100)
        } else if (this.active == 3) {
          $("body,html").animate({
            scrollTop: 2000
          }, 100)
        } else if (this.active == 4) {
          $("body,html").animate({
            scrollTop: 0
          }, 100)
        }
      },
      keywords() {
        this.$ajax({
          url: config.baseUrl + '/home/goods',
          method: "get",
        }).then(res => {
          this.data_list = res.data.data.items
        });
      },
      M_L() {
        this.$ajax({
          url: "../../../static/data.json",
          method: "get"
        }).then(res => {
          this.M_L_li = res.data
        })
      }
    },
    components: {
      HomeSerach,
      LoginForm,
      HomeSerachCOPY,
      Have_to_buy_goods,
      NoticeListHome
    },
    computed: {
      ...mapGetters(['totalQuantity'])
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        speed: 1000,
        autoplay: {
          disableOnInteraction: false, // 用户操作swiper之后，是否禁止autoplay
          delay: 3000, // 自动切换的时间间隔（单位ms），
        },
        loop: true,
      })
      var that = this;
      this.timer = setInterval(() => {
        that.date = new Date(); //修改数据date
      }, 1000);
      //监听滚动事件
      window.addEventListener('scroll', this.handleScroll)
    },
  }

</script>
//局部样式

dz
<style lang="scss" scoped>
  @import "../../style/base";

  .box {
    width: 100%;
    height: 50px;
    background-color: #e94c15;
    overflow: hidden;
    position: fixed;
    top: 0;
    z-index: 111111;

    .box_center {
      height: 50px;
      width: 1230px;
      margin: 0 auto;

      // background: yellow;
      // line-height: 50px;
      h1 {
        float: left;
        color: #fff;
        font-size: 22px;
        margin-top: 5px;

      }
    }
  }

  .mybox-leave-active,
  .mybox-enter-active {
    transition: all 0.5s ease;
  }

  .mybox-leave-active,
  .mybox-enter {
    height: 0px !important;
  }

  .mybox-leave,
  .mybox-enter-active {
    height: 50px;
  }

  .home {
    background: #f5f5f5;
  }

  .BrandList {
    height: 327px;
    margin: 20px 0;

    ul {
      li {
        width: 122px;
        float: left;
        margin-right: 1px;
        margin-bottom: 1px;
        position: relative;
        background-color: #fff;

        .brand-img {
          margin: 0 auto;
          display: block;
          text-align: center;
          // line-height: 108px;
          background-color: #fff;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .brand-mask {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          z-index: 1;
          background-color: #333;
          background-color: rgba(0, 0, 0, .8);
          transition: all .3s ease-out;
          opacity: 0;

          .coupon {
            color: #fff;
            text-align: center;
            line-height: 122px;
            height: 122px;

            span {
              font-size: 12px;
              display: block;
              padding: 0 5px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }

          a .enter {
            text-align: center;
            height: 32px;

            span {
              display: inline-block;
              color: #fff;
              width: 63px;
              height: 18px;
              font-size: 12px;
              line-height: 15px;
              background-color: #FF0036;
              border-radius: 9px;
            }
          }
        }

        .brand-mask:hover {
          opacity: 1;
          cursor: pointer;
        }
      }
    }
  }

  .advList {
    height: 120px;
    line-height: 120px;
    margin-bottom: 15px;

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

  .bom-title {
    margin-top: 15px;
    height: 50px;
    text-align: center;

    span {
      font-size: 18px;
      font-family: 'Microsoft YaHei', SimSun, sans-serif, '\65b9\6b63\5170\4ead\9ed1';
      font-weight: 100;

      i {
        font-size: 18px;
        color: #ff0036;
        margin: 0px 5px;
      }
    }
  }

  .LoginForm {
    position: fixed;
    font-size: 24px;
    height: 430px;
    width: 350px;
    background-color: #fff;
    border-radius: 0.25rem;
    left: 50%;
    top: 20%;
    transform: translate(-50%, -20%);
    cursor: pointer;
    z-index: 1000;
    padding: 10px 0 0 30px;

    .el-icon-circle-close {
      font-size: 20px;
      float: right;
      margin: 0px 10px 0 0;
      cursor: pointer;
    }
  }

  .over {
    position: fixed;
    width: 100%;
    height: 100%;
    opacity: 0.7; //透明度为70%
    filter: alpha(opacity=70);
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #111111;
  }

  .home_top {
    width: 100%;
    background-color: #fff;
    border-bottom: 2px solid #e94c15;
  }

  .home_two {
    width: 100%;
    background-color: #fff;
    background-image: url(../../assets/imges/sp_5.jpg);

    .brand {
      width: 1230px;
      margin: 0 auto;
    }
  }

  .com {
    position: relative;
    height: 180px;
    padding-top: 60px;
    width: 1230px;
    margin: 0 auto;

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
      overflow: hidden;
      right: 50px;
      top: 70px;
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

  .brand {
    height: 460px;

    .B_l {
      background-color: #fff;
      width: 200px;
      z-index: 11;
      float: left;

      p {
        background-color: #000;
        height: 36px;
        line-height: 40px;
        padding-left: 14px;
        font-size: 14px;
        color: #FFF;
        margin-top: -36px;
      }

      .B_l_list {
        .catList {
          height: 460px;
          width: 800px;
          background: #FAFAFA;
          position: absolute;
          left: 200px;
          top: 0;

          ul {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 10000000000000;
            background: #fff;
            color: #222;
            height: 459px;
            width: 600px;

            li {
              float: left;
              // margin-left: 15px;
              cursor: pointer;
              height: 40px;
              line-height: 40px;
              width: 60px;
              text-align: center;

              a {
                color: #222;
                font-size: 14px;
              }
            }
          }
        }

        // border:1px solid #fff;
        border-radius: 5%;

        // background-color:#fff;
        ul:nth-child(-n+5) {
          border-bottom: 1px solid #ccc;
        }

        .cat_ul {
          // background-color: rgba(0,0,0,.55);
          background-color: #333;
          width: 200px;
          height: 460px;
          position: relative;
          z-index: 11;

          .cat {
            // position: relative;
            padding-left: 14px;
            width: 200px;
            position: relative;
            height: 32px;
            line-height: 32px;
            color: #fff;
            font-size: 14px;
            cursor: pointer;
          }

          li:hover {
            background: #fff;
            position: relative;
            color: #000;
            font-size: 14px;
          }
        }
      }
    }

    .B_c {
      height: 460px;
      width: 800px;
      // background-color: black;
      float: left;
      position: relative;

      img {
        height: 460px;
        width: 800px;
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
    }

    .B_r {
      .check {
        height: 270px;

        .sin {
          text-align: left;
          width: 200px;
          padding: 10px 0;
          margin: 0 15px;
          border-bottom: 1px solid #ccc;
          position: relative;

          i {
            font-size: 80px;
            color: #e94c15;
            cursor: pointer;
          }

          .sinInTotal {
            font-size: 12px;
            position: absolute;
            top: 20px;
          }

          .sinInCount {
            font-size: 12px;
            position: absolute;
            top: 35px;
          }

          span {
            font-size: 20px;
            font-weight: bold;
            position: relative;

          }
        }
      }

      height: 460px;
      width:230px;
      background-color: #f5f5f5;
      float: right;

      // margin:0 0 0 100px;
      .notice {
        width: 200px;
        color: #e94c15;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: 800;
        margin: 0;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        margin: 0px 15px 0 15px;
      }
    }
  }

  .List-title {
    height: 45px;
    line-height: 45px;

    h1 {
      height: 35px;
      line-height: 35px;
      font-size: 16px;
      width: 235px;
      background: #F15453;
      color: #fff;
      padding-left: 5px;
    }
  }

  .List {
    overflow: hidden;

    // height:2100px;
    .List_div {
      // width: 135px;
      text-align: center;
      height: 20px;
      font-size: 14px;
      color: #333;
      line-height: 20px;
      overflow: hidden;
      margin: 8px auto;
    }

    .List_div1 {
      text-align: center;
      font-size: 18px;
      color: #FF0036;
      line-height: 18px;
      margin: 10px auto;
      margin-left: -8px;
    }

    .List_ul {
      height: 300px;
      width: 235px;
      float: left;
      overflow: hidden;
      margin: 0 auto;
      border: 1px solid #666;
      margin-right: 12.5px;
      margin-bottom: 20px;
    }

    .List_ul:hover {
      border: 1px solid #FF0036;
    }

    li {
      span {
        color: #222;
      }
    }

    a:hover {
      border: 1px solid #222;
    }

    img {
      height: 200px;
      width: 213px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  .List_ul:nth-child(5n+5) {

    margin-right: 0;
  }

  .Right {
    position: fixed;
    bottom: 300px;
    left: 50%;
    margin-left: -700px;
    z-index: 9999;
    width: 35px;
    text-align: center;
    cursor: pointer;

    li {
      border: 1px solid #ccc;
      font-size: 12px;
      width: 80px;
      height: 80px;
      text-align: left;
      padding: 5px;

      :hover {
        background-color: #c81623;
        color: #fff;
      }
    }

    .cur {
      background-color: #F15453;
      color: #fff;
    }
  }

</style>
//全局样式
<style lang="scss">
  #SC_button {
    height: 60px;
    font-size: 40px;
    background-color: #e94c15;
    color: #fff;
    padding: 10px;
  }

  #SC_span {
    font-size: 16px;
    float: right;
    padding-top: 12px;
  }

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
