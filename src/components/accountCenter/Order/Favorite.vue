<template>
  <div class="Favorite">
    <div class="giao">
      <div class="tabs">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="收藏的商品" name="second">
            <p class="classify"><span>分类:</span><span class="all">全部商品</span></p>
            <div class="goods">
              <ul v-if="userId && collectData">
                <li v-for="col in collectData" :key="col.id">
                  <router-link :to="{name:'Detail',query:{listId:col.goods_id}}" target="_blank" tag="a">
                    <img :src="baseUrl + col.files_path">
                  </router-link>
                  <p>{{col.goods_name}}</p>
                  <!-- <p class="last"><span>￥</span>{{collectData.sales_price}}</p> -->
                  <span class="del" @click="Del(col)"><i class="el-icon-delete"></i></span>
                </li>
                <p v-if="collectData == ''">暂无收藏商品</p>
              </ul>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../config/config'
export default {
  data() {
    return {
      activeName: 'second',
      collectData:'',
      baseUrl:config.baseUrl,
      userId:localStorage.getItem('userId')
    }
  },
  methods: {
    collect(){
      this.$ajax({
        url:config.baseUrl + '/home/collect',
        method:'get',
        params:{
          member_id:localStorage.getItem("userId")
        }
      }).then(res=>{
        this.collectData = res.data.data.items.data
        // console.log(this.collectData)
      })
    },
    Del(col){
      this.$ajax({
        url:config.baseUrl + '/home/collect/del',
        method:'post',
        data:{
          member_id:localStorage.getItem('userId'),
          goods_id:col.goods_id
        }
      }).then(res=>{
        if(res.data.code == 20000){
          this.collect()
        }
      })
    },
    handleClick(tab, event) {
        // console.log(tab, event);
      }
  },
  created(){
    this.collect()
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
  .Favorite{
    width: 1090px;
    margin-left: 220px;
    padding: 20px;
    background: #fff;
  }
  .giao{
    min-height: 1000px;
  }
  .tabs{
    margin: -10px 0 0 20px;
    .classify{
      height: 50px;
      // margin:20px 0 0 0;
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
          width: 178px;
          height: 216px;
          float: left;
          border:1px solid #ccc;
          position: relative;
          cursor: pointer;
          margin-bottom: 20px;
          .del{
            position: absolute;
            top:5px;
            right: 5px;
            width: 25px;
            height: 25px;
            text-align: center;
            line-height: 25px;
            background: #716564;
            cursor: pointer;
            display: none;
            i{
              color: #fff;
              font-size: 15px;
            }
          }
          img{
            width: 176px;
            height: 176px;
            border-bottom:1px solid #e6e6e6;
          }

          p{
            text-align: center;
            height: 30px;
            line-height: 30px;
          }
          .last{
            color: #ff0036;
            font-size: 18px;
            span{
              font-size: 12px;
            }
          }
        }
        li:hover{
            .del{
              display: block;
            }
          }
        li:nth-child(n+2){
          margin-left: 20px;
        }
        li:nth-child(6n+6){
          margin-right: 0px;
          margin-left: 0;
        }
      }
    }
  }
</style>
