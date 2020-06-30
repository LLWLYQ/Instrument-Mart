<template>
  <div class="Discount_coupon">
    <div class="content">
      <div class="discount_coupon">
        <h1>店铺优惠券</h1>
        <br>
         <div class="ddd">
          <ul class="dc-list">
            <li v-for="(LD,index) in shopData" :key="index">
              <p><i class="el-icon-delete-solid" @click="DelClick(LD,index)"></i></p>
              <p>{{LD.name}}</p>
              <p>优惠{{LD.money}}</p>
              <p>使用时间：{{LD.use_start_time | formatDate}}至{{LD.use_end_time | formatDate}}</p>
            </li>
          </ul>
        </div> 
        <h1>平台优惠券</h1>
        <br>
         <div class="ddd">
          <ul class="dc-list">
            <li v-for="(LD,index) in platformshopData" :key="index">
              <p><i class="el-icon-delete-solid" @click="DelClick(LD,index)"></i></p>
              <p>{{LD.name}}</p>
              <p>优惠{{LD.get_coupon.money}}</p>
              <p>使用时间：{{LD.get_coupon.use_start_time | formatDate}}至{{LD.get_coupon.use_end_time | formatDate}}</p>
            </li>
          </ul>
        </div> 
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import config  from '../../../config/config'
export default {
  data() {
    return {
      platformshopData:'',
      shopData:''
    }
  },
    filters: {
     formatDate: function(value) {//10位时间戳转换
      let date = new Date(parseInt(value) * 1000);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let minute = date.getMinutes();
      let second = date.getSeconds();
      minute = minute < 10 ? "0" + minute : minute;
      second = second < 10 ? "0" + second : second;
      return y + "年" + m + "月" + d + "日 " + h + ":" + minute + ":"+second; }
    },
  methods: {
   
  },
  components: {

  },
  created(){
    this.$ajax({
      url: config.baseUrl + '/home/shop_coupon_receive',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId')
      }
    }).then(res=>{
      this.platformshopData = res.data.data.items.data
      console.log(res)
    })
    this.$ajax({
      url:config.baseUrl + '/home/shop_coupon',
      method:'get',
      params:{
        shop_id:8
      }
    }).then(res=>{
      this.shopData = res.data.data.items.data
      console.log(this.shopData)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.content{
  width: 1090px;
    margin-left: 220px;
    padding: 20px;
    background: #fff;
}
.discount_coupon{
  width: 100%;
  // margin-top: 30px;
  // margin-left: 100px;
  height: 1000px;
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
        // padding-top: 10px;
        width: 220px;
      }
      li p:nth-child(1){
        height: 18px;
        margin-bottom: 0px;
        font-weight: 800;
        i{
          float: right;
          font-size: 18px;
          cursor: pointer;
        }
      }
  }
  .ddd{
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
          overflow: hidden;
          i{
            float: right;
            font-size: 18px;
            cursor: pointer;
          }
        }
      }
      li p:last-child{
        // padding-top: 10px;
        width: 220px;
      }
    li p:nth-child(1){
        height: 18px;
        // padding-top: 10px;
        margin-bottom: 0px;
        font-weight: 800;
      }
  }
}
</style>
