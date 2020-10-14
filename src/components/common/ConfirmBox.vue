<template>
  <el-button type="primary" @click="open"></el-button>
</template>

<script>
import {confirmBoxConfig} from "@/common/const";

export default {
  name: "ConfirmBox",
  methods: {
    open(config) {
      Object.assign(confirmBoxConfig, config);
      this.$confirm(confirmBoxConfig.content, confirmBoxConfig.title, {
        confirmButtonText: confirmBoxConfig.confirmText,
        cancelButtonText: confirmBoxConfig.cancelText,
        type: confirmBoxConfig.type
      }).then(() => {
        if (confirmBoxConfig.showSuccess) {
          this.$message({
            type: 'success',
            message: confirmBoxConfig.successText
          })
        }
        this.$emit('action', true);
      }).catch((err) => {
        if (confirmBoxConfig.showCancel) {
          this.$message({
            type: 'info',
            message: confirmBoxConfig.failedText
          })
        }
        this.$emit('action', false);
      })
    }
  }
}
</script>

<style scoped>

</style>