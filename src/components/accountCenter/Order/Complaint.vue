<template>
  <div class="Complaint">
      <div class="comment">
        <div class="comment_right">
          <el-tabs v-model="activeName">
            <el-tab-pane label="我的评价" name="second">
              <table class="rate-grid">
                <p v-if="reviewData == ''" class="PP">暂无评价</p>
                <tbody>
                  <tr v-if="reviewData !=''">
                    <td>评价</td>
                    <td>宝贝信息</td>
                    <td>评价人</td>
                    <td>操作</td>
                  </tr>
                  <tr v-for="(red,index) in reviewData" :key="index">
                    <td class="tm-col-master">
                      <div class="tm-rate-content">
                        {{red.content}}
                        <div class="tm-m-photos">
                          <ul class="tm-m-photos-thumb">
                          </ul>
                        </div>
                      </div>
                    </td>
                    <td class="col-meta">
                      {{red.goods_name}}
                    </td>
                    <td class="col-author">
                      {{red.user_name}}
                    </td>
                    <td class="rate-del"><span @click="Deltd(red,index)" v-if="Truedel == 1">删除评价</span></td>
                    <td class="rate-del" v-if="Truedel == 0">好评不可删除评论,中评或者差评才可删除评论</td>
                  </tr>
                </tbody>
              </table>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
  </div>
</template>

<script type="text/javascript">
import config from '../../../config/config'
export default {
  data() {
    return {
      reviewData:'',
      activeName:'second',
      Truedel:''
    }
  },
  methods: {
    Deltd(red,index){
      this.$ajax({
        url:config.baseUrl + '/home/comment/' + red.comment_id,
        method:'DELETE',
      }).then(res=>{
        console.log(res)
        if(res.data.code == 20000){
          this.reviewData.splice(index,1)
        }
      })
    }
  },
  components: {

  },
  created(){
    this.$ajax({
        url:config.baseUrl + '/home/comment',
        methods:'get',
        params:{
          member_id:localStorage.getItem('userId'),
          title:'',
          goods_id:'',
          // shop_id:'荣耀Play4T Pro'
        }
      }).then(res=>{
        this.reviewData = res.data.data.items.data
        // console.log(this.reviewData)
      })
    
    this.$ajax({
      url:config.baseUrl + '/home/comment/del/status',
      method:'post',
    }).then(res=>{
      console.log(res)
      this.Truedel =  res.data.data.value
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/common';
.Complaint{
  margin-left: 100px;
  width: 1090px;
  height: 1000px;
     .comment{
    width: 100%;
    height: 5000px;
    overflow:hidden;
    h1{
      text-align: center;
    }
    .comment_left{
      width: 190px;
      background-color: black;
      height: 100%;
      float: left;
    }
    .comment_right{
      float: left;
      width: 990px;
      margin-left: 10px;
      height: 100%;
      // border-top:1px solid #ccc;
      border-bottom:1px solid #ccc;
      h1{
        font-size: 20px;
      }
      .commodity_information{
        text-align: center;
        font-size: 20px;
        letter-spacing:10px;
      }
      .GoodTab{
        // width: 920px;
        // height: 310px;
        td{
          padding:20px 20px;
          width: 150px;
          text-align: center;
          border:0.1px solid #ccc;
        }
        tbody tr:nth-child(1){
          background: #222;
          color:#fff;
        }
        tbody tr:nth-child(n+2){
          border:none;
        }

      }
      .PRODUCT{
        li{
          width: 280px;
          height: 50px;
          line-height: 50px;
          float: left;
          text-align: center;
          border-bottom: 1px solid #e7e7e7;
          margin-left: 20px;
          font-size: 14px;
          color:#ccc;
        }
        .bigimg{
          li{
            width: 100%;
            height: 600px;
            margin:0 auto;
            overflow: hidden;
            margin-bottom: 20px;
            img{
              width: 100%;
              height: 100%;
            }
          }
        }
        .packageURL{
          img{
            width: 100%;
          }
        }
      }
    }
  }
   .rate-grid {
    width: 990px;
    table-layout: fixed;
    border-top:1px solid #ccc;
    .PP{
      height: 30px;
      width: 990px;
      line-height: 30px;
      text-align: center;
    }
    tbody {
      display: table-row-group;
      vertical-align: middle;
      border-color: inherit;

      tr {
        .rate-del{
          
          span{
            cursor: pointer;
            background: #c40000;
            color:#fff;
            padding: 5px 10px;
            font-weight: 600;
            font-size: 12px;
            border-radius: 2px;
          }
        }
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
        .tm-col-master {
          width: 420px;
          padding-right: 10px;

          .tm-rate-content {
            color: #333;
            word-wrap: break-word;
            word-break: break-all;
            line-height: 19px;
            overflow: hidden;

            .tm-m-photos {
              zoom: 1;
              p{
                span{
                  float: left;
                }
              }
              .tm-m-photos-thumb {
                margin: 10px 0;
                list-style-type: none;
                height: 40px;
                // li{
                //   span{
                //     margin-left: 15px;
                //   }
                // }
              }
            }
          }
        }

        .col-meta {
          width: 150px;
          color: #999;
          p{
            span{
              color:#222;
            }
          }
        }
        .col-meta p:nth-child(2){
          margin-top: 47px;
        }
        .col-author {
          padding-right: 0;
          p{
            margin-bottom: 5px;
            color:#222;
          }
        }

        td {
          padding: 16px 7px;
          border-bottom: 1px solid #e3e3e3;
        }
      }
    }
  }
}
</style>
