<template>
  <div>
    <div class="table-head">{{ name }}</div>
    <el-divider v-if="typeof name !== 'undefined'"></el-divider>
    <el-table
        :data="tableData"
        height="250px"
        :max-height="maxHeight + 'px'"
        stripe
        border
        style="width: 100%">
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
              @click="handleCheck(scope.$index, scope.row)">查看</el-button>
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
    actionPath: {type: String, require: true},
    maxHeight: {type: Number, default: 500}
  },
  data() {
    return {

    }
  },
  methods: {
    handleCheck(index, row) {
      // TODO 查看操作
      // this.$router.push(this.actionPath);
    }
  }
}
</script>

<style scoped>
.table-head {
  margin: 10px;
  margin-left: 0;
  text-align: left;
  font-size: 25px;
}
</style>