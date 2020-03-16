<template>
  <div class="Discount_coupon">
    <div class="content">
      <div class="discount_coupon">
        <ul>
          <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">10</span></li>
          <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">50</span></li>
          <li><img src="../../../assets/imges/YHQ.jpg" alt=""><span class="Describe">本代金券仅供本店不打折单品使用<br />使用日期:2020-05-20至2020-06-20</span><span class="Cash">80</span></li>
        </ul>
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
@import '../../../style/common';
.content{
  width: 1090px;
}
.discount_coupon{
  width: 100%;
  margin-top: 30px;
  margin-left: 100px;
  li{
    float: left;
    width: 340px;
    border:1px solid #ccc;
    position: relative;
    img{
      width: 100%;
      height: 100%;
    }
    .Describe{
      position: absolute;
      font-size: 12px;
      top:80px;
      left: 37px;
      text-align: center;
    }
    .Cash{
      position: absolute;
      font-size: 33px;
      font-weight: bold;
      top:61px;
      right: 41px;
      text-align: center;
    }
  }
  li:nth-child(n+2){
    margin-left:35px;
  }
}
</style>
