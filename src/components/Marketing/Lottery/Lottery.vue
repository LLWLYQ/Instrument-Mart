<template>
  <div class="Lottery">
    <div class="content_container">
      <div class="root">
        <div class="body" :style="`transform: scale(${scale})`">
          <div class="bg">
            <img v-show="bg" class="bg1" src="./image/bg1.png" alt="" />
            <img v-show="!bg" class="bg2" src="./image/bg2.png" alt="" />
          </div>
          <div class="wheel-bg">
            <canvas id="wheelCanvas" width="420px" height="420px" class="lottery-bg"
              :style="`transform: rotate(${wheelDeg}deg)`"></canvas>
            <img @click="lottery" class="center" src="./image/center.png" alt="" />
          </div>
        </div>
        <div class="result" v-show="showResult">
        </div>
        <div v-show="showResult" class="center">
          <img v-if="result" src="./image/zhong.png" alt="" />
          <img v-else src="./image/wei.png" alt="" />
          <div class="info" v-if="result">奖品：{{result.name}}</div>
          <div class="info" v-else>很遗憾，未中奖</div>
          <div class="btn" @click="close">
            <img src="./image/anniu.png" alt="" />
            <div class="btn-title">确定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      bg: true,
      scale: 1,
      list: [],
      wheelDeg: 0,
      rolling: false,
      showResult: false,
      result: null
    }
  },
  methods: {
   getLottery() {
          // 这里应该是向后台请求接口返回值，但是demo的话，就默认直接返回了
          this.$ajax({
            url:"../../../../static/lottery.json",
            method:"get"
          }).then(res=>{
            this.list = res.data.data
            // console.log(this.list)
            this.list.forEach(function (item) {
              // console.log(item)
            if (item.img) {
              var img = new Image();
              img.src = window.location.href + item.img.resource_url;
              item.imgEl = img
            }
          })
          // 请求会数据后，就可以开始将奖品之类的，画到转盘上了
          this.draw();
          })
          // 循环一下，将图片渲染到页面上
        },
        checkImgComplete() {
          var complete = true;
          this.list.forEach(function (item) {
            if (item.imgEl && !item.imgEl.complete) {
              complete = false;
            }
          })
          return complete;
        },
        draw() {
          const _this = this;
          // 先判断，图片是否加载完成
          if (!_this.checkImgComplete()) {
            setTimeout(function () {
              _this.draw();
            }, 50);
            return;
          }
          //获取canvas画布
          var len = this.list.length;
          var canvas = document.getElementById("wheelCanvas");
          var ctx = canvas.getContext("2d");
          var canvasW = canvas.width; // 画板的高度
          var canvasH = canvas.height; // 画板的宽度
          //计算每个奖项所占角度数
          var baseAngle = Math.PI * 2 / len;
          ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认的黑色
          ctx.strokeStyle = "#ffb725"; //设置画图线的颜色
          for (var i = 0; i < len; i++) {
            var angle = i * baseAngle;
            ctx.font = '16px Microsoft YaHei'; //设置字号字体
            ctx.fillStyle = i % 2 === 0 ? '#ffdb37' : '#ffb725'; //设置每个扇形区域的颜色
            ctx.beginPath(); //开始绘制
            ctx.arc(canvasW * 0.5, canvasH * 0.5, 200, angle, angle + baseAngle, false);
            ctx.arc(canvasW * 0.5, canvasH * 0.5, 10, angle + baseAngle, angle, true);
            ctx.stroke(); //开始链线
            ctx.fill(); //填充颜色
            ctx.save(); //保存当前环境的状态
            ctx.fillStyle = "#e9311f";
            var item = this.list[i];
            var line_height = 24;
            var translateX = canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * 260;
            var translateY = canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * 260;
            if (!item.img) {
              ctx.font = '20px Microsoft YaHei'; //设置字号字体
              translateX = canvasW * 0.5 + Math.cos(angle + baseAngle / 2) * 220;
              translateY = canvasH * 0.5 + Math.sin(angle + baseAngle / 2) * 220;
            }
            ctx.translate(translateX, translateY);
            // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
            // angle，当前扇形自身旋转的角度 +  baseAngle / 2 中心线多旋转的角度  + 垂直的角度90°
            ctx.rotate(angle + baseAngle / 2 + Math.PI / 2);
            //设置文本位置，居中显示
            ctx.fillText(item.name, -ctx.measureText(item.name).width / 2, 100);
            //添加对应缩略图
            var triangleEdge = canvasH * 0.27;
            var imgMaxWidth = Math.sqrt(2 * triangleEdge * triangleEdge * (1 - Math.cos(baseAngle)));
            if (item.imgEl) {
              // ctx.drawImage(item.imgEl, -imgMaxWidth * 0.5, canvasH * 0.27, imgMaxWidth, item.img
              //   .vertical_resolution * imgMaxWidth / item.img.horizontal_resolution);
            }
            ctx.restore(); //很关键，还原画板的状态到上一个save()状态之前
          }
        },
        lottery() {
          if (this.showResult) {
            this.showResult = false;
            return;
          }
          if (this.rolling) {
            return;
          }
          this.rolling = true
          // 这里应该从后台获取中奖结果，我们随便模拟一下中奖结果
          var winIndex = parseInt(Math.random() * (this.list.length + 1), 10);
          this.result = this.list[winIndex];
          if (this.result.name === '谢谢参与') {
            this.result = null;
          }
          // 计算中奖的旋转角度
          this.wheelDeg = this.wheelDeg - this.wheelDeg % 360 + 3600 + (360 - 360 / this.list.length * winIndex) - (
            180 - 360 / this.list.length);
          // 关闭中奖结果
          setTimeout(() => {
            this.showResult = true;
            this.rolling = false;
          }, 8500)
          console.log(this.result.name)
        },
        close() {
          this.showResult = false;
        },
  },
  components: {

  },
  created(){
    this.$emit('public_header', false);
    this.$emit('public_footer', false);
    // this.getLottery()
  },
   mounted() {
        // 用来切换转盘背景灯，没想到更好的方法，但是总感觉应该会有css方法来做这个，唉，学艺不精
        setInterval(() => {
          this.bg = !this.bg;
        }, 1000);
        var maxW = document.body.offsetWidth;
        // 兼容适配移动端
        if (maxW < 500) {
          this.scale = maxW / 500;
        }
        this.getLottery();
      },
}
</script>

<style lang="scss" scoped>
  @import '../../../style/common';
  .root {
  position: relative;
  width: 100%;
  height: 100vh;
}
.title {
  font-size: 26px;
  text-align: center;
  line-height: 80px;
  font-weight: bold;
  position: absolute;
  top: 12%;
  left: 0;
  width: 100%;
}
.body {
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -250px;
  margin-left: -250px;
  background-color: #f04f24;
  border-radius: 50%;
  overflow: hidden;
}

.body .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.body .bg .bg1,
.body .bg .bg2 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.body .wheel-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  background-color: #ab3212;
  border-radius: 50%;
  overflow: hidden;
  transform: translate(-50%, -50%);
  transition: transform 8s ease-in-out;
  z-index: 1;
}

.body .lottery-bg {
  position: absolute;
  top: 10px;
  left: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  background-color: #fff;
  border-radius: 50%;
  overflow: hidden;
  transition: transform 8s ease-in-out;
  z-index: 2;
}

.body .center {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  transform: translate(-50%, -50%);
  margin-top: -10px;
  z-index: 3;
  cursor: pointer;
}

.result {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  z-index: 99;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  z-index: 999;
}

.center img {
  width: 100%;
}

.center .info {
  background: #fff;
  color: #a16f0f;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 40px;
  margin-top: -5px;
}

.center .btn {
  margin-top: 40px;
  text-align: center;
  height: 40px;
  box-sizing: border-box;
  cursor: pointer;
}

.center .btn img {
  display: block;
  font-size: 0;
  margin: 0 auto;
  width: auto;
  height: 40px;
}

.center .btn .btn-title {
  color: #a16f0f;
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  margin-top: -40px;
}
</style>
