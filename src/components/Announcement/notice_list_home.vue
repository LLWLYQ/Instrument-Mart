<template>
  <div class="notice_list_home">
      <div class="mine">
        <ul>

          <li v-for="not in noticData" :key="not.id">
            <p><a><i class="el-icon-zoom-in"></i>{{not.notice_title}}</a></p>
          </li>
        </ul>
      </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../config/config'
export default {
  data() {
    return {
      noticData:''
    }
  },
  methods: {

  },
  components: {

  },
  created(){
    this.$ajax({
      url:config.baseUrl + '/home/noticetwo',
      method:'get',
    }).then(res=>{
      this.noticData = res.data.data.items.data
      console.log(this.noticData)
    })
  },
}
</script>
<style lang="scss" scoped>
@import '../../../src/style/common';
  .mine{
    width: 200px;
    height: 190px;
    background: #f5f5f5;
    margin:0 15px;
    // margin-top: 230px;
    ul{
      li{
        margin-bottom: 5px;
        display: block;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        p{
          a{
            i{
              margin-right: 5px;
              color:#e94c15;
            }
          }

        }
      }
    }
    ul li:hover{
      border-bottom:1px solid #ccc;
    }
  }
</style>
