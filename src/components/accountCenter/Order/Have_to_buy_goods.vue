<template>
  <div class="Have_to_buy_goods">
      <div class="List" v-if="ListData">
        <p class="List_title">消息列表</p>
        <div class="Mine">
          <p class="out" v-if="diudiu">暂无消息</p>
          <ul>
            <li v-for="(not,index) in NoticData" :key="index" >
              <a>
                <p v-if="not.del_status == 0"><span @click="ListClisk(not)" class="spClik"><i class="el-icon-zoom-in" style="margin-right:10px;"></i>{{not.message_title}}</span><span class="del" style="float:right;"><i class="el-icon-delete-solid" style="font-size:20px;" @click="messDel(not,index)"></i> </span></p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="Detail" v-if="DetailData">
        <p class="Detail_title">消息详情 <span @click="unfold()">返回列表</span><i @click="unfold()" class="el-icon-s-unfold"></i></p>
        <div class="mine">
          <ul>
            <li>{{noticData.message_title}}</li>
            <li><p v-html="noticData.message_body"></p></li>
          </ul>
        </div>
      </div>
  </div>
</template>
<script type="text/javascript">
import config from '../../../config/config'
import NoticeListHome from '../../Announcement/notice_list_home'
import NoticeDetail from '../../Announcement/notice_detail'
export default {
  data() {
    return {
      DetailData:false,
      ListData:true,
      notID:this.$route.query.notId,
      noticData:'',
      NoticData:'',
      diudiu:false
    }
  },
  methods: {
    messDel(not,index){
      // console.log(not.message_id)
      this.$ajax({
        url:config.baseUrl + '/home/message/' + not.message_id,
        method:'DELETE',
      }).then(res=>{
        console.log(res)
        if(res.data.code == 20000){
          this.wohu()
        }
      })
    },
    ListClisk(not){
      console.log(not)
      this.$ajax({
        url:config.baseUrl +'/home/message/'+not.message_id,
        method:'get'
        }).then(res=>{
          this.noticData = res.data.data
          
          console.log(this.noticData)
          if(res.data.code == 20000){
            this.ListData = false
            this.DetailData = true
          }
        })
    },
    unfold(){
      this.ListData = true
      this.DetailData = false
    },
    wohu(){
      this.$ajax({
      url:config.baseUrl + '/home/message',
      method:'get',
      params:{
        member_id:localStorage.getItem('userId')
      }
    }).then(res=>{
      let arr = res.data.data.items.data
          this.NoticData = arr.filter(item => {
            return item.del_status == 0
          })
      // this.NoticData = 
      if(this.NoticData.length == 0){
        this.diudiu = true
      }
    })
    }
  },
  components: {
    NoticeListHome,
    NoticeDetail
  },
  mounted(){

  },
  created(){
     this.wohu()
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Have_to_buy_goods{
    width: 1090px;
    margin-left: 220px;
    padding:10px 20px;
    background: #fff;
  .List{
    min-height: 1000px;
    .List_title{
      font-size: 14px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background:#e94c15;
      color:#fff;
      font-weight: 600;
      padding-left: 10px;
    }
  }
}
 .Mine{
   .out{
     height: 50px;
     line-height: 50px;
     width: 100%;
     text-align: center;
   }
    width: 100%;
    // height: 190px;
    // background: #f5f5f5;
    padding:0 5px;
    // margin-top: 230px;
    .spClik{
      display: block;
      float: left;
      width: 95%;
    }
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
          a{
            i{
              margin-right: 5px;
              display: block;
              color:#e94c15;
            }
          }

        }
      }
    }
    ul li:hover{
      border-bottom:1px solid #ccc;
      color:#e94c15;
    }
    ul li:nth-child(1){
      margin-top: 7px;
    }
  }
  .Detail{
    min-height: 1000px;
  .mine{
    margin-top: 10px;
    width: 990px;
    ul li:nth-child(1){
      text-align: center;
      height: 40px;
      font-size: 16px;
      font-weight: 700;
      line-height: 40px;
      color:#222;
      p{
        font-size: 12px;
        color:#222;
      }
    }
    ul li:nth-child(2){
      padding-left: 10px;
    }
  }
    .Detail_title{
      font-size: 16px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      background:#e94c15;
      color:#fff;
      font-weight: 700;
      padding-left: 10px;
      span{
          float: right;
          margin-right: 15px;
          cursor: pointer;
        }
      i{
        float: right;
        font-size: 24px;
        line-height: 40px;
        margin-right: 10px;
        cursor: pointer;

      }
    }
  }
</style>
