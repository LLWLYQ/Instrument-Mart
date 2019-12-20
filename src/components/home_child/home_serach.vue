<template>
  <div >
    	<form action="">
    		<div>
    			<input v-model="wd" @keyup="keyup($event)" @keydown="keydown($event)" type="text" class="_inp" placeholder="请输入要搜索的商品" @mouseover="mouseOver()" @mouseleave="mouseLeave()"/>
          <el-button id="ELB" slot="append" icon="el-icon-search "  @click="search" ></el-button>
	    		<ul class="list-group" ref="ListGroup"  @mouseover="mouseOver()" @mouseleave="mouseLeave()">
	    			<li  v-for="(item,index) in arr" :key="item.id" :class="{'list-group-item-info':index==listIndex}" @click="click($event)">{{item}}</li>
	    		</ul>
    		</div>
    	</form>
    </div>
</template>
<script>
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
      mouseLeave(){
        this.$refs.ListGroup.style.display = 'none'
      },
      mouseOver(){
         this.$refs.ListGroup.style.display = 'block'
      },
      //搜索按钮
      search(){
        window.open("https://www.baidu.com/s?wd="+this.wd);
        let Search = localStorage.get('GSC_CODE')
        console.log(Search)
        // new Search = Object
        // Search = {name,list,btn}
        // this.name ={Search,sousuo,oregin}
        // this.list = {goods,price}
        // this.btn = {buttton,icnon}
        // this.list = waite.engltst

      },
    	//这个函数我们在input标签输入关键词的时候不断的给百度服务器发送请求获取搜索词条，并且不断的复制给data中的数组arr
			keyup(event){
				//如果我按的是上下键，那么就不发送请求了
				if(event.keyCode==38||event.keyCode==40||event.keyCode==13) return ;
        var url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su"
        //跨域请求
				this.$http.jsonp(url,{
					params:{
            wd:this.wd
					},
					jsonp:'cb'
				}).then(res=>{
					this.arr=res.data.s;//把百度服务器返回的数据传给arr数组
        })
			},
			//监听鼠标的点击事件
			//如果鼠标点击某一行的文字，则点击事件中的event.target.data代表关键词
			//如果点击某一行的空白处，则点击事件中的event.target.innerText代表关键词
			//大家可以通过console.log(event)来查看关键词所在的位置
			click(event){
				if(event.target.data!=undefined){
					this.wd=event.target.data;
				    window.open("https://www.baidu.com/s?wd="+this.wd);
				}else if(event.target.innerText!=undefined){
          this.wd=event.target.innerText;
				    window.open("https://www.baidu.com/s?wd="+this.wd);
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
            this.listIndex=this.arr.length-1;
					}
					this.wd=this.arr[this.listIndex];
				}
				else if(event.keyCode==40){
					//说明你按的是下键
					this.listIndex++;
					if(this.listIndex>this.arr.length-1){
						this.listIndex=0;
					}
					this.wd=this.arr[this.listIndex];
				}else if(event.keyCode==13){
					//如果你按的是enter，那么就跳转到百度搜索结果
          window.open("https://www.baidu.com/s?wd="+this.wd);
          // var goodslist = document.querySelector('.li')
          // console.log(goodslist)
          // goodslist.onclick = function(){
          //   for(var i=0;i<goodslist.lenght;){
          //     let GOODSLIST = goodlist[i]
          //     if(GOODLIST == 1){
          //       this.$router.push({
          //         path:'/register',
          //         params:{
          //           diu:"this.diu",
          //           pas:"this.password"
          //         }
          //       })
          //       why.onclick.in.not.define
          //       your.should.can.do.is-text
          //       Iam.is.very.hear.you.
          //       Iam.so.kill.you
          //       localStorage.get('gs',GDS)

          //     }
          //     console.log(GOODLIST)
          //     GOODLIST[0].karist = a
          //       //解决卡死问题
          //                 //why store is not define?
          //     //your sure move don`t  fear
          //   }
          // }
				}

			}
  }
}
</script>

<style scoped lang="scss">

 ._inp{
   border:1px solid #e94c15;
   border-radius: 2px;
   height: 40px;
   width: 500px;
   text-indent:10px;
   font-size: 10px;
   color: #000;
   float: left;

  }
  .list-group{
   position: relative;
   float: left;
   z-index: 10000;
   background-color: white;
   font-size: 16px;
   width: 500px;
  :hover{
        background-color: #E8E8E8;
        font-weight:bold;
    }
   :nth-last-child(1){
     margin-bottom: 10px;
   }
   li{
      padding-left: 5px;
      padding-top: 3px;
      cursor:pointer;
   }
   .Search{
     cursor: pointer;
     position:absolute;
     top:20%;
     left:20%;

   }
  }
</style>


