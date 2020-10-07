<template>
  <el-row>
    <el-col :span="24">
      <div class="head-wrap to-home" @click="jumpTo('/home')">会员管理系统</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  methods: {
    jumpTo(path, object) {
      let current = this.$route.path;
      if (current === path) return;
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.to-home:hover {
  cursor: pointer;
}
</style>