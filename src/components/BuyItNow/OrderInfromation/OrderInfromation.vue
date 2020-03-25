<template>
  <div class="OrderInfromation" style="margin-top:50px;">
    <div class="sku">
      <h4>订单信息</h4>
      <ul class="St">
        <li>店铺宝贝</li>
        <!-- <li>商品属性</li> -->
        <li>单价</li>
        <li>数量</li>
        <li>小计</li>
      </ul>
      <ul class="cartLsit" v-for="(LD,index) in orderData" :key="index">
        <!-- <h1>{{LD}}</h1> -->
        <li class="carLi" @click="diu(LD)">
          <p><img :src="baseUrl+LD.img" alt=""></p>
          <p>{{LD.productName}}</p>
          <p>
            <span>￥{{LD.price}}</span>
          </p>
          <p><span>{{LD.count}}</span></p>
          <p><span style="color:#f40;">￥{{LD.price*LD.count}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import config from '../../../config/config'
export default {
  data () {
    return {
      orderData:JSON.parse(this.$route.query.orderData),
      totalMoney:JSON.parse(this.$route.query.totalMoney),
      // ListData:'',
      // SumData:0,
    }
  },
  methods: {
    //  diu(LD){
    //    let Gid  = LD.goods_id
    //    this.$ajax({
    //      url:config.baseUrl + '/home/goods/',
    //      method:'get',
    //      params:{
    //        id:Gid
    //      }
    //    }).then(res=>{
    //      console.log(res)
    //    })
    //  },
  //    order(){
  //     this.$ajax({
  //       url:config.baseUrl + '/home/cart',
  //       method:'get',
  //       params:{
  //         member_id:localStorage.getItem('userId'),
  //       }
  //     }).then(res=>{
  //       this.ListData =  res.data.data.items.data
  //       this.ListData.map(item=>{
  //         this.SumData += item.quantity*item.get_goods.sales_price
  //       })
  //     })
  //   }
  },
  created(){
    // this.order()
    //  this.$ajax({
    //   url:config.baseUrl + '/home/address',
    //   method:'get',
    //   params:{
    //     member_id:localStorage.getItem('userId'),
    //   }
    // }).then(res=>{
    //   this.address = res.data.data.items
    //   let cityID = res.data.data.items
    //   cityID.map(item=>{
    //     this.province_id = item.province_id
    //     this.city = item.city_id
    //     this.area = item.area_id
    //   })
    //   if(res.data.data.items != ''){
    //     this.AddressList = false
    //   }
    // })
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';
  .top{
    margin-top: 20px;
    .TP{
      border-bottom:1px solid #000;
    }
  }

  .sku{
    margin-top: 20px;
    .St{
      height: 30px;
      margin-top: 10px;
      padding-bottom: 15px;
      border-bottom:1px solid #222;
      li{
        float: left;
      }
      li:nth-child(1){
        margin-left:100px;
      }
      li:nth-child(4){
        margin-left:500px;
      }
      li:nth-child(2){
        margin-left:350px;
      }
       li:nth-child(3){
        margin-left:200px;
      }

    }
    .cartLsit{
      .carLi{
        border-bottom: 1px solid #ccc;
        padding-bottom: 20px;
        height: 230px;
      }
      p{
        float: left;
        height: 200px;
      }
      p:nth-child(n+2){
        padding-top:40px;
      }
      p:nth-child(2){
        width: 200px;
      }
      p:nth-child(5){
         width: 430px;
         text-align: right;
      }
      p:nth-child(3){
        width: 210px;
        text-align: center;
      }
      p:nth-child(4){
         width: 270px;
         text-align: center;
      }

    }
  }

</style>
