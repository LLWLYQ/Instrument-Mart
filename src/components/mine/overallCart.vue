<template>
  <div class="overallCart">
    <div class="sc-Box">
      <div class="sc-box">
        <div class="sc-box_center">
          <div class="sc-box_center-List">
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
            <li>
              <img src="../../assets/imges/sp_5.jpg" alt="">
              <p class="sc-box-name">ITECH/艾德克斯 可编程电子负载 </p>
              <p class="sc-box-btm"><span class="price">￥156</span><span class="Del">删除</span></p>
            </li>
          </div>
        </div>
        <p class="sc-bottom">
          <router-link to="/cart"><span>结算</span></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    methods: {

    },
    components: {

    }
  }

</script>

<style lang="scss" scoped>
  @import '../../style/common';

  .sc-Box {
    background: #fff;
    width: 300px;
    margin: 0 4px 10px 10px;

    .sc-box {
      box-shadow: 0 1px 6px #999;

      .sc-bottom {
        padding: 10px 10px;
        margin: 0 10px;
        text-align: center;
        border-top: 1px solid #ccc;

        span {
          // display: block;
          padding: 5px 25px;
          width: 100px;
          height: 27px;
          background-color: #db2726;
          line-height: 27px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          // position: absolute;
          // left: 93px;
          // bottom: 20px;
        }
      }
    }

    .sc-box_center {
      width: 300px;
      min-height: 50px;
      max-height: 250px;
      background: #fff;
      padding: 5px 10px;
      // background: #f5f5f5;
      // border:1px solid #222;
      overflow: hidden;
      overflow-y: scroll;

      .sc-box_center-List {
        li {
          height: 80px;
          line-height: 80px;
          cursor: pointer;

          img {
            height: 70px;
            width: 60px;
            float: left;
          }

          .sc-box-name {
            float: left;
            width: 200px;
            height: 44px;
            line-height: 22px;
            margin-left: 10px;
            overflow: hidden;
            text-overflow: ellipsis;

          }

          .sc-box-name:hover {
            text-decoration: underline;
            color: #db2726;
          }

          .sc-box-btm {
            float: left;
            width: 200px;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;

            .price {
              color: #db2726;
              font-size: 12px;
            }

            .Del {
              float: right;
              margin-right: 10px;
            }

            .Del:hover {
              color: #db2726;
            }
          }
        }

        // white-space:nowrap;
      }
    }
  }

  .sc-mybox-leave-active,
  .sc-mybox-enter-active {
    transition: all 0.5s ease;
  }

  .sc-mybox-leave-active,
  .sc-mybox-enter {
    height: 0px !important;
  }

  .sc-mybox-leave,
  .sc-mybox-enter-active {
    height: auto;
  }

</style>
<style lang="scss">
  // :-webkit-scrollbar-track-piece {

  //   background-color: #f8f8f8;
  // }

  // //滚动条的宽度 

  // ::-webkit-scrollbar {

  //   width: 3px;
  //   height: 9px;

  // }

  // //滚动条的设置 

  // ::-webkit-scrollbar-thumb {

  //   background-color: #222;
  //   background-clip: padding-box;

  //   min-height: 28px;

  // }

  // ::-webkit-scrollbar-thumb:hover {

  //   background-color: #bbb;

  // }

</style>
