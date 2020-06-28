<template>
  <div class="quantity">
    <div class="inventory">
      <p><span>库存</span><span>{{goods_quantity}}&nbsp;{{goods_unit}}</span></p>
    </div>
    <div class="model">
      <!-- <ul v-for="Go in goods_option" :key="Go.id">
        <li v-for="go in Go" :key="go.id">
          <p>{{go.price}}</p>
        </li>
      </ul> -->
    </div>
    <div>
      <span class="numb">数量</span>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="goods_quantity" label="描述文字" style="width: 80px;"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goods_unit:String,
    goods_quantity:Number
    // goods_option:Array,
  },
  data () {
    return {
      num: 1,
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('AandS',value)
      if(value == this.goods_unit){
        this.handleChange()
      }
    }
  },
  created(){
    // console.log(this.num,this.goods_unit)
  }
}
</script>

<style scoped lang="scss">
@import '../../../../style/common';
  .quantity{
    margin-top: 10px;
    border-top:1px solid #ccc;
    // border-bottom: 1px solid #ccc;
    height: 140px;
    .inventory{
      margin-bottom: 10px;
      p{
        height: 60px;
        line-height: 60px;
        span:nth-child(2){
          margin-left: 30px;
          font-size: 12px;
        }
      }
    }
    .model{
      p{
        width: 90px;
        height: 50px;
        line-height: 35px;
        float: left;
        font-size: 16px;
      }
      ul {
        width: 500px;
        height: 50px;
        font-size: 16px;
        li{
        float: left;
        margin-right:20px;
        cursor:pointer;
        padding:5px;
        }
        li:hover{
            background: #222;
            color:#fff;
          }
      }
    }
    .numb{
      font-size: 12px;
      margin-right: 25px;
    }
  }
  .el-input__inner {
    padding: 0 !important;
    text-indent: 0px !important;
    border-radius: 0 !important;
  }

  .el-input-number__decrease {
    width: 20px !important;
  }

  .el-input-number__increase {
    width: 20px !important;
  }
  
</style>
<style lang="scss">
  
  /* .el-input-number{
    width: 80px;
  } */
</style>

