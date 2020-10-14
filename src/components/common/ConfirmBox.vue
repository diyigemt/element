<template>
  <el-button type="primary" @click="open">{{ text }}</el-button>
</template>

<script>
export default {
  name: "ConfirmBox",
  props: {
    text: {type: String, default: '确认'},
    content: {type: String, default: '确认进行此操作?'},
    title: {type: String, default: '确认对话框'},
    confirmText: {type: String, default: '确定'},
    type: {type: String, default: 'warning'},
    cancelText: {type: String, default: '取消'},
    successText: {type: String, default: '操作成功!'},
    failedText: {type: String, default: '已取消'}
  },
  methods: {
    open() {
      this.$confirm(this.content, this.title, {
        confirmButtonText: this.confirmText,
        cancelButtonText: this.cancelText,
        type: this.type
      }).then(() => {
        this.$message({
          type: 'success',
          message: this.successText
        })
        this.$emit('action', true);
      }).catch((err) => {
        this.$message({
          type: 'info',
          message: this.failedText
        })
        this.$emit('action', false);
      })

    }
  }
}
</script>

<style scoped>

</style>