<template>
  <div class="Tcog">
    <div class="All">
      <ul class="all-og">
        <li @mouseover="scover()" @mouseleave="scleave()"><i style="font-size:18px;" class="el-icon-s-grid"></i>全部商品分类
          <transition name="overcat">
            <div class="overBox" v-show="Scboxshow">
              <div class="B_l">
                <div class="B_l_list">
                  <ul class="cat_ul" @mouseleave="catMouseleave()">
                    <li v-for="cat in Category" :key="cat.id" class="cat" @mouseover="catMouseover(cat.cc)">
                      {{cat.cate_name}}</li>
                    <div class="catList" v-show="catlUL">
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
            </div>
          </transition>
        </li>
        <li>
          <router-link to='/'><i class="el-icon-s-home"></i> 首页</router-link>
        </li>
        <li>
          <router-link to='/PublicSearchBar'><i class="el-icon-s-platform"></i> 品牌供应商</router-link>
        </li>
        <li>
          <router-link to='/FlagshipStore'><i class="el-icon-s-flag"></i> 4S旗舰店</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/javascript">
  import config from '../../../config/config'
  export default {
    data() {
      return {
        Category: '',
        catmouList: '',
        catlUL: false,
        Scboxshow: false,
      }
    },
    methods: {
      catMouseover(item) {
        this.catmouList = item
        this.catlUL = true
      },
      catMouseleave() {
        this.catlUL = false
      },
      scover() {
        this.Scboxshow = true;
      },
      scleave() {
        this.Scboxshow = false;
      },
    },
    components: {

    },
    created() {
      this.$ajax({
        url: config.baseUrl + '/home/goodsCategory',
        method: 'get',
      }).then(res => {
        this.Category = res.data.data
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/common';

  .Tcog {
    width: 100%;

    .All {
      border-bottom: 2px solid #e94c15;
      width: 100%;

      .overBox {
        position: absolute;
        left: 0;
        top: 42px;
        z-index: 300;
        width: 1000px;
        height: 460px;
        overflow: hidden;
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
        max-height: 460px;
      }

      .all-og {
        width: 1210px;
        margin: 0 auto;
        height: 40px;

        li {
          height: 40px;
          line-height: 40px;
          float: left;
          width: 150px;
          text-align: center;
          font-weight: bold;

          a {
            font-size: 16px;
            color: #222;

            i {
              font-size: 16px;
            }
          }
        }

        .B_l {
          // position: absolute;
          top: 42px;

          .cat_ul {
            background-color: #333;
            width: 200px;
            height: 460px;
            position: relative;
            z-index: 11;

            .cat {
              text-align: left;
              font-weight: normal;
              padding-left: 14px;
              width: 200px;
              position: relative;
              height: 32px;
              line-height: 32px;
              color: #fff;
              font-size: 14px;
              cursor: pointer;
            }

            .cat:hover {
              background: #fff;
              position: relative;
              color: #000;
              font-size: 14px;
            }
          }

          .catList {
            background: #FAFAFA;
            position: absolute;
            z-index: 10000;
            top: 0;

            ul {
              position: absolute;
              box-shadow: 0 1px 6px #999;
              left: 200px;
              top: 0;
              z-index: 10000;
              background: #fff;
              color: #222;
              height: 459px;
              width: 794px;

              li {
                float: left;
                // margin-left: 15px;
                cursor: pointer;
                height: 40px;
                line-height: 40px;
                font-weight: normal;
                font-size: 12px;
                width: 60px;
                text-align: center;
                background: #fff;

                a {
                  color: #222;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }

      .all-og li:nth-child(1) {
        background: #333;
        width: 200px;
        color: #fff;
        font-size: 16px;
        position: relative;
        cursor: pointer;

        i {
          margin-right: 5px;
        }
      }

      .all-og li a:hover {
        color: #e94c15;
      }
    }
  }

</style>
