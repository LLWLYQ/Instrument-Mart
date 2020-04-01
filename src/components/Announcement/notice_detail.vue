<template>
  <div class="notice_detail">
    <div class="content_container">
      <div class="top">
        <p>公告详情</p>
      </div>

    </div>
  </div>
</template>
<script type="text/javascript">

export default {
  name:'notice_detail',
  data() {
    return {
      notID:this.$route.query.notId,
      noticData:''
    }
  },
  methods: {

  },
  components: {

  },
  created(){
    this.$ajax({
      url:'http://shop.yishangm.com/home/noticetwo/'+this.notID,
      method:'get'
    }).then(res=>{
      this.noticData = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../../src/style/common';
  .mine{
    margin-top: 10px;
    width: 990px;
    ul li:nth-child(1){
      text-align: center;
      height: 40px;
      font-size: 16px;
      font-weight: 700;
      line-height: 40px;
      color:#222;
      p{
        font-size: 12px;
        color:#222;
      }
    }
    ul li:nth-child(2){
      padding-left: 10px;
    }
  }
  .top{
    margin-top: 30px;
    p{
      font-size: 16px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background:#e94c15;
      color:#fff;
      font-weight: 700;
      padding-left: 10px;
    }
  }
</style>
