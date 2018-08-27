// 引入 mutations_type （引用同一個 key）
import * as types from "./mutation_types.js";

export const state = {
  myIntro_inRoot: "我是放在root.js的data，因此當修改我的值時會出錯，不可直接在畫面中修改",
  myValue: 0
};

export const actions = {

  changeValue({
    commit
  }, param) {
    commit(types.CHANGE_VALUE, param);
  },
}

export const mutations = {
  [types.CHANGE_VALUE](state, param) {
    (param == 'addition') ? state.myValue++: state.myValue--;
  },
}
