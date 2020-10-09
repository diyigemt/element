<template>
  <Table></Table>
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
    actionPath: {type: String, require: true},
    maxHeight: {type: Number, default: 500},
    limit: {type: Number, default: 10}
  },
  data() {
    return {
      paginationData: this.tableData.splice(this.limit)
    }
  },
  methods: {
    handlePageTurning() {

    }
  },
  components: {
    Table
  }
}
</script>

<style scoped>

</style>