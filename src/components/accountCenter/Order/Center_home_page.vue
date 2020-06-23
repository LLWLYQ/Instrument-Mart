<template>
  <div class="Center_home_page">
    <div class="Account_of_integral">
      <div class="Account">
        <div class="head_portrait">
          <div class="img">
            <img :src="baseUrl + dataList.avatar_url" alt="">
          </div>
          <div class="message">
            <ul>
              <li>{{userName}}</li>
              <!-- <li>仪商值</li> -->
              <li><router-link to="/Account_setting">账户设置<i class="el-icon-caret-right"></i></router-link></li>
              <li><router-link to="/Shipping_address">我的收货地址</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Integral">
        <div class="integral">
          <ul>
            <li>
             <router-link to="/Integral" style="color:#222;"><i class="el-icon-star-on" style="font-size:25px;color:#ffcc00;"></i>&nbsp;&nbsp;:&nbsp;&nbsp;积分&nbsp;&nbsp;:&nbsp;&nbsp;{{IntegralSum}}</router-link></li>
            <li style="cursor:pointer;"><router-link to="/Have_to_buy_goods">我的信息&nbsp;&nbsp;:&nbsp;&nbsp;<i class="el-icon-chat-dot-round" style="font-size:25px;"></i></router-link></li>
          </ul>
        </div>
        <div class="right_image">
          <ul>
            <li>
              <img :src="baseUrl + dataList.avatar_url" alt="">
            </li>
            <!-- <li>打我领星星</li> -->
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
                <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange"
                  :current-page="page" :page-size="limit" :page-sizes="pageSizes" 
                  layout="total, sizes, prev, next, jumper" :total="totalCount" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="tableData"
                  tooltip-effect="dark" style="width: 100%;border:1px solid #ccc;"  
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
                          <span style="color: rgb(255, 0, 54);">{{item.price/100}}</span>
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
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total/100}}</span>
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
                  :current-page="page" :page-size="limit"
                  layout="total, sizes, prev, next, jumper" :total="arr2.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr2"
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
                          <span style="color: rgb(255, 0, 54);">{{item.price/100}}</span>
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
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total/100}}</span>
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
                  :current-page="page"  :page-size="limit"
                  layout="total, sizes, prev, next, jumper" :total="arr3.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr3"
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
                          <span style="color: rgb(255, 0, 54);">{{item.price/100}}</span>
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
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total/100}}</span>
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
                  :current-page="page" :page-size="limit"
                  layout="total, sizes, prev, next, jumper" :total="arr4.length" style="margin-bottom:5px;">
                </el-pagination>
                <el-table ref="multipleTable" :data="arr4"
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
                          <span style="color: rgb(255, 0, 54);">{{item.price/100}}</span>
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
                          <span style="color: rgb(255, 0, 54);">{{scope.row.total/100}}</span>
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
                        <p class="evaluate-fa" v-for="item in scope.row.get_order_product" :key="item.id"><span class="evaluate"  @click="evaluate(item)">评价</span></p>
                        <p class="evaluate-fa" v-for="item in scope.row.get_order_product" :key="item.id"><span class="evaluate"  @click="ConfirmReceipt(item)">确认收货</span></p>
                        <!-- <p style="height:30px;"><span style="font-size:12px;cursor: pointer;padding:10px 20px;border:1px solid #ccc;"></span></p> -->
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
        IntegralSum:0,
        userName: localStorage.getItem('userName'),
        // orderList: '',
        tableData: [],
        multipleSelection: [],
        arr2: [],
        arr3: [],
        arr4: [],
        total: '0',
        // currentPage: 0,
        page: 1, //初始页
        totalCount:1,
        pageSizes:[10],
        limit:10,
        baseUrl: config.baseUrl,
        SumNum: 0,
        dataList:''
      }
    },
    methods: {
      //确认收货
      ConfirmReceipt(item){
        this.$ajax({
          url:config.baseUrl + '/home/order/member/confirg',
          method:"post",
          data:{
            order_id:item.order_id
          }
        }).then(res=>{
          console.log(res)
        })
      },
      //评价
      evaluate(row){
        this.$router.push({
          path:'/comments',
          query:{
            // goods:JSON.stringify(item),
            orderData:JSON.stringify(row)
          }
        })
      },
      handleSizeChange(val) {
            // 改变每页显示的条数 
            this.limit=val
            // 点击每页显示的条数时，显示第一页
            this.getData(val,1)
            // 注意：在改变每页显示的条数时，要将页码显示到第一页
            this.page=1  
        },
          // 显示第几页
        handleCurrentChange(val) {
            // 改变默认的页数
            this.page=val
            // 切换页码时，要获取每页显示的条数
            this.getData(this.limit,(val)*(this.limit))
        },
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
      // handleSizeChange: function (size) {
      //   this.pagesize = size;
      //   // console.log(this.pagesize)  //每页下拉显示数据
      // },
      // handleCurrentChange: function (currentPage) {
      //   this.currentPage = currentPage;
      //   // console.log(this.currentPage)  //点击第几页
      // },
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
      },
      getData(n1,n2){
        this.$ajax({
          url: config.baseUrl + '/home/order',
          method: 'get',
          params: {
            member_id: localStorage.getItem("userId"),
            // sort:'+id',
            // 每页显示的条数
            // limit:n1,
            // 显示第几页
            page:this.page,
          }
        }).then(res => {
          console.log(res)
          // tableRowClassName
          this.tableData = res.data.data.items.data
          // this.total = this.tableData.total
          this.totalCount = res.data.data.total
          // console.log(this.totalCount)
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
      }
    },
    components: {

    },
    created() {
       this.$ajax({
        url:config.baseUrl + '/home/user/info',
        method:'post',
        data:{
          member_id:localStorage.getItem("userId")
        }
      }).then(res=>{
        this.dataList = res.data.data
      })
      this.getData(this.limit,this.page) 
      this.$ajax({
        url:config.baseUrl + '/home/score',
        method:'get',
        params:{
          member_id:localStorage.getItem('userId')
        }
      }).then(res=>{
        // console.log(res)
        this.scoreData = res.data.data.items.data
        this.scoreData.map(item=>{
          this.IntegralSum += item.scrore_value
          // console.log(this.IntegralSum)
        })
      })
      // this.$emit('public_footer', true);
      
      this.$ajax({
        url: config.baseUrl + '/home/score',
        method: 'get',
        params: {
          member_id: localStorage.getItem('userId')
        }
      }).then(res => {
        console.log(res)
      })
    }
  }

</script>

<style lang="scss" scoped>
  @import '../../../style/common';

  .Center_home_page {
    width: 1130px;
    margin-left: 220px;
    padding:20px;
    background: #fff;
    // height: 2500px;
    position: relative;
    .evaluate-fa {
      height: 30px;
      margin:10px 0 15px 0;
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
      box-shadow: 0 1px 6px #999;
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
        // border-radius: 50%;
        margin: 15px 0 0 50px;
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
            cursor: pointer;
            a{
              color:#000;
            }
          }
        }
      }
    }
  }

  .Integral {
    box-shadow: 0 1px 6px #999;
    height: 190px;
    width: 520px;
    border: 1px solid #ccc;
    float: left;
    margin-left: 45px;

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
      padding: 15px 0 0 50px;

      li {
        text-align: center;

        img {
          width: 150px;
          height: 150px;
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
