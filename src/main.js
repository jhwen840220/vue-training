import "./assets/css/bootstrap/stylesheets/_bootstrap.scss";
import './assets/css/myScss.scss';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


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
  components: {
    App
  },
  template: '<App/>'
})
