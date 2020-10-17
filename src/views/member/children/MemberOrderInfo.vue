<template>
  <TableWithTimePicker name="所有订单"
                         :table-data="userData"
                         :prop-name="propName"
                         :label-name="labelName">
  </TableWithTimePicker>
</template>

<script>
import TableWithTimePicker from "@/components/content/TableWithTimePicker";
import {tmpTableData} from "@/config/tmp-config";
let tmpPropName = ['date', 'name', 'detail'];
let tmpLabelName = ['时间', '用户名', '详细信息']
export default {
  name: "MemberOrderInfo",
  components: {TableWithTimePicker},
  data() {
    return {
      userData: tmpTableData,
      propName: tmpPropName,
      labelName: tmpLabelName,
      id: -1
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {if (typeof to.query.id !== "undefined") vm.id = to.query.id;});
  }
}
</script>

<style scoped>

</style>