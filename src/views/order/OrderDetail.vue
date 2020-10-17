<template>
  <div>
    <PageHeader :content="'查看会员信息'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "OrderDetail",
  components: {PageHeader},
  data() {
    return {
      fromPath: '',
      id: -1
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = from.path; if (typeof to.query.id !== "undefined") vm.id = to.query.id;});
  }
}
</script>

<style scoped>

</style>