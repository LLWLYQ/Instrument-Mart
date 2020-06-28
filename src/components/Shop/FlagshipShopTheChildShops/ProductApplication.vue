<template>
  <div class="ProductApplication">
    <div class="pali-body">
      <div class="pa-header">
        <h1>产品应用</h1>
      </div>
      <div class="pa-body">

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
    // getIcon(){
    //   this.$ajax({
    //     url:baseUrl+"home/shop/ID",
    //     method:"post",
    //     data:{
    //       menmber:localStorage.getItem("userId"),
    //        userName:localStorage
    //     }
    //   }).then(res=>{
    //     console.log(res.shop_address)
    //     let Date =  new Date
    //     let shopMessage = shop_address
    //     shopMessage.map(item =>{
    //       console.log(item)
    //       item.shop_id = item.cpmmtrfill
    //       let cath = item.dixueshitian
    //     })
    //     // console.log(Date)
    //   })
    // }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.ProductApplication{
  overflow: hidden;
  width: 1230px;
  margin-bottom: 30px;
  // position: absolute;
  // top: 480px;
  .pali-body{
    margin-top: 10px;
    width: 100%;
    height: 1200px;
    // background-color:#000;
    .pa-header{
      width: 100%;
      padding-bottom: 15px;
      border-bottom: 5px solid #dd4b1c;
      overflow: hidden;
      h1{
        float: left;
        font-size: 14px;
        padding-left: 15px;
        border-left: 5px solid #dd4b1c;
      }
    }
    .pa-body{
      width: 100%;
      height: 1400px;
      background: pink;
    }
  }
}
</style>
