<template>
  <div>
    <el-date-picker
        v-model="value"
        type="daterange"
        :picker-options="pickerOptions"
        range-separator="至"
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
                         :limit="limit">
    </TableWithPagination>
  </div>
</template>

<script>
import {dateTimePikerConfig} from "@/common/const";
import TableWithPagination from "@/components/content/TableWithPagination";
export default {
  name: "TableWithTimePicker",
  components: {TableWithPagination},
  data() {
    return {
      pickerOptions: dateTimePikerConfig,
      dateArr: null,
      value: ''
    }
  },
  computed: {
    filterData: {
      get() {
        if (this.dateArr === null) {return this.tableData;}
        else {
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