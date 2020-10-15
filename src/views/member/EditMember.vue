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
  props: {
    id: Number
  },
  data() {
    return {
      fromPath: ''
    }
  },
  methods: {
    handleSelect(index) {
      switch (index) {
        case '1':{break;}
        default: {}
      }
      if (index === '1') {
        let path = this.$route.path;
        this.$router.replace({name: 'baseInfo'});
      }
    }
  },
  beforeRouteUpdate(to ,from, next) {
    
  },
  beforeRouteEnter(to, from, next) {
    const that = from;
    next(vm => {vm.fromPath = that.path});
  },
  components: {
    PageHeader
  }
}
</script>

<style scoped>

</style>