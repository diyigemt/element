<template>
  <div>
    <PageHeader :content="'查看订单'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
<!--      <TableWithPagination name="所有订单" :table-data=""></TableWithPagination>-->
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import TableWithPagination from "@/components/content/TableWithPagination";
import {tmpTableData} from "@/config/tmp-config";
let tmpPropName = []
export default {
  name: "ShowOrder",
  components: {PageHeader, TableWithPagination},
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