<template>
  <div>
    <Table name="搜索结果"
           :table-data="paginationData"
           :prop-name="propName"
           :label-name="labelName"
           :btnClick="handleBtnClick()"></Table>
    <el-pagination class="pagination"
                   background
                   layout="total, prev, pager, next"
                   :total="total"
                   :page-size="limit" @current-change="handlePageTurning($event)"></el-pagination>
  </div>
</template>

<script>
import Table from "@/components/content/Table";
export default {
  name: "TableWithPagination",
  props: {
    name: String,
    tableData: Array,
    propName: Array,
    labelName: Array,
    showIndex: {type: Boolean, default: false},
    maxHeight: {type: Number, default: 500},
    limit: {type: Number, default: 10}
  },
  data() {
    return {
      startPoint: 0
    }
  },
  methods: {
    handleBtnClick() {
      // TODO
    },
    handlePageTurning(index) {
      // TODO
      console.log(index);
      this.startPoint = this.limit * (index - 1);
    }
  },
  computed: {
    paginationData() {
      return this.tableData.slice(this.startPoint, this.startPoint + this.limit);
    },
    total() {
      return this.tableData.length;
    }
  },
  components: {
    Table
  }
}
</script>

<style scoped>
.pagination {
  margin-top: 10px;
}
</style>