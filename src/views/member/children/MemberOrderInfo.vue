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
        name: 'OrderDetail',
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
      //TODO 删除订单信息
      let userName = '';
      for (let index of this.userData) {
        if (index.id === id) {
          userName = index.name;
        }
      }
      const h = this.$createElement;
      this.$confirm('', {
        title: '提示',
        message: h('p', {style: 'color: red'}, `确认删除订单信息 ${userName}?`),
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonText = '通信中...';
            instance.confirmButtonLoading = true;
            //TODO 删除
            request({
              url: ''
            }).then(res => {
              done();
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              // TODO 直接在数据中删除 or 重新请求数据?
            }).catch(err => {
              this.$message({
                type: 'error',
                message: `操作失败! 服务器返回错误代码: ${err}`
              });
              done();
            });
            instance.confirmButtonLoading = false;
          } else {
            done();
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
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
    next(vm => {vm.id = to.query.id || -1;});
  }
}
</script>

<style scoped>

</style>