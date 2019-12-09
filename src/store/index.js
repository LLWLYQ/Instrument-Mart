import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import actions from './actions'
import car from './modules/car'
// 导出 store 对象
export default new Vuex.Store({
    getters,
    actions,
    modules:{
      car
    }
})
