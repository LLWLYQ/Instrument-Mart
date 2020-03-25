<template>
  <div class="Favorite">
    <div class="content_container">
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="收藏的商品" name="second">
            <p class="classify"><span>分类:</span><span class="all">全部商品</span></p>
            <div class="goods">
              <ul>
                <li>
                  <img src="../../../assets/imges/sp_5.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
                <li>
                  <img src="../../../assets/imges/sp_3.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
                <li>
                  <img src="../../../assets/imges/sp_1.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <!-- <el-tab-pane label="收藏的店铺" name="first">
            <p class="classify"><span>分类:</span><span class="all">全部店铺</span></p>
            <div class="goods">
              <ul>
                <li>
                  <img src="../../../assets/imges/sp_5.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
                <li>
                  <img src="../../../assets/imges/sp_3.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
                <li>
                  <img src="../../../assets/imges/sp_1.jpg" alt="">
                  <p>ITECH艾德克斯  可编程直流电源</p>
                  <p>￥4200.00</p>
                </li>
              </ul>
            </div>
          </el-tab-pane> -->
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
      activeName: 'second',
    }
  },
  methods: {
    handleClick(tab, event) {
        // console.log(tab, event);
      }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
  .Favorite{
    margin-left: 100px;
  }
  .tabs{
    margin: -10px 0 0 20px;
    .classify{
      height: 50px;
      margin:20px 0 0 0;
      line-height: 50px;
      // background-color: red;
      .all{
        margin-left: 30px;
        padding:5px;
        background: red;
        color:#fff;
        cursor: pointer;
      }
      .all:hover{
        background: #EE6363;
      }
    }
    .goods{
      margin-top: 20px;
      ul{
        li{
          width: 300px;
          height: 260px;
          float: left;
          border:1px solid #ccc;
          img{
            width: 300px;
            height: 200px;
          }
          p{
            text-align: center;
          }
        }
        li:nth-child(n+2){
          margin-left: 20px;
        }
      }
    }
  }
</style>
