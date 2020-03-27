<template>
  <div class="Have_to_buy_goods">
    <div class="content_container">
      <div class="top">
        <p>平台公告</p>
        <NoticeListHome></NoticeListHome>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import NoticeListHome from '../../Announcement/notice_list_home'
export default {
  data() {
    return {
    }
  },
  methods: {

  },
  components: {
    NoticeListHome
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Have_to_buy_goods{
  margin-left: 100px;
  .top{
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
}
</style>
