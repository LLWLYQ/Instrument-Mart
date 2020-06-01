<template>
  <div class="ceshisss">
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" style="width:100%;">
      <el-table-column prop="goods_name" label="商品名称" show-overflow-tooltip width="auto"></el-table-column>
      <el-table-column prop="" label="次数">
        <input type="text" v-model='number'>
      </el-table-column>
      <el-table-column prop="brand_id" label="所需工时"></el-table-column>
      <el-table-column prop="goods_id" label="工时费"></el-table-column>
      <el-table-column prop="" label="面额">
        <template slot-scope="scope" style="width:230px;float:left;">
          <input type="text" v-model="number*scope.row.brand_id*scope.row.goods_id">
        </template>
      </el-table-column>
      <el-table-column prop="" label="折扣">
        <input type="text" v-model='discount'>
      </el-table-column>
      <el-table-column prop="" label="实额">
        <template slot-scope="scope" style="width:230px;float:left;">
          <input type="text" v-model="number*scope.row.brand_id*scope.row.goods_id*discount">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        currentPage: 1,
        pagesize: 1,
        tableData: [],
        number:'',
        face:'',
        discount:'',
        realPrice:''
      }
    },
    methods: {
        
      },
    computed:{
      
    },
    created() {
      let self = this
      this.$ajax({
        url: 'http://shop.yishangm.com/home/goods',
        method: 'get',
        params: {
          catid: ''
        }
      }).then(res => {
        self.tableData = res.data.data.items
        console.log(self.tableData)
      })
    },
  }

</script>
<style lang="scss" scoped>
  .ceshisss{
    width: 900px;
    margin: 50px auto 50px auto;
  }
</style>
