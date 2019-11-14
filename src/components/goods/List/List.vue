<template>
  <div id="List">
    <div class="content_container">
      <div class="brand">
        <div class="logo">
          <div class="logo_brand">品牌</div>
          <div class="logo_frame">
            <ul>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1OBJZJpXXXXcGXpXXSutbFXXX.jpg" alt=""></li>
              <li><img src="//img.alicdn.com/bao/uploaded/TB1mci2KFXXXXXpXFXXSutbFXXX.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main">
        <div class="GoodsList">
          <ul class="List_L">
            <li v-for="LD in ListData" :key="LD.id">
              <router-link :to="{name:'Detail',query:{DetailID:LD.productId}}" target="_blank" tag="a">
                <img :src="LD.imageUrl" alt="">
                <p class="LD_p1"><b>¥</b>{{LD.price}}</p>
                <p class="LD_p2"><a href="">{{LD.brandName }}</a><a href="">{{LD.productName}}</a></p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id:this.$route.query.listId,
      ListData:''
    }
  },
  methods: {
    GoodsList(){

    }
  },
  created(){
    this.$ajax({
      url:'http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId='+this.id+'&key=&sort=&timestamp=1542022289681&summary=c6f4e947c2f08e9139abc8c004bb364e&platform_code=H5',
      methods:'get',
      params:{
      }
    }).then(res=>{
      this.ListData = res.data.products
      console.log(this.ListData)
    })
  }
}
</script>

<style scope lang="scss">
@import "../../../style/common.css";
.brand{
  height: 215px;
  border: 1px solid #D1CCC7;
  width: 1420px;
  margin-bottom: 20px;
  .logo{
    width: 100%;
    height: 130px;
    border: 2px solid #D1CCC7;
  }
  .logo_brand{
    width: 120px;
    height: 100%;
    padding: 15px 0 0 15px;
    background-color: #F7F5F5;
    font-size: 12px;
    color:#B0A59F;
    float: left;
  }
  .logo_frame{
    width:1280px;
    height: 100%;
    float: left;
    padding:5px 0 5px 30px;
    ul{
      width: 1200px;
    }
    li{
      width: 104px;
      height: 52px;
      border: 1px solid #e1e1e1;
      float: left;
      margin:0 3px 5px 3px;
      text-align: center;
      line-height: 52px;
      cursor:pointer;
      img{
        height: 100%;
        width: 100%;
      }
    }
  }
  .logo_frame li:hover {
    border:3px solid red;
  }
}
.main{
.GoodsList{
    .List_L{
      li{
        width: 268px;
        height: auto;
        margin:0px 20px 20px 0px;
        border: 1px solid #f5f5f5;
        float: left;
        cursor: pointer;
        img{
          height:313px;
          width:99%;
          padding:2px;
        }
        .LD_p1{
          color:#ff0036;
          font-size:25px;
          font-weight:400;
          width:100%;
          margin-left: 8px;
          b{
            font-size:15px;
          }
        }
        .LD_p2{
          max-width:100%;
          margin-left: 10px;
          margin-bottom: 5px;
        }
        .LD_p2 a:nth-child(1){
          color:#333;
          font-size: 12px;
        }
        .LD_p2 a:nth-child(1):hover{
          border-bottom: 1px solid #ff0036;
          color:#ff0036;
        }
        .LD_p2 a:nth-child(2){
          color:#568396;
          font-size: 12px;
          margin-left: 15px;
        }
        .LD_p2 a:nth-child(2):hover{
          border-bottom:1px solid #568396;
        }
      }
      li:hover{
        border-color: #ff0036;
      }
    }
  }
}
</style>
