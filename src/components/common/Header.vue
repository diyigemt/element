<template>
  <el-row>
    <el-col :span="24">
      <i :class="iconClass"></i>
      <div class="head-wrap to-home" @click="jumpTo()" :style="{fontSize: fontSize + 'px'}">{{ text }}</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  props: {
    name: {
      type: String,
      default: 'home',
    },
    text: String,
    fontSize: {
      type: Number,
      default: 17
    },
    iconClass: String,
    params: Object
  },
  methods: {
    jumpTo() {
      let current = this.$route.path;
      if (current === this.path) return;
      let params = {};
      params.name = this.name;
      if (this.object !== undefined) {
        params.params = this.params;
      }
      this.$router.push(params);
    }
  }
}
</script>

<style scoped>
.to-home:hover {
  cursor: pointer;
}
</style>