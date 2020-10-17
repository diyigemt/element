<template>
  <TableWithTimePicker name="所有订单"
      :table-data="userData"
      :prop-name="propName"
      :label-name="labelName"
      :type="false"
      :total="total"
      v-loading="loading"
      @btnClick="handleEdit($event)"
      @delClick="handleDelete($event)"
      @pageTurn="handlePageTurn($event)"
      @changeDate="handleChangeDate($event)">
  </TableWithTimePicker>
</template>

<script>
import TableWithTimePicker from "@/components/content/TableWithTimePicker";
import {tmpTableData} from "@/config/tmp-config";
import {request} from "@/network/request";
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
      total: 0,
      id: -1,
      dates: null,
      loading: false
    }
  },
  methods: {
    handleSearch(target) {
      //TODO search user
      this.loading = true;
      request({
        url: ''
      }).then(res => {
        // TODO 在此更新
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.$message({
          type: 'error',
          message: `操作失败! 服务器返回错误代码: ${err}`
        })
      });
    },
    handleEdit(id ,event) {
      //TODO jump to editPage
      this.$router.push({
        name: 'baseInfo',
        query: {id: id}
      })
    },
    handlePageTurn(page, event) {
      //TODO 重新向服务器请求数据 全数据以及total
      this.loading = true;
      request({
        url: ''
      }).then(res => {
        // TODO 在此更新
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.$message({
          type: 'error',
          message: `操作失败! 服务器返回错误代码: ${err}`
        })
      });
    },
    handleDelete(id, event) {
      //TODO 重新向服务器请求数据 全数据以及total
      this.loading = true;
      request({
        url: ''
      }).then(res => {
        // TODO 在此更新
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.$message({
          type: 'error',
          message: `操作失败! 服务器返回错误代码: ${err}`
        })
      });
    },
    handleChangeDate(arr, index) {
      this.dates = arr;
      this.loading = true;
      //TODO 重新向服务器请求数据 全数据以及total
      //是时间分页联合查找还是仅分页
      let type = 'simple';
      if (this.dates === null) {
        type = 'combine';
      }
      //实际逻辑
      request({
        url: ''
      }).then(res => {
        // TODO 在此更新
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        this.$message({
          type: 'error',
          message: `操作失败! 服务器返回错误代码: ${err}`
        })
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {if (typeof to.query.id !== "undefined") vm.id = to.query.id;});
  }
}
</script>

<style scoped>

</style>