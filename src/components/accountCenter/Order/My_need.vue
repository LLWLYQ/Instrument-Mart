<template>
  <div class="My_need">
    <div class="content_container">
      <div class="LoDa">
        <ul>
          <li v-for="(LoDa,index) in LotteryData" :key="index">
            <p>{{LoDa.draw_title}}</p>
            <p>添加时间：{{LoDa.draw_addtime | formatDate}}</p>
            <p>开始时间：{{LoDa.draw_start_time | formatDate}}</p>
            <p>结束时间：{{LoDa.draw_end_time | formatDate}}</p>
          </li>
        </ul>
      </div>
      <br>
      <h1>抽奖活动查看</h1>
      <br>
      <div class="examine">
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../config/config'
export default {
  data() {
    return {
      LotteryData:'',
    }
  },
  methods: {

  },
  components: {

  },  
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/draw',
      method:'get',
    }).then(res=>{
      this.LotteryData = res.data.data.items.data
      console.log(this.LotterData)
    })
    //抽奖活动查看
    // this.$ajax({
    //   url:
    // })
  }                                                    
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.My_need{
  margin-left: 100px;
}
</style>
