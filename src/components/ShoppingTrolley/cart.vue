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
        </div>
        <div v-if="this.lists.length != 0" class="car_list">
          <ul class="first">
            <li><input type="checkbox" v-model="checkedAll" @change="checkAll()">全选</li>
            <li>商品信息</li>
            <li>商品属性</li>
            <li>单价</li>
            <li>数量</li>
            <li>金额</li>
            <li>操作</li>
          </ul>
          <ul v-for="(val,k) in lists" :key="k" class="center_trTwo">
            <!-- <li><input type="checkbox" :value="item.id" v-model="checked" @click="currClick(item,index)"></li> -->
            <li>
              <p style="height: 30px;line-height: 30px;vertical-align: middle;">
                <input type="checkbox" v-model="val.checked"  @change="_checkAll(val,k)" style="float:left;">
                <router-link :to="{name:'Detail',query:{listId:val.cart_id}}" target="_blank" tag="a"
                  style="display:block;height:15px; line-height:15px;color:#000;float:left; margin-left:10px; ">
                  店铺: <span style="color:#999;">{{val.shop_name}}</span>
                </router-link>
              </p>
              <ul v-for="(item,index) in val.carts_list" :key="index" class="list_cc">
                <li><input type="checkbox" v-model="item.checked" @change="handleCheck(item,index)"></li>
                <li style="font-size:10px; font-weight:100; width:320px; margin-left:10px;">
                  <img :src="baseUrl+item.files_path" alt=""
                    style="width:50px; height:50px; margin-right:10px; border:1px solid;">{{item.goods_name}}</li>
                <li style="width:240px; height:50px; margin-right:10px; text-align: center;" v-if="item.goods_option_value">
                  <p  v-for="Opt in item.goods_option_value" :key="Opt.id">
                    <span>{{Opt.option_name}}：{{Opt.name}} 价格:<strong style="color:red;">{{Opt.price_prefix}}
                        {{Opt.price}}</strong>
                    </span>
                  </p>
                  <p v-if="!item.goods_option_value" style="color:#999;">
                    <span>无</span>
                  </p>
                </li>
                <li style="width:150px; height:50px; margin-right:10px;  text-align: center;line-height: 50px;">
                  ￥{{(item.last_price/100)}}</li>
                <li style="width:90px; height:50px; margin-right:10px;  text-align: center;line-height: 50px; ">
                  <el-input-number v-model="item.quantity" :min="1" :max="99" size="small" @change="handelChange(item)">
                  </el-input-number>
                </li>
                <li style="width:150px; height:50px; margin-right:10px;  text-align: center; line-height: 50px; ">
                  ￥{{(item.last_price/100)*item.quantity}}</li>
                <li><span @click="removeGoods(val,item,index)">删除商品</span></li>
              </ul>
            </li>
          </ul>
          <ul class="last_tr">
            <li class="checked_block" v-if="goPay" @click="ToSettleAccounts()">结算</li>
            <li class="checked_none" v-if="!goPay">结算</li>
            <li>
              <p class="tr_p1">合计：</p>
              <p class="tr_p2">{{lastTaotalPrice/100}}</p>
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
        checkedAll: false, //控制是否全选
        checkboxModel: [],
        checked: '',
        checkedList: [],
        totalPrice: [],
        lastTaotalPrice: 0,
        // TotalPrice:0,
        lists: [],
        changItem: '',
        kong: true,
        baseUrl: config.baseUrl,
        checkedIndex: '',
        goodsNumber: '',
        OrderList: [],
        deleteStatus: false,
        goPay: false,
        Numberdata: '',
        lastNumberData:''
      }
    },
    mounted() {
      this.lists.forEach(item => {
        Vue.$set(item, "checked", false) //Vue 解决不能检测到对象属性的添加或删除
        // item.checked = false; //如果为真实数据直接设置的对象改变值不会更新视图
        if (item.carts_list) {
          item.carts_list.forEach((citem) => {
            this.$set(citem, "checked", false)
            // citem.checked = false;
          })
        }
      });
    },
        methods: {
      //全选
      checkAll() {
        let Sum = 0
        this.lists.forEach(item => {
          item.checked = this.checkedAll;
          if (item.carts_list) {
            item.carts_list.forEach(citem => {
              citem.checked = this.checkedAll;
              if (item.checked == true) {
                Sum += citem.last_price * citem.quantity
                this.lastTaotalPrice = Sum
              }else{
                this.lastTaotalPrice = 0
              }
            })
          }
        })
      },
      //商家全选
      _checkAll(val, k) {
        val.carts_list.forEach(item => {
          item.checked = val.checked;
          if (val.checked == true) {
            this.lastTaotalPrice += item.last_price * item.quantity
          }else{
            this.lastTaotalPrice -= item.last_price * item.quantity
          }
        });
        if (this.lists.every(item => item.checked)){
            this.checkedAll = true;
          } else {
            this.checkedAll = false;
          }
      },
      //商品选择框
      handleCheck(item, index) {
        if (item.checked == true) {
          this.lastTaotalPrice += item.last_price * item.quantity
        }else{
         this.lastTaotalPrice -= item.last_price * item.quantity 
        }
        var check = []; //保存中间层是否被选中的布尔值
        this.lists.forEach((items, index) => {
          if (items.carts_list) {
            var bool = items.carts_list.every(citem => citem.checked);
            if (bool) {
              items.checked = true;
            } else {
              items.checked = false;
            }
            check.push(bool);
          }
        })
        if (check.indexOf(false) == -1) {
          this.checkedAll = true;
        } else {
          this.checkedAll = false;
        }
      },

      // //点击全选
      // allCheck2(AllChecked) {

      //   this.lists.map((item, index) => {

      //     if (AllChecked == false) {
      //       item.cart_id = true
      //     } else {
      //       item.cart_id = false
      //     }

      //     item.carts_list.map((item, index) => {

      //       if (AllChecked == false) {
      //         item.goods_id = true
      //       } else {
      //         item.goods_id = false
      //       }

      //     })

      //   })

      //   //计算价格
      //   let total_prices = this.lists.map((itemOne, indexOne) => {


      //     let total_pricesTwo = this.lists[indexOne].carts_list.map(itemTwo => {

      //       return itemTwo.last_price * itemTwo.quantity;

      //     })

      //     return total_pricesTwo;

      //   })

      //   var newPrice = 0;
      //   for (let t in total_prices) {

      //     newPrice += eval(total_prices[t].join("+"));

      //   }

      //   this.lastTaotalPrice = newPrice

      //   if (AllChecked == true) {
      //     this.lastTaotalPrice = 0;
      //   }

      //   this.goPay = true

      // },
      // allCheck(checkAll) {

      //   //console.log(checkAll)
      //   var checkAllitem = {}
      //   this.OrderList = []
      //   this.lists.map((item, index) => {

      //     if (checkAll == false) {
      //       item.cart_id = false
      //     } else {
      //       item.cart_id = true
      //     }

      //     item.carts_list.map((item, index) => {

      //       if (checkAll == false) {
      //         item.goods_id = false
      //       } else {
      //         item.goods_id = true
      //       }

      //     })

      //     // checkAllitem = {}
      //     // checkAllitem = item
      //     // if (checkAll == false) {
      //     //   this.OrderList.push(checkAllitem)
      //     // } else {
      //     //   this.OrderList.splice(checkAllitem)
      //     // }
      //   })
      // },
      ToSettleAccounts() {
        let routeData = this.$router.resolve({
          name: 'OrderForm',
          query: {
            orderData: JSON.stringify(this.OrderList),
            totalMoney: JSON.stringify(this.totalMoney / 100)
          }
        })
        window.open(routeData.href, '_blank');
      },
      removeGoods(item, item2, index2) {
        console.log(item, item2, index2)
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
              cart_id: item2.cart_id,
              goods_id: item2.goods_id
            }
          }).then(res => {

            if (res.data.code == 20000) {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              item.carts_list.splice(index2, 1)
              this.Number()
              // this.deleteStatus = true

            } else {

              // this.deleteStatus = false

            }

            // this.lists.splice(index, 1)
            // this.totalPrice.splice(index, 1)
            // this.goodsNumber -= 1
          })
        }).catch(() => {});
      },
      // currClick(item2, item) {
      //   console.log(item2.goods_id)
      //   // if(event.target.checked == true){
      //   //   item.cart_id = true
      //   // }else{
      //   //   item.cart_id = false
      //   // }
      //   // var curTrue = item.carts_list.filter(function(item3){
      //   //     return item3.goods_id == true;
      //   //   });
      //   //   // console.log(curTrue)
      //   //   if(curTrue.length == item.carts_list){
      //   //       this.ckAll = true
      //   //     }else{
      //   //       item.cart_id = false
      //   //     }
      //   let total_prices = item2.last_price * item2.quantity
      //   this.totalPrice = total_prices
      // },
      //点击店铺
      // currClick2(item, index) {
      //   item.carts_list.map((itemTwo, indexTwo) => {

      //     if (item.cart_id == false) {
      //       itemTwo.goods_id = true
      //     } else {
      //       itemTwo.goods_id = false
      //     }
      //   })
      // },
      handelChange(item) {
        let total_prices = this.lists.map((itemOne, indexOne) => {

          let total_pricesTwo = this.lists[indexOne].carts_list.map(itemTwo => {

            return itemTwo.last_price * itemTwo.quantity;

          })

          return total_pricesTwo;

        })

        var newPrice = 0;
        for (let t in total_prices) {

          newPrice += eval(total_prices[t].join("+"));

        }

        // this.lastTaotalPrice = newPrice
        this.goPay = true
        var _this = this;
        this.$ajax({
          url: config.baseUrl + '/home/cart/' + item.cart_id,
          method: 'put',
          data: {
            member_id: item.member_id,
            quantity: item.quantity,
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


      },
      getList() {
        let _this = this
        let GList = {}
        this.$ajax({
          url: config.baseUrl + '/home/cart',
          method: 'get',
          params: {
            member_id: localStorage.getItem('userId')
          }
        }).then(res => {
          // console.log(res.data.data.items)
          let numData = []
          res.data.data.items.map((item, index) => {
            GList = {}
            GList.cart_id = item.cart_id
            GList.shop_id = item.shop_id
            GList.shop_name = item.shop_name
            GList.carts_list = item.carts_list
            // GList.productName = item.get_goods.goods_name
            // GList.price = item.unit_price
            // GList.count = item.quantity
            // GList.id = item.get_goods.goods_id
            // GList.member_id = item.member_id
            // GList.shop = item.get_goods.goods_shop_id
            // GList.goods_option_value = item.goods_option_value
            // GList.cart_id = item.cart_id
            // GList.img = item.img
            // GList.get_shop = item.get_shop
            // GList.option = item.goods_option_value
            _this.lists.push(GList)
            console.log(_this.lists)
            // _this.lists = false
            // _this.lists.map(item=>{
            //   item.cart_id = false
            //   item.carts_list.map(item=>{
            //     item.goods_id = false
            //   })
            // })
          })
          // this.deleteStatus = false
        })
      },
      Number() {
        this.$ajax({
          url: config.baseUrl + '/home/cart',
          method: 'get',
          params: {
            member_id: localStorage.getItem('userId')
          }
        }).then(res => {
          // console.log(res.data.data.items)
          let numData = []
          res.data.data.items.map((item, index) => {
            item.carts_list.map((item, index) => {
              this.Numberdata = index + 1
              numData.push(this.Numberdata)
            })
            this.goodsNumber = numData.length
          })
        })
      }
    },
    components: {
      HomeSerach,
    },
    computed: {
      // totalMoney: function (item, index) {
      //   let sum = 0;
      //   for (let i = 0; i < this.totalPrice.length; i++) {
      //     sum += this.totalPrice[i];
      //   };
      //   return sum;
      // },
      // checkAll: {
      //   get: function () {
      //     return this.checkedCount == this.lists.length;
      //   },
      //   set: function (value) {
      //     var _this = this;
      //     if (value) {
      //       this.totalPrice = [];
      //       this.checked = this.lists.map(function (item) {
      //         item.checked = true;
      //         // let total = item.price * item.count;
      //         // _this.totalPrice.push(total);
      //         return item.id
      //       })
      //     } else {
      //       this.checked = [];
      //       this.totalPrice = [];
      //       this.lists.forEach(function (item, index) {
      //         item.checked = false;
      //       });
      //     }
      //   }
      // },
      // checkedCount: {
      //   get: function () {
      //     return this.checked.length;
      //   }
      // }
    },
    created() {
      this.getList();
      this.Number()
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

    .list_cc {
      width: 1188px;
      min-height: 70px;
    }

    .list_cc * {
      display: inline-block;
      vertical-align: middle;
    }

    .list_cc li {
      font-size: 10px;
      font-weight: 100;
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

    .center_trTwo {
      min-height: 130px;
      width: 1188;
      border: 1px solid #ccc;
      margin-bottom: 15px;
      padding: 17px 0 0 0;
      display: inline-block;

      li {
        float: left;
        margin-left: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 5px;
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
