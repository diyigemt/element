<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-aside width="200px">
        <NavMenu></NavMenu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
import NavMenu from "@/components/common/NavMenu";
export default {
  name: 'App',
  components: {
    NavMenu
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
