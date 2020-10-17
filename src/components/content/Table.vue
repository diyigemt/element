<template>
  <div>
    <div class="table-head">{{ name }}</div>
    <el-divider v-if="typeof name !== 'undefined'"></el-divider>
    <el-table
        :data="tableData"
        :max-height="maxHeight"
        stripe
        border
        style="width: 100%"
        empty-text="无数据">
      <el-table-column v-if="showIndex" type="index" width="50"></el-table-column>
      <el-table-column v-for="(e, index) in propName"
                       :sortable="e === 'date'"
                       :prop="e"
                       :label="labelName[index]"
                       :key="e + index"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
              size="mini"
              type="primary"
              @click="handleClick(scope.$index, scope.row)">{{ buttonName }}</el-button>
          <el-button v-show="showDelBtn"
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">{{ DelBtnName }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    name: String,
    tableData: Array,
    propName: Array,
    labelName: Array,
    showIndex: {type: Boolean, default: false},
    buttonName: {type: String, default: '查看'},
    DelBtnName: {type: String, default: '删除'},
    showDelBtn: {type: Boolean, default: false},
    maxHeight: {type: Number, default: 500}
  },
  data() {
    return {

    }
  },
  methods: {
    handleClick(index, o) {
      // TODO 查看操作
      this.$emit('btnClick', o);
    },
    handleDelete(index, o) {
      if (this.showDelBtn) {
        this.$emit('delClick', o);
      }
    }
  }
}
</script>

<style scoped>
.table-head {
  margin: 10px 10px 10px 0;
  text-align: left;
  font-size: 25px;
}
</style>