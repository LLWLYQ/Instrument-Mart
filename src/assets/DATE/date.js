
// var lastTime = new Date().getTime();
// var currentTime = new Date().getTime();
// var timeOut = 30 * 60 * 1000; //在这里设置超时时间

// window.onload = function () {
//     window.document.onmousedown = function () {
//         localStorage.setItem("lastTime",new Date().getTime());
//     }
// };
// function checkTimeout() {
//     currentTime = new Date().getTime(); //更新当前时间
//     lastTime = localStorage.getItem("lastTime");
//     if (currentTime - lastTime > timeOut) { //判断是否超时
//         var url = window.location.href;
//         var newUrl=url.match(/(\S*)#/)[1];
//         localStorage.clear();
//         window.open(newUrl + '/register');
//         window.location.reload();
//     }
// }
// window.setInterval(checkTimeout, 30000);
