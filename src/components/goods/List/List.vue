<template>
  <div id="List">
    <div :data="ListData">
      <ul scope="scope">
        <li>{{scope.row.productName}}</li>
      </ul>
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
    console.log(this.id)
    this.$ajax({
      url:'http://www.mei.com/appapi/event/product/v3?pageIndex=1&categoryId='+this.id+'&key=&sort=&timestamp=1542022289681&summary=c6f4e947c2f08e9139abc8c004bb364e&platform_code=H5',
      methods:'get',
      params:{
      }
    }).then(res=>{
      this.ListData = res.data.products
    })
  }
}
</script>

<style scoped>
</style>
