
<template>
  <div id="zoning">
  <!--change-on-select是否允许选择任意一级的选项 必须为true 否则触发不了change事件,因为我的首项带child 算是父级-->
    <el-cascader
      :options="options"
      :clearable="true"
      size="mini"
      ref="cascader"
      @change="handleItemChange"
      :change-on-select="true"
      :props="props"
    ></el-cascader>
  </div>
</template>

<script>
  export default {
    components: {},
    filters: {},
    data () {
      return {
        options: [],
        props: {
          value: 'main',
          // 显示的文字字段名
          label: 'label',
          // 子层级字段名
          children: 'child'
        }
      }
    },
    methods: {
      /**初始化
       * */
      getZoning () {
        let self = this;
        // 发送请求
        self.$backend.request(self.$api.user.getZoning, {id: 0}).then(res => {
          self.options = res.list
          self.options.map((item, index) => {
            for (let k in item) {
              if (!item[k]) {
                delete item[k]
              }
            }
            // 先让数据变成父级
            item.child = []
            // 手动创建字段表明当前索引 假设arrIndex值为'1-2-3' 即为options[1].child[2].child[3]
            item.arrIndex = index + ''
            // 将当前数据转成字符串放入对象里 当做value值
            item.main = JSON.stringify(item)
          })
        })
      },
      handleItemChange (val) {
      // 因为允许选择任意级,所以在向下选择时,会出现选择多个的情况,造成选中的合并成了一个数组,我这里只让他选择到第三层,页面上最多只会出现选择三个,如果超出了,直接return出去 不需要再动态加载下去了
        if (val.length > 2) return
        //开门见山的说,每选中一个选项,相当于将本条数据push到val里,所以索引为val.length - 1的那一项必然是当前点击的那一项,哇 我他娘的可真是才思敏捷啊
        val = JSON.parse(val[val.length - 1])
        //发送请求,是不是觉得和初始化用的同一个接口,然后还分两个事件有点冗余?写代码不累啊!
        this.$backend.request(this.$api.user.getZoning, {id: val.roid}).then(res => {
          let data = res.list
          //是不是有点迷糊 arrIndex哪来的?这玩意就是手动塞进去的索引
          let arrIndex = val.arrIndex
          data.map((item, index) => {
            // 手动创建字段表明当前索引 假设arrIndex值为'1-2-3' 即为options[1].child[2].child[3]
            item.arrIndex = arrIndex + '-' + index
            // 将当前数据转成字符串放入对象里 当做value值
            item.main = JSON.stringify(item)
            // 判断是否是第三层及以上
            if (item.arrIndex.split('-').length < 3) {
              item.child = []
            }
          })
          // 根据父元素的arrIndex判断塞到哪个父元素下
          arrIndex = arrIndex.split('-')
          // 首项键不是child 和for循环里区别开
          let a = this.options[arrIndex[0]]
          for (let i = 1; i < arrIndex.length; i++) {
            a = a['child'][arrIndex[i]]
          }
          // 方法丑是丑了点...不过...真香
          this.$delete(a, 'child');
          this.$set(a, 'child', data)
        })
      }
    },
    mounted () {
      this.getZoning()
    },
  }
</script>

<style scoped>

</style>

