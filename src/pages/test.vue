<template>
    <div>
        <p>hello</p>
    </div>
</template>

<script>
// 引用 vuex
// mapActions 在 'methods' 中使用，提取 action 函式的方法，使用函式名稱
// mapGetters 在 'computed' 中使用，提取 getter 函式的方法，可以利用物件 key: value
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...為展開運算子
    ...mapGetters({})
  },
  methods: {
    ...mapActions([])
  }
};
</script>

<style scoped>
</style>
