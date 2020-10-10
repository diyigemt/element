<template>
  <div>
    <PageHeader :content="'修改会员信息'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <UserDetailCard></UserDetailCard>
    </div>
  </div>
</template>

<script>
import UserDetailCard from "@/views/member/children/UserDetailCard";
import PageHeader from "@/components/common/PageHeader";
export default {
  name: "EditMember",
  data() {
    return {
      fromPath: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    const that = from;
    next(vm => {vm.fromPath = that.path});
  },
  components: {
    PageHeader,
    UserDetailCard
  }
}
</script>

<style scoped>

</style>