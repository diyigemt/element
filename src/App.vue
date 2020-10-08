<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <Header :text="'会员管理系统'"></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
import Header from "@/components/common/Header";
export default {
  name: 'App',
  components: {
    NavMenu,
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header {
  line-height: 60px;
  background-color: #409eff;
  color: white;
  text-align: left;
}
</style>
