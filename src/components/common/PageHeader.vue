<template>
  <el-page-header @back="goBack" :content="content"></el-page-header>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      content: {type: String, default: '详情界面'},
      fromPath: {type: String, default: '/home'}
    },
    methods: {
      goBack() {
        if (this.$route.path === this.fromPath) return;
        if (this.fromPath.split('/').length !== 2) return;
        this.$router.push(this.fromPath);
      }
    }
  }
</script>

<style scoped>

</style>