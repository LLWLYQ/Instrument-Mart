<template>
  <div class="Promotion">
    <keep-alive>
      <div class="content_container">
        <div class="top">
          <div class="top_img">
            <img src="../../assets/imges/logo.png" alt="">
            <h1>购物车</h1>
            <div class="Search_Goods">
              <HomeSerach></HomeSerach>
            </div>
          </div>
        </div>
        <div class="allGood">
          <ul>
            <li>全部商品&nbsp;&nbsp;{{goodsNumber}}</li>
          </ul>
        </div>
        <div class="cart_null" v-if="this.lists.length == 0">
          <img src="../../assets/imges/cart.png" style="width:300px;height:200px;">
          <!-- <span><span>去逛逛</span></p> -->
        </div>
        <div v-if="this.lists.length != 0" class="car_list">
          <ul class="first">
            <li><input type="checkbox" v-model="checkAll" @click="allCheck(checkAll)">全选</li>
            <li>商品信息</li>
            <li>商品属性</li>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
          </ul>
          <ul v-for="(item,index) in lists" :key="index" class="center_tr">
            <li><input type="checkbox" :value="item.id" v-model="checked" @click="currClick(item,index)"></li>
            <li><a href="" style="display:block;height:80px;color:#000;"><img :src="baseUrl+item.img"
                  alt=""><span>{{item.productName}}</span></a></li>
            <li>
              <p v-for="Opt in item.option" :key="Opt.id"><span v-for="opt in Opt"
                  :key="opt.id">{{opt.option_name}}：{{opt.name}}</span></p>
            </li>
            <li>￥{{item.price}}</li>
            <li>
              <el-input-number v-model="item.count" :min="1" :max="99" @change="handelChange(item)"
                style="width: 80px;"></el-input-number>
            </li>
            <li>￥{{item.price*item.count}}</li>
            <li><span @click="removeGoods(item,index)">删除商品</span></li>
          </ul>
          <ul class="last_tr">
            <li class="checked_block" v-if="checked!=''" @click="ToSettleAccounts()">结算</li>
            <li class="checked_none" v-if="checked && checked==''">结算</li>
            <li>
              <p class="tr_p1">合计：</p>
              <p class="tr_p2">{{totalMoney}}</p>
            </li>
            <!-- <li><p class="tr_p1">合计：</p><p class="tr_p2">{{totalMoney}}</p></li> -->
          </ul>
        </div>
      </div>
    </keep-alive>
  </div>
</template>
<script>
  import config from '../../config/config'
  import HomeSerach from '../home_child/home_serach'
  export default {
    data() {
      return {
        checked: [],
        totalPrice: [],
        // TotalPrice:0,
        lists: [],
        changItem: '',
        kong: true,
        baseUrl: config.baseUrl,
        checkedIndex: '',
        goodsNumber: '',
        OrderList: []
      }
    },
    components: {
      HomeSerach,
    },
    computed: {
      totalMoney: function (item, index) {
        let sum = 0;
        for (let i = 0; i < this.totalPrice.length; i++) {
          sum += this.totalPrice[i];
        };
        return sum;
      },
      checkAll: {
        get: function () {
          return this.checkedCount == this.lists.length;
        },
        set: function (value) {
          var _this = this;
          if (value) {
            this.totalPrice = [];
            this.checked = this.lists.map(function (item) {
              item.checked = true;
              let total = item.price * item.count;
              _this.totalPrice.push(total);
              return item.id
            })
          } else {
            this.checked = [];
            this.totalPrice = [];
            this.lists.forEach(function (item, index) {
              item.checked = false;
            });
          }
        }
      },
      checkedCount: {
        get: function () {
          return this.checked.length;
        }
      }
    },
    methods: {
      allCheck(checkAll) {
        var checkAllitem = {}
        this.OrderList = []
        this.lists.map((item, index) => {
          // console.log(item)
          checkAllitem = {}
          checkAllitem = item
          if (checkAll == false) {
            this.OrderList.push(checkAllitem)
          } else {
            this.OrderList.splice(checkAllitem)
          }
        })
        // console.log(this.OrderList)
      },
      ToSettleAccounts() {
        let routeData = this.$router.resolve({
          name: 'OrderForm',
          query: {
            orderData: JSON.stringify(this.OrderList),
            totalMoney: JSON.stringify(this.totalMoney)
          }
        })
        window.open(routeData.href, '_blank');
      },
      removeGoods(item, index) {
        // console.log(this.lists)
        this.$confirm('主人你真的不要我了么,真的真的么?', '', {
          cancelButtonText: '取消',
          confirmButtonText: '确定',
          center: true
        }).then(() => {
          this.$ajax({
            url: config.baseUrl + '/home/cart/del',
            method: 'post',
            data: {
              cart_id: item.cart_id,
              goods_id: item.id
            }
          }).then(res => {
            this.lists.splice(index, 1)
            this.totalPrice.splice(index, 1)
            this.goodsNumber -= 1
            // if(this.lists.length == 0 ){
            //   this.kong = false
            // }else{
            //   this.kong = true
            // }
          })
        }).catch(() => {});
      },
      currClick(item, index) {

        this.checkedIndex = index
        // console.log(this.checkedIndex )
        var _this = this;
        if (typeof item.checked == 'undefined') {
          // item = this.changItem
          this.$set(item, 'checked', true);
          let total = item.price * item.count;
          this.totalPrice.push(total);
          // console.log(this.totalPrice);
        } else {
          // _this.OrderList.splice(index,1)
          // console.log(_this.OrderList)
          item.checked = !item.checked;
          if (item.checked) {
            // item = this.changItem
            this.totalPrice = [];
            this.lists.forEach(function (item, index) {
              if (item.checked) {
                let total = item.price * item.count;
                _this.totalPrice.push(total);
              }
            });
          } else {
            this.totalPrice = [];
            this.lists.forEach(function (item, index) {
              if (item.checked) {
                let total = item.price * item.count;
                _this.totalPrice.push(total);
              }
            });
          }
        }
        if (item.checked == true) {
          this.OrderList.push(item)
        } else {
          this.OrderList.splice(item, 1)
        }
        console.log(this.OrderList)
      },
      handelChange(item) {
        var _this = this;
        if (item.checked == true) {
          this.$ajax({
            url: config.baseUrl + '/home/cart/add',
            method: 'post',
            data: {
              goods_id: item.id,
              member_id: item.member_id,
              option: item.goods_option_value,
              quantity: item.count,
            }
          }).then(res => {
            let total = item.price * item.count;
            this.totalPrice = [];
            this.lists.forEach(function (item, index) {
              if (item.checked) {
                let total = item.price * item.count;
                _this.totalPrice.push(total);
              }
            });
          })
        }
      },
    },
    created() {
      let _this = this
      let GList = {}
      _this.$ajax({
        url: config.baseUrl + '/home/cart',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        // console.log(res.data.data.items.data)
        res.data.data.items.data.map((item, index) => {
          // console.log(item)
          this.goodsNumber = index + 1
          GList = {}
          // _this.lists.productName == item.get_goods.goods_name
          GList.productName = item.get_goods.goods_name
          GList.price = item.get_goods.sales_price
          GList.count = item.quantity
          GList.id = item.get_goods.goods_id
          GList.member_id = item.member_id
          GList.shop = item.get_goods.goods_shop_id
          GList.goods_option_value = item.goods_option_value
          GList.cart_id = item.cart_id
          GList.img = item.img
          GList.option = item.goods_option_value
          _this.lists.push(GList)
        })
      })
    },
  }

</script>
<style lang="scss" scoped>
  @import '../../style/common';

  .Promotion {
    margin-top: 30px;
  }

  .content_container {
    margin: 0 auto;
    width: 1190px;

    input[type="checkbox"] {
      width: 15px;
      height: 15px;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      line-height: 15px;
      position: relative;
    }

    input[type="checkbox"]::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: #fff;
      width: 100%;
      height: 100%;
      border: 1px solid #d9d9d9
    }

    input[type="checkbox"]:checked::before {
      content: "\2713";
      background-color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      border: 1px solid #ccc;
      color: #e50232;
      font-size: 13px;
      font-weight: bold;
    }

    .top {
      height: 95px;
      position: relative;

      // line-height: 95px;
      img {
        height: 45px;
        width: 140px;
        float: left;
        margin-top: 25px;
      }

      h1 {
        float: left;
        font-size: 20px;
        line-height: 95px;
      }

      .Search_Goods {
        margin-left: 590px;
        position: absolute;
        top: 28px;
      }
    }

    .allGood {
      ul {
        height: 35px;
        border-bottom: 2px solid #e6e6e6;

        li {
          height: 100%;
          width: 100px;
          color: #f40;
          font-size: 16px;
          font-weight: 700;
          text-align: center;
          border-bottom: 2px solid #f40;
        }
      }
    }

    .car_list {
      width: 100%;

      .first {
        height: 50px;
        line-height: 50px;

        li {
          float: left;
        }
      }

      .first li:nth-child(1) {
        width: 80px;

        input {
          margin: 0 10px 5px 15px;
        }
      }

      .first li:nth-child(2) {
        width: 322px;
        padding-left: 60px;
      }

      .first li:nth-child(3) {
        width: 252px;
      }

      .first li:nth-child(4) {
        text-align: center;
        width: 107px;
      }

      .first li:nth-child(5) {
        text-align: center;
        width: 120px;
        padding-left: 10px;
      }

      .first li:nth-child(6) {
        text-align: center;
        width: 140px;
      }

      .first li:nth-child(7) {
        text-align: center;
        width: 149px;
        padding-left: 30px;
      }

      .center_tr {
        height: 130px;
        width: 1188;
        border: 1px solid #ccc;
        margin-bottom: 15px;
        padding: 17px 0 0 0;

        li {
          float: left;
        }
      }

      .center_tr li:nth-child(1) {
        width: 60px;

        input {
          margin: 0 10px 5px 15px;
        }
      }

      .center_tr li:nth-child(2) {
        width: 342px;

        img {
          width: 80px;
          height: 80px;
          float: left;
        }

        span:hover {
          text-decoration: underline;
          color: #f40;
          cursor: pointer;
          float: left;
        }
      }

      .center_tr li:nth-child(3) {
        width: 252px;

        p {
          margin-bottom: 5px;

          span {
            font-size: 12px;
          }
        }

        // text-align: center;
        // width: 359px;
        // padding-left: 220px;
        // color: #3c3c3c;
        // font-weight: 700;
        // font-family: Verdana,Tahoma,arial;
      }

      .center_tr li:nth-child(4) {
        text-align: center;
        width: 107px;
        color: #3c3c3c;
        font-weight: 700;
        font-family: Verdana, Tahoma, arial;
      }

      .center_tr li:nth-child(5) {
        text-align: center;
        width: 120px;

        .el-input-number {
          width: 80px;
          // color:#222;
        }

      }

      .center_tr li:nth-child(6) {
        text-align: center;
        color: #f40;
        font-weight: 700;
        width: 138px;
        font-family: Verdana, Tahoma, arial;
        padding-top: 3px;
      }

      .center_tr li:nth-child(7) {
        text-align: center;
        width: 149px;
        padding-left: 30px;

        span:hover {
          text-decoration: underline;
          color: #f40;
          cursor: pointer;
        }
      }
    }

    .last_tr {
      height: 50px;
      line-height: 50px;
      background: #e5e5e5;

      li {
        float: right;
      }
    }

    .checked_none {
      height: 100%;
      width: 150px;
      text-align: center;
      background: #B0B0B0;
      cursor: not-allowed;
      color: #fff;
      font-size: 20px;
    }

    .checked_block {
      height: 100%;
      width: 150px;
      text-align: center;
      background: #f22d00;
      color: #fff;
      font-size: 20px;
      cursor: pointer;
    }

    .last_tr li:nth-child(2) {
      height: 100%;
      width: 150px;

      p {
        float: left;
      }

      .tr_p2 {
        font-weight: 700;
        font-size: 22px;
        color: #f40;
      }
    }
  }

</style>
<style lang="scss">
  .el-input__inner {
    padding: 0 !important;
  }

  .el-input-number__decrease {
    width: 20px !important;
  }

  .el-input-number__increase {
    width: 20px !important;
  }

  .el-input-number .el-input__inner {
    padding: 0 !important;
  }

  #ELB:hover {
    background-color: red;
    border: 2px solid red;
  }

  #ELB {
    border-radius: 0;
    background-color: #e94c15;
    border: 2px solid #e94c15;
    color: #fff;
  }
