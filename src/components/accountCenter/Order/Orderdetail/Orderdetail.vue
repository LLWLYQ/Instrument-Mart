<template>
  <div class="Orderdetail">
    <hc></hc>
    <div class="mine">
      <div class="mine_top">
        <div class="top">
          <div class="top_img">
            <img src="../../../../assets/imges/logo.png" alt="">
            <div class="Search_Goods">
              <HomeSerach></HomeSerach>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="OrderDet">
        <el-table :data="tableData" style="width: 100%;border:1px solid #ccc;" :row-class-name="tableRowClassName">
          <el-table-column label="商品" width="300" align="center">
            <template slot-scope="scope">
              <div v-for="item in scope.row.get_order_product" :key="item.id" >
                <div style="height:100px;width:300px;margin-bottom:5px;">
                  <img :src=" baseUrl+ item.files_path" alt="" style="width:80px;height:80px;float:left;">
                  <p style="overflow: hidden;white-space: nowrap;padding:0 10px;">{{item.name}}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="单价" width="200" align="center">
            <template slot-scope="scope">
              <div v-for="item in scope.row.get_order_product" :key="item.id" style="height:100px;line-height:100px;margin-bottom:5px;">
                <p>{{item.price}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="数量" width="120" align="center">
            <template slot-scope="scope">
              <div v-for="item in scope.row.get_order_product" :key="item.id" style="height:100px;line-height:100px;margin-bottom:5px;">
                <p>{{item.quantity}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="优惠" width="120" align="center">
            <template slot-scope="scope">
              <div v-for="item in scope.row.get_order_product" :key="item.id" style="height:100px;line-height:100px;margin-bottom:5px;">
                暂无优惠
              </div>
            </template>
          </el-table-column>
          <el-table-column label="状态" width="120" align="center">
            <template slot-scope="scope">
              <div >
                <p>{{scope.row.get_order_status_name.name}}</p>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="退换货" width="128" align="center">
            <template slot-scope="scope">
              <div v-for="item in scope.row.get_order_product" :key="item.id" style="height:100px;margin-bottom:5px;padding-top:30px;">
                <p><span style="cursor: pointer;">退货</span></p>
                <!-- <p><span style="cursor: pointer;">换货</span></p> -->
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="OrderBot">
        <ul>
          <li><span class="OB-left"><a >商品总价：</a></span><span class="OB-right">￥{{total}}</span></li>
          <li><span class="OB-left"><a >运费(快递)：</a></span><span class="OB-right">￥0.00</span></li>
          <li><span class="OB-left"><a class="ing">实付款：</a></span> <span class="OB-right end">￥{{total}}</span></li>
        </ul>
      </div>
    </div>
    <Foot ></Foot>
  </div>
</template>

<script type="text/javascript">
  import HeaderCOPY from '../../../Header/HeaderCOPY'
  import HomeSerach from '../../../home_child/home_serach'
  import Foot from '../../../Foot/Foot'
  import config from '../../../../config/config'
  export default {
    data() {
      return {
        OrderDataList: JSON.parse(this.$route.query.OrderData),
        baseUrl: config.baseUrl,
        tableData:[],
        total:''
      }
    },
    methods: {
      tableRowClassName(row,rowIndex) {
        // console.log(row)
        if (row.status== 0 || 1 || 2 ||3 ||4 ||5||6||7||8||9||10||11||12||13||14||15||16)  {
          return 'DNMD';
        }
      },
    },
    components: {
      'hc': HeaderCOPY,
      HomeSerach,
      Foot
    },
    created() {
      this.tableData.push(this.OrderDataList)
      console.log(this.tableData)
      this.tableData.map(item=>{
        this.total = item.total
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../../style/common';

  .Orderdetail {
    
    // max-height: 1500px;
    // width: 990px;
    // margin: 0 auto;
    .mine {
      margin-bottom: 10px;
      .mine_top {
        width: 990px;
        margin: 0 auto;

        // border-bottom:3px solid #e94c15;
        // background:#e94c15;
        .top {
          height: 95px;
          position: relative;
          width: 990px;
          margin: 30px auto 0 auto;
          border-bottom: 1px solid #c8baaa;

          // line-height: 95px;
          img {
            height: 45px;
            width: 140px;
            float: left;
            margin-top: 25px;
            background: #fff;
          }

          h1 {
            float: left;
            font-size: 20px;
            line-height: 95px;
          }

          .Search_Goods {
            right: 0;
            position: absolute;
            top: 28px;

            .el-button {
              background: #e94c15;
            }
          }
        }
      }
    }

    .center {
      width: 990px;
      margin: 0 auto;
      min-height: 1000px;
    }
  }
  .OrderBot{
    color: #666;
    background-color: #F3F3F3;
    width: 990px;
    height: 132px;
    margin-top: 20px;
    padding: 20px  0;
    
    ul{
      float: right;
      margin-right: 50px;
      width: 200px;
      li{
        height: 30px;
        line-height: 30px;
        .OB-left{
          display: block;
          width: 80px;
          float: left;
          a{
            float: right;
            color:#666;
          }
          .ing{
            font-size: 16px;
            color:#222;
            font-weight: bold;
          }
        }
        .OB-right{
          float: right;
        }
        .end{
          color:rgb(255, 0, 54);
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
  }
</style>
<style lang="scss">
  #ELB:hover {
    background-color: red;
  }

  #ELB {
    border-radius: 0;
    background-color: #e94c15;
    border: 2px solid #e94c15;
    color: #fff;
    margin-left: -7px;
  }
  .el-table .DNMD td{
    border:1px solid #ccc;
  }
</style>
