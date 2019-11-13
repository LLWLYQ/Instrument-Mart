<template>
  <div id="Select">
    <div class="Tabs">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="一口价" name="first"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="Rank" >
      <div class="block">
        <!-- <router-link :to="{name:'Select_praduct_release',query:{selectID:id}}"> -->
          <el-cascader
            v-if="reFresh"
            ref="optClass"
            :options="getData"
            v-model="selectedOptions"
            :props="options"
            filterable
            @change="handleChange"
          >
          </el-cascader>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //默认选中第一个标签
      reFresh: true,
      Value:'',
      activeName: 'first',
      optID:'',
      optdata:[{
        id:'',
        cate_name:'',
        child:[]
      }],
      getData:[{
        id:'',
        cate_name:'',
        child:[]
      }],
      options: {
        value: 'id',
        label:'cate_name',
        children:'child'
      },
      selectedOptions: []
    }
  },
  methods: {
    handleClick(tab, event) {
    },
    handleChange(value) {
      ++this.isResouceShow
      this.Value = value.slice(-1)
      console.log(this.Value)
      this.$ajax({
        url:'http://test1.yishangm.com/api/pc/goods_category/'+ this.Value +'',
        methods:'get',
        params:{
        }
        }).then(res=>{
           //push进optData
          let new_date = res.data.data
          this.getData.map(s => {
              s.child.map(d => {
                  // d.child.map(k => {
                  //     // 匹配对应的id, 拿到id 进行合并数组
                  //     if (k.id === 163) {
                  //         k.child = []
                  //         //数组合并
                          if(d.id == this.Value){
                            d.child = []
                            d.child = [...new_date];
                          }
                  //     }
                  // })
              })
          });
          console.log(this.getData);
          this.$forceUpdate()
      })
    },
    OptionsData() {
      this.$ajax({
        url:'http://test1.yishangm.com/api/pc/goods_category/show ',
        methods:'get',
        params:{
        }
      }).then(res=>{
        this.getData = res.data.data
        console.log(res)
        // this.optID = this.getData.id
      })
    },
  },
  created(){
    this.OptionsData()
  },
   watch:{
          getData() {
          this.reFresh = false
          this.$nextTick(() => {
            this.reFresh = true
          })
      }
    },
  mounted(){

  }
}
</script>

<style scoped lang="scss">

</style>
