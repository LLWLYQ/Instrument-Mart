// 导入 types.js 文件
import types from "../types";

const state ={
  car:{}
}

const getters = {
  count(state){
    return state.car
  }
}

const actions = {

}

const mutations = {
  addToShopCar(state,goodsinfos){
    var flag = false;
    state.car.some(item=>{
        if(item.id == goodsinfos.id){
            item.count += parseInt(goodsinfos.count)
            flag = true
            return true
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
