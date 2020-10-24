<template>
  <div>
    <PageHeader :content="'查看订单'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "ShowOrder",
  components: {PageHeader},
  data() {
    return {
      fromPath: ''
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = `${from.path}?id=${from.query.id || ''}`; vm.id = to.query.id || -1;});
  }
}
</script>

<style scoped>

</style>