<template>
  <div class="coupon">
    <div class="content">
      <div class="discount_coupon">
        <h1>优惠券列表</h1>
        <br>
        <div class="Store-coupon">
          <ul class="dc-list">
            <li v-for="LD in ListData" :key="LD.id">
              <p>{{LD.name}}</p>
              <p>满{{LD.condition}}减{{LD.money}}</p>
              <p>使用时间{{LD.use_start_time | formatDate}}</p>
              <p>结束时间{{LD.use_end_time | formatDate}}</p>
              <p><span @click="DcListClick(LD)" ><i class="el-icon-message-solid"></i>领取优惠券</span></p>
              <!-- <p><span v-if="mes"><i class="el-icon-message-solid"></i>领取成功</span></p>
              <p><span v-if="mess"><i class="el-icon-message-solid"></i>当前领取次数用完</span></p> -->
            </li>
          </ul>
        </div>
        <h1>店铺券列表</h1>
        <br>
        <div class="Membership-coupon">
          <ul class="dc-list">
            <li v-for="(LD,index) in shopData" :key="index">
              <p>{{LD.name}}</p>
              <p>满{{LD.condition}}减{{LD.money}}</p>
              <p>使用时间{{LD.use_start_time | formatDate}}</p>
              <p>结束时间{{LD.use_end_time | formatDate}}</p>
              <p><span @click="DcListClickDC(LD)"><i class="el-icon-message-solid"></i>领取优惠券</span></p>
              <!-- <p><span v-if="mes"><i class="el-icon-message-solid"></i>领取成功</span></p>
              <p><span v-if="mess"><i class="el-icon-message-solid"></i>当前领取次数用完</span></p> -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import config  from '../../config/config'
export default {
  data() {
    return {
      ListData:'',
      shopData:'',
      memberData:'',
      message:'',
      mes:false,
      mess:false
    }
  },
  methods: {
    DcListClick(LD){
      console.log(LD.id)
      this.$ajax({
        url:config.baseUrl + '/home/coupon_receive',
        method:'post',
        data:{
          coupon_id:LD.id,
          member_id:localStorage.getItem('userId')
        }
      }).then(res=>{
        this.message = res.data.message
        if(res.data.code == 20000){
          alert('领取成功')
        }else{
          alert('没有次数')
        }
      })
    },
    DcListClickDC(LD){
      this.$ajax({
        url:config.baseUrl + '/home/shop_coupon_receive',
        method:'post',
        data:{
          coupon_id:LD.id,
          member_id:localStorage.getItem('userId')
        }
      }).then(res=>{
        this.message = res.data.message
        if(res.data.code == 20000){
          alert('领取成功')
        }else{
          alert('没有次数')
        }
      })
    }
  },
  components: {

  },
  created(){
    //优惠券列表
    this.$ajax({
      url:config.baseUrl + '/home/coupon',
      methods:'get',
    }).then(res=>{
      this.ListData = res.data.data.items.data
    })

    //店铺优惠券列表
    this.$ajax({
      url:config.baseUrl + '/home/shop_coupon',
      method:'get',
      params:{
        shop_id:8
      }
    }).then(res=>{
      this.shopData = res.data.data.items.data
    })

    //会员店铺优惠券列表
    // this.$ajax({
    //   url:config.baseUrl + '/home/shop_coupon_receive',
    //   method:'get',
    //   params:{
    //     member_id:90
    //   }
    // }).then(res=>{
    //   console.log(res)
    //   this.memberData = res.data.data.items.data
    // })
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common';
.Enquiry{
  width: 990px;
  margin-left: 100px;
  
}
.discount_coupon{
  width: 100%;
  .Store-coupon{
    overflow: hidden;
    .dc-list{
      li{
        float: left;
        margin-right: 10px;
        text-align: center;
        margin-bottom: 15px;
        padding:10px;
        border:10px solid #FFEC8B;
        // background: #D3D3D3;
        p{
          margin-bottom: 5px;
          font-weight: 800;
          color:#222;
        }
      }
      li p:last-child{
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
      li p:nth-child(n+5){
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
    }
  }
  .Membership-coupon{
    overflow: hidden;
     li{
        float: left;
        margin-right: 10px;
        text-align: center;
        margin-bottom: 15px;
        padding:10px;
        border:10px solid #FFEC8B;
        // background: #D3D3D3;
        p{
          margin-bottom: 5px;
          font-weight: 800;
          color:#222;
        }
      }
      li p:last-child{
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
      li p:nth-child(n+5){
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
  }
  .menber-shop{
     overflow: hidden;
     li{
        float: left;
        margin-right: 10px;
        text-align: center;
        margin-bottom: 15px;
        padding:10px;
        border:10px solid #FFEC8B;
        // background: #D3D3D3;
        p{
          margin-bottom: 5px;
          font-weight: 800;
          color:#222;
        }
      }
      li p:last-child{
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
      li p:nth-child(n+5){
        padding-top: 10px;
        span{
          font-size: 14px;
          border:1px solid #e94c15;
          background-color:#e94c15;
          color:#fff;
          padding:5px 10px;
          cursor: pointer;
        }
      }
  }
}
</style>
