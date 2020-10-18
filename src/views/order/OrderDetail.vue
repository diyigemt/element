<template>
  <div>
    <PageHeader :content="'查看订单详情'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <el-row>
        <el-col span="6">
          <el-form label-position="left">
            <el-form-item label="创建日期">
              <span>2018-11-06 01:11:12</span>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import {tmpOrderDetail} from "@/config/tmp-config";
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