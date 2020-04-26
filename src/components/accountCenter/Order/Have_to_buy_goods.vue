<template>
  <div class="Have_to_buy_goods">
    <div class="content_container">
      <div class="List" v-if="ListData">
        <p class="List_title">公告列表</p>
        <div class="Mine">
          <ul>
            <li v-for="not in NoticData" :key="not.id" >
              <a>
                <p @click="ListClisk(not)"><i class="el-icon-zoom-in"></i>{{not.notice_title}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="Detail" v-if="DetailData">
        <p class="Detail_title">公告详情 <span @click="unfold()">返回列表</span><i @click="unfold()" class="el-icon-s-unfold"></i></p>
        <div class="mine">
          <ul>
            <li>{{noticData.notice_title}}</li>
            <li><p v-html="noticData.notice_content"></p></li>
          </ul>
        </div>
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
      NoticData:''
    }
  },
  methods: {
    ListClisk(not){
      this.$ajax({
        url:'http://shop.yishangm.com/home/noticetwo/'+not.notice_id,
        method:'get'
        }).then(res=>{
          this.noticData = res.data.data
          if(res.data.code == 20000){
            this.ListData = false
            this.DetailData = true
          }
        })
    },
    unfold(){
      this.ListData = true
      this.DetailData = false
    }
  },
  components: {
    NoticeListHome,
    NoticeDetail
  },
  mounted(){

  },
  created(){
     this.$ajax({
      url:config.baseUrl + '/home/noticetwo',
      method:'get',
    }).then(res=>{
      this.NoticData = res.data.data.items.data
      // console.log(this.NoticData)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Have_to_buy_goods{
  margin-left: 100px;
  .List{
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
    width: 100%;
    height: 190px;
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
      color:#e94c15;
    }
    ul li:nth-child(1){
      margin-top: 7px;
    }
  }
  .Detail{
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
