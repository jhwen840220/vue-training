import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters.js'
import {
  state,
  actions,
  mutations
} from "./root.js";

Vue.use(Vuex);


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  // 若有自己新增的modules,將整理好的 modules 放到 vuex 中組合
  modules: {},
  // 嚴格模式，禁止直接修改 state
  strict: true
});
