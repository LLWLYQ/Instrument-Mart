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
    <div class="content">

      <Tocg></Tocg>
      <div class="article">
        <div class="List" v-if="!DetailData">
          <p class="List_title">公告列表</p>
          <div class="Mine">
            <ul>
              <li v-for="not in NoticData" :key="not.id">
                <a>
                  <p @click="ListClisk(not)"><i class="el-icon-zoom-in"></i>{{not.notice_title}}</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="Detail" v-if="noticData && DetailData">
          <p class="Detail_title">公告详情 <span @click="unfold()">返回列表</span><i @click="unfold()"
              class="el-icon-s-unfold"></i></p>
          <div class="mine">
            <ul>
              <li>{{noticData.notice_title}}</li>
              <li>
                <p v-html="noticData.notice_content"></p>
              </li>
            </ul>
          </div>
        </div>
        <h1 v-if="giao">{{articleData.article_title}}</h1>
        <p v-html="articleData.article_content" class="neirong" v-if="giao"></p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import config from '../../config/config'
  import HomeSerach from '../home_child/home_serach.vue'
  import Tocg from '../mine/TCOG/Tcog'
  import NoticeListHome from '../Announcement/notice_list_home'
  import NoticeDetail from '../Announcement/notice_detail'
  export default {
    data() {
      return {
        giao:false,
        AcId: this.$route.query.AcId,
        Category: '',
        catlUL: false,
        classify: false,
        catmouList: '',
        articleData: '',
        DetailData: false,
        ListData: true,
        notID: this.$route.query.notId,
        noticData: '',
        NoticData: ''
      }
    },
    methods: {
      ListClisk(not) {
        console.log(not)
        this.$ajax({
          url: 'http://shop.yishangm.com/home/noticetwo/' + not.notice_id,
          method: 'get'
        }).then(res => {
          this.noticData = res.data.data
          console.log(this.noticData)
          if (res.data.code == 20000) {
            this.ListData = false
            this.DetailData = true
          }
        })
      },
      unfold() {
        this.ListData = true
        this.DetailData = false
      },
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
      classifyOver() {
        this.classify = true
      },
    },
    components: {
      HomeSerach,
      Tocg,
      NoticeListHome,
      NoticeDetail
    },
    created() {
      // let self = this
      this.$ajax({
        url: config.baseUrl + '/home/article/' + this.AcId,
        method: 'get',
      }).then(res => {
        console.log(res)
        this.articleData = res.data.data
        if(res.data.data){
          this.giao = true
        }else{
          this.giao = false
        }
        
      })
      console.log(this.AcId)
      this.$ajax({
          url: 'http://shop.yishangm.com/home/noticetwo/' + this.notID,
          method: 'get'
        }).then(res => {
          this.noticData = res.data.data
          console.log(res.data)
          if (res.data.code == 20000) {
            this.ListData = false
            this.DetailData = true
          }
        })
      this.$ajax({
        url: config.baseUrl + '/home/noticetwo',
        method: 'get',
      }).then(res => {
        this.NoticData = res.data.data.items.data
        // console.log(this.NoticData)
      })
      
      this.$ajax({
        url: config.baseUrl + '/home/goodsCategory',
        method: 'get',
      }).then(res => {
        this.Category = res.data.data
        // console.log(this.Category)
      })
    },
    mounted(){
      
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

    .content {
      width: 100%;
      min-height: 800px;
      position: relative;

      .article {
        width: 1210px;
        margin: 0 auto;
        margin-top: 15px;

        h1 {
          width: 100%;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
        }

        .neirong {
          text-align: justify;
          text-indent: 2em;
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
      right: 0;
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
    top: 2px;
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

  .cat-content {
    width: 1210px;
    height: 500px;
    position: absolute;
    left: 0;
  }

  .List {
    .List_title {
      font-size: 14px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #e94c15;
      color: #fff;
      font-weight: 600;
      padding-left: 10px;
    }
  }

  .Mine {
    width: 100%;
    height: 190px;
    background: #f5f5f5;
    padding: 0 15px;

    // margin-top: 230px;
    ul {
      li {
        margin-bottom: 5px;
        display: block;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
        cursor: pointer;

        p {
          a {
            i {
              margin-right: 5px;
              color: #e94c15;
            }
          }

        }
      }
    }

    ul li:hover {
      border-bottom: 1px solid #ccc;
      color: #e94c15;
    }

    ul li:nth-child(1) {
      margin-top: 7px;
    }
  }

  .Detail {
    .mine {
      margin-top: 10px;
      width: 100%;

      ul li:nth-child(1) {
        text-align: center;
        height: 40px;
        font-size: 16px;
        font-weight: 700;
        line-height: 40px;
        color: #222;

        // p {
        //   font-size: 12px;
        //   color: #222;
        // }
      }

      ul li:nth-child(2) {
        padding-left: 10px;
        p{
          text-align: center;
          // text-indent: 2em;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.6em;
        }
      }
    }

    .Detail_title {
      font-size: 16px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #e94c15;
      color: #fff;
      font-weight: 700;
      padding-left: 10px;

      span {
        float: right;
        margin-right: 15px;
        cursor: pointer;
      }

      i {
        float: right;
        font-size: 24px;
        line-height: 40px;
        margin-right: 10px;
        cursor: pointer;

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
