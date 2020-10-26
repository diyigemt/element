<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu default-active="2" class="el-menu-vertical-demo" :default-openeds="menu.map(item => item.id)">
        <el-submenu v-for="(e, index) in menu" :index="e.id" :key="e.id + index">
          <template slot="title">
            <i :class="e.icon"></i>
            <span>{{ e.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(k, i) in e.sub"
                          :index="'/' + k.component"
                          :key="k + i"
                          :disabled="k.disabled"
                          @click="jumpTo(k.component)">{{ k.name }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import menu_config from '@/config/home/menu-config';
export default {
  name: "NavMenu",
  data() {
    return {
      menu: menu_config
    }
  },
  methods: {
    jumpTo(name) {
      this.$store.commit('jump');
      this.$router.push(`/${name}`);
    }
  }
}
</script>

<style scoped>

</style>