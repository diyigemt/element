<template>
  <div>
    <SearchBox></SearchBox>
    <TableWithPagination></TableWithPagination>
  </div>
</template>

<script>
import SearchBox from "@/components/common/SearchBox";
import TableWithPagination from "@/components/content/TableWithPagination";
export default {
  name: "MemberOrderInfo",
  components: {TableWithPagination, SearchBox}
}
</script>

<style scoped>

</style>