// 导入 types.js 文件
import types from "./../types";

const state ={
    count:5
}

// 定义 getters
var getters ={
    count(state){
        return state.count
    }
}

const actions ={
    increment({ commit, state}){
        // 此处提交的事件与下方 mutations 中的 types.INCREMENT 对应
        //与原来 commit('increment') 的原理相同，只是把类型名换成了常量
        commit(types.INCREMENT)
    },
    decrement({commit,state}){
        if (state.count>10) {
            // 此处提交的事件与下方 mutations 中的 types.DECREMENT 对应
            commit(types.DECREMENT)
        }
    }
}

const mutations ={
    // 此处的事件为上方 actions 中的 commit(types.INCREMENT)
    [types.INCREMENT](state){
        state.count++
    },
    // 此处的事件为上方 actions 中的 commit(types.DECREMENT)
    [types.DECREMENT](state){
        state.count--
    }
}
// 最后统一导出
export default {
    state,
    getters,
    actions,
    mutations
}
