<template>
  <el-row>
    <el-col :span="2">
      <el-menu default-active="1" @select="handleSelect($event)">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">基本信息</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">订单信息</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">额外备注</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="18"><router-view></router-view></el-col>
  </el-row>
</template>

<script>
  export default {
    name: "UserDetailCard",
    props: {},
    methods: {
      handleSelect(index) {
        if (index === '1') {
          let path = this.$route.path;
          this.$router.replace({name: 'baseInfo'});
        }
      }
    }
  }
</script>

<style scoped>
.block {
  text-align: center;
}
</style>