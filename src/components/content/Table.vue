<template>
  <div>
    <div class="table-head">{{ name }}</div>
    <el-divider></el-divider>
    <el-table
        :data="tableData"
        stripe
        style="width: 100%">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
let k = [{
  date: '2016-05-02',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  date: '2016-05-04',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1517 弄'
}, {
  date: '2016-05-01',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1519 弄'
}, {
  date: '2016-05-03',
  name: '王小虎',
  address: '上海市普陀区金沙江路 1516 弄'
}]
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

    }
  },
  mounted() {
    this.tableData = k;
  }
}
</script>

<style scoped>
.table-head {
  margin: 10px;
  text-align: left;
  font-size: 25px;
}
</style>