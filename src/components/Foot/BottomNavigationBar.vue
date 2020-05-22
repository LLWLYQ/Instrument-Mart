<template>
  <div class="BottomNavigationBar">
    <div class="Bnb">
      <div class="home_top">
        <div class="com">
          <div class="logo_img"><img src="../../assets/imges/logo.png" alt=""></div>
          <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          </div>
        </div>
      </div>
    </div>
    <div class="content" >
      <Tocg></Tocg>
      <div class="article"> 
        <h1>{{articleData.article_title}}</h1>
        <p>{{articleData.article_content}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import config from '../../config/config'
  import HomeSerach from '../home_child/home_serach.vue'
  import Tocg from '../mine/TCOG/Tcog'
  export default {
    data() {
      return {
        AcId: this.$route.query.AcId,
        Category:'',
        catlUL: false,
        classify:false,
        catmouList:'',
        articleData:''
      }
    },
    methods: {
      catMouseover(item) {
        this.catmouList = item
        this.catlUL = true
        // let nofantisitiybaby = navigator
        // console.log(nofantisitiybaby)
      },
      catMouseleave() {
        this.catlUL = false
        this.classify = false 
      },
      classifyOver(){
        this.classify = true    
      },  
    },
    components: {
      HomeSerach,
      Tocg
    },
    created() {
      // let self = this
      this.$ajax({
        url: config.baseUrl + '/home/article/' + this.AcId,
        method: 'get',
      }).then(res => {
        this.articleData = res.data.data
      })
      this.$ajax({
        url: config.baseUrl + '/home/goodsCategory',
        method: 'get',
      }).then(res => {
        this.Category = res.data.data
        // console.log(this.Category)
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../style/common';
  .BottomNavigationBar {
    margin-top: 10px;
    .Bnb {
      width: 1210px;
      margin: 0 auto;
      // height: 1200px;
      // background: pink;
    }
    .content{
      width: 100%;
      min-height: 800px;
      position: relative;
      .article{
        width: 1210px;
        margin: 0 auto;
        margin-top: 15px;
        h1{
          width: 100%;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }
        p{
          text-align: justify; text-indent: 2em;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.6em;
        }
      }
    }
  }
  .com {
    position: relative;
    height: 160px;
    padding-top: 60px;
    width: 1210px;
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
    .cat_ul {
      position: absolute;
      left: 0;
      top:2px;
      // display: none;
          // background-color: rgba(0,0,0,.55);
          background-color: #333;
          width: 200px;
          height: 460px;
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
        .cat-content{
          width: 1210px;
          height: 500px;
          position: absolute;
          left: 0;
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
