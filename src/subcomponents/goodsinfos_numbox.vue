<template>
  <div class="mui-numbox" data-numbox-min='1'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>

  <!-- 分析： 子组件什么时候把 数据传递给父组件 -->
  <!--  -->
</template>

<script>
mui('body').on('tap','a',function(){document.location.href=this.href;});
import mui from "../lib/mui/js/mui.min.js";

export default {
  mounted() {
    // 初始化数字选择框组件
      mui(".mui-numbox").numbox();
      
    },
  methods:{
      countChanged(){
          this.$emit("getcount",parseInt(this.$refs.numbox.value));
      }
  }
  
};
</script>

<style >
*{touch-action: none;}
</style>
