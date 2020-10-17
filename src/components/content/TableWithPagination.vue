<template>
  <div>
    <Table :name="name"
           :table-data="paginationData"
           :prop-name="propName"
           :label-name="labelName"
           :show-del-btn="true"
           :max-height="maxHeight"
           @btnClick="handleBtnClick($event)"
           @delClick="handleDelClick($event)"></Table>
    <el-pagination class="pagination"
                   background
                   layout="prev, pager, next, total"
                   :total="myTotal"
                   :page-size="limit"
                   @current-change="handlePageTurning($event)"></el-pagination>
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
    limit: {type: Number, default: 10},
    type: {type: Boolean, default: true},
    total: Number //若分页在本体进行,则留空
  },
  data() {
    return {
      startPoint: 0
    }
  },
  methods: {
    handleBtnClick(o, event) {
      // TODO
      this.$emit('btnClick', o.id);
    },
    handleDelClick(o, event) {
      //TODO
      this.$emit('delClick', o.id);
    },
    handlePageTurning(index) {
      // TODO
      if (this.type) {
        this.startPoint = this.limit * (index - 1);
      } else {
        this.$emit('pageTurn', index);
      }
    }
  },
  computed: {
    paginationData() {
      if (this.type) {
        return this.tableData.slice(this.startPoint, this.startPoint + this.limit);
      } else {
        return this.tableData;
      }
    },
    myTotal() {
      if (this.type) {
        return this.tableData.length;
      } else {
        return this.total;
      }
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