<template>
  <div>
    <PageHeader :content="'修改会员信息'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
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
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "EditMember",
  data() {
    return {
      fromPath: '',
      id: '-1'
    }
  },
  methods: {
    handleSelect(index) {
      let query = {id: this.id};
      switch (index) {
        case '1':{this.$router.replace({name: 'baseInfo', query: query}); break;}
        case '2':{this.$router.replace({name: 'orderInfo', query: query}); break;}
        case '3':{this.$router.replace({name: 'baseInfo', query: query}); break;}
        default: {}
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fromPath = from.path;
      if (typeof to.query.id !== 'undefined') {
        vm.id = to.query.id;
      }
    });

  },
  components: {
    PageHeader
  }
}
</script>

<style scoped>

</style>