<template>
  <div class="Center_home_page">
    <div class="Account_of_integral">
      <div class="Account">
        <div class="head_portrait">
          <div class="img">
            <img src="../../../assets/imges/timg.jpg" alt="">
          </div>
          <div class="message">
            <ul>
              <li>{{userName}}</li>
              <li>仪商值</li>
              <li>账户设置<i class="el-icon-caret-right"></i></li>
              <li>我的收货地址</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Integral">
        <div class="integral">
          <ul>
            <li><i class="el-icon-star-off"
                style="font-size:25px;"></i>&nbsp;&nbsp;:&nbsp;&nbsp;积分&nbsp;&nbsp;:&nbsp;&nbsp;123456</li>
            <li>我的信息&nbsp;&nbsp;:&nbsp;&nbsp;<i class="el-icon-chat-dot-round" style="font-size:25px;"></i></li>
          </ul>
        </div>
        <div class="right_image">
          <ul>
            <li>
              <img src="../../../assets/imges/timg.jpg" alt="">
            </li>
            <li>打我领星星</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="indent">
      <div class="Logistics">
        <ul class="flow">
          <el-tabs v-model="activeName" @tab-click="handleClick" :stretch='true'>
            <el-tab-pane label="全部订单" name="second" style="width:100%;">
              <div class="tableList">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5]" :page-size="pagesize"
                  layout="total, sizes, prev, next, jumper" :total="tableData.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  tooltip-effect="dark" style="width: 100%;border:1px solid #ccc;" @selection-change="handleSelectionChange"
                  :row-class-name="tableRowClassName">
                  <el-table-column type="selection" width="44" style="border:1px solid #ccc;">
                  </el-table-column>
                  <el-table-column label="宝贝" width="352" align="center" >
                    <!-- <template slot-scope="scope">{{ scope.row}}</template> -->
                    <template slot-scope="scope">
                      <div style="width:329px;">
                        <div style="height:60px;width:100%;">
                          <p style="float:left;height:30px;"><span>订单号：{{scope.row.out_request_no}}</span></p>
                          <p style="float:left;height:30px;"><span>日期：{{ scope.row.date_added}}</span> </p>
                        </div>
                        <div class="details" v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;border-bottom:1px solid #ccc;margin-bottom:10px;">
                          <img :src="baseUrl + item.files_path" alt="" style="width:80px;height:80px;float:left;">
                          <p style="float:left;margin:0 10px;">
                            <span>{{item.name}}</span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="单价" width="127" align="center">
                    <template slot-scope="scope">
                      <div style="width:105px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:120px;line-height:150px;">
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{item.price}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="数量" width="55" align="center" style="">
                    <template slot-scope="scope">
                      <div style="width:33px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;line-height:100px;">
                          <span>{{item.quantity}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="商品操作" width="118" align="center">
                    <template slot-scope="scope">
                      <div style="width:96px;">
                        <span>{{scope.row.get_order_status_name.name}}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="实付款" width="130" align="center">
                    <template slot-scope="scope">
                      <div style="width:108px;">
                        <p >
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total}}</span>
                        </p>
                        <p>(含运费)</p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易状态" width="120" align="center">
                    <template slot-scope="scope">
                      <div class="Orderdetail" style="width:98px;">
                        <router-link :to="{name:'Orderdetail',query:{OrderData:JSON.stringify(scope.row)}}" target="_blank" tag="a">
                        <span style="font-size:12px;cursor: pointer;color:#666;">订单详情</span>
                      </router-link>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易操作" width="144" align="center">
                    <template slot-scope="scope">
                      <div style="width:122px;">
                        <div><i class="el-icon-delete-solid" style="font-size:20px;cursor: pointer;"
                          @click="Delarr(scope.row,scope.$index)"></i></div>
                      <div>
                        <p class="evaluate-fa"><span class="evaluate" v-if="scope.row.status == 3">确认收货</span></p>
                        <!-- <p><span style="font-size:12px;cursor: pointer;">再次购买</span></p> -->
                      </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="代付款" name="first" style="width:100%;">
              <div class="tableList">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5]" :page-size="pagesize"
                  layout="total, sizes, prev, next, jumper" :total="arr2.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr2.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  tooltip-effect="dark" style="width: 100%; border:1px solid #ccc;" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
                  <el-table-column type="selection" width="44" style="border:1px solid #ccc;">
                  </el-table-column>
                  <el-table-column label="宝贝" width="352" align="center" >
                    <!-- <template slot-scope="scope">{{ scope.row}}</template> -->
                    <template slot-scope="scope">
                      <div style="width:329px;">
                        <div style="height:60px;width:100%;">
                          <p style="float:left;height:30px;"><span>订单号：{{scope.row.out_request_no}}</span></p>
                          <p style="float:left;height:30px;"><span>日期：{{ scope.row.date_added}}</span> </p>
                        </div>
                        <div class="details" v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;border-bottom:1px solid #ccc;margin-bottom:10px;">
                          <img :src="baseUrl + item.files_path" alt="" style="width:80px;height:80px;float:left;">
                          <p style="float:left;margin:0 10px;">
                            <span>{{item.name}}</span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="单价" width="127" align="center">
                    <template slot-scope="scope">
                      <div style="width:105px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:120px;line-height:150px;">
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{item.price}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="数量" width="55" align="center" style="">
                    <template slot-scope="scope">
                      <div style="width:33px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;line-height:100px;">
                          <span>{{item.quantity}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="商品操作" width="118" align="center">
                    <template slot-scope="scope">
                      <div style="width:96px;">
                        <span>{{scope.row.get_order_status_name.name}}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="实付款" width="130" align="center">
                    <template slot-scope="scope">
                      <div style="width:108px;">
                        <p >
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total}}</span>
                        </p>
                        <p>(含运费)</p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易状态" width="120" align="center">
                    <template slot-scope="scope">
                      <div class="Orderdetail" style="width:98px;">
                        <router-link :to="{name:'Orderdetail',query:{OrderData:JSON.stringify(scope.row)}}" target="_blank" tag="a">
                        <span style="font-size:12px;cursor: pointer;color:#666;">订单详情</span>
                      </router-link>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易操作" width="144" align="center">
                    <template slot-scope="scope">
                      <div style="width:122px;">
                        <div><i class="el-icon-delete-solid" style="font-size:20px;cursor: pointer;"
                          @click="Delarr(scope.row,scope.$index)"></i></div>
                      <div>
                        <p class="evaluate-fa"><span class="evaluate" v-if="scope.row.status == 3">确认收货</span></p>
                        <!-- <p><span style="font-size:12px;cursor: pointer;">再次购买</span></p> -->
                      </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待收货" name="giao" style="width:100%;">
              <div class="tableList">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5]" :page-size="pagesize"
                  layout="total, sizes, prev, next, jumper" :total="arr3.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr3.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  tooltip-effect="dark" style="width: 100%;border:1px solid #ccc;" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
                  <el-table-column type="selection" width="44" style="border:1px solid #ccc;">
                  </el-table-column>
                  <el-table-column label="宝贝" width="352" align="center" >
                    <!-- <template slot-scope="scope">{{ scope.row}}</template> -->
                    <template slot-scope="scope">
                      <div style="width:329px;">
                        <div style="height:60px;width:100%;">
                          <p style="float:left;height:30px;"><span>订单号：{{scope.row.out_request_no}}</span></p>
                          <p style="float:left;height:30px;"><span>日期：{{ scope.row.date_added}}</span> </p>
                        </div>
                        <div class="details" v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;border-bottom:1px solid #ccc;margin-bottom:10px;">
                          <img :src="baseUrl + item.files_path" alt="" style="width:80px;height:80px;float:left;">
                          <p style="float:left;margin:0 10px;">
                            <span>{{item.name}}</span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="单价" width="127" align="center">
                    <template slot-scope="scope">
                      <div style="width:105px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:120px;line-height:150px;">
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{item.price}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="数量" width="55" align="center" style="">
                    <template slot-scope="scope">
                      <div style="width:33px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;line-height:100px;">
                          <span>{{item.quantity}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="商品操作" width="118" align="center">
                    <template slot-scope="scope">
                      <div style="width:96px;">
                        <span>{{scope.row.get_order_status_name.name}}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="实付款" width="130" align="center">
                    <template slot-scope="scope">
                      <div style="width:108px;">
                        <p >
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total}}</span>
                        </p>
                        <p>(含运费)</p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易状态" width="120" align="center">
                    <template slot-scope="scope">
                      <div class="Orderdetail" style="width:98px;">
                        <router-link :to="{name:'Orderdetail',query:{OrderData:JSON.stringify(scope.row)}}" target="_blank" tag="a">
                        <span style="font-size:12px;cursor: pointer;color:#666;">订单详情</span>
                      </router-link>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易操作" width="144" align="center">
                    <template slot-scope="scope">
                      <div style="width:122px;">
                        <div><i class="el-icon-delete-solid" style="font-size:20px;cursor: pointer;"
                          @click="Delarr(scope.row,scope.$index)"></i></div>
                      <div>
                        <p class="evaluate-fa"><span class="evaluate" v-if="scope.row.status == 3">确认收货</span></p>
                        <!-- <p><span style="font-size:12px;cursor: pointer;">再次购买</span></p> -->
                      </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
            <el-tab-pane label="待评价" name="third" style="width:100%;">
              <div class="tableList">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="currentPage" :page-sizes="[5]" :page-size="pagesize"
                  layout="total, sizes, prev, next, jumper" :total="arr4.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr4.slice((currentPage-1)*pagesize,currentPage*pagesize)"
                  tooltip-effect="dark" style="width: 100%;border:1px solid #ccc;" @selection-change="handleSelectionChange" :row-class-name="tableRowClassName">
                  <el-table-column type="selection" width="44" style="border:1px solid #ccc;">
                  </el-table-column>
                  <el-table-column label="宝贝" width="352" align="center" >
                    <!-- <template slot-scope="scope">{{ scope.row}}</template> -->
                    <template slot-scope="scope">
                      <div style="width:329px;">
                        <div style="height:60px;width:100%;">
                          <p style="float:left;height:30px;"><span>订单号：{{scope.row.out_request_no}}</span></p>
                          <p style="float:left;height:30px;"><span>日期：{{ scope.row.date_added}}</span> </p>
                        </div>
                        <div class="details" v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;border-bottom:1px solid #ccc;margin-bottom:10px;">
                          <img :src="baseUrl + item.files_path" alt="" style="width:80px;height:80px;float:left;">
                          <p style="float:left;margin:0 10px;">
                            <span>{{item.name}}</span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="单价" width="127" align="center">
                    <template slot-scope="scope">
                      <div style="width:105px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:120px;line-height:150px;">
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{item.price}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="address" label="数量" width="55" align="center" style="">
                    <template slot-scope="scope">
                      <div style="width:33px;">
                        <p v-for="item in scope.row.get_order_product" :key="item.id"
                          style="height:100px;line-height:100px;">
                          <span>{{item.quantity}}</span>
                        </p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="商品操作" width="118" align="center">
                    <template slot-scope="scope">
                      <div style="width:96px;">
                        <span>{{scope.row.get_order_status_name.name}}</span>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="实付款" width="130" align="center">
                    <template slot-scope="scope">
                      <div style="width:108px;">
                        <p >
                          <span style="color: rgb(255, 0, 54);">￥</span>
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total}}</span>
                        </p>
                        <p>(含运费)</p>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易状态" width="120" align="center">
                    <template slot-scope="scope">
                      <div class="Orderdetail" style="width:98px;">
                        <router-link :to="{name:'Orderdetail',query:{OrderData:JSON.stringify(scope.row)}}" target="_blank" tag="a">
                        <span style="font-size:12px;cursor: pointer;color:#666;">订单详情</span>
                      </router-link>
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column prop="name" label="交易操作" width="144" align="center">
                    <template slot-scope="scope">
                      <div style="width:122px;">
                        <div><i class="el-icon-delete-solid" style="font-size:20px;cursor: pointer;"
                          @click="Delarr(scope.row,scope.$index)"></i></div>
                      <div>
                        <p class="evaluate-fa"><span class="evaluate" v-if="scope.row.status == 3">确认收货</span></p>
                        <!-- <p><span style="font-size:12px;cursor: pointer;">再次购买</span></p> -->
                      </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="hst">
            <h3>您浏览过的商品</h3>
            <ul>
              <li><img src="../../../assets/imges/sp_1.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_2.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_3.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_4.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
            </ul>
          </div>
          <div class="recommend_ggods">
            <h3>给你推荐的商品</h3>
            <ul>
              <li><img src="../../../assets/imges/sp_1.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_2.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_3.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
              <li><img src="../../../assets/imges/sp_4.jpg" alt="">
                <p>CHANEL(精致生活)</p>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
  import config from '../../../config/config'
  export default {
    data() {
      return {
        activeName: 'second',
        userName: localStorage.getItem('userName'),
        // orderList: '',
        tableData: [],
        multipleSelection: [],
        arr2: [],
        arr3: [],
        arr4: [],
        total: '0',
        // currentPage: 0,
        currentPage: 1, //初始页
        pagesize: 5,
        baseUrl: config.baseUrl,
        SumNum: 0
      }
    },
    methods: {
      tableRowClassName(row,rowIndex) {
        // console.log(row)
        if (row.status== 0 || 1 || 2 ||3 ||4 ||5||6||7||8||9||10||11||12||13||14||15||16)  {
          return 'waning-row';
        }
      },
      //删除订单
      Delarr(item,index) {
        this.tableData[index].get_order_product = []
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
        // console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        // console.log(this.currentPage)  //点击第几页
      },
      handleClick(tab, event) {},
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    },
    components: {

    },
    created() {
      // this.$emit('public_footer', true);
      this.$ajax({
        url: config.baseUrl + '/home/order',
        method: 'get',
        params: {
          member_id: localStorage.getItem("userId")
        }
      }).then(res => {
        // tableRowClassName
        this.tableData = res.data.data.items.data
        console.log(this.tableData)
        let arr = []
        this.arr2 = this.tableData.filter(item => {
          return item.order_status_id == 1
        })
        this.arr3 = this.tableData.filter(item => {
          return item.order_status_id == 3
        })
        this.arr4 = this.tableData.filter(item => {
          return item.order_status_id == 13
          // console.log('return item.order_status ==3')
        })
        // console.log(this.tableData)
      })
      this.$ajax({
        url: config.baseUrl + '/home/score',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {})
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/common';

  .Center_home_page {
    width: 1090px;
    margin-left: 100px;
    // height: 2500px;
    position: relative;
    .evaluate-fa {
      margin: 10px 0;
    }

    .evaluate {
      border: 1px solid #ccc;
      border-radius: 3px;
      padding: 10px 20px;
      cursor: pointer;
    }

    .evaluate:hover {
      color: #f40;
      border-color: #f40;

    }
  }

  .Account_of_integral {
    height: 200px;
    width: 180;

    .Account {
      height: 190px;
      width: 520px;
      border: 1px solid #ccc;
      float: left;
    }

    // background-color:yellow;
    .head_portrait {
      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 20px 0 0 50px;
        float: left;
        border: 1px solid #ccc;
      }

      .message {
        float: left;
        margin-left: 40px;

        ul {
          height: 200px;
          padding: 40px 0;

          li {
            margin-bottom: 10px;
          }
        }
      }
    }
  }

  .Integral {

    height: 190px;
    width: 520px;
    border: 1px solid #ccc;
    float: left;
    margin-left: 50px;

    .integral {
      ul {
        float: left;
        width: 180px;
        height: 200px;
        padding: 40px 0 0 50px;

        li {
          height: 80px;
        }
      }
    }

    .right_image {
      float: left;
      width: 300px;
      height: 200px;
      padding: 10px 0 0 50px;

      li {
        text-align: center;

        img {
          width: 130px;
          height: 130px;
        }
      }

      // li:nth-child(2){
      //   margin-left: 40px;
      // }
    }
  }

  .indent {

    min-height: 500px;
    height: auto !important;
    overflow: hidden;
    margin-bottom: 30px;
    // height:500px;
    .Logistics {

      // border-bottom: 1px solid #ccc;
      .flow {
        height: 70px;
        width: 100%;
        padding-top: 10px;

        li {
          float: left;
          width: 20%;
          text-align: center;
          cursor: pointer;

          i {
            font-size: 40px;
          }

          i:hover {
            color: #e94c15;
          }
        }
      }

    }

    .Od {
      // height: 400px;
      width: 100%;
      overflow: hidden;
      // background: yellow;
    }
  }

  .hst {
    margin-top: 35px;
    height: 300px;
    width: 100%;
    // background-color:yellow;
    margin-top: 20px;

    h3 {
      margin-bottom: 20px;
      font-size: 18px;
    }

    ul {
      width: 100%;
      overflow: hidden;

      li {
        float: left;
        width: 250px !important;
        height: 280px;
        text-align: center;
        padding-top: 25px;
        border: 1px solid #E6E6E6;

        img {
          height: 200px;
          width: 248px;
        }

        p {
          margin-top: 10px;
          font-size: 18px;
        }
      }

      li:nth-child(n+2) {
        margin-left: 30px;
      }
    }
  }

  .recommend_ggods {
    height: 300px;
    width: 100%;
    // background-color:yellow;
    margin-top: 70px;

    h3 {

      margin-bottom: 20px;
      font-size: 18px;
    }

    ul {
      width: 100%;

      li {
        width: 250px !important;
        height: 280px;
        text-align: center;
        padding-top: 25px;
        border: 1px solid #E6E6E6;
        float: left;

        img {
          height: 200px;
          width: 248px;
        }

        p {
          margin-top: 10px;
          font-size: 18px;
        }
      }

      li:nth-child(n+2) {
        margin-left: 30px;
      }
    }
  }

</style>
<style lang="scss">
  .waning-row {
    float: left !important;
    padding: 0 !important;
    // margin: 10px 0 !important;
    width: 1090px !important;
    // border: 1px solid #ccc !important;
  }
  .el-table .waning-row td{
    border:1px solid #ccc;
  }

  .warning-row .el-table_1_column_1 {
    border-right: 1px solid #ccc !important;
    width: 44px !important;
  }

  .warning-row .el-table_1_column_2 .cell{
    width: 352px ;
    padding: 10px ;
  }

  .warning-row .el-table_1_column_3 {
    width: 127px !important;
    padding: 10px !important;
  }

 .el-table .warning-row .el-table_1_column_4 {
    width: 55px !important;
    padding: 10px !important;
    border:1px solid #ccc;
  }

  .warning-row .el-table_1_column_5 {
    width: 118px !important;
    padding: 10px !important;
    border-right: 1px solid #ccc;
  }

  .warning-row .el-table_1_column_6 {
    width: 130px !important;
    padding: 10px !important;
    border-right: 1px solid #ccc;
  }

  .warning-row .el-table_1_column_7 {
    width: 120px !important;
    padding: 10px !important;
    border-right: 1px solid #ccc;
  }

  .warning-row .el-table_1_column_8 {
    width: 132px !important;
    padding: 10px !important;
    border-right: 1px solid #ccc !important;
  }
// .el-table__body-wrapper ttr{
//   border: 1px solid #ccc;
// }
</style>
