<template>
  <div>
    <div class="table-head">{{ name }}</div>
    <el-divider v-if="typeof name !== 'undefined'"></el-divider>
    <el-table
        :data="tmpData"
        height="250px"
        max-height="500px"
        stripe
        border
        style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column v-for="(e, index) in tmpProp"
                       :sortable="e === 'date'"
                       :prop="e"
                       :label="tmpLabel[index]"
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
// TODO delete
import {tmpTableData} from "@/config/tmp-config";

let tmpPropName = Object.keys(tmpTableData[0]);
let tmpLabelName = ['日期', '姓名', '地址']
export default {
  name: "Table",
  props: {
    name: String,
    tableData: Array,
    propName: Array,
    labelName: Array
  },
  data() {
    return {
      tmpData: tmpTableData, //TODO delete and replace by tableDate at props
      tmpProp: tmpPropName, //TODO delete and replace by tableDate at props
      tmpLabel: tmpLabelName //TODO delete and replace by tableDate at props
    }
  },
  methods: {
    handleCheck(index, row) {
      // TODO 查看订单操作
      // console.log(index, row);
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