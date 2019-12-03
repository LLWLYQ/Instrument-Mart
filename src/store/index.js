//引入vuex
import Vue from 'vue'
import Vuex from 'vuex';
// import { Script } from 'vm';
import print from './module/print'
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
        print
      }
  })
// const store = new Vuex.Store({
//   state: {
//     // 存储token
//     Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
//   },
//   mutations: {
//     // 修改token，并将token存入localStorage
//     changeLogin (state, user) {
//       state.Authorization = user.Authorizsation;
//       localStorage.setItem('Authorization', user.Authorization);
//     }
//   }
// });
s
