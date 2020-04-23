<template>
  <div>
    	<form action="">
    		<div class="list-top">
    			<input v-model="wd" @keyup="keyup($event)" @keydown="keydown($event)" type="text" class="_inp" placeholder="请输入要搜索的商品" @focus="mouseOver()" @blur="mouseLeave()" @input="changeArr()"/>
          <el-button id="ELB" slot="append" icon="el-icon-search "  @click="search" style="height:38px;width:100px;"></el-button>
	    		<ul class="list-group" ref="ListGroup">
	    			<li  v-for="(item,index) in arr" :key="index" :class="{'list-group-item-info':index==listIndex}" @click="click(item)">{{item.goods_name}}</li>
	    		</ul>
    		</div>
    	</form>
    </div>
</template>
<script>
import config from '../../config/config'
import $ from 'jquery'
export default {
  data () {
    return {
     	wd:'',//搜索的关键词
			arr:[],//用于储存关键词的搜索词条
			listIndex:-1//设置初始索引，数组从0开始，因此初始成-1
    }
  },
  methods:{
      changeArr(){
        if(this.wd == ''){
          this.$refs.ListGroup.style.display = 'none'
        }else{
          this.$refs.ListGroup.style.display = 'block'
        }
      },
      mouseLeave(){
        setTimeout(() => {
          this.$refs.ListGroup.style.display = 'none'
        }, 1000)
      },
      mouseOver(){
        // this.$refs.ListGroup.style.display = 'block'
      },
      //搜索按钮
      search(){
        let routerJump = this.$router.resolve({
            path:'/ProductCategoryListPage',
            query:{
              ListData:this.wd
            }
          })
          window.open(routerJump.href,'_blank')
        // window.open("https://www.baidu.com/s?wd="+this.wd);
        // let Search = localStorage.get('GSC_CODE')
      },
    	//这个函数我们在input标签输入关键词的时候不断的给百度服务器发送请求获取搜索词条，并且不断的复制给data中的数组arr
			keyup(event){
				//如果我按的是上下键，那么就不发送请求了
        if(event.keyCode==38||event.keyCode==40||event.keyCode==13) return ;
        setTimeout(() => {
        this.$ajax({
          url:config.baseUrl + '/home/goods',
          method:'get',
          params:{
            goods_name:this.wd
          }
        }).then(res=>{
          if(this.wd == ''){
            this.arr = []
          }else{
            this.arr = res.data.data.items;
          }
          // console.log(res)
        })
        }, 1000)
        // var url=  config.baseUrl + '/home/goods'
        // // 跨域请求
				// this.$http.jsonp(url,{
				// 	params:{
        //     wd:this.wd
				// 	},
				// 	jsonp:'cb'
				// }).then(res=>{
				// 	this.arr=res.data.data.items;//把百度服务器返回的数据传给arr数组
        // })
			},
			//监听鼠标的点击事件
			//如果鼠标点击某一行的文字，则点击事件中的event.target.data代表关键词
			//如果点击某一行的空白处，则点击事件中的event.target.innerText代表关键词
      //大家可以通过console.log(event)来查看关键词所在的位置
      click(event){
          if(event!=undefined){
            this.wd=event;
            let routerJump = this.$router.resolve({
              path:'/ProductCategoryListPage',
              query:{
                ListData:this.wd
              }
          })
          window.open(routerJump.href,'_blank')
        }
			},
			//监听键盘的事件
			//如果按down，则增加当前listIndex+1，因此arr[this.listIndex]就能代表当前的词条
			//我们通过对listIndex的修改来得到当前词条在arr中的索引，然后就可以得到词条的具体信息，然后发送请求了
			keydown(event){
				//下键：40 上键：38
				if(event.keyCode==38){
					//按的上键
          this.listIndex--;
          // console.log( this.listIndex-$(".list-group li").index(this)-1)
					if(this.listIndex<0){
            this.listIndex = this.arr.length-1;
					}
          this.wd = this.arr[this.listIndex].goods_name;
          // console.log(this.arr[this.listIndex])
				}
				else if(event.keyCode==40){
					//说明你按的是下键
					this.listIndex++;
					if(this.listIndex>this.arr.length-1){
						this.listIndex=0;
					}
					this.wd = this.arr[this.listIndex].goods_name;
				}else if(event.keyCode==13){
          //如果你按的是enter，那么就跳转到百度搜索结果
          let routerJump = this.$router.resolve({
            path:'/ProductCategoryListPage',
            query:{
              ListData:this.arr[this.listIndex].goods_cate_id
            }
          })
          window.open(routerJump.href,'_blank')
				}
      },
      	
  }
}
</script>

<style scoped lang="scss">
@import '../../style/common';
  // .list-top{
  //   position: relative;
  // }
 ._inp{
   border:2px solid #e94c15;
   border-radius: 2px;
   height: 36px;
   width: 500px;
   text-indent:10px;
   font-size: 10px;
   color: #000;
   float: left;
   margin-top: 1px;
  }
  .list-group{
    position: relative;
    float: left;
    z-index: 10000;
    background-color: white;
    font-size: 14px;
    width: 500px;
    height: 290px;
    overflow: hidden;
    display: none;
  :hover{
        background-color: #e94c15;
        // font-weight:bold;
        font-size: 12px;
        color:#fff;
    }
  .list-group-item-info{
    background-color: #e94c15;
    // font-weight:bold;
    font-size: 12px;
    color:#fff;
  }
   :nth-last-child(1){
     margin-bottom: 10px;
   }
   li{
      padding-left: 5px;
      padding-top: 3px;
      cursor:pointer;
      z-index: 8000;
   }
   .Search{
     cursor: pointer;
     position:absolute;
     top:20%;
     left:20%;
     width: 50px;
   }
  }
</style>



