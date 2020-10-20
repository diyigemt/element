<template>
  <div>
    <PageHeader content="创建新订单" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <Test></Test>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import Test from "@/components/common/Test";
export default {
  name: "CreateOrder",
  components: {Test, PageHeader},
  data() {
    return {
      fromPath: '/home'
    };
  },
  methods: {

  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = `${from.path}?id=${from.query.id || ''}`;});
  },
}
</script>

<style scoped>

</style>