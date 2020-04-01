<template>
  <div class="notice_list_home">
      <div class="mine">
        <ul>
          <li v-for="not in noticData" :key="not.id" >
            <router-link :to="{name:'Have_to_buy_goods', query: {notId:not.notice_id}}">
              <p><i class="el-icon-zoom-in" style="margin-right: 5px;"></i>{{not.notice_title}}</p>
            </router-link>
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
    // noticeClick(not){
    //   // this.$router.push({
    //   //   path:'/notice_detail',
    //   //   query:{
    //   //     notId:JSON.stringify(not.notice_id)
    //   //   }
    //   // })
    // }
  },
  components: {

  },
  created(){

  },
  mounted(){
     this.$ajax({
      url:config.baseUrl + '/home/noticetwo',
      method:'get',
    }).then(res=>{
      this.noticData = res.data.data.items.data
      console.log(this.noticData)
    })
  }
}
</script>
<style lang="scss" scoped>
@import '../../../src/style/common';
  .mine{
    width: 100%;
    height: 150px;
    background: #f5f5f5;
    padding:0 15px;
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
        margin-top: 5px;
        cursor: pointer;
        p{
          color:#222;
          a{
            i{
              margin-right: 5px;
              color:#e94c15;
            }
          }

        }
        p:hover{
          color:#e94c15;
        }
      }
    }
    ul li:hover{
      border-bottom:1px solid #ccc;
    }
    ul li:nth-child(1){
      margin-top: 7px;
    }
  }
</style>
