<template>
    <div>
        <input type="text" v-model="myIntro_inPage">
        <br>
        <input type="text" v-model="myIntro_inRoot">
        <p>下方為root.js中的 state --> myValue 的值</p>
        <p>{{myValue}}</p>
        <button @click="changeValue('addition')">+</button>
        <button @click="alter_changeValue('subtraction')">-</button>
    </div>
</template>

<script>
// 引用 vuex
// mapActions 在 'methods' 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 'computed' 中使用，提取 getter 函式的方法，可以利用物件 key: value
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      myIntro_inPage: "我是放在該頁面下的data，可隨意更動我"
    };
  },
  computed: {
    // ...為展開運算子
    ...mapGetters({
      myValue: "get_myValue",
      myIntro_inRoot: "get_myIntro_inRoot"
    })
  },
  methods: {
    ...mapActions(["changeValue"]), /////放置action在裡面

    /////以下為利用dispatch叫出action
    alter_changeValue(param) {
      this.$store.dispatch("changeValue", param);
    }
  }
};
</script>

<style scoped>
</style>
