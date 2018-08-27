import "./assets/css/bootstrap/stylesheets/_bootstrap.scss";
import './assets/css/myScss.scss';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 引入 store 資料夾（上面五隻 js ）
// 預設會去找 index.js  如果沒有的話會報錯！
import store from "./store";

// 引入 vue-router
import VueRouter from "vue-router";
// 引入 vuex
import Vuex from "vuex";

// 告訴 Vue 使用 VueRouter
Vue.use(VueRouter);
// 告訴 Vue 使用 Vuex
Vue.use(Vuex);

Vue.config.productionTip = false;

// page
import test from "./pages/test.vue";

const router = new VueRouter({
  // 使用 HTML 5 模式
  mode: "history",
  base: __dirname,
  // routre 表
  routes: [{
      path: "/test",
      name: "test",
      component: test,
      meta: {
        requiresAuth: false
      } // 不需驗證
    },

    // 對應不到的統一轉到此頁面
    {
      path: "/*",
      redirect: "/test"
    }
  ]
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
