<template>
  <div class="overallCart">
    <div class="sc-Box">
      <div class="sc-box">
        <div class="sc-box_center">
          <div class="sc-box_center-List" v-for="(item,index) in lists" :key="index">
            <li >
              <img :src="baseUrl + item.files_path" alt="">
              <router-link :to="{name:'Detail',query:{listId:item.goods_id}}"><p class="sc-box-name">{{item.goods_name}}</p></router-link>
              <p class="sc-box-btm"><span class="price">{{item.last_price/100}}</span><span class="Del" @click="DelListItem(item,index)">删除</span></p>
            </li>
          </div>
        </div>
        <p class="sc-bottom">
          <router-link to="/cart"><span v-if="lists != ''">结算</span></router-link>
          <router-link to=""><span v-if="lists == ''">暂无商品</span></router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
  import config from '../../config/config'
  export default {
    data() {
      return {
        lists:[],
        baseUrl:config.baseUrl,
        listsNum:0
      }
    },
    methods: {
      DelListItem(item,index){
        this.$ajax({
            url: config.baseUrl + '/home/cart/del',
            method: 'post',
            data: {
              cart_id: item.cart_id,
              goods_id: item.goods_id
            }
          }).then(res => {
            if (res.data.code == 20000) {
              this.lists.splice(index,1)
            }
          })
        
      }
    },
    created(){
      let _this = this
        let GList = []
        this.$ajax({
          url: config.baseUrl + '/home/cart',
          method: 'get',
          params: {
            member_id: localStorage.getItem('userId')
          }
        }).then(res => {
          let numData = []
          res.data.data.items.map((item, index) => {
            item.carts_list.map(citem=>{
              GList.push(citem)
            })
          })
          _this.lists = GList
          //  console.log(_this.lists)
           this.listsNum  = _this.lists.length
          //  this.$emit('cdata',this.listsNum)
        })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../style/common';
  .sc-Box {
    background: #fff;
    width: 300px;
    margin: 0 4px 10px 10px;

    .sc-box {
      box-shadow: 0 1px 6px #999;

      .sc-bottom {
        padding: 10px 10px;
        margin: 0 10px;
        text-align: center;
        border-top: 1px solid #ccc;

        span {
          // display: block;
          padding: 5px 25px;
          width: 100px;
          height: 27px;
          background-color: #db2726;
          line-height: 27px;
          color: #fff;
          text-align: center;
          cursor: pointer;
          // position: absolute;
          // left: 93px;
          // bottom: 20px;
        }
      }
    }

    .sc-box_center {
      width: 300px;
      min-height: 50px;
      max-height: 250px;
      background: #fff;
      padding: 5px 10px;
      // background: #f5f5f5;
      // border:1px solid #222;
      overflow: hidden;
      overflow-y: scroll;
      .Num{
        display: block;
            width: 15px;
            height: 15px;
            position: fixed;
            top: -20px;
            left: 95px;
            line-height: 15px;
            text-align: center;
            background: #db2726;
            color: #fff;
            border-radius: 50%;
      }
      .sc-box_center-List {
        li {
          height: 80px;
          line-height: 80px;
          cursor: pointer;

          img {
            height: 60px;
            width: 60px;
            float: left;
            margin-top: 10px;
          }

          a{
            color:#222;
            .sc-box-name {
              float: left;
              width: 200px;
              height: 44px;
              line-height: 22px;
              margin-left: 10px;
              overflow: hidden;
              text-overflow: ellipsis;

            }
          }

          .sc-box-name:hover {
            text-decoration: underline;
            color: #db2726;
          }

          .sc-box-btm {
            float: left;
            width: 200px;
            height: 30px;
            line-height: 30px;
            margin-left: 10px;

            .price {
              color: #db2726;
              font-size: 12px;
            }

            .Del {
              float: right;
              margin-right: 10px;
            }

            .Del:hover {
              color: #db2726;
            }
          }
        }

        // white-space:nowrap;
      }
    }
  }

  .sc-mybox-leave-active,
  .sc-mybox-enter-active {
    transition: all 0.5s ease;
  }

  .sc-mybox-leave-active,
  .sc-mybox-enter {
    height: 0px !important;
  }

  .sc-mybox-leave,
  .sc-mybox-enter-active {
    height: auto;
  }

</style>
<style lang="scss">
  // :-webkit-scrollbar-track-piece {

  //   background-color: #f8f8f8;
  // }

  // //滚动条的宽度 

  // ::-webkit-scrollbar {

  //   width: 3px;
  //   height: 9px;

  // }

  // //滚动条的设置 

  // ::-webkit-scrollbar-thumb {

  //   background-color: #222;
  //   background-clip: padding-box;

  //   min-height: 28px;

  // }

  // ::-webkit-scrollbar-thumb:hover {

  //   background-color: #bbb;

  // }

</style>
