<template>
  <el-form >
    <div class="head">额外备注</div>
    <el-divider></el-divider>
    <el-form-item>
      <el-input type="textarea"
                v-model="content"
                clearable
                show-word-limit
                placeholder="请输入内容"
                maxlength="1000"
                :autosize="{minRows: 4}"></el-input>
    </el-form-item>
    <el-form-item size="small">
      <el-button type="primary" @click="submitForm" :loading="loading">提交</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {request} from "@/network/request";

export default {
  name: "MemberOtherInfo",
  data() {
    return {
      id: -1,
      content: '',
      loading: false
    }
  },
  methods: {
    getText() {
      //TODO 分成4段存储 每段250 表长255
    },
    submitForm() {
      this.loading = true;
      request({
        url: ''
      }).then(res => {
        this.$message({
          type: 'success',
          message: '更改成功'
        });
        this.loading = false;
      }).catch(err => {
        this.$message({
          type: 'error',
          message: `操作失败! 服务器返回错误代码: ${err}`
        });
        this.loading = false;
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {if (typeof to.query.id !== "undefined") vm.id = to.query.id;});
  }
}
</script>

<style scoped>
.head {
  margin: 10px 10px 10px 0;
  text-align: left;
  font-size: 25px;
}
</style>