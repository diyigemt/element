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
                         :limit="limit"
                         :type="type"
                         :total="total"
                         @btnClick="handleCheck($event)"
                         @delClick="handleDelete($event)"
                         @pageTurn="handlePageTurn($event)">
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
      if (this.type) {
        this.dateArr = arr;
      } else  {
        this.$emit('changeDate', arr);
      }
    },
    handleCheck(id, event) {
      this.$emit('btnClick', id);
    },
    handleDelete(id, event) {
      this.$emit('delClick', id);
    },
    handlePageTurn(index, event) {
      if (!this.type) {
        this.$emit('pageTurn', index);
      }
    }
  },
  props: {
    name: String,
    tableData: Array,
    propName: Array,
    labelName: Array,
    showIndex: {type: Boolean, default: false},
    maxHeight: {type: Number, default: 1000},
    limit: {type: Number, default: 10},
    type: {type: Boolean, default: true},
    total: Number //若分页在本体进行,则留空
  }
}
</script>

<style scoped>

</style>