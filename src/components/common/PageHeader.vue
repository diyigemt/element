<template>
  <el-page-header @back="goBack" :content="content"></el-page-header>
</template>

<script>
  export default {
    name: "PageHeader",
    props: {
      content: {type: String, default: '详情界面'}
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>

</style>