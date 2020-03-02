<template>
  <div class="Lottery">
    <div class="lottery"></div>
    <div class="content_container">
      <div class="header">

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
    save(){
      this.ajax({
        url:"www.baidu.com",
        method:'get',
      })
    }
  },
  components: {

  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', true);
  }
}
</script>

<style lang="scss" scoped>
  @import '../../../style/common';
  .lottery{
    // margin-top: 30px;
    height: 430px;
    width: 100%;
    background-image:url(https://gtms04.alicdn.com/tps/i4/TB1aAIWHpXXXXahXpXXoeuYLVXX-1920-429.jpg);
    // position: absolute;
  }
  .content_container{
    height: 1000px;
    // background: yellow;
  }
</style>
