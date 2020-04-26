// 导入 types.js 文件
import types from "../types";

var car = JSON.parse(localStorage.getItem('car') || '[]')
const state ={
  car:car
}

const actions = {
  // delgoodsinfos({commit},goodsinfos){
  //   commit('del',goodsinfos)
  // }
  // totalPrice(state){
  //   let totalPrice = 0;
  //   state.car.forEach(item =>{
  //     totalPrice += item.price * item.quantity
  //   })
  //   return totalPrice;
  // }
}

const mutations = {
  addToShopCar(state,goodsinfos){
    // console.log(state)
    var flag = false;
    state.car.some(item=>{
        if(item.id == goodsinfos.id){
            item.quantity += parseInt(goodsinfos.quantity)
            flag = true
            return true
        }else{
        }
    })
    if(!flag){
        state.car.push(goodsinfos)
    }
    // localStorage.setItem('car',JSON.stringify(state.car))
  },

}

const getters = {
  totalPrice(state){
    // console.log(state)
    let totalPrice = 0;
    state.car.forEach(item=>{
      totalPrice += item.price * item.quantity
    })
    return totalPrice;
  },
}
// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}
