<template>
  <div>
    <el-date-picker
        v-model="value"
        type="daterange"
        :picker-options="pickerOptions"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        align="right"
        @change="handleChange($event)">
    </el-date-picker>
    <TableWithPagination :name="name"
                         :table-data="filterData"
                         :prop-name="propName"
                         :label-name="labelName"
                         :show-index="showIndex"
                         :max-height="maxHeight"
                         :limit="limit" v-loading="loading">
    </TableWithPagination>
  </div>
</template>

<script>
import {dateTimePikerConfig} from "@/common/const";
import TableWithPagination from "@/components/content/TableWithPagination";
import {request} from "@/network/request";
export default {
  name: "TableWithTimePicker",
  components: {TableWithPagination},
  data() {
    return {
      pickerOptions: dateTimePikerConfig,
      dateArr: null,
      value: '',
      loading: false
    }
  },
  computed: {
    filterData: {
      get() {
        if (this.dateArr === null) {return this.tableData;}
        else {
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
          let low = this.dateArr[0].toString();
          let height = this.dateArr[1].toString();
          return this.tableData.filter(item => {
            if (item.date > low && item.date < height) {
              return item;
            }
          });
        }
      },
      set() {}
    }
  },
  methods: {
    handleChange(arr, event) {
      this.dateArr = arr;
    }
  },
  props: {
    name: String,
    tableData: Array,
    propName: Array,
    labelName: Array,
    showIndex: {type: Boolean, default: false},
    maxHeight: {type: Number, default: 1000},
    limit: {type: Number, default: 10}
  }
}
</script>

<style scoped>

</style>