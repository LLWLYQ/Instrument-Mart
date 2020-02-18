<template>
  <div class="Shipping_address">
    <div class="content_container">
      <AddCopy></AddCopy>
    </div>
  </div>
</template>

<script type="text/javascript">
import AddressCOPY from '../../BuyItNow/Address/AddressCOPY'
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  components: {
    'AddCopy':AddressCOPY
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Shipping_address{
  margin-left: 120px;
  margin-top: -20px;
}
</style>
