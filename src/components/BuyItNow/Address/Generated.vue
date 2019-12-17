<template>
  <div class="Generated">
    <div class="mine">
      <ul class="AddressData">
        <li>{{name}}</li>
        <li>{{mobileNumber}}</li>
        <li>{{detailed_address}}</li>
        <li>{{Invitation_code}}</li>
        <li>{{province}}</li>
        <li>{{city}}</li>
        <li>{{area}}</li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name:"Generated",
  data () {
    return {
      name:this.$route.params.name,
      mobileNumber:this.$route.params.mobileNumber,
      detailed_address:this.$route.params.detailed_address,
      Invitation_code:this.$route.params.Invitation_code,
      province:this.$route.params.province,
      city:this.$route.params.city,
      area:this.$route.params.area
    }
  },
  methods: {

  },
  created(){
    console.log(this.name)
  }
}
</script>

<style scoped lang="scss">
@import '../../../style/common';

</style>
