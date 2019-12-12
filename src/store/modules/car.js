// 导入 types.js 文件
import types from "../types";

var car = JSON.parse(localStorage.getItem('car') || '[]')
const state ={
  car:car
}

const getters = {
  // totalPrice:(state,getters)=>{
  //   let total = 0;
  //   getters.cartProducts.forEach(n=>{
  //       total += n.price * n.num
  //   })
  //   return total;
  // },
}

const actions = {
  // delgoodsinfos({commit},goodsinfos){
  //   commit('del',goodsinfos)
  // }
}

const mutations = {
  addToShopCar(state,goodsinfos){
    var flag = false;
    state.car.some(item=>{
        if(item.id == goodsinfos.id){
            // item.count += parseInt(goodsinfos.count)
            flag = true
            return true
        }else{
        }
    })
    if(!flag){
        state.car.push(goodsinfos)
    }
    localStorage.setItem('car',JSON.stringify(state.car))
  }
}
// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}
