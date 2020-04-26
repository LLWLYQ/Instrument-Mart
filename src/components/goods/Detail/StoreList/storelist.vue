<template>
  <div class="storelist">
    <div class="Center">
      <div class="top">
        <div class="top_img">
          <img src="../../../../assets/imges/logo.png" alt="">
          <!-- <h1>购物车</h1> -->
          <div class="Search_Goods">
            <HomeSerach></HomeSerach>
          </div>
        </div>
      </div>
      <div class="mine">
        <div class="filtrate">
          <a @click="Synthesize()" ref="Syn">综合<i class="el-icon-bottom"></i></a>
          <a @click="salesDown()" ref="sad">销量<i class="el-icon-bottom"></i></a>
          <a @click="salesUp()" ref="sau">销量<i class="el-icon-top"></i></a>
          <a @click="priceDown()" ref="prd">价格<i class="el-icon-bottom"></i></a>
          <a @click="priceUp()" ref="pru">价格<i class="el-icon-top"></i></a>
        </div>
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            layout="prev, pager, next"
            :page-size="10" 
            :total="ListData.total">
          </el-pagination>
        </div>
        <div class="List">
          <ul>
            <li v-for="LD in ListData" :key="LD.id">
              <div class="LD-img">
                <router-link :to="{name:'Detail',query:{listId:LD.goods_id}}" target="_blank" tag="a">
                  <img :src="baseUrl + LD.files_path" alt="">
                </router-link>
              </div>
              <p class="list-price"><b>￥</b><span>{{LD.sales_price}}</span></p>
              <p class="list-title"><router-link :to="{name:'Detail',query:{listId:LD.goods_id}}" target="_blank" tag="a">{{LD.goods_name}}</router-link></p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../../config/config'
import HomeSerach from '../../../home_child/home_serach'
export default {
  data() {
    return {
      PclpID:this.$route.query.ListClaId,
      ListData:'',
      baseUrl:config.baseUrl,
      total:'0',
      currentPage: 0
    }
  },
  methods: {
     handleSizeChange(val) {
        // console.log('每页' + val + '条');
      },
      handleCurrentChange(val) {
        // console.log('当前页:'+val);
      },
    Synthesize(){
      this.$ajax({
        url:config.baseUrl + '/home/goods',
        method:'get',
        params:{
          catid:this.PclpID
        }
      }).then(res=>{
        this.ListData = res.data.data.items
        console.log(res)
      })
      this.$refs.Syn.style.background = '#F1EDEC'
      this.$refs.Syn.style.color = '#ff0036'
      this.$refs.sad.style.background = '#faf9f9'
      this.$refs.sad.style.color = '#806f66'
      this.$refs.sau.style.background = '#faf9f9'
      this.$refs.sau.style.color = '#806f66'
      this.$refs.prd.style.background = '#faf9f9'
      this.$refs.prd.style.color = '#806f66'
      this.$refs.pru.style.background = '#faf9f9'
      this.$refs.pru.style.color = '#806f66'
    },
    salesDown(){
      this.$ajax({
        url:config.baseUrl + '/home/goods',
        method:'get',
        params:{
          sale_num_pr:"desc",
        }
      }).then(res=>{
        this.ListData = res.data.data.items
      })
      this.$refs.sad.style.background = '#F1EDEC'
      this.$refs.sad.style.color = '#ff0036'
      this.$refs.Syn.style.background = '#faf9f9'
      this.$refs.Syn.style.color = '#806f66'
      this.$refs.sau.style.background = '#faf9f9'
      this.$refs.sau.style.color = '#806f66'
      this.$refs.prd.style.background = '#faf9f9'
      this.$refs.prd.style.color = '#806f66'
      this.$refs.pru.style.background = '#faf9f9'
      this.$refs.pru.style.color = '#806f66'
    },
    salesUp(){
      this.$ajax({
        url:config.baseUrl + '/home/goods',
        method:'get',
        params:{
          sale_num_pr:"asc"
        }
      }).then(res=>{
        this.ListData = res.data.data.items
      })
      this.$refs.sau.style.background = '#F1EDEC'
      this.$refs.sau.style.color = '#ff0036'
      this.$refs.Syn.style.background = '#faf9f9'
      this.$refs.Syn.style.color = '#806f66'
      this.$refs.sad.style.background = '#faf9f9'
      this.$refs.sad.style.color = '#806f66'
      this.$refs.prd.style.background = '#faf9f9'
      this.$refs.prd.style.color = '#806f66'
      this.$refs.pru.style.background = '#faf9f9'
      this.$refs.pru.style.color = '#806f66'
    },
    priceDown(){
      this.$ajax({
        url:config.baseUrl + '/home/goods',
        method:'get',
        params:{
          price_pr:"desc"
        }
      }).then(res=>{
        this.ListData = res.data.data.items
      })
      this.$refs.prd.style.background = '#F1EDEC'
      this.$refs.prd.style.color = '#ff0036'
      this.$refs.Syn.style.background = '#faf9f9'
      this.$refs.Syn.style.color = '#806f66'
      this.$refs.sad.style.background = '#faf9f9'
      this.$refs.sad.style.color = '#806f66'
      this.$refs.sau.style.background = '#faf9f9'
      this.$refs.sau.style.color = '#806f66'
      this.$refs.pru.style.background = '#faf9f9'
      this.$refs.pru.style.color = '#806f66'
    },
    priceUp(){
      this.$ajax({
        url:config.baseUrl + '/home/goods',
        method:'get',
        params:{
          price_pr:"asc"
        }
      }).then(res=>{
        this.ListData = res.data.data.items
      })
      this.$refs.pru.style.background = '#F1EDEC'
      this.$refs.pru.style.color = '#ff0036'
      this.$refs.Syn.style.background = '#faf9f9'
      this.$refs.Syn.style.color = '#806f66'
      this.$refs.sad.style.background = '#faf9f9'
      this.$refs.sad.style.color = '#806f66'
      this.$refs.sau.style.background = '#faf9f9'
      this.$refs.sau.style.color = '#806f66'
      this.$refs.prd.style.background = '#faf9f9'
      this.$refs.prd.style.color = '#806f66'
    },
  },
  components: {
    HomeSerach
  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/goods',
      method:'get',
      params:{
        catid:this.PclpID
      }
    }).then(res=>{
      this.ListData = res.data.data.items
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../../style/common';
.Center{
  background: #fff;
  width: 1190px;
  margin: 30px auto 0 auto;
  height: 2000px;
  // background: pink;
  .top{
    height: 95px;
    position: relative;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
    // line-height: 95px;
    img{
      height: 45px;
      width: 140px;
      float: left;
      margin-top: 25px;
    }
    h1{
      float: left;
      font-size: 20px;
      line-height: 95px;
    }
    .Search_Goods{
      margin-left: 590px;
      position: absolute;
      top: 28px;
    }
  }
  .filtrate{
    margin: 10px 0;
    padding:8px 5px 0 5px;
    position: relative;
    z-index: 10;
    background: #faf9f9;
    color: #806f66;
    line-height: 20px;
    a{
      margin-right: 10px;
      text-align: center;
      display: inline-block;
      margin-left: -1px;
      overflow: hidden;
      padding: 0 5px 0 5px;
      cursor: pointer;
      height: 22px;
      line-height: 20px;
      border: 1px solid #ccc;
      i{
        font-weight: 800;
      }
    }
  }
  .List{
    padding-left: 5px;
    width: 1210px;
    ul{
      li{
        margin:0 20px 20px 0;
        width: 220px;
        padding: 7px 7px 0 7px;
        height: 350px;
        border: 1px solid #f5f5f5;
        float: left;
        a{
          margin: auto;
          display: block;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .list-price{
          width: 202;
          height: 30px;
          line-height: 30px;
          margin: 0 0 5px;
          letter-spacing: normal;
          white-space: nowrap;
          span{
            float: left;
            font-family: arial;
            font-weight: 400;
            font-size: 20px;
            color: #ff0036;
          }
          b{
            margin-left: 5px;
            float: left;
            font-size: 14px;
            font-weight: 700;
            color: #ff0036;
          }
        }
        .list-title{
          display: block;
          margin-bottom: 3px;
          font-size: 12px;
          position: relative;
          a{
            margin-left: 8px;
            color: #666;
            font-family: \5FAE\8F6F\96C5\9ED1;
            line-height: 14px;
            cursor: pointer;
          }
        }
        .list-title a:hover{
          text-decoration:underline;
          color: #ff0036;
        }
      }
      li:hover{
        border: 4px solid #ff0036;
        padding: 4px 4px 0 4px ;
      }
    }
  }
}
</style>
<style lang="scss">
   #ELB:hover{
    background-color: red;
    border: 2px solid red;
  }
  #ELB{
    border-radius:0; background-color: #e94c15;border: 2px solid #e94c15;color:#fff;
  }
</style>
