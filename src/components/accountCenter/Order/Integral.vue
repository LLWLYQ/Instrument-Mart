<template>
  <div class="Integral">
    <div class="content_container">
      <div class="top">
        <p>我的积分</p>
      </div>
      <div class="usable">
        <div class="usaInt">
          <span>可用积分</span>
          <span>{{IntegralSum}}</span>
        </div>
      </div>
      <div class="scoreList">
        <ul>
          <li class="masthead ">
            <span>来源/用途</span>
            <span>积分变化</span>
            <span>日期</span>
            <!-- <span>备注</span> -->
          </li>
          <li v-for="scd in scoreData" :key="scd.id">
            <div class="source">
              <p v-if="scd.origin_type == 1">签到</p>
              <p v-if="scd.origin_type == 2">连续签到</p>
              <p v-if="scd.origin_type == 3">连续签到最大天数送积分</p>
              <p v-if="scd.origin_type == 4">注册获得</p>
              <p v-if="scd.origin_type == 5">交易获得</p>
            </div>
            <div class="change">
              <p v-if="scd.change_type == 1">+{{scd.scrore_value}}</p>
              <p v-if="scd.change_type == 0">-{{scd.scrore_value}}</p>
            </div>
            <div class="time">
              {{scd.created_at | formatDate}}
            </div>
            <!-- <div class="typeOf">
              
            </div> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../config/config'
export default {
  data() {
    return {
      scoreData:'',
      IntegralSum:0,
    }
  },
  filters: {
      formatDate (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '年' + MM + '月' + d + '日' + h + ':' + m + ':' + s;
      }
    },
  methods: {

  },
  components: {

  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/score',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId')
      }
    }).then(res=>{
      // console.log(res)
      this.scoreData = res.data.data.items.data
      this.scoreData.map(item=>{
        this.IntegralSum += item.scrore_value
        // console.log(this.IntegralSum)
      })
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Integral{
  width: 990px;
  margin-left: 100px;
  .top{
    p{
      font-size: 16px;
      font-weight: 700;
      height: 35px;
      width: 100%;
      line-height: 35px;
      border-bottom: 2px solid #333;
    }
  }
  .usable{
    margin-top: 15px;
    height: 160px;
    width: 100%;
    padding: 28px 0;
    border: 2px solid #e2e2e2;
    background-color: #f1f1f1;
    .usaInt{
      width: 265px;
      float: left;
      height: 100px;
      border-right: 1px solid #e2e2e2;
    }
    .usaInt span:nth-child(1){
      font-size: 18px;
      font-weight: 700;
      color: #666;
      height: 24px;
      line-height: 24px;
      display: block;
      text-indent: 60px;
      text-align: left;
    }
    .usaInt span:nth-child(2){
      font-size: 34px;
      font-weight: 700;
      color: #288c29;
      height: 40px;
      line-height: 40px;
      display: block;
      text-indent: 60px;
      text-align: left;
    }
  }
  .scoreList{
    ul{
      .masthead{
        padding: 0;
        margin-top: 15px;
        height: 35px;
        width: 100%;
        line-height: 35px;
        background-color: #f1f1f1;
        border-width: 1px 0;
        border-color: #e3e3e3;
        border-style: solid;
        color: #999;
        span{
          display: block;
          float: left;
          border-right: 1px solid #e3e3e3;
          height: 32px;
          line-height: 32px;
          text-align: center;
          overflow: hidden;
        }
      }
      .masthead span:nth-child(1){
        width: 380px;
      }
      .masthead span:nth-child(2){
        width: 210px;
      }
      .masthead span:nth-child(3){
        width: 400px;
      }
      // .masthead span:nth-child(4){
      //   width: 120px;
      // }
      li{
        width: 100%;
        height: 100px;
        padding: 20px 0;
        border-bottom: 1px solid #f1f1f1;
        div{
          float: left;
          line-height: 60px;
        }
        .source{
          width: 380px;
          height: 100%;
          text-align: center;
        }
        .change{
          width: 210px;
          height: 100%;
          text-align: center;
          p{
            font-size: 24px;
            font-weight: 700;
            line-height: 60px;
            color:#b1000f;
          }
        }
        .time{
          width: 400px;
          height: 100%;
          text-align: center;
        }
        .typeOf{
          width: 120px;
          height: 100%;
          text-align: center;
        }
      }
    }
  }
}
</style>
