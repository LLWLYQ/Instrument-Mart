<template>
  <div class="quantity">
    <div class="inventory">
      <p><span>库存</span><span>90</span></p>
    </div>
    <div class="model">
      <p>选择型号</p>
      <ul>
        <li>008B</li>
        <li>040B</li>
        <li>066B</li>
        <li>300F</li>
      </ul>
    </div>
    <div>
      <span class="numb">数量</span>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="99" label="描述文字"></el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      num: 1
    }
  },
  methods: {
    handleChange(value) {
      this.$emit('AandS',value)
    }
  }
}
</script>

<style scope lang="scss">
  .quantity{
    height: 200px;
    .inventory{
      margin-bottom: 10px;
      p{
        height: 60px;
        font-size: 16px;
        line-height: 60px;
        span:nth-child(2){
          margin-left: 62px;
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
      font-size: 16px;
      margin-right: 60px;
    }
  }
</style>

