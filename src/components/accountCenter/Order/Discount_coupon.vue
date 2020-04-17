<template>
  <div class="Discount_coupon">
    <div class="content">
      <div class="discount_coupon">
        <h1>优惠券列表</h1>
        <br>
        <div class="ddd">
          <ul class="dc-list">
            <li v-for="(LD,index) in shopData" :key="index">
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
      shopData:''
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
    DelClick(LD,index){
      this.$ajax({
        url: config.baseUrl + '/home/shop_coupon_receive/'+ LD.receive_id,
        method:'DELETE',
      }).then(res=>{
        if(res.data.code == 20000){
          this.shopData.splice(index,1)
        }
      })
    },
    DelClickDC(LD,index){
      this.$ajax({
        url: config.baseUrl + '/home/coupon_receive/'+ LD.receive_id,
        method:'DELETE',
      }).then(res=>{
        if(res.data.code == 20000){
          this.memberData.splice(index,1)
        }
      })
    }
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
      this.shopData = res.data.data.items.data
    })
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
